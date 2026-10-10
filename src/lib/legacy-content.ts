import { readFileSync } from 'node:fs'
import path from 'node:path'

const sources = {
  home: 'index.html',
  about: 'about.html',
  israel: 'israeltours.html',
  china: 'chinafairs.html',
  medical: 'medicaltourism.html',
  greece: 'greecetours.html',
  turkey: 'turkeytours.html',
  egypt: 'egypttours.html',
  rome: 'rometours.html',
  jordan: 'jordantours.html',
  turkeyFairs: 'turkeyfairs.html',
  indiaFairs: 'indiafairs.html',
  professionalFairs: 'professionalfairs.html',
  cambodiaMedical: 'cambodiamedicaltours.html',
  europeMedical: 'europemedicaltours.html',
} as const

export type LegacyPageKey = keyof typeof sources
export type LegacyContentMode = 'home' | 'main' | 'complete'

const htmlRoutes: Record<string, string> = {
  'index.html': '/',
  'about.html': '/about',
  'contact.html': '/contact',
  'medicaltourism.html': '/medical-tourism',
  'israeltours.html': '/tours/israel',
  'rometours.html': '/tours/rome',
  'greecetours.html': '/tours/greece',
  'turkeytours.html': '/tours/turkey',
  'egypttours.html': '/tours/egypt',
  'jordantours.html': '/tours/jordan',
  'chinafairs.html': '/fairs/china',
  'turkeyfairs.html': '/fairs/turkey',
  'indiafairs.html': '/fairs/india',
  'professionalfairs.html': '/fairs/professional',
  'cambodiamedicaltours.html': '/medical-tourism/cambodia',
  'europemedicaltours.html': '/medical-tourism/europe',
}

const allowedTags = new Set([
  'section','div','span','h1','h2','h3','h4','h5','p','a','img','picture','source',
  'ul','ol','li','strong','b','em','i','small','sup','sub','br','hr','blockquote',
  'q','figure','figcaption','label','time','address','button',
])
const safeAttrs = new Set(['class','id','href','src','srcset','alt','title','role','loading','width','height','colspan'])

