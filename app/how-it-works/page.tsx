import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'

export const metadata = {
  title: 'How It Works | Freedom Elite Home Care',
  description: 'See what happens from your first call to your first visit with Freedom Elite Home Care.',
}

const journey = [
  ['Reach out', 'Call, text, or send a request. We reply promptly and answer your first questions.'],
  ['Free consultation', 'We listen to your family’s story, routines, and goals, with no pressure and no obligation.'],
  ['Eligibility and paperwork help', 'For GAPP and similar programs, we explain the steps and help you gather what is needed.'],
  ['Your care plan', 'We write a plan around your priorities and review it with you before anything starts.'],
  ['Caregiver match', 'We match skills and personality, then introduce your caregiver before the first visit.'],
  ['First visit and check-ins', 'Care begins. We check in early and often, and we adjust the plan as needs change.'],
]

const week = [
  ['Day 1', 'Your caregiver arrives, reviews the care plan, and meets your family.'],
  ['Day 2 to 3', 'We call to ask how it went and make quick adjustments.'],
  ['End of week 1', 'A short review with you: what is working and what to change.'],
  ['Ongoing', 'Regular plan reviews and open communication with the family.'],
]

const promises = [
  ['Clear communication', 'You will always know who to call and what is happening.'],
  ['Consistency', 'We work to keep the same caregivers so routines feel familiar.'],
  ['Respect', 'Your routines, culture, and preferences guide the plan.'],
  ['Honesty', 'We tell you plainly what we can and cannot provide.'],
]

const faqs = [
  ['How fast can care start?', 'It depends on your situation and any program approvals. We will give you an honest timeline during the consultation.'],
  ['Can we meet the caregiver first?', 'Yes. We introduce your caregiver before the first visit whenever possible.'],
  ['What if the match is not right?', 'Tell us. We will adjust and find a better fit.'],
  ['Is there a cost for the consultation?', 'No. The first conversation is free.'],
]

export default function HowItWorksPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="section-pad">
            <p className="eyebrow">HOW IT WORKS</p>
            <h1>One step at a time. <em>Together.</em></h1>
            <p className="lead">From your first call to your first visit, here is exactly what to expect.</p>
            <div className="button-row">
              <Link className="button primary" href="/contact">Talk to Asia’s team</Link>
              <a className="button secondary" href="tel:4707369530">Call 470-736-9530</a>
            </div>
          </div>
        </section>

        <section className="section-pad guide-section">
          <h2>The care journey</h2>
          <ol className="visit-steps">
            {journey.map(([t, d]) => <li key={t}><strong>{t}.</strong> {d}</li>)}
          </ol>
        </section>

        <section className="section-pad guide-section">
          <h2>Your first week</h2>
          <div className="detail-cards week">
            {week.map(([t, d]) => <div className="detail-card" key={t}><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </section>

        <section className="section-pad guide-section">
          <h2>What to have ready</h2>
          <div className="plain-list checklist">
            {['A rough idea of the help you need and when', 'Any doctor’s orders or medical information you already have', 'Insurance or Medicaid details, if you have them', 'Questions. Bring as many as you like'].map((i) => <div key={i}><span aria-hidden="true">✓</span>{i}</div>)}
          </div>
        </section>

        <section className="mint-band">
          <div>
            <h2>What you can count on</h2>
            <div className="detail-cards perks">
              {promises.map(([t, d]) => <div className="detail-card" key={t}><h3>{t}</h3><p>{d}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section-pad guide-section">
          <h2>Common questions</h2>
          <div className="faq-list">
            {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
          <p className="guide-note">Looking for help with GAPP or Katie Beckett? Read our <Link href="/gapp">GAPP guide</Link>.</p>
        </section>

        <section className="mint-band">
          <div>
            <h2>Ready for the first step?</h2>
            <p>Reach out and we will listen first.</p>
            <Link className="button primary" href="/contact">Request care</Link>
          </div>
        </section>
      </main>
    </div>
  )
}