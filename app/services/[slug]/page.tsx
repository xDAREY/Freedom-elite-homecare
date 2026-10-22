import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { getService, services } from '@/data/services'
import { getServiceImage } from '@/data/service-images'
import { serviceDetails } from '@/data/service-details'

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  return { title: service ? `${service.title} | Freedom Elite Home Care` : 'Service | Freedom Elite Home Care', description: service?.shortDescription }
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  const detail = serviceDetails[slug]
  const related = service.relatedSlugs.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="section-pad">
            <p className="breadcrumb"><Link href="/">Home</Link> <span>›</span> <Link href="/services">Services</Link> <span>›</span> {service.title}</p>
            <p className="eyebrow">{service.category.toUpperCase()} CARE</p>
            <h1>{service.title}</h1>
            <p className="lead">{service.shortDescription}</p>
            <div className="button-row">
              <Link className="button primary" href="/contact">Request this service</Link>
              <a className="button secondary" href="tel:4707369530">Call 470-736-9530</a>
            </div>
          </div>
        </section>

        <section className="detail-content section-pad">
          <div>
            <div className="detail-image">
              <Image
                src={getServiceImage(service, services)}
                alt={`${service.title} in the home`}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 700px"
              />
            </div>

            <h2>Support that starts with <em>listening</em></h2>
            <p>{service.overview}</p>

            {detail && (
              <>
                <h2>How we help</h2>
                <div className="detail-cards">
                  {detail.approach.map(([title, text]) => (
                    <div className="detail-card" key={title}><h3>{title}</h3><p>{text}</p></div>
                  ))}
                </div>
              </>
            )}

            <h2>Who this is for</h2>
            <div className="plain-list">{service.whoItsFor.map((item) => <div key={item}>{item}</div>)}</div>

            <h2>What&apos;s included</h2>
            <div className="plain-list checklist">{service.whatsIncluded.map((item) => <div key={item}><span aria-hidden="true">✓</span>{item}</div>)}</div>

            {detail && (
              <>
                <h2>What a visit looks like</h2>
                <ol className="visit-steps">{detail.visit.map((step) => <li key={step}>{step}</li>)}</ol>
              </>
            )}

            <h2>Our caregivers</h2>
            <div className="plain-list checklist">
              {['Background and reference checks', 'Training in respectful, person-centered care', 'Matched to your family by skills and personality', 'Supervised, with regular check-ins'].map((item) => <div key={item}><span aria-hidden="true">✓</span>{item}</div>)}
            </div>
            {/* <p className="note-line">[Confirm exact screening and training steps with owner]</p> */}

            <h2>How to get started</h2>
            <ol className="visit-steps">
              <li>Call, text, or send a request. We will reach out.</li>
              <li>We talk through your needs in a free consultation.</li>
              <li>We build your care plan and introduce your caregiver.</li>
            </ol>

            {detail && (
              <>
                <h2>Common questions</h2>
                <div className="faq-list">
                  {detail.faqs.map(([q, a]) => (
                    <details key={q}><summary>{q}</summary><p>{a}</p></details>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="request-card">
            <p className="eyebrow">LET&apos;S TALK</p>
            <h2>Ready to explore support?</h2>
            <p>We&apos;ll listen to your family&apos;s needs and help you understand the next step.</p>
            <Link className="button primary" href="/contact">Start a conversation</Link>
            <a className="text-link" href="tel:4707369530">Call 470-736-9530</a>
          </aside>
        </section>

        <section className="section-pad related-section">
          <h2>You may also like</h2>
          <div className="service-grid compact-grid">
            {related.map((item) => (
              <Link href={`/services/${item.slug}`} className="service-card compact" key={item.slug}>
                <div className="service-card-image">
                  <Image
                    src={getServiceImage(item, services)}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                </div>
                <div className="service-card-copy">
                  <span className="service-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.shortDescription}</p>
                  <span className="learn">Learn more <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}