function resolveUrl(value: string, source: string, attr: string): string | null {
  const url = value.trim().replace(/\\/g, '/')
  if (!url || /^javascript:/i.test(url) || /^vbscript:/i.test(url)) return null
  if (/^(?:https?:|mailto:|tel:|#|\/)/i.test(url)) return url
  if (/^data:/i.test(url)) return attr === 'src' && /^data:image\/(?:png|gif|jpeg|webp);/i.test(url) ? url : null
  const clean = url.replace(/^(?:\.\.\/|\.\/)+/, '')
  const file = clean.split(/[?#]/, 1)[0].toLowerCase()
  if (file.endsWith('.html') && htmlRoutes[file]) return htmlRoutes[file] + clean.slice(file.length)
  if (source === 'index.html' && clean === 'index.html') return '/'
  return `/${clean}`
}

function sanitize(fragment: string, source: string): string {
  const withoutActiveContent = fragment
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|style|iframe|object|embed|form|noscript)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '')
    .replace(/<(script|style|iframe|object|embed|form|noscript)\b[^>]*\/?>/gi, '')

  return withoutActiveContent.replace(/<\/?([a-z][a-z0-9-]*)\b([^>]*)>/gi, (whole, rawTag: string, rawAttrs: string) => {
    const tag = rawTag.toLowerCase()
    if (!allowedTags.has(tag)) return ''
    const closing = whole.startsWith('</')
    if (closing) return `</${tag}>`
    let attrs = ''
    rawAttrs.replace(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g, (_match, rawName: string, double: string, single: string, bare: string) => {
      const name = rawName.toLowerCase()
      const rawValue = double ?? single ?? bare ?? ''
      if (name.startsWith('on') || name === 'srcdoc' || name.startsWith('data-')) return ''
      if (name === 'style') {
        const background = rawValue.match(/(?:^|;)\s*background-image\s*:\s*url\(\s*(['"]?)(.*?)\1\s*\)/i)
        if (background) {
          const resolved = resolveUrl(background[2], source, 'src')
          if (resolved) attrs += ` style="background-image:url('${escapeAttribute(resolved)}')"`
        }
        return ''
      }
      if (!safeAttrs.has(name) && !name.startsWith('aria-')) return ''
      if (name === 'href' || name === 'src') {
        const resolved = resolveUrl(rawValue, source, name)
        if (resolved === null) return ''
        attrs += ` ${name}="${escapeAttribute(resolved)}"`
      } else if (name === 'srcset') {
        const entries = rawValue.split(',').map((entry: string) => {
          const [url, ...descriptor] = entry.trim().split(/\s+/)
          const resolved = resolveUrl(url, source, 'src')
          return resolved ? [resolved, ...descriptor].join(' ') : ''
        }).filter(Boolean)
        if (entries.length) attrs += ` srcset="${escapeAttribute(entries.join(', '))}"`
      } else {
        attrs += ` ${name}="${escapeAttribute(rawValue)}"`
      }
      return ''
    })
    return `<${tag}${attrs}>`
  })
}

function escapeAttribute(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function getSectionFragments(document: string): string[] {
  const html = document.replace(/<!--[\s\S]*?-->/g, '')
  const sections: string[] = []
  const token = /<\/?section\b[^>]*>/gi
  let depth = 0
  let start = -1
  let match: RegExpExecArray | null
  while ((match = token.exec(html))) {
    if (/^<section\b/i.test(match[0])) {
      if (depth === 0) start = match.index
      depth += 1
    } else if (depth > 0) {
      depth -= 1
      if (depth === 0 && start >= 0) {
        sections.push(html.slice(start, token.lastIndex))
        start = -1
      }
    }
  }
  return sections
}

function sectionAttributes(section: string): string {
  return section.slice(0, section.indexOf('>') + 1)
}

/** Keep each page's destination lists without repeating the shared footer. */
function pageSpecificFooterSections(document: string, source: string): string[] {
  const html = document.replace(/<!--[\s\S]*?-->/g, '')
  const wrappers: string[] = []
  const starts = /<div\b[^>]*class\s*=\s*["'][^"']*\bwrap-subfooter\b[^"']*["'][^>]*>/gi
  let start: RegExpExecArray | null
  while ((start = starts.exec(html))) {
    const tokens = /<\/?div\b[^>]*>/gi
    tokens.lastIndex = starts.lastIndex
    let depth = 1
    let token: RegExpExecArray | null
    while ((token = tokens.exec(html))) {
      depth += token[0].startsWith('</') ? -1 : 1
      if (depth !== 0) continue
      const block = html.slice(start.index, tokens.lastIndex)
      const heading = block.match(/<h4\b[^>]*>([\s\S]*?)<\/h4>/i)?.[1]
        .replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().toUpperCase()
      if (heading && !['MISSION STATEMENT', 'CONTACT INFO'].includes(heading)) {
        wrappers.push(sanitize(block, source))
      }
      break
    }
  }
  if (!wrappers.length) return []
  return [`<section class="legacy-page-details" aria-label="Additional travel information"><div class="container-fluid m-5-hor"><div class="legacy-page-details-grid">${wrappers.join('')}</div></div></section>`]
}

export function getLegacySections(key: LegacyPageKey, mode: LegacyContentMode): string[] {
  const source = sources[key]
  const filePath = path.join(process.cwd(), 'public', source)
  const original = readFileSync(filePath, 'utf8')
  const fragments = getSectionFragments(original).filter(section => {
    const open = sectionAttributes(section)
    if (/aria-label\s*=\s*["']subfooter["']/i.test(open) || /\bsubfooter\b/i.test(open)) return false
    if (mode === 'home') return /aria-label\s*=\s*["']top-rated["']/i.test(open) || /\bblackpage\b/i.test(open)
    if (mode === 'main') return !/\bid\s*=\s*["']subheader[^"']*["']/i.test(open)
    return true
  })
  return [
    ...fragments.map(section => sanitize(section, source)).filter(Boolean),
    ...pageSpecificFooterSections(original, source),
  ]
}
