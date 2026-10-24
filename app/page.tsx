'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'


export default function Page() {
  return (
    <div className="site-shell">
      <SiteHeader announcement />
      <main>
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">COMPASSIONATE CARE. REAL PEACE OF MIND.</p>
            <h1>Care that feels like <em>family.</em><br />Freedom to live well at home.</h1>
            <p className="lead">Personalized home care for children, older adults, veterans, and the families who love them — right here in Georgia.</p>
            <div className="button-row hero-actions">
              <Link className="button primary" href="/contact">Talk to Asia&apos;s team</Link>
              <a className="button secondary" href="tel:4707369530">Call 470-736-9530</a>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-image"><Image src="/images/family-care-hero.png" alt="A warm caregiver spending time with an older adult at home" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div>
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
              <div><strong>GAPP approved</strong><span>Screened and trained caregivers</span></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}