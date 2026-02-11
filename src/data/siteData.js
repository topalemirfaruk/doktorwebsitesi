export const doctorInfo = {
    name: "Dr. Ahmet Yılmaz",
    title: "Uzm. Dr.",
    fullTitle: "Uzm. Dr. Ahmet Yılmaz",
    branch: "İç Hastalıkları (Dahiliye) Uzmanı",
    shortBio: "Kişiye özel yaklaşım ve güncel tedavi yöntemleriyle sağlığınız için yanınızdayım.",
    longBio: `Uzm. Dr. Ahmet Yılmaz, İstanbul Üniversitesi Tıp Fakültesi'nden mezun olduktan sonra İç Hastalıkları alanında uzmanlık eğitimini tamamlamıştır. 15 yılı aşkın mesleki deneyimiyle, hastalarına kanıta dayalı ve kişiye özel tedavi yaklaşımı sunmaktadır.

Ulusal ve uluslararası birçok bilimsel toplantıya katılan Dr. Yılmaz, alanındaki güncel gelişmeleri yakından takip etmekte ve tedavi protokollerini sürekli güncellemektedir. Hasta memnuniyetini ön planda tutan yaklaşımıyla, her hastasına ayrıntılı muayene ve kapsamlı değerlendirme sunmaktadır.`,
    phone: "+90 212 555 0123",
    whatsapp: "+90532555 0123",
    email: "info@drahmetyilmaz.com",
    address: "Levent Mah. Sağlık Cad. No:42 Kat:3, Beşiktaş/İstanbul",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.2!2d29.01!3d41.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzQ4LjAiTiAyOcKwMDAnMzYuMCJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str",
    workingHours: [
        { day: "Pazartesi - Cuma", hours: "09:00 - 18:00" },
        { day: "Cumartesi", hours: "09:00 - 14:00" },
        { day: "Pazar", hours: "Kapalı" }
    ],
    social: {
        instagram: "https://instagram.com/drahmetyilmaz",
        facebook: "https://facebook.com/drahmetyilmaz",
        youtube: "https://youtube.com/@drahmetyilmaz",
        linkedin: "https://linkedin.com/in/drahmetyilmaz"
    },
    education: [
        { year: "2004-2010", title: "Tıp Fakültesi", institution: "İstanbul Üniversitesi" },
        { year: "2010-2014", title: "İç Hastalıkları Uzmanlığı", institution: "İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi" },
        { year: "2015", title: "Endokrinoloji Sertifikası", institution: "Türk Endokrinoloji Derneği" }
    ],
    certificates: [
        "Türk İç Hastalıkları Derneği Üyeliği",
        "Avrupa İç Hastalıkları Derneği (EFIM) Üyeliği",
        "Diyabet Eğitimcisi Sertifikası",
        "İleri Kardiyovasküler Yaşam Desteği (ACLS)"
    ]
};

export const stats = [
    { number: "15+", label: "Yıl Tecrübe" },
    { number: "10000+", label: "Mutlu Hasta" },
    { number: "50+", label: "Bilimsel Yayın" },
    { number: "6", label: "Uzmanlık Alanı" }
];

