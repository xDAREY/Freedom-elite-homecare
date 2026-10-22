'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { services, serviceCategories } from '@/data/services'
import { getServiceImage } from '@/data/service-images'

export default function ServicesPage() {
  const [category, setCategory] = useState<(typeof serviceCategories)[number]>('All')
  const filtered = category === 'All' ? services : services.filter((s) => s.category === category)

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="section-pad">
            <p className="eyebrow">OUR SERVICES</p>
            <h1>Care designed around <em>your life.</em></h1>
            <p className="lead">Thoughtful in-home support for children, older adults, veterans, and the families who love them.</p>
          </div>
        </section>

        <section className="section-pad services-overview">
          <div className="category-filter" role="group" aria-label="Filter services">
            {serviceCategories.map((item) => (
              <button key={item} type="button" className={category === item ? 'filter active' : 'filter'} onClick={() => setCategory(item)}>{item}</button>
            ))}
          </div>
          <div className="service-grid compact-grid">
            {filtered.map((service) => (
              <Link href={`/services/${service.slug}`} className="service-card compact" key={service.slug}>
                <div className="service-card-image">
                  <Image
                    src={getServiceImage(service, services)}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                </div>
                <div className="service-card-copy">
                  <span className="service-category">{service.category}</span>
                  <h2>{service.title}</h2>
                  <p>{service.shortDescription}</p>
                  <span className="learn">Learn more <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mint-band">
          <div>
            <h2>Not sure what your family needs?</h2>
            <p>Tell us what is going on and we will listen first. Together, we can talk through the support that may be a good fit.</p>
            <Link className="button primary" href="/contact">Talk to Asia&apos;s team</Link>
          </div>
        </section>
      </main>
    </div>
  )
}