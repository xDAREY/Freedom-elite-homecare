// import type { MetadataRoute } from 'next'
// import { services } from '@/data/services'
// import { SITE_URL } from '@/lib/seo'

// export default function sitemap(): MetadataRoute.Sitemap {
//   const pages = ['', '/services', '/gapp', '/how-it-works', '/about', '/careers', '/contact', '/privacy']
//   const now = new Date()

//   return [
//     ...pages.map((path) => ({
//       url: `${SITE_URL}${path}`,
//       lastModified: now,
//       changeFrequency: 'monthly' as const,
//       priority: path === '' ? 1 : 0.8,
//     })),
//     ...services.map((s) => ({
//       url: `${SITE_URL}/services/${s.slug}`,
//       lastModified: now,
//       changeFrequency: 'monthly' as const,
//       priority: 0.7,
//     })),
//   ]
// }