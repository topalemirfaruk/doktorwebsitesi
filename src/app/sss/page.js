'use client';
import { useState } from 'react';
import Link from 'next/link';
import { faqItems, doctorInfo } from '@/data/siteData';
import { WhatsAppIcon } from '@/components/Icons';

export default function SSSPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
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
                        <span className="current">Sıkça Sorulan Sorular</span>
                    </div>
                    <h1>Sıkça Sorulan Sorular</h1>
                    <p>Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="faq-list">
                        {faqItems.map((item, i) => (
                            <div key={i} className={`faq-item ${openIndex === i ? 'active' : ''}`}>
                                <button className="faq-question" onClick={() => toggle(i)}>
                                    {item.q}
                                    <span className="faq-toggle">+</span>
                                </button>
                                <div className="faq-answer" style={{ maxHeight: openIndex === i ? '500px' : 0 }}>
                                    <div className="faq-answer-content">{item.a}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 60 }}>
                        <h3 style={{ marginBottom: 12 }}>Sorunuzun Cevabını Bulamadınız mı?</h3>
                        <p style={{ color: 'var(--gray-500)', marginBottom: 24 }}>Bizimle iletişime geçin, sorularınızı yanıtlayalım.</p>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/iletisim" className="btn btn-primary">İletişime Geç</Link>
                            <a href={`https://wa.me/${doctorInfo.whatsapp.replace(/\s/g, '')}`} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> WhatsApp ile Sor</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
