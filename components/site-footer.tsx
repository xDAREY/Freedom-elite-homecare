'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
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
  const [language, setLanguage] = useState('en')
  const boxRef = useRef<HTMLDivElement>(null)

  // Load saved preferences once
  useEffect(() => {
    // Larger text / high contrast were removed; clear anything saved earlier.
    try { localStorage.removeItem('a11y') } catch {}
    document.documentElement.classList.remove('text-large', 'contrast-high')

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

  }, [])

  // Close the panel on Escape or a click outside it
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onDown = (e: MouseEvent) => { if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDown)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onDown) }
  }, [open])

  function changeLanguage(code: string) {
    setLanguage(code)
    setTranslationCookie(code)
    window.location.reload()
  }

  return (
    <>
      <div ref={boxRef} className="tools-widget">
        {open && (
          <div className="tools-panel" id="tools-menu" role="dialog" aria-label="Choose language">
            <div className="tools-panel-head">
              <strong>Language</strong>
              <span>Read this site in your language</span>
            </div>
            <select
              autoFocus
              aria-label="Language"
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
            <p className="tools-note">Translated automatically, so some wording may differ.</p>
          </div>
        )}

        <button
          className="tools-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="tools-menu"
          aria-label="Site tools: change language"
          title="Language"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
          {language !== 'en' && <span className="tools-badge notranslate" translate="no">{language.slice(0, 2).toUpperCase()}</span>}
        </button>
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
            <a href="mailto:info@freedomelitehomecare.com">info@freedomelitehomecare.com</a>
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
            <p>Monday to Friday<br />9:00 AM to 5:00 PM</p>
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