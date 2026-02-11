import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/siteData';
import { notFound } from 'next/navigation';
import { CalendarIcon, WhatsAppIcon, ClockIcon } from '@/components/Icons';

export function generateStaticParams() {
    return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = services.find(s => s.slug === slug);
    if (!service) return {};
    return {
        title: service.title,
        description: service.shortDesc,
    };
}

export default async function ServiceDetailPage({ params }) {
    const { slug } = await params;
    const service = services.find(s => s.slug === slug);
    if (!service) notFound();

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.content.faq.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a,
            },
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumb-list" style={{ justifyContent: 'center', marginBottom: 16 }}>
                        <Link href="/">Anasayfa</Link>
                        <span className="separator">/</span>
                        <Link href="/hizmetler">Hizmetler</Link>
                        <span className="separator">/</span>
                        <span className="current">{service.title}</span>
                    </div>
                    <h1>{service.title}</h1>
                    <p>{service.shortDesc}</p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: 40 }}>
                        <Image src={service.image} alt={service.title} width={900} height={400} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover' }} />
                    </div>

                    <div style={{ marginBottom: 40 }}>
                        <h2 style={{ marginBottom: 16 }}>Hizmet Hakkında</h2>
                        <p style={{ lineHeight: 1.8, color: 'var(--gray-600)' }}>{service.content.description}</p>
                    </div>

                    <div style={{ marginBottom: 40 }}>
                        <h2 style={{ marginBottom: 16 }}>Kimler İçin?</h2>
                        <ul style={{ paddingLeft: 24 }}>
                            {service.content.forWhom.map((item, i) => (
                                <li key={i} style={{ marginBottom: 10, lineHeight: 1.6, listStyle: 'disc', color: 'var(--gray-600)' }}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ marginBottom: 40 }}>
                        <h2 style={{ marginBottom: 16 }}>Tedavi Süreci</h2>
                        <p style={{ lineHeight: 1.8, color: 'var(--gray-600)' }}>{service.content.process}</p>
                    </div>

                    <div style={{ marginBottom: 40, background: 'var(--primary-50)', padding: 24, borderRadius: 12, borderLeft: '4px solid var(--primary)', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                        <ClockIcon size={20} style={{ color: 'var(--primary)', marginTop: 2, flexShrink: 0 }} />
                        <div>
                            <h4 style={{ fontFamily: 'var(--font-body)', marginBottom: 8 }}>Süre</h4>
                            <p style={{ margin: 0, color: 'var(--gray-600)' }}>{service.content.duration}</p>
                        </div>
                    </div>

                    <div style={{ marginBottom: 40 }}>
                        <h2 style={{ marginBottom: 24 }}>Sıkça Sorulan Sorular</h2>
                        <ServiceFAQ faq={service.content.faq} />
                    </div>

                    <div style={{ background: 'var(--gray-50)', padding: 40, borderRadius: 16, textAlign: 'center' }}>
                        <h3 style={{ marginBottom: 12 }}>Bu Hizmet Hakkında Bilgi Almak İster misiniz?</h3>
                        <p style={{ color: 'var(--gray-500)', marginBottom: 24 }}>Size en uygun tedavi planını oluşturmak için randevu alın.</p>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/randevu" className="btn btn-primary"><CalendarIcon size={16} /> Randevu Al</Link>
                            <a href="https://wa.me/+905325550123" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> WhatsApp</a>
                        </div>
                    </div>

                    <div style={{ marginTop: 40, padding: 16, background: '#FFF8E1', borderRadius: 8, fontSize: '0.85rem', color: '#795548' }}>
                        <strong>Uyarı:</strong> Bu sayfadaki bilgiler genel sağlık bilgilendirmesi amaçlıdır ve tıbbi tanı/tedavi yerine geçmez. Kesin sonuç vaadi içermez. Detaylı bilgi için mutlaka bir sağlık kuruluşuna başvurunuz.
                    </div>
                </div>
            </section>
        </>
    );
}

function ServiceFAQ({ faq }) {
    return (
        <div className="faq-list">
            {faq.map((item, i) => (
                <details key={i} className="faq-item">
                    <summary className="faq-question" style={{ cursor: 'pointer' }}>
                        {item.q}
                        <span className="faq-toggle">+</span>
                    </summary>
                    <div className="faq-answer" style={{ maxHeight: 'none' }}>
                        <div className="faq-answer-content">{item.a}</div>
                    </div>
                </details>
            ))}
        </div>
    );
}
