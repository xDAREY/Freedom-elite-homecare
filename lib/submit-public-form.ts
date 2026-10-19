import { createClient } from '@supabase/supabase-js'

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const ERRORS: Record<string, string> = {
  rate_limited: 'Too many submissions from this connection. Please try again in an hour, or call us.',
  invalid_email: 'Please check your email address.',
  contact_required: 'Please include a phone number or email so we can reach you.',
  license_required: 'Please enter your license number and expiration.',
  registry_required: 'Please enter your registry number and certification expiration.',
  consent_required: 'Please agree to the background check to continue.',
  invalid_resume_type: 'Resume must be a PDF, DOC, or DOCX file.',
  resume_too_large: 'Resume must be 5 MB or smaller.',
}

async function post(payload: unknown) {
  const res = await fetch(`${URL}/functions/v1/submit-public-form`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', apikey: KEY, Authorization: `Bearer ${KEY}` },
    body: JSON.stringify(payload),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(ERRORS[json.error] ?? 'Something went wrong. Please call us at 470-736-9530.')
  return json
}

const s = (f: FormData, k: string) => String(f.get(k) ?? '').trim()
const yes = (f: FormData, k: string) => s(f, k) === 'Yes'

/** Career form -> DB payload. Keep the input names from the current form; add name="consent" and a hidden name="website" honeypot. */
export async function submitApplication(form: HTMLFormElement) {
  const f = new FormData(form)
  const file = f.get('resume')
  const resume = file instanceof File && file.size > 0 ? file : null
  const data = {
    first_name: s(f, 'first'), last_name: s(f, 'last'), phone: s(f, 'phone'), email: s(f, 'email'),
    city: s(f, 'city'), county_or_zip: s(f, 'county'),
    work_authorized: yes(f, 'workAuth'), has_transportation: yes(f, 'transport'),
    role: s(f, 'role'),
    license_number: s(f, 'licenseNo'), license_state: s(f, 'licenseState'), license_expiration: s(f, 'licenseExp'), license_status: s(f, 'licenseStatus'),
    registry_number: s(f, 'registryNo'), certification_expiration: s(f, 'certExp'), training: s(f, 'training'),
    cpr_status: s(f, 'cpr'), years_experience: s(f, 'years'), pediatric_experience: yes(f, 'peds'), immunizations_current: s(f, 'health'),
    skills: f.getAll('skills').map(String), experience: s(f, 'experience'), availability: f.getAll('shifts').map(String),
    employment_type: s(f, 'type'), hours_per_week: s(f, 'hours'), earliest_start: s(f, 'start'), travel_counties: s(f, 'travel'),
    reference_name: s(f, 'refName'), reference_phone: s(f, 'refPhone'), source: s(f, 'source'),
    background_check_consent: f.get('consent') === 'on',
  }
  const out = await post({
    type: 'application', data, website: s(f, 'website'),
    resume: resume ? { name: resume.name, type: resume.type, size: resume.size } : undefined,
  })
  if (resume && out.resume) {
    const sb = createClient(URL, KEY, { auth: { persistSession: false } })
    await sb.storage.from('resumes').uploadToSignedUrl(out.resume.path, out.resume.token, resume)
  }
  return out.id as string
}

/** Contact form -> inquiry. Field names match ContactForm: name, phone, email, careFor, service, location, bestTime, message. */
export async function submitInquiry(form: HTMLFormElement) {
  const f = new FormData(form)
  const core = ['name', 'phone', 'email', 'careFor', 'service', 'location', 'bestTime', 'message', 'website', 'consent']
  const details: Record<string, string> = {}
  f.forEach((v, k) => { if (!core.includes(k) && typeof v === 'string' && v.trim()) details[k] = v.trim() })
  const out = await post({
    type: 'inquiry', website: s(f, 'website'),
    data: {
      name: s(f, 'name'), phone: s(f, 'phone'), email: s(f, 'email'),
      care_for: s(f, 'careFor'), service: s(f, 'service'), location: s(f, 'location'), best_time: s(f, 'bestTime'),
      message: s(f, 'message'), details, source_page: 'contact',
    },
  })
  return out.id as string
}