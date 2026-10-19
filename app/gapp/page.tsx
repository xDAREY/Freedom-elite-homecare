import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { EligibilityChecker } from '@/components/eligibility-checker'

export const metadata = {
  title: 'GAPP and Katie Beckett Guide | Freedom Elite Home Care',
  description: 'A plain-language guide to the Georgia Pediatric Program (GAPP) and Katie Beckett Medicaid: who qualifies, how to apply, and what to expect.',
}

const steps = [
  ['Talk to your child’s doctor', 'Ask about in-home nursing or personal care. GAPP requires care that a physician has ordered as medically necessary.'],
  ['Make sure your child has Medicaid', 'GAPP services are for children who are Medicaid eligible. If family income is the barrier and your child is under 19, Katie Beckett may be the way in.'],
  ['Choose a GAPP nursing agency', 'Requests go through a Medicaid-approved GAPP agency, which submits the prior authorization request for you. We can do this for your family. [Confirm with owner]'],
  ['Wait for the decision', 'The state reviews the request. You will get a decision letter. If something is missing, we help you fix it quickly.'],
  ['Begin care and keep it going', 'Once approved, we build your care plan and start. Approvals are reviewed again over time, and we help with renewals.'],
]

const docs = [
  'Your child’s Medicaid ID number (or your Medicaid application status)',
  'A doctor’s order or referral for in-home care',
  'Recent medical records and diagnoses',
  'Any private health insurance information',
  'Parent or guardian photo ID and contact details',
  'For Katie Beckett: the application forms the Katie Beckett team sends you, which include a physician’s recommendation, a level-of-care statement, and a cost-effectiveness form',
]

const faqs = [
  ['Is GAPP the same as Katie Beckett?', 'No. Katie Beckett helps a child qualify for Medicaid when parents’ income is too high. GAPP is a Medicaid program that provides in-home skilled nursing and personal care. Some families use both: Katie Beckett to establish Medicaid, then GAPP for care at home.'],
  ['Does my child need a specific diagnosis?', 'Eligibility depends on the level of care your child needs, not a single diagnosis. A doctor’s documentation of medical need is what matters.'],
  ['Does GAPP cost families anything?', 'GAPP is a Medicaid program. Ask us about any costs that may apply to your situation. [Confirm with owner]'],
  ['Can we apply while a Medicaid application is pending?', 'GAPP services cannot be approved until Medicaid is in place, so Medicaid usually comes first. We can help you plan the timing.'],
  ['What if we are denied?', 'You can ask for a review. The denial letter explains how and by when, and deadlines are short, so contact us right away and we will help you understand the next step.'],
  ['What kind of care can my child receive?', 'GAPP can cover skilled nursing and personal care support at home, based on your child’s doctor’s orders and the care plan that is approved.'],
  ['How long does approval take?', 'Timing varies with how complete the paperwork is and how quickly records arrive. We help you submit a complete package to avoid delays. [Confirm typical timing with owner]'],
]

