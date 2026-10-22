import type { Service } from './services'

/**
 * Add new images here. Drop the file into /public/images, then add its path
 * to the right list. Cards in a category are given images in order, and the
 * list repeats if there are more services than images.
 */
export const categoryImages: Record<Service['category'], string[]> = {
  Children: [
    '/images/service-children.png',
    '/images/nurse-kid.jpeg',
    '/images/nurse-kid2.jpeg',
    '/images/nurse-kid3.jpeg',
    '/images/nurse-kid4.jpeg',
  ],
  Seniors: [
    '/images/service-seniors.png',
    '/images/elderly_care.jpeg',
    '/images/elderly_care2.jpeg',
    '/images/elderly_care3.jpeg',
    '/images/elderly_care4.jpeg',
  ],
  Veterans: ['/images/elderly_care2.jpeg', '/images/service-seniors.png'],
  Specialty: [
    '/images/service-family.png',
    '/images/elderly_care3.jpeg',
    '/images/elderly_care4.jpeg',
  ],
}

/** Pin a specific image to a specific service (optional). Key = the service slug. */
export const serviceImageOverrides: Record<string, string> = {
  'meal-preparation-nutrition': '/images/elderly_care6.jpg',
  'medication-reminders': '/images/elderly_care3.jpeg',
  'mobility-transfer-assistance': '/images/elderly_care4.jpeg',
}

export function getServiceImage(
  service: Pick<Service, 'slug' | 'category' | 'image'>,
  allServices: Pick<Service, 'slug' | 'category'>[],
): string {
  if (service.image) return service.image
  if (serviceImageOverrides[service.slug]) return serviceImageOverrides[service.slug]

  const pool = categoryImages[service.category]
  const sameCategory = allServices.filter((s) => s.category === service.category)
  const index = Math.max(0, sameCategory.findIndex((s) => s.slug === service.slug))
  return pool[index % pool.length]
}