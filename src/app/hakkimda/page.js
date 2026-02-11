import Image from 'next/image';
import Link from 'next/link';
import { doctorInfo } from '@/data/siteData';
import { CalendarIcon, ShieldIcon } from '@/components/Icons';

export const metadata = {
    title: 'Hakkımda',
    description: `${doctorInfo.fullTitle} - ${doctorInfo.branch}. Eğitim, deneyim ve sertifikalar hakkında detaylı bilgi.`,
};

export default function HakkimdaPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumb-list" style={{ justifyContent: 'center', marginBottom: 16 }}>
                        <Link href="/">Anasayfa</Link>
                        <span className="separator">/</span>
                        <span className="current">Hakkımda</span>
                    </div>
                    <h1>{doctorInfo.fullTitle}</h1>
                    <p>{doctorInfo.branch}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="about-main">
                        <div className="about-image-wrapper">
                            <Image src="/images/doctor-hero.png" alt={doctorInfo.fullTitle} width={500} height={600} style={{ objectFit: 'cover' }} />
                            <div className="about-image-badge">
                                <div className="badge-number">15+</div>
                                <div className="badge-text">Yıl Tecrübe</div>
                            </div>
                        </div>
                        <div className="about-text">
                            <span className="section-badge" style={{ display: 'inline-block', marginBottom: 16 }}>Hakkımda</span>
                            <h2>Mesleki Deneyim ve Yaklaşımım</h2>
                            {doctorInfo.longBio.split('\n\n').map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}

                            <h3 style={{ marginTop: 40, marginBottom: 16 }}>Eğitim ve Kariyer</h3>
                            <div className="timeline">
                                {doctorInfo.education.map((edu, i) => (
                                    <div key={i} className="timeline-item">
                                        <div className="timeline-year">{edu.year}</div>
                                        <div className="timeline-content">
                                            <h4>{edu.title}</h4>
                                            <p>{edu.institution}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h3 style={{ marginTop: 40 }}>Sertifikalar ve Üyelikler</h3>
                            <div className="certificates-grid">
                                {doctorInfo.certificates.map((cert, i) => (
                                    <div key={i} className="certificate-item">
                                        <span style={{ color: 'var(--primary)', display: 'flex' }}><ShieldIcon size={18} /></span>
                                        <span>{cert}</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: 40 }}>
                                <Link href="/randevu" className="btn btn-primary btn-lg"><CalendarIcon size={18} /> Randevu Al</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinic Gallery */}
            <section className="section" style={{ background: 'var(--gray-50)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Kliniğimiz</span>
                        <h2>Modern Klinik Ortamımız</h2>
                        <p>Konforlu ve modern kliniğimizde en iyi sağlık hizmetini sunuyoruz.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 900, margin: '0 auto' }}>
                        <Image src="/images/clinic-interior.png" alt="Klinik İç Mekan" width={450} height={300} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover' }} />
                        <Image src="/images/clinic-examination.png" alt="Muayene Odası" width={450} height={300} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover' }} />
                    </div>
                </div>
            </section>
        </>
    );
}
