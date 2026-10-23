import type { FormEvent, KeyboardEvent } from 'react'

function rules(allowedChar: RegExp, clean: (v: string) => string) {
  return {
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.key.length !== 1) return   // shortcuts, arrows, backspace, etc.
      if (!allowedChar.test(e.key)) e.preventDefault()
      else if (e.key === '+' && (e.currentTarget.selectionStart ?? 0) > 0) e.preventDefault()   // handled per field below
    },
    onInput: (e: FormEvent<HTMLInputElement>) => {
      const el = e.currentTarget
      const next = clean(el.value)
      if (next !== el.value) el.value = next
    },
  }
}

/** Names, cities: letters in any language, spaces, apostrophes, periods, hyphens. No digits. */
export const nameProps = rules(/[\p{L}\p{M}\s'’.\-]/u, (v) => v.replace(/[^\p{L}\p{M}\s'’.\-]/gu, ''))
/** Lists of places: letters, commas, spaces, hyphens, apostrophes, periods. */
export const placesProps = rules(/[\p{L}\p{M}\s,'’.\-]/u, (v) => v.replace(/[^\p{L}\p{M}\s,'’.\-]/gu, ''))
/** Hours per week etc.: digits, spaces and a dash for ranges like 20-30. */
export const rangeProps = rules(/[\d\s\-–]/, (v) => v.replace(/[^\d\s\-–]/g, ''))

const phoneRules = rules(/[\d+]/, (v) => v.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, ''))
/** Phone: digits with an optional leading +. Letters never appear. Browser also checks 10–15 digits on submit. */
export const phoneProps = {
  ...phoneRules,
  type: 'tel', inputMode: 'tel', autoComplete: 'tel', maxLength: 16, pattern: '\\+?\\d{10,15}',
  title: 'Enter 10 to 15 digits, for example 4707369530',
} as const