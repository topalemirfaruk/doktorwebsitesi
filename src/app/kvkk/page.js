import Link from 'next/link';
import { doctorInfo } from '@/data/siteData';

export const metadata = {
    title: 'KVKK Aydınlatma Metni',
    description: 'Kişisel verilerin korunması kanunu kapsamında aydınlatma metni.',
};

export default function KVKKPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumb-list" style={{ justifyContent: 'center', marginBottom: 16 }}>
                        <Link href="/">Anasayfa</Link>
                        <span className="separator">/</span>
                        <span className="current">KVKK Aydınlatma Metni</span>
                    </div>
                    <h1>KVKK Aydınlatma Metni</h1>
                    <p>Kişisel Verilerin Korunması Kanunu Kapsamında Aydınlatma Metni</p>
                </div>
            </section>

            <div className="legal-content">
                <p><strong>Son Güncelleme:</strong> 1 Ocak 2026</p>

                <h2>1. Veri Sorumlusu</h2>
                <p>{doctorInfo.fullTitle} olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar doğrultusunda hukuka uygun bir şekilde işlemekteyiz.</p>

                <h2>2. İşlenen Kişisel Veriler</h2>
                <p>Web sitemiz ve hizmetlerimiz kapsamında aşağıdaki kişisel verileriniz işlenebilmektedir:</p>
                <ul>
                    <li>Kimlik bilgileri (ad, soyad)</li>
                    <li>İletişim bilgileri (telefon numarası, e-posta adresi)</li>
                    <li>Sağlık verileri (muayene ve tedavi kapsamında)</li>
                    <li>Randevu bilgileri</li>
                    <li>Web sitesi kullanım verileri (çerezler)</li>
                </ul>

                <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
                <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                <ul>
                    <li>Sağlık hizmetlerinin sunulması ve takibi</li>
                    <li>Randevu oluşturma ve yönetimi</li>
                    <li>İletişim taleplerinin yanıtlanması</li>
                    <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                    <li>Hizmet kalitesinin artırılması</li>
                </ul>

                <h2>4. Kişisel Verilerin Aktarılması</h2>
                <p>Kişisel verileriniz, yasal zorunluluklar kapsamında yetkili kamu kurumlarına ve iş birliği yapılan laboratuvar/görüntüleme merkezlerine aktarılabilmektedir. Bunun dışında üçüncü kişilerle paylaşılmamaktadır.</p>

                <h2>5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
                <p>Kişisel verileriniz; web sitemizdeki formlar, telefon görüşmeleri ve yüz yüze muayene sırasında, açık rıza, sözleşmenin ifası ve yasal yükümlülük hukuki sebeplerine dayanılarak toplanmaktadır.</p>

                <h2>6. Haklarınız</h2>
                <p>KVKK&apos;nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
                <ul>
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                    <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                    <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                    <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                    <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                    <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                </ul>

                <h2>7. İletişim</h2>
                <p>KVKK kapsamındaki talepleriniz için:</p>
                <ul>
                    <li><strong>Adres:</strong> {doctorInfo.address}</li>
                    <li><strong>E-posta:</strong> {doctorInfo.email}</li>
                    <li><strong>Telefon:</strong> {doctorInfo.phone}</li>
                </ul>
            </div>
        </>
    );
}
