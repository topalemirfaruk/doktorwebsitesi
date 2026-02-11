import Link from 'next/link';
import { services } from '@/data/siteData';
import { ServiceIcon, CalendarIcon, ArrowRightIcon } from '@/components/Icons';

export const metadata = {
    title: 'Hizmetler',
    description: 'Dahiliye muayenesi, kardiyolojik değerlendirme, check-up, diyabet, hipertansiyon ve tiroid tedavisi hizmetlerimiz.',
};

export default function HizmetlerPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumb-list" style={{ justifyContent: 'center', marginBottom: 16 }}>
                        <Link href="/">Anasayfa</Link>
                        <span className="separator">/</span>
                        <span className="current">Hizmetler</span>
                    </div>
                    <h1>Hizmetlerimiz</h1>
                    <p>Kapsamlı sağlık hizmetlerimizle yanınızdayız.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="services-grid">
                        {services.map(service => (
                            <Link key={service.slug} href={`/hizmetler/${service.slug}`} className="service-card">
                                <div className="service-icon"><ServiceIcon iconKey={service.iconKey} size={30} /></div>
                                <h3>{service.title}</h3>
                                <p>{service.shortDesc}</p>
                                <span className="service-arrow">Detayları Gör <ArrowRightIcon size={12} /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--gray-50)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ marginBottom: 16 }}>Randevu Almak İster misiniz?</h2>
                    <p style={{ color: 'var(--gray-500)', maxWidth: 500, margin: '0 auto 32px' }}>
                        Size en uygun zamanda randevu oluşturmak için hemen iletişime geçin.
                    </p>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/randevu" className="btn btn-primary btn-lg"><CalendarIcon size={18} /> Randevu Al</Link>
                        <Link href="/iletisim" className="btn btn-secondary btn-lg">İletişime Geç</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
