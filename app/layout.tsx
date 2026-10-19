import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Barlow_Semi_Condensed } from 'next/font/google'
import './globals.css'
import { SiteFooter } from '@/components/site-footer'

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
  title: 'Freedom Elite Home Care | Georgia Home Care Agency',
  description: 'Warm, personalized home care for children, older adults, veterans, and families across Georgia.',
  icons: {
    // icon: [
    //   { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
    //   { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    //   { url: '/icon.svg', type: 'image/svg+xml' },
    // ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <div className="site-shell">
          {children}
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}