'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { submitApplication } from '@/lib/submit-public-form'
import { nameProps, phoneProps, placesProps, rangeProps } from '@/lib/input-filters'

const roles = [
  { value: 'RN', title: 'Registered Nurse (RN)', text: 'Lead care plans and provide skilled nursing in the home.' },
  { value: 'LPN', title: 'Licensed Practical Nurse (LPN)', text: 'Provide skilled nursing support under the care plan.' },
  { value: 'Pediatric Private Duty Nurse', title: 'Pediatric Private Duty Nurse', text: 'One-on-one nursing for children with complex needs.' },
  { value: 'CNA', title: 'Certified Nursing Assistant (CNA)', text: 'Hands-on personal care and daily support.' },
  { value: 'HHA/PCA', title: 'Home Health Aide / Personal Care Aide', text: 'Compassionate help with daily routines at home.' },
]
const skills = ['Tracheostomy care', 'Ventilator care', 'G-tube feeding', 'Seizure care', 'Autism or behavioral support', 'Dementia care', 'Hospice or end of life', 'Wound care']
const shifts = ['Weekday days', 'Evenings', 'Overnights', 'Weekends']
const perks = [
  ['Flexible schedules', 'Choose shifts that fit your life.'],
  ['A supportive team', 'You are never on your own. Someone is always a call away.'],
  ['Meaningful work', 'You will see the difference you make for families every week.'],
  ['Pay and benefits', 'Competitive pay and benefits.'],
]
const nurse = (r: string) => r === 'RN' || r === 'LPN' || r === 'Pediatric Private Duty Nurse'

