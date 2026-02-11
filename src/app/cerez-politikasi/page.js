import Link from 'next/link';
import { doctorInfo } from '@/data/siteData';

export const metadata = {
    title: 'Çerez Politikası',
    description: 'Web sitemizde kullanılan çerezler hakkında bilgilendirme.',
};

export default function CerezPolitikasiPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumb-list" style={{ justifyContent: 'center', marginBottom: 16 }}>
                        <Link href="/">Anasayfa</Link>
                        <span className="separator">/</span>
                        <span className="current">Çerez Politikası</span>
                    </div>
                    <h1>Çerez Politikası</h1>
                    <p>Web sitemizde kullanılan çerezler hakkında bilgilendirme.</p>
                </div>
            </section>

            <div className="legal-content">
                <p><strong>Son Güncelleme:</strong> 1 Ocak 2026</p>

                <h2>1. Çerez Nedir?</h2>
                <p>Çerezler, web sitelerinin bilgisayarınıza veya mobil cihazınıza yerleştirdiği küçük metin dosyalarıdır. Bu dosyalar, web sitesi deneyiminizi kişiselleştirmek ve iyileştirmek için kullanılır.</p>

                <h2>2. Kullanılan Çerez Türleri</h2>

                <h3 style={{ fontSize: '1.1rem', marginTop: 16 }}>Zorunlu Çerezler</h3>
                <p>Web sitesinin temel işlevlerinin çalışması için gereklidir. Bu çerezler olmadan site düzgün çalışmaz.</p>

                <h3 style={{ fontSize: '1.1rem', marginTop: 16 }}>Analitik Çerezler</h3>
                <p>Ziyaretçilerin web sitesini nasıl kullandığını anlamamıza yardımcı olur. Google Analytics gibi araçlar aracılığıyla anonim veriler toplanır.</p>

                <h3 style={{ fontSize: '1.1rem', marginTop: 16 }}>İşlevsellik Çerezleri</h3>
                <p>Dil tercihi, çerez onayı durumu gibi tercihlerinizi hatırlamak için kullanılır.</p>

                <h2>3. Çerezleri Yönetme</h2>
                <p>Tarayıcı ayarlarınızdan çerezleri yönetebilir veya silebilirsiniz. Ancak, bazı çerezlerin devre dışı bırakılması web sitesinin düzgün çalışmamasına neden olabilir.</p>
                <ul>
                    <li><strong>Chrome:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler</li>
                    <li><strong>Firefox:</strong> Tercihler → Gizlilik ve Güvenlik → Çerezler</li>
                    <li><strong>Safari:</strong> Tercihler → Gizlilik → Çerezler</li>
                    <li><strong>Edge:</strong> Ayarlar → Gizlilik → Çerezler</li>
                </ul>

                <h2>4. İletişim</h2>
                <p>Çerez politikamız hakkında sorularınız için:</p>
                <ul>
                    <li><strong>E-posta:</strong> {doctorInfo.email}</li>
                    <li><strong>Telefon:</strong> {doctorInfo.phone}</li>
                </ul>
            </div>
        </>
    );
}
