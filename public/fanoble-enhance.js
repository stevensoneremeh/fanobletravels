(() => {
  const ready = callback => {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', callback, {once:true})
    else callback()
  }
  ready(() => {
    const legacyLoaders = [...document.querySelectorAll('.preloader,.preloader-white,.bg-preloader,.bg-preloader-white')]
    legacyLoaders.forEach(loader => loader.classList.add('fanoble-loader-active'))
    const finishLoading = () => legacyLoaders.forEach(loader => loader.classList.remove('fanoble-loader-active'))
    if (document.readyState === 'complete') finishLoading()
    else window.addEventListener('load', finishLoading, {once:true})
    const menu = document.getElementById('main-menu')
    const menuButton = document.querySelector('.navbar-toggle')
    if (menu && menuButton) {
      menuButton.setAttribute('aria-controls', 'main-menu')
      menuButton.setAttribute('aria-expanded', 'false')
      menuButton.setAttribute('aria-label', 'Open navigation')
      menuButton.addEventListener('click', () => {
        const open = menu.classList.toggle('is-open')
        menuButton.setAttribute('aria-expanded', String(open))
        menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation')
      })
      menu.querySelectorAll('li').forEach(item => {
        const trigger = item.querySelector(':scope > a')
        const submenu = item.querySelector(':scope > ul')
        if (!trigger || !submenu) return
        trigger.setAttribute('aria-haspopup', 'true')
        trigger.setAttribute('aria-expanded', 'false')
        trigger.addEventListener('click', event => {
          event.preventDefault()
          const open = item.classList.toggle('menu-open')
          trigger.setAttribute('aria-expanded', String(open))
        })
      })
      menu.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href')
        if (href && href !== '#' && location.pathname.toLowerCase().endsWith(href.replace(/^\//, '').toLowerCase())) link.setAttribute('aria-current', 'page')
        if (href && href !== '#' && !link.parentElement.querySelector(':scope > ul')) link.addEventListener('click', () => {
          menu.classList.remove('is-open')
          menuButton.setAttribute('aria-expanded', 'false')
          menuButton.setAttribute('aria-label', 'Open navigation')
        })
      })
      document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return
        menu.classList.remove('is-open')
        menu.querySelectorAll('.menu-open').forEach(item => item.classList.remove('menu-open'))
        menu.querySelectorAll('[aria-expanded="true"]').forEach(item => item.setAttribute('aria-expanded', 'false'))
        menuButton.setAttribute('aria-expanded', 'false')
        menuButton.setAttribute('aria-label', 'Open navigation')
        menuButton.focus()
      })
    }

    const booking = document.querySelector('form#sform')
    if (booking) booking.addEventListener('submit', event => {
      event.preventDefault()
      const details = [...booking.querySelectorAll('input,select,textarea')].map(field => {
        const label = field.id ? booking.querySelector(`label[for="${field.id}"]`) : field.closest('.form-group')?.querySelector('label')
        return `${label?.textContent.trim() || field.name || 'Travel detail'}: ${field.value}`
      }).join('\n')
      location.href = `/?booking=1&details=${encodeURIComponent(details)}#travel-inquiry`
    })

    const contact = document.querySelector('#form-contact1')
    if (contact) {
      const submit = event => {
        if (!contact.checkValidity()) return
        event.preventDefault()
        event.stopImmediatePropagation()
        const params = new URLSearchParams({
          name: document.getElementById('name-contact-1')?.value || '',
          email: document.getElementById('email-contact')?.value || '',
          subject: 'Contact inquiry',
          message: document.getElementById('message-contact')?.value || '',
        })
        location.href = `/contact?${params.toString()}`
      }
      contact.addEventListener('submit', submit, true)
      document.getElementById('send-contact-1')?.addEventListener('click', submit, true)
    }
  })
})()