export default function CareersPage() {
  const [role, setRole] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setSending(true)
    setError('')
    try {
      await submitApplication(form)
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again or call 470-736-9530.')
    } finally {
      setSending(false)
    }
  }

  const pick = (value: string) => {
    setRole(value)
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="section-pad">
            <p className="eyebrow">CAREERS</p>
            <h1>Build a career where you&apos;re <em>valued.</em></h1>
            <p className="lead">We are hiring nurses, CNAs, and caregivers across Georgia who treat every family like their own.</p>
            <a className="button primary" href="#apply">Apply now</a>
          </div>
        </section>

        <section className="section-pad career-section">
          <h2>Open roles</h2>
          <div className="role-grid">
            {roles.map((r) => (
              <button type="button" className="role-card" key={r.value} onClick={() => pick(r.value)}>
                <h3>{r.title}</h3><p>{r.text}</p><span className="learn">Apply for this role →</span>
              </button>
            ))}
          </div>
        </section>

        <section className="mint-band">
          <div>
            <h2>Why work with us</h2>
            <div className="detail-cards perks">
              {perks.map(([t, d]) => <div className="detail-card" key={t}><h3>{t}</h3><p>{d}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section-pad career-section">
          <h2>How hiring works</h2>
          <ol className="visit-steps">
            <li>Apply online. It takes about 10 minutes.</li>
            <li>A quick phone conversation with our team.</li>
            <li>Interview and credential verification.</li>
            <li>Orientation, then your first assignment.</li>
          </ol>
        </section>

        <section className="section-pad info-form-section" id="apply">
          {sent ? (
            <div className="form-card career-form">
              <h2>Thank you for applying.</h2>
              <p>We received your application and will be in touch soon.</p>
              <Link className="button primary" href="/">Back to home</Link>
            </div>
          ) : (
            <form className="form-card career-form" onSubmit={onSubmit}>
              {/* Honeypot: hidden from people, bots fill it in. */}
              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
              <h2>Apply to join our team</h2>
              <p className="form-note">Takes about 10 minutes. Fields marked * are required.</p>

              <fieldset>
                <legend>About you</legend>
                <div className="field-grid">
                  <label>First name *<input name="first" required autoComplete="given-name" maxLength={60} {...nameProps} /></label>
                  <label>Last name *<input name="last" required autoComplete="family-name" maxLength={60} {...nameProps} /></label>
                  <label>Phone *<input name="phone" required {...phoneProps} /></label>
                  <label>Email *<input name="email" type="email" required /></label>
                  <label>City *<input name="city" required autoComplete="address-level2" maxLength={80} {...nameProps} /></label>
                  <label>County or ZIP *<input name="county" required /></label>
                  <label>Legally authorized to work in the U.S.? *<select name="workAuth" defaultValue="" required><option value="" disabled>Select</option><option>Yes</option><option>No</option></select></label>
                  <label>Reliable transportation? *<select name="transport" defaultValue="" required><option value="" disabled>Select</option><option>Yes</option><option>No</option></select></label>
                </div>
              </fieldset>

              <fieldset>
                <legend>Role and credentials</legend>
                <div className="field-grid">
                  <label className="wide">Role you are applying for *
                    <select name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                      <option value="" disabled>Select a role</option>
                      {roles.map((r) => <option key={r.value} value={r.value}>{r.title}</option>)}
                    </select>
                  </label>
                  {nurse(role) && (<>
                    <label>Nursing license number *<input name="licenseNo" required /></label>
                    <label>Issuing state *<input name="licenseState" defaultValue="Georgia" required /></label>
                    <label>License expiration *<input name="licenseExp" type="date" required /></label>
                    <label>License status *<select name="licenseStatus" defaultValue="" required><option value="" disabled>Select</option><option>Active</option><option>Pending</option></select></label>
                  </>)}
                  {role === 'CNA' && (<>
                    <label>Georgia Nurse Aide Registry number *<input name="registryNo" required /></label>
                    <label>Certification expiration *<input name="certExp" type="date" required /></label>
                  </>)}
                  {role === 'HHA/PCA' && (
                    <label className="wide">Certification or training (if any)<input name="training" /></label>
                  )}
                  <label>CPR/BLS status<select name="cpr" defaultValue=""><option value="" disabled>Select</option><option>Current</option><option>Expired</option><option>None yet</option></select></label>
                  <label>Years of experience *<select name="years" defaultValue="" required><option value="" disabled>Select</option><option>Less than 1</option><option>1 to 2</option><option>3 to 5</option><option>6 to 10</option><option>10+</option></select></label>
                  <label>Pediatric experience? *<select name="peds" defaultValue="" required><option value="" disabled>Select</option><option>Yes</option><option>No</option></select></label>
                  <label>TB test and immunizations current?<select name="health" defaultValue=""><option value="" disabled>Select</option><option>Yes</option><option>No</option><option>Not sure</option></select></label>
                </div>
              </fieldset>

              <fieldset>
                <legend>Skills and experience</legend>
                <div className="check-grid">
                  {skills.map((s) => <label className="check" key={s}><input type="checkbox" name="skills" value={s} />{s}</label>)}
                </div>
                <label>Tell us about your recent experience<textarea name="experience" rows={4} /></label>
              </fieldset>

              <fieldset>
                <legend>Availability</legend>
                <div className="check-grid">
                  {shifts.map((s) => <label className="check" key={s}><input type="checkbox" name="shifts" value={s} />{s}</label>)}
                </div>
                <div className="field-grid">
                  <label>Employment type *<select name="type" defaultValue="" required><option value="" disabled>Select</option><option>Full time</option><option>Part time</option><option>PRN / as needed</option></select></label>
                  <label>Hours per week you want<input name="hours" inputMode="numeric" maxLength={7} {...rangeProps} placeholder="e.g. 20-30" /></label>
                  <label>Earliest start date<input name="start" type="date" /></label>
                  <label>Counties you can travel to<input name="travel" maxLength={200} {...placesProps} /></label>
                </div>
              </fieldset>

              <fieldset>
                <legend>References and documents</legend>
                <div className="field-grid">
                  <label>Reference name<input name="refName" maxLength={80} {...nameProps} /></label>
                  <label>Reference phone<input name="refPhone" {...phoneProps} autoComplete="off" /></label>
                  <label className="wide">Upload resume<input name="resume" type="file" accept=".pdf,.doc,.docx" /></label>
                  <label className="wide">How did you hear about us?<input name="source" /></label>
                </div>
                <label className="check consent"><input type="checkbox" name="consent" required />I agree to a background check and credential verification if I move forward. *</label>
                <p className="form-note">Freedom Elite Home Care is an equal opportunity employer.</p>
              </fieldset>

              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="button primary" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Submit application'}</button>
            </form>
          )}
        </section>
      </main>
    </div>
  )
}