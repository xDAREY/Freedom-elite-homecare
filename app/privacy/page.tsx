import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'

export const metadata = {
  title: 'Privacy and HIPAA Notice | Freedom Elite Home Care',
  description: 'How Freedom Elite Home Care collects, uses, and protects your information, and your rights under HIPAA.',
}

const toc = [
  ['summary', 'In plain words'],
  ['website', 'Website privacy'],
  ['hipaa', 'HIPAA notice'],
  ['uses', 'How we use health information'],
  ['rights', 'Your rights'],
  ['duties', 'Our responsibilities'],
  ['complaints', 'Questions and complaints'],
]

const summary = [
  ['We collect only what we need', 'We ask for the details required to answer your request, plan care, or review a job application.'],
  ['We protect health information', 'Health information is kept private and shared only as this notice describes or as you allow.'],
  ['You are in control', 'You can ask to see, correct, or limit how your information is used, and you can ask us questions at any time.'],
]

const rights = [
  ['See and copy your records', 'You can ask to see or get a copy of your health information. We usually respond within 30 days and may charge a reasonable, cost-based fee for copies.'],
  ['Ask for corrections', 'If you believe something in your record is wrong or incomplete, you can ask us to fix it.'],
  ['Ask for a list of disclosures', 'You can ask for a list of certain times we shared your information, going back six years.'],
  ['Ask for limits', 'You can ask us to limit how we use or share your information. We are not always required to agree, but we will consider it. If you pay for a service in full yourself and ask us not to share it with your health plan, we will honor that in most cases.'],
  ['Choose how we contact you', 'You can ask us to contact you in a certain way or place, such as a different phone number or by mail only.'],
  ['Get a paper copy of this notice', 'You can ask for a paper copy at any time, even if you agreed to receive it electronically.'],
  ['Be told about a breach', 'If your health information is improperly exposed, we will notify you as the law requires.'],
  ['Name someone to act for you', 'If you have given someone medical power of attorney, or someone is your legal guardian, that person can exercise your rights. Parents and guardians can act for children.'],
]