export default function GappPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="section-pad">
            <p className="eyebrow">GAPP & KATIE BECKETT GUIDE</p>
            <h1>GAPP and Katie Beckett, <em>explained plainly.</em></h1>
            <p className="lead">What these Georgia programs are, who may qualify, and exactly how to get started.</p>
            <div className="button-row">
              <a className="button primary" href="#checker">Check if your child may qualify</a>
              <Link className="button secondary" href="/contact">Talk to Asia’s team</Link>
            </div>
          </div>
        </section>

        <nav className="section-pad guide-nav" aria-label="On this page">
          <a href="#basics">The basics</a><a href="#compare">GAPP vs Katie Beckett</a><a href="#process">How to apply</a><a href="#documents">Documents</a><a href="#checker">Eligibility check</a><a href="#faq">Questions</a><a href="#resources">Official resources</a>
        </nav>

        <section className="section-pad guide-section" id="basics">
          <h2>The basics</h2>
          <p className="guide-intro">The Georgia Pediatric Program (GAPP) helps medically fragile children receive nursing and personal care at home instead of in a hospital or facility. It is run by the Georgia Department of Community Health (DCH) and paid through Medicaid.</p>
          <div className="facts">
            <div><h3>Who it serves</h3><p>Medically fragile children and young adults under 21 who need ongoing care.</p></div>
            <div><h3>What it provides</h3><p>Skilled nursing and/or personal care support in the home.</p></div>
            <div><h3>How it is paid</h3><p>Through Georgia Medicaid. Your child must be Medicaid eligible.</p></div>
            <div><h3>How it is approved</h3><p>Every service needs prior authorization, requested through a GAPP nursing agency.</p></div>
          </div>
        </section>

        <section className="section-pad guide-section" id="compare">
          <h2>GAPP vs Katie Beckett</h2>
          <p className="guide-intro">Families often mix these up. They do different jobs, and some children use both.</p>
          <div className="table-wrap">
            <table className="compare">
              <thead><tr><th></th><th>GAPP</th><th>Katie Beckett</th></tr></thead>
              <tbody>
                <tr><th scope="row">What it is</th><td>In-home nursing and personal care for medically fragile children</td><td>A way to qualify for Medicaid when parents’ income is too high</td></tr>
                <tr><th scope="row">Age</th><td>Under 21</td><td>Under 19</td></tr>
                <tr><th scope="row">Income</th><td>Child must be Medicaid eligible</td><td>Only the child’s income and resources count, not the parents’</td></tr>
                <tr><th scope="row">Care needed</th><td>Medically necessary care ordered by a physician</td><td>Child needs a hospital, nursing facility, or similar level of care</td></tr>
                <tr><th scope="row">Who handles the request</th><td>A Medicaid-approved GAPP nursing agency</td><td>The DCH Katie Beckett Medicaid team</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="section-pad guide-section" id="process">
          <h2>How to apply, step by step</h2>
          <ol className="visit-steps">
            {steps.map(([t, d]) => <li key={t}><strong>{t}.</strong> {d}</li>)}
          </ol>
          <p className="guide-note">Want us to walk you through it? <Link href="/how-it-works">See how we work with families</Link>.</p>
        </section>

        <section className="section-pad guide-section" id="documents">
          <h2>What to gather</h2>
          <p className="guide-intro">Having these ready makes everything faster. Forms can change, so we confirm the current list with you.</p>
          <div className="plain-list checklist">{docs.map((d) => <div key={d}><span aria-hidden="true">✓</span>{d}</div>)}</div>
        </section>

        <section className="guide-band" id="checker">
          <div className="section-pad checker-wrap">
            <div>
              <h2>Might your child qualify?</h2>
              <p>Answer four quick questions and we will point you to a sensible next step. It takes under a minute.</p>
            </div>
            <EligibilityChecker />
          </div>
        </section>

        <section className="section-pad guide-section" id="faq">
          <h2>Common questions</h2>
          <div className="faq-list">
            {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </section>

        <section className="section-pad guide-section" id="resources">
          <h2>Official resources</h2>
          <div className="plain-list">
            <div><a href="https://dch.georgia.gov" target="_blank" rel="noreferrer">Georgia Department of Community Health (DCH)</a>: the agency that runs GAPP and Katie Beckett Medicaid.</div>
            <div>GAPP program questions: <a href="mailto:GAPP.inquiries@dch.ga.gov">GAPP.inquiries@dch.ga.gov</a></div>
            <div><a href="https://www.p2pga.org" target="_blank" rel="noreferrer">Parent to Parent of Georgia</a>: support and information for families of children with disabilities.</div>
          </div>
          <p className="guide-note">This guide is for education only and is not legal or medical advice or a guarantee of eligibility. Program rules change, so confirm current details with DCH. Last reviewed October 2026.</p>
        </section>

        <section className="mint-band">
          <div>
            <h2>Not sure where to start?</h2>
            <p>We will listen first, then help you understand the next step for your family.</p>
            <Link className="button primary" href="/contact">Talk to Asia’s team</Link>
          </div>
        </section>
      </main>
    </div>
  )
}