import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'

export const metadata = {
  title: 'About Asia and Freedom Elite Home Care',
  description: 'Meet Asia Jenkins, founder of Freedom Elite Home Care, and learn what guides our care for Georgia families.',
}

const beliefs = [
  ['Listen first', 'Every family’s situation is different. We start by understanding yours before we suggest anything.'],
  ['Treat people as people', 'Dignity, privacy, and choice shape every visit, for children and adults alike.'],
  ['Show up, and say so', 'Reliable caregivers, clear communication, and no surprises for your family.'],
]

const getToKnow = [
  ['Why I do this work', '[Asia: add a few sentences in your own words]'],
  ['What families tell me', '[Asia: add a short, real comment from a family, with permission]'],
  ['Outside of work', '[Asia: add something personal, like family, faith, food, or hobbies]'],
]

const standards = [
  'Caregivers are screened, with background and reference checks',
  'Matched to your family by skills and personality',
  'Trained and supervised, with regular check-ins',
  'Clear updates so you always know how care is going',
]

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="section-pad">
            <p className="eyebrow">ABOUT FREEDOM ELITE</p>
            <h1>Care that sees <em>the whole person.</em></h1>
            <p className="lead">Families deserve support that feels respectful, responsive, and human. That belief is why Freedom Elite exists.</p>
          </div>
        </section>

        <section className="section-pad founder">
          <figure className="portrait">
            <div className="portrait-frame">
              <Image src="/images/asia-founder.jpeg" alt="Asia Jenkins, founder of Freedom Elite Home Care" fill priority sizes="(max-width: 900px) 90vw, 440px" />
            </div>
            <figcaption><strong>Asia Jenkins</strong><span>Founder and Owner</span></figcaption>
          </figure>

          <div className="founder-copy">
            <p className="eyebrow">MEET THE FOUNDER</p>
            <h2>Hi, I’m Asia. <em>Let’s talk about your family.</em></h2>
            <p>I started Freedom Elite Home Care because families deserve care that feels personal, not like a transaction. When someone you love needs support, you should never feel rushed, confused, or alone.</p>
            <p>Every family we serve gets the same promise from me: we will listen first, explain things plainly, and send caregivers who treat your home and your loved one with respect.</p>
            <blockquote>“Great care begins with listening.”</blockquote>
            <p className="sign">Asia Jenkins</p>
            {/* <p className="note-line">[Draft copy. Replace with Asia’s own words and story]</p> */}
            <div className="button-row">
              <Link className="button primary" href="/contact">Talk to Asia’s team</Link>
              <a className="button secondary" href="tel:4707369530">Call 470-736-9530</a>
            </div>
          </div>
        </section>

        {/* <section className="section-pad guide-section">
          <h2>Get to know me</h2>
          <div className="detail-cards">
            {getToKnow.map(([t, d]) => <div className="detail-card" key={t}><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </section> */}

        <section className="mint-band">
          <div>
            <h2>What we believe</h2>
            <div className="detail-cards">
              {beliefs.map(([t, d]) => <div className="detail-card" key={t}><h3>{t}</h3><p>{d}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section-pad guide-section">
          <h2>Our standards</h2>
          <div className="plain-list checklist">
            {standards.map((s) => <div key={s}><span aria-hidden="true">✓</span>{s}</div>)}
          </div>
          {/* <p className="note-line">[Confirm screening and training details with owner] · License # [add here]</p> */}
        </section>

        <section className="mint-band">
          <div>
            <h2>Let’s start with a conversation</h2>
            <p>No pressure and no obligation. Just a chance to tell us what your family needs.</p>
            <Link className="button primary" href="/contact">Talk to Asia’s team</Link>
          </div>
        </section>
      </main>
    </div>
  )
}