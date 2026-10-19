'use client'

import Link from 'next/link'
import { useState } from 'react'
import { services } from '@/data/services'

const mainServices = services.filter((s) =>
  ['pediatric-home-care-gapp', 'behavioral-care-autism', 'senior-and-elder-care', 'veteran-care'].includes(s.slug),
)

export function SiteFooter() {
  const [open, setOpen] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN')

  return (
    <>
      <div className={`accessibility-widget${open ? ' is-open' : ''}${largeText ? ' text-large' : ''}${highContrast ? ' contrast-high' : ''}`}><button className="accessibility-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="accessibility-menu">Accessibility</button>{open && <div className="accessibility-toolbar" id="accessibility-menu"><button type="button" onClick={() => setLargeText((value) => !value)} aria-pressed={largeText}>A&nbsp; {largeText ? 'Normal text' : 'Larger text'}</button><button type="button" onClick={() => setHighContrast((value) => !value)} aria-pressed={highContrast}>{highContrast ? 'Normal contrast' : 'High contrast'}</button><div className="language-toggle" aria-label="Language selection"><button type="button" className={language === 'EN' ? 'selected' : ''} onClick={() => setLanguage('EN')}>EN</button><span>/</span><button type="button" className={language === 'ES' ? 'selected' : ''} onClick={() => setLanguage('ES')}>ES</button></div></div>}</div>

      <footer className="site-footer">
        <div className="footer-main section-pad">
          <div className="footer-intro">
            <Link href="/" className="footer-brand">Freedom <span>Elite</span><small>HOME CARE</small></Link>
            <p>Thoughtful in-home support that helps Georgia families feel steady, informed, and cared for.</p>
            <a className="footer-phone" href="tel:4707369530">470-736-9530</a>
            <a href="mailto:hello@freedomelitehomecare.com">hello@freedomelitehomecare.com</a>
          </div>

          <div className="footer-column"><h2>Explore</h2><Link href="/services">Services</Link><Link href="/gapp">GAPP Guide</Link><Link href="/how-it-works">How It Works</Link><Link href="/about">About</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div>

          <div className="footer-column"><h2>Care for</h2>{mainServices.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title.replace(' for Children with Autism', ' for Autism')}</Link>)}<Link href="/services">All services →</Link></div>

          <div className="footer-column footer-contact"><h2>Hours</h2><p>Monday to Friday<br />8:00 AM to 5:00 PM</p><p>Stone Mountain, Georgia</p><Link href="/contact" className="button footer-button">Request care</Link></div>
        </div>
        <div className="footer-bottom section-pad"><span>© {new Date().getFullYear()} Freedom Elite Home Care LLC</span><Link href="/privacy">Privacy and HIPAA notice</Link><span>Equal opportunity employer</span></div>
      </footer>

      <div className="mobile-action-bar"><a href="tel:4707369530">Call</a><a href="sms:4707369530">Text</a><Link href="/contact">Request</Link></div>
    </>
  )
}