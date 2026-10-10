(() => {
  const root = document.querySelector('#intro-slider')
  if (!root) return

  const slides = Array.from(root.querySelectorAll('.intro-slide'))
  const dots = Array.from(root.querySelectorAll('.intro-dot'))
  const previous = root.querySelector('.intro-prev')
  const next = root.querySelector('.intro-next')
  const playPause = root.querySelector('.intro-play')
  const soundToggle = root.querySelector('.intro-audio-control')
  const audio = root.querySelector('#playerintro')
  const count = root.querySelector('.intro-count')
  const progress = root.querySelector('.intro-progress-fill')
  const skip = root.querySelector('.intro-skip')
  const live = root.querySelector('.intro-status')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const duration = 6200
  let current = 0
  let paused = reducedMotion.matches
  let focused = false
  let timer = 0
  let progressFrame = 0
  let startedAt = 0
  let elapsed = 0

  const clearClocks = () => {
    window.clearTimeout(timer)
    window.cancelAnimationFrame(progressFrame)
    timer = 0
    progressFrame = 0
  }

  const paintProgress = now => {
    if (paused || focused || document.hidden) return
    if (!startedAt) startedAt = now - elapsed
    const fraction = Math.min((now - startedAt) / duration, 1)
    progress.style.transform = `scaleX(${fraction})`
    if (fraction < 1) progressFrame = window.requestAnimationFrame(paintProgress)
  }

  const schedule = () => {
    clearClocks()
    if (paused || focused || document.hidden || slides.length < 2) return
    startedAt = 0
    timer = window.setTimeout(() => show(current + 1), Math.max(0, duration - elapsed))
    progressFrame = window.requestAnimationFrame(paintProgress)
  }

  const show = value => {
    current = (value + slides.length) % slides.length
    slides.forEach((slide, index) => {
      const active = index === current
      slide.setAttribute('aria-current', String(active))
      slide.setAttribute('aria-hidden', String(!active))
      if (active) {
        const copy = slide.querySelector('.intro-copy')
        copy.classList.remove('is-entering')
        void copy.offsetWidth
        copy.classList.add('is-entering')
      }
    })
    dots.forEach((dot, index) => {
      const active = index === current
      dot.setAttribute('aria-current', String(active))
      dot.setAttribute('aria-pressed', String(active))
    })
    count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`
    live.textContent = `Slide ${current + 1} of ${slides.length}`
    elapsed = 0
    progress.style.transform = 'scaleX(0)'
    schedule()
  }

  const setPaused = value => {
    paused = value
    playPause.setAttribute('aria-pressed', String(paused))
    playPause.textContent = paused ? 'Play slideshow' : 'Pause slideshow'
    if (paused) {
      clearClocks()
      if (startedAt) elapsed = Math.min(performance.now() - startedAt, duration)
    } else {
      schedule()
    }
  }

  previous.addEventListener('click', () => show(current - 1))
  next.addEventListener('click', () => show(current + 1))
  dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)))
  playPause.addEventListener('click', () => setPaused(!paused))

  soundToggle.addEventListener('click', async () => {
    if (audio.paused) {
      try {
        await audio.play()
        soundToggle.setAttribute('aria-pressed', 'true')
        soundToggle.setAttribute('aria-label', 'Turn sound off')
        soundToggle.textContent = 'Sound on'
      } catch {
        soundToggle.setAttribute('aria-pressed', 'false')
        soundToggle.setAttribute('aria-label', 'Sound unavailable')
        soundToggle.textContent = 'Sound unavailable'
      }
    } else {
      audio.pause()
      soundToggle.setAttribute('aria-pressed', 'false')
      soundToggle.setAttribute('aria-label', 'Turn sound on')
      soundToggle.textContent = 'Sound off'
    }
  })

  root.addEventListener('focusin', () => {
    focused = true
    if (startedAt) elapsed = Math.min(performance.now() - startedAt, duration)
    clearClocks()
  })
  root.addEventListener('focusout', event => {
    if (root.contains(event.relatedTarget)) return
    focused = false
    schedule()
  })
  root.addEventListener('mouseenter', () => {
    if (startedAt) elapsed = Math.min(performance.now() - startedAt, duration)
    clearClocks()
  })
  root.addEventListener('mouseleave', schedule)

  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      show(current - 1)
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      show(current + 1)
    }
    if (event.key === 'Escape') skip.click()
  })
  document.addEventListener('visibilitychange', schedule)
  reducedMotion.addEventListener?.('change', event => setPaused(event.matches))
  skip.addEventListener('click', () => {
    clearClocks()
    audio.pause()
  })

  root.querySelectorAll('button').forEach(button => { button.disabled = false })
  show(0)
  setPaused(reducedMotion.matches)
})()