export default function PrivacyPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="section-pad">
            <p className="eyebrow">PRIVACY</p>
            <h1>Your privacy, <em>explained plainly.</em></h1>
            <p className="lead">How Freedom Elite Home Care handles your information, and the rights you have under HIPAA.</p>
          </div>
        </section>

        <div className="section-pad policy-layout">
          <aside className="toc" aria-label="On this page">
            <h2>On this page</h2>
            <nav>{toc.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
          </aside>

          <div className="policy">
            <section className="policy-section" id="summary">
              <h2>In plain words</h2>
              <div className="detail-cards">
                {summary.map(([t, d]) => <div className="detail-card" key={t}><h3>{t}</h3><p>{d}</p></div>)}
              </div>
              {/* <p className="note-line">Effective date: [add before launch] · Last updated: October 2026 · [Have this notice reviewed by a healthcare attorney or compliance professional before launch]</p> */}
            </section>

            <section className="policy-section" id="website">
              <h2>Website privacy</h2>
              <p>This section covers what happens when you use freedomelitehomecare.com. Health information we receive while providing care is covered by the HIPAA notice further down.</p>
              <h3>What we collect</h3>
              <ul className="policy-list">
                <li>Information you send us through forms, such as your name, phone, email, who needs care, the service you are interested in, your city or county, and your message.</li>
                <li>For job applications: contact details, credentials and license information, work history, availability, references, and any resume you upload.</li>
                <li>Basic technical information, such as browser type and the pages visited, collected through standard website analytics.</li>
              </ul>
              <h3>How we use it</h3>
              <ul className="policy-list">
                <li>To respond to your request and schedule a consultation.</li>
                <li>To review job applications.</li>
                <li>To improve the website and keep it secure.</li>
                <li>To meet legal requirements.</li>
              </ul>
              <h3>Who we share it with</h3>
              <p>We share website information only with service providers who help us run the site, forms, and email, and when the law requires it. We do not sell your personal information. [Confirm with owner]</p>
              <h3>Please keep medical details off the forms</h3>
              <p>Website forms are for getting in touch. Please do not include detailed medical information. Call us at <a href="tel:4707369530">470-736-9530</a> and we will talk it through.</p>
              <h3>Children</h3>
              <p>Our website is for parents, guardians, and adults. We do not knowingly collect information directly from children under 13.</p>
              <h3>Your choices</h3>
              <p>You can ask us to update or delete the contact information you submitted through the website by contacting us below.</p>
            </section>

            <section className="policy-section" id="hipaa">
              <h2>HIPAA Notice of Privacy Practices</h2>
              <p><strong>This notice describes how medical information about you may be used and shared, and how you can get access to it. Please review it carefully.</strong></p>
              <p>Freedom Elite Home Care LLC is required by law to maintain the privacy of your protected health information, to give you this notice, and to follow its terms.</p>
            </section>

            <section className="policy-section" id="uses">
              <h2>How we may use and share your health information</h2>
              <div className="detail-cards">
                <div className="detail-card"><h3>Treatment</h3><p>Sharing information with your doctors, nurses, and other providers so your care is coordinated and safe.</p></div>
                <div className="detail-card"><h3>Payment</h3><p>Billing Medicaid or insurance and submitting requests for approval, such as GAPP prior authorization.</p></div>
                <div className="detail-card"><h3>Operations</h3><p>Planning care, training and supervising staff, and checking the quality of our services.</p></div>
              </div>
              <h3>Other uses allowed or required by law</h3>
              <ul className="policy-list">
                <li>Public health and safety activities, and reporting suspected abuse or neglect.</li>
                <li>Health oversight agencies, such as state Medicaid and licensing reviews.</li>
                <li>Court orders, legal proceedings, and law enforcement requests that meet legal requirements.</li>
                <li>Preventing a serious threat to health or safety.</li>
                <li>Workers&apos; compensation and certain government functions.</li>
              </ul>
              <h3>Family and caregivers</h3>
              <p>We may share relevant information with a family member or friend involved in your care if you agree, or if we believe it is in your best interest and you cannot tell us otherwise.</p>
              <h3>When we need your written permission</h3>
              <p>We need your written authorization for marketing, for any sale of your health information, for most uses of psychotherapy notes, and for any other use not described in this notice. You can cancel an authorization at any time by telling us in writing. It will not affect anything we already did based on it.</p>
              <p>Some kinds of information, such as certain mental health or substance use records, may have extra protection under federal or state law. We follow the stricter rules when they apply.</p>
            </section>

            <section className="policy-section" id="rights">
              <h2>Your rights</h2>
              <div className="detail-cards rights-grid">
                {rights.map(([t, d]) => <div className="detail-card" key={t}><h3>{t}</h3><p>{d}</p></div>)}
              </div>
              <p className="guide-note">To use any of these rights, contact us using the details below.</p>
            </section>

            <section className="policy-section" id="duties">
              <h2>Our responsibilities</h2>
              <ul className="policy-list">
                <li>We keep your health information private and secure.</li>
                <li>We tell you promptly if a breach affects your information.</li>
                <li>We follow the practices described in this notice and give you a copy.</li>
                <li>We will not use or share your information in ways not described here without your written permission.</li>
                <li>We may change this notice. If we do, the new version applies to all information we hold, and we will post it here and provide a copy on request.</li>
              </ul>
            </section>

            <section className="policy-section" id="complaints">
              <h2>Questions and complaints</h2>
              <p>If you think your privacy rights were violated, you can tell us or file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights. <strong>We will not retaliate against you for filing a complaint.</strong></p>
              <p><a href="https://www.hhs.gov/hipaa/filing-a-complaint/index.html" target="_blank" rel="noreferrer">How to file a complaint with HHS</a></p>
            </section>

            {/* <div className="policy-contact">
              <h2>Contact our privacy officer</h2>
              <p><strong>[Privacy officer name: add before launch]</strong><br />Freedom Elite Home Care LLC<br />Stone Mountain, Georgia [add mailing address]</p>
              <p><a href="tel:4707369530">470-736-9530</a><br /><a href="mailto:hello@freedomelitehomecare.com">hello@freedomelitehomecare.com</a></p>
              <Link className="button primary" href="/contact">Contact us</Link>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  )
}