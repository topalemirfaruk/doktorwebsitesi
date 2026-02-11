import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';
import { CalendarIcon, PhoneIcon } from '@/components/Icons';
import { doctorInfo } from '@/data/siteData';

export const metadata = {
    title: 'Sayfa Bulunamadı - 404',
};

export default function NotFound() {
    return (
        <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: 600 }}>
                <div style={{ marginBottom: 32 }}>
                    <span style={{
                        fontSize: 'clamp(5rem, 15vw, 8rem)',
                        fontWeight: 800,
                        fontFamily: 'var(--font-heading)',
                        background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1,
                        display: 'block',
                    }}>404</span>
                </div>

                <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: 16 }}>
                    Aradığınız Sayfa Bulunamadı
                </h1>
                <p style={{ color: 'var(--gray-500)', fontSize: '1.1rem', marginBottom: 40, lineHeight: 1.7 }}>
                    Bu sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. Aşağıdaki bağlantıları kullanarak devam edebilirsiniz.
                </p>

                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
                    <Link href="/" className="btn btn-primary btn-lg">
                        <FaHome size={16} /> Anasayfaya Dön
                    </Link>
                    <Link href="/randevu" className="btn btn-secondary btn-lg">
                        <CalendarIcon size={16} /> Randevu Al
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
                    <Link href="/hizmetler" style={{ padding: 20, background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease' }}>
                        <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark)' }}>Hizmetler</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>Tedavi seçeneklerimiz</span>
                    </Link>
                    <Link href="/blog" style={{ padding: 20, background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease' }}>
                        <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark)' }}>Blog</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>Sağlık rehberi</span>
                    </Link>
                    <Link href="/iletisim" style={{ padding: 20, background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease' }}>
                        <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark)' }}>İletişim</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>Bize ulaşın</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
