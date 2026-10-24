import { Suspense } from 'react'
import { SiteHeader } from '@/components/site-header'
import { ContactForm } from '@/components/contact-form'

export const metadata = {
  title: 'Contact Us: Request Home Care in Georgia',
  description: 'Call 470-736-9530 or send a request to Freedom Elite Home Care in Stone Mountain, Georgia. We listen first, then help you understand your next step.',
  alternates: { canonical: '/contact' },
}

const hours = [
  ['Monday to Friday', '9:00 AM to 5:00 PM'],
  ['Saturday', 'Closed'],
  ['Sunday', 'Closed'],
]

export default function ContactPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="section-pad">
            <p className="eyebrow">CONTACT</p>
            <h1>Tell us what your <em>family needs.</em></h1>
            <p className="lead">Call, text, or send a request. We listen first, then help you understand your next step.</p>
          </div>
        </section>

        <section className="section-pad contact-grid">
          <div className="contact-side">
            <a className="reach" href="tel:4707369530"><small>Call</small><strong>470-736-9530</strong></a>
            <a className="reach" href="sms:4707369530"><small>Text</small><strong>470-736-9530</strong></a>
            <a className="reach" href="mailto:freedomelitehomecare@yahoo.com"><small>Email</small><strong>freedomelitehomecare@yahoo.com</strong></a>

            <div className="hours-card">
              <h2>Office hours</h2>
              <dl>{hours.map(([d, t]) => <div key={d}><dt>{d}</dt><dd>{t}</dd></div>)}</dl>
              {/* <p>After-hours support: [Confirm with owner]</p> */}
            </div>

            <div className="next-card">
              <h2>What happens next</h2>
              <ol className="visit-steps">
                <li>We read your request and call you.</li>
                <li>We talk through your needs, free of charge.</li>
                <li>We explain options and next steps, with no pressure.</li>
              </ol>
            </div>
          </div>

          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </section>

        {/* <section className="section-pad map-band">
          <h2>Serving families across Georgia</h2>
          <p>Based in Stone Mountain. Tell us where you are and we will confirm service in your area.</p>
          <div className="map-frame">
            <iframe title="Freedom Elite Home Care service area map" src="https://www.google.com/maps?q=Stone%20Mountain%2C%20Georgia&output=embed" loading="lazy" />
          </div>
        </section> */}
      </main>
    </div>
  )
}