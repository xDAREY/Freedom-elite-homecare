'use client'

import Link from 'next/link'
import { useState } from 'react'

const questions = [
  { key: 'age', q: 'How old is your child?', options: [['under19', 'Under 19'], ['19-20', '19 or 20'], ['21plus', '21 or older']] },
  { key: 'ga', q: 'Does your child live in Georgia?', options: [['yes', 'Yes'], ['no', 'No']] },
  { key: 'need', q: 'Has a doctor ordered ongoing nursing or personal care support at home?', options: [['yes', 'Yes'], ['unsure', 'Not sure yet'], ['no', 'No']] },
  { key: 'medicaid', q: 'What is your child’s Medicaid situation?', options: [['has', 'Has Georgia Medicaid'], ['pending', 'An application is pending'], ['none', 'No Medicaid (family income may be too high)'], ['unsure', 'Not sure']] },
] as const

function result(a: Record<string, string>) {
  if (a.age === '21plus' || a.ga === 'no')
    return ['GAPP may not be the right fit', 'GAPP serves Georgia children under 21. We may still be able to point you to other options, so reach out and we will talk it through.']
  if (a.need === 'no')
    return ['A doctor’s order is the first step', 'GAPP is for children whose doctor has ordered medically necessary care at home. Start by talking with your child’s doctor about in-home needs, then come back to us.']
  if (a.medicaid === 'pending')
    return ['Timing matters', 'GAPP services cannot be approved while a Medicaid application is still pending. Once the decision comes back, we can help you plan the next step.']
  if (a.medicaid === 'has')
    return ['GAPP may be worth pursuing', 'With Medicaid in place and a doctor’s order, the next step is a referral and a prior authorization request through a GAPP nursing agency. We can help you start.']
  if (a.medicaid === 'none' && a.age === 'under19')
    return ['Katie Beckett may be your first step', 'If family income is the barrier, Katie Beckett can let Georgia count only your child’s income when deciding Medicaid eligibility. Your child must meet a level-of-care requirement.']
  if (a.medicaid === 'none')
    return ['Let’s look at your options', 'Katie Beckett covers children under 19, so a different route may fit better. Talk to us and we will help you sort through what is available.']
  return ['Let’s sort out Medicaid first', 'Medicaid status decides which path comes next. We can help you find out where your family stands.']
}

export function EligibilityChecker() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const done = step >= questions.length
  const pct = Math.round(((done ? questions.length : step + 1) / questions.length) * 100)
  const [title, text] = done ? result(answers) : ['', '']

  const pick = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value })
    setStep(step + 1)
  }

  return (
    <div className="checker" aria-live="polite">
      <div className="checker-bar" aria-hidden="true"><i style={{ width: `${pct}%` }} /></div>
      {!done ? (
        <>
          <p className="checker-count">Question {step + 1} of {questions.length}</p>
          <h3>{questions[step].q}</h3>
          <div className="checker-options">
            {questions[step].options.map(([value, label]) => (
              <button type="button" key={value} onClick={() => pick(questions[step].key, value)}>{label}</button>
            ))}
          </div>
          {step > 0 && <button type="button" className="checker-back" onClick={() => setStep(step - 1)}>← Back</button>}
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="button-row">
            <Link className="button primary" href="/contact">Talk to Asia’s team</Link>
            <button type="button" className="button secondary" onClick={() => { setStep(0); setAnswers({}) }}>Start over</button>
          </div>
        </>
      )}
      <p className="checker-note">This is guidance only, not a guarantee of approval. Always confirm current rules with the Georgia Department of Community Health.</p>
    </div>
  )
}