export const services = [
    {
        slug: "dahiliye-muayenesi",
        title: "Dahiliye Muayenesi",
        shortDesc: "Kapsamlı iç hastalıkları değerlendirmesi ile sağlığınızın genel durumunu analiz ediyoruz.",
        iconKey: "stethoscope",
        image: "/images/clinic-interior.png",
        content: {
            description: "Dahiliye muayenesi, iç organlarınızın ve genel sağlık durumunuzun kapsamlı bir şekilde değerlendirilmesidir. Detaylı fizik muayene, laboratuvar tetkikleri ve gerekli görüntüleme yöntemleriyle sağlığınızın tam bir resmini çıkarıyoruz.",
            forWhom: ["Genel sağlık kontrolü yaptırmak isteyenler", "Yorgunluk, halsizlik gibi şikâyetleri olanlar", "Kronik hastalık takibi gerekenler", "Herhangi bir belirti veya şikâyeti araştırmak isteyenler"],
            process: "İlk muayenede detaylı bir anamnez (hastalık öyküsü) alınır, ardından kapsamlı fizik muayene yapılır. Gerekli görülen kan tahlilleri ve tetkikler istenir. Sonuçlar değerlendirildikten sonra kişiye özel tedavi planı oluşturulur.",
            duration: "İlk muayene yaklaşık 30-45 dakika sürmektedir.",
            faq: [
                { q: "Dahiliye muayenesine gelirken aç mı olmalıyım?", a: "Kan tahlili yapılacaksa en az 8 saat aç olmanız önerilir. Muayene için aç olmanız gerekmez." },
                { q: "Hangi şikâyetlerle dahiliye uzmanına başvurmalıyım?", a: "Yorgunluk, kilo değişimi, ateş, karın ağrısı, nefes darlığı gibi birçok şikâyette dahiliye uzmanına başvurabilirsiniz." },
                { q: "Muayene ne sıklıkla yapılmalıdır?", a: "Sağlıklı bireylerin yılda en az bir kez genel sağlık kontrolü yaptırması önerilir." }
            ]
        }
    },
    {
        slug: "kardiyolojik-degerlendirme",
        title: "Kardiyolojik Değerlendirme",
        shortDesc: "Kalp sağlığınızı kapsamlı testler ve modern cihazlarla değerlendiriyoruz.",
        iconKey: "heart",
        image: "/images/clinic-examination.png",
        content: {
            description: "Kardiyolojik değerlendirme kapsamında kalp sağlığınız detaylı bir şekilde incelenir. EKG, ekokardiyografi ve gerekli kan tetkikleriyle kalp hastalıklarının erken teşhisi ve tedavisi planlanır.",
            forWhom: ["Göğüs ağrısı, çarpıntı şikâyeti olanlar", "Ailede kalp hastalığı öyküsü bulunanlar", "Yüksek tansiyon hastaları", "Düzenli kalp kontrolü yaptırmak isteyenler"],
            process: "Detaylı anamnez ve fizik muayene sonrası EKG çekimi yapılır. Gerekli görülürse ekokardiyografi, efor testi ve holter monitörizasyonu uygulanır.",
            duration: "Değerlendirme süreci yaklaşık 45-60 dakika sürmektedir.",
            faq: [
                { q: "EKG çekimi ağrılı mıdır?", a: "Hayır, EKG tamamen ağrısız bir işlemdir. Göğsünüze yapıştırılan elektrotlarla kalbin elektriksel aktivitesi kaydedilir." },
                { q: "Ne sıklıkla kalp kontrolü yaptırmalıyım?", a: "40 yaş üstü bireylerin yılda bir, risk faktörü bulunanların ise daha sık kontrole gelmesi önerilir." }
            ]
        }
    },
    {
        slug: "check-up",
        title: "Check-up Programları",
        shortDesc: "Kişiye özel check-up paketleriyle hastalıkları erken dönemde tespit ediyoruz.",
        iconKey: "microscope",
        image: "/images/clinic-interior.png",
        content: {
            description: "Check-up programlarımız, yaş, cinsiyet ve risk faktörlerinize göre kişiselleştirilmiş kapsamlı sağlık taramalarını içerir. Erken teşhis hayat kurtarır ilkesiyle hareket ediyoruz.",
            forWhom: ["40 yaş üstü herkes", "Ailede kronik hastalık öyküsü bulunanlar", "Düzenli sağlık taraması yaptırmak isteyenler", "Stresli yaşam süren profesyoneller"],
            process: "Kan ve idrar tahlilleri, ultrasonografi, EKG, akciğer grafisi ve yaşa uygun tarama testleri uygulanır. Tüm sonuçlar değerlendirilerek size özel sağlık raporu hazırlanır.",
            duration: "Check-up programı yaklaşık 2-3 saat sürmektedir.",
            faq: [
                { q: "Check-up için randevu almam gerekiyor mu?", a: "Evet, check-up programlarımız randevuyla yapılmaktadır. En az 8 saat aç gelmeniz gerekmektedir." },
                { q: "Check-up sonuçları ne zaman çıkar?", a: "Kan tahlili sonuçları genellikle 1-2 iş günü içinde çıkar. Detaylı rapor 3-5 iş günü içinde hazırlanır." }
            ]
        }
    },
    {
        slug: "diyabet-tedavisi",
        title: "Diyabet Tedavisi",
        shortDesc: "Tip 1 ve Tip 2 diyabet yönetiminde güncel tedavi protokolleri uyguluyoruz.",
        iconKey: "syringe",
        image: "/images/clinic-examination.png",
        content: {
            description: "Diyabet (şeker hastalığı) tedavisinde kişiye özel beslenme planı, egzersiz programı ve ilaç tedavisi ile kan şekeri kontrolünü sağlıyoruz. Düzenli takip ve eğitimle komplikasyonların önlenmesini hedefliyoruz.",
            forWhom: ["Tip 1 ve Tip 2 diyabet tanısı alanlar", "Prediyabet (şeker hastalığı riski) tespit edilenler", "Gebelik diyabeti yaşayanlar", "Diyabet komplikasyonları gelişenler"],
            process: "İlk değerlendirmede HbA1c, açlık kan şekeri ve diğer metabolik parametreler kontrol edilir. Beslenme uzmanıyla birlikte kişiye özel diyet planı oluşturulur. İlaç tedavisi düzenlenir ve düzenli kontrol takvimi belirlenir.",
            duration: "İlk değerlendirme yaklaşık 45 dakika, kontrol muayeneleri 20-30 dakika sürmektedir.",
            faq: [
                { q: "Diyabet tedavisi ömür boyu mu sürer?", a: "Tip 2 diyabette yaşam tarzı değişiklikleriyle hastalık kontrol altına alınabilir. Ancak düzenli takip her durumda gereklidir." },
                { q: "İnsülin kullanmak zorunda mıyım?", a: "Her diyabet hastası insülin kullanmak zorunda değildir. Tedavi planı kişiye özel belirlenir." }
            ]
        }
    },
    {
        slug: "hipertansiyon-tedavisi",
        title: "Hipertansiyon Tedavisi",
        shortDesc: "Yüksek tansiyon yönetiminde kapsamlı değerlendirme ve tedavi sunuyoruz.",
        iconKey: "heartPulse",
        image: "/images/clinic-interior.png",
        content: {
            description: "Hipertansiyon (yüksek tansiyon), kalp krizi ve inme riskini artıran sessiz bir hastalıktır. Kapsamlı değerlendirme ile tansiyon kontrolünü sağlıyor, hedef organ hasarını önlemeyi amaçlıyoruz.",
            forWhom: ["Tansiyon yüksekliği tespit edilenler", "Ailede hipertansiyon öyküsü bulunanlar", "Baş ağrısı, baş dönmesi şikâyeti olanlar", "Düzenli tansiyon takibi gerekenler"],
            process: "24 saatlik tansiyon holter takibi, kan tetkikleri ve hedef organ değerlendirmesi yapılır. Yaşam tarzı modifikasyonları ve gerektiğinde ilaç tedavisi planlanır.",
            duration: "İlk değerlendirme yaklaşık 30-40 dakika sürmektedir.",
            faq: [
                { q: "Tansiyon ilacını ömür boyu kullanmak zorunda mıyım?", a: "Yaşam tarzı değişiklikleriyle tansiyon kontrol altına alınabilirse ilaç dozu azaltılabilir. Ancak bu karar doktor kontrolünde verilmelidir." },
                { q: "Evde tansiyon ölçümü nasıl yapılmalı?", a: "Sabah ve akşam, aynı koldan, 5 dakika dinlendikten sonra ölçüm yapılmalıdır." }
            ]
        }
    },
    {
        slug: "tiroid-hastaliklari",
        title: "Tiroid Hastalıkları",
        shortDesc: "Tiroid bezi hastalıklarının tanı, tedavi ve takibini gerçekleştiriyoruz.",
        iconKey: "thyroid",
        image: "/images/clinic-examination.png",
        content: {
            description: "Tiroid bezi vücudun metabolizmasını düzenleyen önemli bir organdır. Hipotiroidi (az çalışma), hipertiroidi (fazla çalışma), tiroid nodülleri ve otoimmün tiroid hastalıklarının tanı ve tedavisini yapıyoruz.",
            forWhom: ["Kilo alımı veya kaybı yaşayanlar", "Yorgunluk, halsizlik, sinirlilik hissedenler", "Boyunda şişlik veya nodül fark edenler", "Tiroid hastalığı tanısı olan ve takip gerekenler"],
            process: "Tiroid fonksiyon testleri (TSH, T3, T4), tiroid ultrasonu ve gerekli görülürse ince iğne aspirasyon biyopsisi uygulanır. Sonuçlara göre ilaç tedavisi veya takip planı oluşturulur.",
            duration: "İlk değerlendirme yaklaşık 30-40 dakika sürmektedir.",
            faq: [
                { q: "Tiroid ilacı ne zaman içilmeli?", a: "Tiroid ilacı genellikle sabah aç karnına, kahvaltıdan en az 30 dakika önce alınmalıdır." },
                { q: "Tiroid hastalığı tedavi edilebilir mi?", a: "Çoğu tiroid hastalığı ilaç tedavisiyle kontrol altına alınabilir. Tedavi süreci hastalığın türüne göre değişir." }
            ]
        }
    }
];

