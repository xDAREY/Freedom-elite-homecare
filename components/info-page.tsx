'use client'

import type React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'

 type InfoPageProps = { eyebrow: string; title: string; intro: string; sections: { title: string; body: string }[]; image?: string; imageAlt?: string; children?: React.ReactNode }

export function InfoPage({ eyebrow, title, intro, sections, image, imageAlt, children }: InfoPageProps) {
  return <div className="site-shell"><SiteHeader /><main>
    <section className="page-hero"><div className="section-pad"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{intro}</p><Link className="button primary" href="/contact">Let&apos;s talk about care</Link></div></section>
    {image && <section className="section-pad about-image-section"><div className="about-image-frame"><Image src={image} alt={imageAlt || ''} fill priority sizes="100vw" /></div></section>}
    <section className="section-pad info-sections">{sections.map((section, index) => <article key={section.title}><p className="eyebrow">{index === 0 && image ? 'MEET THE FOUNDER' : 'FREEDOM ELITE'}</p><h2>{section.title}</h2><p>{section.body}</p></article>)}</section>
    {children && <section className="section-pad info-form-section">{children}</section>}
  </main></div>
}
