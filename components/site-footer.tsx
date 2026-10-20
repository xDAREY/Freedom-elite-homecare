'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { services } from '@/data/services'
import { LANGUAGES } from '@/data/language'

declare global {
  interface Window {
    google?: any
    googleTranslateElementInit?: () => void
  }
}

const mainServices = services.filter((s) =>
  ['pediatric-home-care-gapp', 'behavioral-care-autism', 'senior-and-elder-care', 'veteran-care'].includes(s.slug),
)

/** Reads the language Google Translate saved in its cookie ("/en/es" -> "es") */
function getSavedLanguage(): string {
  const match = document.cookie.match(/(?:^|; )googtrans=\/[^/]*\/([^;]+)/)
  return match ? decodeURIComponent(match[1]) : 'en'
}

function clearTranslationCookie() {
  const expired = 'Thu, 01 Jan 1970 00:00:00 GMT'
  const host = window.location.hostname
  document.cookie = `googtrans=; expires=${expired}; path=/`
  document.cookie = `googtrans=; expires=${expired}; path=/; domain=${host}`
  document.cookie = `googtrans=; expires=${expired}; path=/; domain=.${host}`
}

function setTranslationCookie(code: string) {
  clearTranslationCookie()
  if (code !== 'en') {
    document.cookie = `googtrans=/en/${code}; path=/; max-age=31536000`
  }
}

export function SiteFooter() {
  const [open, setOpen] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [language, setLanguage] = useState('en')
  const [ready, setReady] = useState(false)

  // Load saved preferences once
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('a11y') || '{}')
      if (saved.largeText) setLargeText(true)
      if (saved.highContrast) setHighContrast(true)
    } catch {}

    const savedLanguage = getSavedLanguage()
    setLanguage(savedLanguage)

    // Only load Google's script if the visitor chose a non-English language
    if (savedLanguage !== 'en' && !document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          'google_translate_element',
        )
      }
      const script = document.createElement('script')
      script.id = 'google-translate-script'
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)
    }

    setReady(true)
  }, [])

  // Apply text size and contrast to the whole page, and save them
  useEffect(() => {
    if (!ready) return
    const root = document.documentElement
    root.classList.toggle('text-large', largeText)
    root.classList.toggle('contrast-high', highContrast)
    try {
      localStorage.setItem('a11y', JSON.stringify({ largeText, highContrast }))
    } catch {}
  }, [largeText, highContrast, ready])

  function changeLanguage(code: string) {
    setLanguage(code)
    setTranslationCookie(code)
    window.location.reload()
  }

  return (
    <>
      <div className={`accessibility-widget notranslate-labels${open ? ' is-open' : ''}`}>
        <button
          className="accessibility-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="accessibility-menu"
        >
          Accessibility
        </button>

        <div className="accessibility-toolbar" id="accessibility-menu" hidden={!open}>
          <button type="button" onClick={() => setLargeText((value) => !value)} aria-pressed={largeText}>
            Larger text
          </button>
          <button type="button" onClick={() => setHighContrast((value) => !value)} aria-pressed={highContrast}>
            High contrast
          </button>

          <label className="language-select">
            <span>Language</span>
            <select
              translate="no"
              className="notranslate"
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {/* Google Translate mounts here (kept hidden; we use our own dropdown) */}
      <div id="google_translate_element" className="gt-hidden" />

      <footer className="site-footer">
        <div className="footer-main section-pad">
          <div className="footer-intro">
            <Link href="/" className="footer-brand notranslate" translate="no">
              Freedom <span>Elite</span>
              <small>HOME CARE</small>
            </Link>
            <p>Thoughtful in-home support that helps Georgia families feel steady, informed, and cared for.</p>
            <a className="footer-phone" href="tel:4707369530">470-736-9530</a>
            <a href="mailto:hello@freedomelitehomecare.com">hello@freedomelitehomecare.com</a>
          </div>

          <div className="footer-column">
            <h2>Explore</h2>
            <Link href="/services">Services</Link>
            <Link href="/gapp">GAPP Guide</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h2>Care for</h2>
            {mainServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.title.replace(' for Children with Autism', ' for Autism')}
              </Link>
            ))}
            <Link href="/services">All services →</Link>
          </div>

          <div className="footer-column footer-contact">
            <h2>Hours</h2>
            <p>Monday to Friday<br />8:00 AM to 5:00 PM</p>
            <p>Stone Mountain, Georgia</p>
            <Link href="/contact" className="button footer-button">Request care</Link>
          </div>
        </div>

        <div className="footer-bottom section-pad">
          <span>© <span>{new Date().getFullYear()}</span> Freedom Elite Home Care LLC</span>
          <Link href="/privacy">Privacy and HIPAA notice</Link>
          <span>Equal opportunity employer</span>
        </div>
      </footer>

      <div className="mobile-action-bar">
        <a href="tel:4707369530">Call</a>
        <a href="sms:4707369530">Text</a>
        <Link href="/contact">Request</Link>
      </div>
    </>
  )
}