export const testimonials = [
    {
        name: "A.K.",
        text: "Dr. Ahmet Bey'e check-up için gittim. Çok detaylı bir muayene yaptı, tüm tetkiklerimi tek tek açıkladı. Kendimi çok güvende hissettim. Kesinlikle tavsiye ederim.",
        rating: 5,
        date: "Ocak 2026"
    },
    {
        name: "M.S.",
        text: "Yıllardır diyabet tedavisi görüyorum. Dr. Yılmaz sayesinde şeker değerlerim çok daha iyi bir seviyeye geldi. Sabırlı ve anlayışlı yaklaşımı için çok teşekkür ederim.",
        rating: 5,
        date: "Aralık 2025"
    },
    {
        name: "F.D.",
        text: "Tansiyon problemim için birçok doktora gittim ama Dr. Ahmet Bey kadar detaylı değerlendirme yapan olmadı. İlaç tedavimi düzenledikten sonra tansiyonum çok daha iyi kontrol altında.",
        rating: 5,
        date: "Kasım 2025"
    },
    {
        name: "E.Y.",
        text: "Tiroid nodülüm için endişeleniyordum. Dr. Yılmaz çok sakin ve açıklayıcı bir şekilde durumu anlattı, gereksiz endişemi giderdi. Modern kliniği de çok güzeldi.",
        rating: 5,
        date: "Ekim 2025"
    },
    {
        name: "S.T.",
        text: "Halsizlik şikâyetiyle gittiğimde hiç beklemediğim bir vitamin eksikliği tespit etti. Tedavi sonrası kendimi çok daha iyi hissediyorum. Çok ilgili ve bilgili bir doktor.",
        rating: 4,
        date: "Eylül 2025"
    },
    {
        name: "H.B.",
        text: "Check-up paketini tercih ettim. Tüm tetkikler tek günde yapıldı ve sonuçlar çok hızlı çıktı. Raporu çok detaylı hazırlamışlar. Her şey çok profesyonel.",
        rating: 5,
        date: "Ağustos 2025"
    }
];

