export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://freedomelitehomecare.com'
export const SITE_NAME = 'Freedom Elite Home Care'
export const SITE_EMAIL = 'freedomelitehomecare@yahoo.com'
export const SITE_PHONE = '+1-470-736-9530'

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: 'Freedom Elite Home Care LLC',
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/images/family-care-hero.png`,
  telephone: SITE_PHONE,
  email: SITE_EMAIL,
  description:
    'In-home care for children, older adults, and veterans in Georgia, including GAPP pediatric care, autism support, and dementia care.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Stone Mountain',
    addressRegion: 'GA',
    addressCountry: 'US',
    // Add once confirmed, and match Google Business Profile exactly:
    // streetAddress: '...',
    // postalCode: '...',
  },
  // Edit to the places she actually serves
  areaServed: [
    { '@type': 'State', name: 'Georgia' },
    { '@type': 'City', name: 'Stone Mountain' },
    { '@type': 'City', name: 'Atlanta' },
    { '@type': 'City', name: 'Decatur' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
}

export function serviceJsonLd(service: { slug: string; title: string; overview: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.overview,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: { '@type': 'State', name: 'Georgia' },
  }
}