const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const ts = require('typescript')

// Execute the real TypeScript handlers with only the external email transport
// replaced. These tests never send email or read real connector credentials.
function loadApp({ recipient = 'inquiries@example.com', providerStatus = 200, providerBody = { id: 'email-test-id' } } = {}) {
  const cache = new Map()
  const calls = []
  const fakeProcess = { env: { BOOKING_RECIPIENT_EMAIL: recipient } }
  function load(file) {
    const filename = path.resolve(file)
    if (cache.has(filename)) return cache.get(filename).exports
    const module = { exports: {} }
    cache.set(filename, module)
    const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
    }).outputText
    const localRequire = (name) => {
      if (name === 'next/server') return { NextResponse: { json: (data, init = {}) => new Response(JSON.stringify(data), {
        ...init, headers: { 'content-type': 'application/json', ...init.headers },
      }) } }
      if (name === '@replit/connectors-sdk') return {
        ReplitConnectors: class {
          createProxyFetch(provider) {
            return async (url, init) => {
              calls.push({ provider, url, ...init, payload: JSON.parse(init.body) })
              return new Response(JSON.stringify(providerBody), { status: providerStatus })
            }
          }
        },
      }
      if (name.startsWith('@/')) return load(`src/${name.slice(2)}.ts`)
      if (name.startsWith('.')) return load(path.join(path.dirname(filename), `${name}.ts`))
      return require(name)
    }
    vm.runInNewContext(`(function(require,module,exports){${compiled}\n})`, {
      process: fakeProcess, Buffer, Request, Response, Headers, URL, AbortSignal,
      console: { error() {} }, Date, Map, Set,
    }, { filename })(localRequire, module, module.exports)
    return module.exports
  }
  return { route: load('src/app/api/booking/route.ts'), booking: load('src/lib/booking.ts'), calls }
}

function inquiry(extra = {}) {
  return {
    name: 'Website test traveller',
    email: 'traveller@example.com',
    kind: 'Flight booking',
    destination: 'Athens, Greece',
    date: new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10),
    idempotencyKey: '550e8400-e29b-41d4-a716-446655440000',
    website: '',
    ...extra,
  }
}

function request(body, headers = {}) {
  return new Request('https://travel.example/api/booking', {
    method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body: JSON.stringify(body),
  })
}

test('email recipient is configurable and never accepted from the traveller', async () => {
  const app = loadApp({ recipient: 'different-inbox@example.com' })
  const response = await app.route.POST(request(inquiry({ recipient: 'attacker@example.com' })))
  assert.equal(response.status, 200)
  assert.equal((await response.json()).status, 'success')
  assert.deepEqual(app.calls[0].payload.to, ['different-inbox@example.com'])
  assert.equal(app.calls[0].payload.reply_to, 'traveller@example.com')
  assert.match(app.calls[0].payload.text, /not a confirmed reservation/)
  assert.equal(app.calls[0].headers['Idempotency-Key'], 'fanoble-booking/550e8400-e29b-41d4-a716-446655440000')
})

test('missing configuration fails explicitly without sending', async () => {
  const app = loadApp({ recipient: '' })
  assert.equal((await app.route.GET()).status, 200)
  assert.equal((await (await app.route.GET()).json()).recipient, null)
  assert.equal((await app.route.POST(request(inquiry()))).status, 503)
  assert.equal(app.calls.length, 0)
})

test('invalid email and missing name produce field errors', async () => {
  const app = loadApp()
  const response = await app.route.POST(request(inquiry({ name: '', email: 'not-an-email' })))
  assert.equal(response.status, 400)
  const body = await response.json()
  assert.ok(body.fields.name)
  assert.ok(body.fields.email)
  assert.equal(app.calls.length, 0)
})

test('past dates, impossible dates and invalid service are rejected', async () => {
  for (const extra of [{ date: '2000-01-01' }, { date: '2099-02-30' }, { kind: 'Free tickets' }]) {
    const app = loadApp()
    assert.equal((await app.route.POST(request(inquiry(extra)))).status, 400)
    assert.equal(app.calls.length, 0)
  }
})

test('provider errors do not claim success and offer an explicit email-app route', async () => {
  const app = loadApp({ providerStatus: 400, providerBody: { message: 'API key is invalid' } })
  const response = await app.route.POST(request(inquiry()))
  assert.equal(response.status, 503)
  const body = await response.json()
  assert.equal(body.status, 'error')
  assert.ok(body.emailLink.startsWith('mailto:inquiries%40example.com?'))
  assert.match(decodeURIComponent(body.emailLink), /Athens, Greece/)
  assert.match(body.message, /could not send/)
})

test('malformed provider acknowledgement cannot produce false success', async () => {
  const app = loadApp({ providerBody: { unexpected: true } })
  assert.equal((await app.route.POST(request(inquiry()))).status, 503)
})

test('cross-site submissions are rejected before email sending', async () => {
  const app = loadApp()
  assert.equal((await app.route.POST(request(inquiry(), { origin: 'https://another-site.example' }))).status, 403)
  assert.equal(app.calls.length, 0)
})

test('same-site proxy requests are allowed', async () => {
  const app = loadApp()
  assert.equal((await app.route.POST(request(inquiry(), {
    origin: 'https://travel.example', 'x-forwarded-host': 'travel.example',
  }))).status, 200)
})

test('honeypot and oversized submissions are rejected', async () => {
  const app = loadApp()
  assert.equal((await app.route.POST(request(inquiry({ website: 'spam.example' })))).status, 400)
  assert.equal((await app.route.POST(request(inquiry({ message: 'a'.repeat(17000) })))).status, 413)
  assert.equal(app.calls.length, 0)
})

test('malformed JSON and unsupported content types are rejected', async () => {
  const app = loadApp()
  const broken = new Request('https://travel.example/api/booking', {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: '{',
  })
  assert.equal((await app.route.POST(broken)).status, 400)
  const unsupported = new Request('https://travel.example/api/booking', { method: 'POST', body: 'hello' })
  assert.equal((await app.route.POST(unsupported)).status, 415)
})

test('repeated inquiries are rate limited', async () => {
  const app = loadApp()
  for (let i = 0; i < 5; i++) assert.equal((await app.route.POST(request(inquiry()))).status, 200)
  const response = await app.route.POST(request(inquiry()))
  assert.equal(response.status, 429)
  assert.equal(app.calls.length, 5)
})