export const blogPosts = [
    {
        slug: "yuksek-tansiyon-belirtileri",
        title: "Yüksek Tansiyon Belirtileri Nelerdir? Ne Zaman Doktora Gitmelisiniz?",
        excerpt: "Yüksek tansiyon çoğu zaman belirtisiz seyreder. Ancak bazı uyarı işaretlerini bilmek hayat kurtarabilir...",
        category: "Belirti & Şikayetler",
        date: "5 Şubat 2026",
        readTime: "6 dk",
        image: "/images/clinic-interior.png",
        content: `Yüksek tansiyon (hipertansiyon), dünya genelinde en yaygın kronik hastalıklardan biridir. "Sessiz katil" olarak da bilinen bu hastalık, genellikle belirgin bir semptom vermeden ilerler. Ancak bazı durumlarda vücut uyarı sinyalleri gönderebilir.

## Yüksek Tansiyonun Belirtileri

Çoğu hipertansiyon hastası herhangi bir belirti hissetmez. Ancak tansiyon çok yükseldiğinde şu belirtiler görülebilir:

- **Baş ağrısı:** Özellikle sabah saatlerinde ensede hissedilen zonklayıcı ağrı
- **Baş dönmesi:** Ani pozisyon değişikliklerinde artan dengesizlik hissi
- **Bulanık görme:** Göz damarlarının etkilenmesine bağlı görme bozuklukları
- **Nefes darlığı:** Özellikle efor sırasında artan nefes darlığı
- **Çarpıntı:** Kalp atışlarının hızlanması veya düzensizleşmesi
- **Burun kanaması:** Tekrarlayan burun kanamaları

## Ne Zaman Doktora Gitmelisiniz?

Aşağıdaki durumlarda mutlaka bir sağlık kuruluşuna başvurmalısınız:

1. Evde ölçtüğünüz tansiyon değerleri sürekli 140/90 mmHg üzerinde ise
2. Şiddetli baş ağrısı ve bulanık görme bir arada ise
3. Göğüs ağrısı veya nefes darlığı yaşıyorsanız
4. 40 yaş üstündeyseniz ve hiç tansiyon kontrolü yaptırmadıysanız

## Yüksek Tansiyonu Önlemek İçin

- Tuzsuz veya az tuzlu beslenin
- Düzenli egzersiz yapın (haftada en az 150 dakika)
- Ideal kilonuzu koruyun
- Stresi yönetmeyi öğrenin
- Alkol ve sigaradan kaçının

> **Önemli:** Bu bilgiler genel sağlık bilgilendirmesi amaçlıdır. Tanı ve tedavi için mutlaka bir sağlık kuruluşuna başvurunuz.`
    },
    {
        slug: "diyabet-beslenme-rehberi",
        title: "Diyabet Hastalarının Beslenme Rehberi: Neler Yenmeli, Nelerden Kaçınılmalı?",
        excerpt: "Diyabet yönetiminde beslenme en kritik faktörlerden biridir. Doğru gıda tercihleri kan şekerini dengede tutar...",
        category: "Tedavi Rehberi",
        date: "28 Ocak 2026",
        readTime: "8 dk",
        image: "/images/clinic-examination.png",
        content: `Diyabet (şeker hastalığı) yönetiminde doğru beslenme, ilaç tedavisi kadar önemlidir. Kan şekerini dengede tutacak beslenme alışkanlıkları edinmek, hem günlük yaşam kalitenizi artırır hem de uzun vadeli komplikasyonları önler.

## Temel Beslenme İlkeleri

### Tercih Edilmesi Gerekenler
- **Tam tahıllar:** Tam buğday ekmeği, bulgur, yulaf
- **Sebzeler:** Yeşil yapraklı sebzeler, brokoli, kabak, patlıcan
- **Baklagiller:** Mercimek, nohut, kuru fasulye
- **Sağlıklı yağlar:** Zeytinyağı, ceviz, badem
- **Protein kaynakları:** Tavuk, balık, yumurta

### Kaçınılması Gerekenler
- Beyaz ekmek, beyaz pirinç
- Şekerli içecekler ve meşrubatlar
- Hamur işleri ve tatlılar
- İşlenmiş gıdalar
- Kızartma yiyecekler

## Öğün Planlaması

Günde 3 ana öğün ve 2-3 ara öğün yapmanız önerilir. Öğün atlamak kan şekerinde dalgalanmalara neden olabilir.

> **Önemli:** Bu bilgiler genel sağlık bilgilendirmesi amaçlıdır. Kişiye özel beslenme planı için diyetisyeninize danışınız.`
    },
    {
        slug: "check-up-neden-onemli",
        title: "Düzenli Check-up Neden Önemlidir? Hangi Testler Yapılmalıdır?",
        excerpt: "Birçok hastalık erken dönemde belirti vermez. Düzenli check-up ile hastalıkları erken teşhis etmek mümkündür...",
        category: "Önleyici Sağlık",
        date: "15 Ocak 2026",
        readTime: "5 dk",
        image: "/images/clinic-interior.png",
        content: `Düzenli sağlık kontrolü (check-up), hastalıkların henüz belirti vermeden tespit edilmesini sağlayan en etkili yöntemdir. "Hastalıktan korunmak, tedavi etmekten daha iyidir" ilkesiyle hareket ederek, periyodik kontrollerinizi aksatmamanız büyük önem taşır.

## Check-up Neden Gerekli?

- Birçok kronik hastalık (diyabet, hipertansiyon, kanser) erken dönemde belirti vermez
- Erken teşhis tedavi başarısını önemli ölçüde artırır
- Risk faktörlerinizi önceden belirleyerek önlem almanızı sağlar
- Mevcut sağlık durumunuzun fotoğrafını çıkarır

## Yaşa Göre Önerilen Testler

### 20-30 Yaş
- Tam kan sayımı, açlık kan şekeri
- Karaciğer ve böbrek fonksiyon testleri
- Tiroid fonksiyon testleri

### 30-40 Yaş
- Yukarıdakilere ek olarak lipid profili
- EKG
- Göz muayenesi

### 40+ Yaş
- Kapsamlı kan tahlilleri
- EKG ve gerekirse efor testi
- Ultrasonografi
- Yaşa ve cinsiyete uygun kanser taramaları

> **Önemli:** Bu bilgiler genel sağlık bilgilendirmesi amaçlıdır. Kişiye özel check-up programı için doktorunuza danışınız.`
    }
];

