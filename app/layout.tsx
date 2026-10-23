import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Barlow_Semi_Condensed } from 'next/font/google'
import './globals.css'
import { SiteFooter } from '@/components/site-footer'
import { SITE_URL, SITE_NAME, localBusinessJsonLd } from '@/lib/seo'

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const body = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Home Care in Georgia | Pediatric, Senior & Veteran Care | Freedom Elite Home Care',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Freedom Elite Home Care provides compassionate in-home care in Stone Mountain and across Georgia: GAPP pediatric care, autism support, senior and dementia care, and veteran care. Call 470-736-9530.',
  applicationName: SITE_NAME,
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    title: 'Freedom Elite Home Care | Georgia Home Care Agency',
    description: 'Thoughtful in-home support for children, older adults, veterans, and families across Georgia.',
    images: [{ url: '/images/family-care-hero.png', alt: 'A caregiver spending time with an older adult at home' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freedom Elite Home Care | Georgia Home Care Agency',
    description: 'Thoughtful in-home support for children, older adults, veterans, and families across Georgia.',
    images: ['/images/family-care-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // After adding the site in Google Search Console (HTML tag method), paste the code here:
  // verification: { google: 'YOUR-CODE' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1F4D3A',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <div className="site-shell">
          {children}
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}