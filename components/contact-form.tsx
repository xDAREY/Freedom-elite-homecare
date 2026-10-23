'use client'

import { useSearchParams } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import { services } from '@/data/services'
import { submitInquiry } from '@/lib/submit-public-form'
import { nameProps, phoneProps, placesProps } from '@/lib/input-filters'

export function ContactForm() {
  const params = useSearchParams()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    setError('')
    try {
      await submitInquiry(form)
      setStatus('sent')
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again or call 470-736-9530.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-card">
        <h2>Thank you.</h2>
        <p>We received your request and will reach out soon.</p>
        <a className="button primary" href="tel:4707369530">Call 470-736-9530</a>
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <h2>Request care</h2>
      <p className="form-note">Takes about two minutes. Fields marked * are required.</p>
      {/* Honeypot: hidden from people, bots fill it in. */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
      <div className="field-grid">
        <label>Your name *<input name="name" required autoComplete="name" maxLength={80} {...nameProps} /></label>
        <label>Phone *<input name="phone" required {...phoneProps} /></label>
        <label className="wide">Email *<input name="email" type="email" required autoComplete="email" maxLength={160} /></label>
        <label>Who needs care? *
          <select name="careFor" defaultValue="" required>
            <option value="" disabled>Select</option>
            <option>My child</option><option>My parent or older relative</option><option>A veteran</option><option>Myself</option><option>Someone else</option>
          </select>
        </label>
        <label>Service of interest
          <select name="service" defaultValue={params.get('service') ?? ''}>
            <option value="">Not sure yet</option>
            {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
          </select>
        </label>
        <label>City or county<input name="location" maxLength={80} {...placesProps} /></label>
        <label>Best time to call
          <select name="bestTime" defaultValue="">
            <option value="">Anytime</option><option>Morning</option><option>Afternoon</option><option>Evening</option>
          </select>
        </label>
        <label className="wide">Tell us a little about what is going on<textarea name="message" rows={4} maxLength={2000} /></label>
      </div>
      <label className="check consent"><input type="checkbox" name="consent" required />I agree that Freedom Elite Home Care may contact me about this request. *</label>
      <p className="form-note">Please do not include detailed medical information here. We will talk it through by phone.</p>
      {status === 'error' && <p className="form-error" role="alert">{error}</p>}
      <button className="button primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send request'}</button>
    </form>
  )
}