export const faqItems = [
    { q: "Randevu almak için ne yapmalıyım?", a: "Web sitemiz üzerinden randevu formunu doldurabilir, WhatsApp üzerinden bize yazabilir veya telefonla arayabilirsiniz. En kısa sürede size dönüş yapacağız." },
    { q: "Muayene ücreti ne kadardır?", a: "Muayene ücretlerimiz hakkında güncel bilgi almak için lütfen bizi arayınız veya WhatsApp'tan bilgi isteyiniz." },
    { q: "SGK veya özel sigorta kabul ediyor musunuz?", a: "Kliniğimizde özel sigorta ve anlaşmalı kurum hastaları kabul edilmektedir. Detaylı bilgi için lütfen iletişime geçiniz." },
    { q: "Online konsültasyon yapıyor musunuz?", a: "Evet, belirli durumlar için online video görüşme ile konsültasyon hizmeti sunmaktayız. Detaylar için bize ulaşınız." },
    { q: "Muayeneye gelirken yanımda ne getirmeliyim?", a: "Daha önce yapılmış tetkik sonuçları, kullanılan ilaçların listesi ve kimlik belgenizi yanınıza almanız yeterlidir." },
    { q: "Acil bir durumda ne yapmalıyım?", a: "Acil durumlarda lütfen 112'yi arayınız veya en yakın acil servise başvurunuz. Kliniğimiz acil hizmet vermemektedir." },
    { q: "Check-up için aç gelmeli miyim?", a: "Evet, check-up programlarımız için en az 8-12 saat aç gelmeniz gerekmektedir. Sadece su içebilirsiniz." },
    { q: "Tetkik sonuçlarını nasıl öğrenebilirim?", a: "Tetkik sonuçlarınız hazır olduğunda tarafınıza bilgi verilecektir. Online hasta portalimiz üzerinden de sonuçlarınıza ulaşabilirsiniz." },
    { q: "Kliniğe nasıl ulaşabilirim?", a: "Kliniğimiz Levent'te bulunmaktadır. Metro, otobüs ve özel araçla kolayca ulaşabilirsiniz. Detaylı yol tarifi için iletişim sayfamızı ziyaret ediniz." },
    { q: "Çocuklara da bakıyor musunuz?", a: "Kliniğimizde yetişkin hastalara (18 yaş üstü) hizmet verilmektedir. Çocuk hastalar için çocuk hastalıkları uzmanına yönlendirme yapılmaktadır." }
];

export const whyUs = [
    {
        title: "Kanıta Dayalı Tedavi",
        desc: "Uluslararası güncel kılavuzlara uygun, bilimsel temelli tedavi yaklaşımı uyguluyoruz.",
        iconKey: "clipboard"
    },
    {
        title: "Modern Klinik Altyapısı",
        desc: "Son teknoloji tıbbi cihazlar ve konforlu muayene ortamıyla hizmet veriyoruz.",
        iconKey: "hospital"
    },
    {
        title: "Kişiye Özel Yaklaşım",
        desc: "Her hastamız farklıdır. Tedavi planlarını bireysel ihtiyaçlara göre özelleştiriyoruz.",
        iconKey: "target"
    },
    {
        title: "Sürekli Takip ve Destek",
        desc: "Tedavi sonrası da hastalarımızın yanındayız. Düzenli kontrol ve 7/24 iletişim desteği sunuyoruz.",
        iconKey: "handshake"
    }
];
