# Doktor Web Sitesi — Modern, SEO Güçlü ve Dönüşüm Odaklı Tasarım Dokümanı

> Amaç: Sıradan bir “doktor sitesi” değil; hızlı açılan, güven veren, randevu dönüşümü yüksek, SEO’da güçlü, modern bir web sitesi.

---

## 1) Proje Özeti

Bu web sitesi; bir doktorun veya kliniğin dijital vitrini olacak.  
Kullanıcılar (hastalar) siteye geldiklerinde:
- Doktoru tanıyacak, güven duyacak
- Hizmetleri net görecek
- Kolayca randevu alacak / iletişime geçecek
- Harita ile kliniğe ulaşacak
- Blog içerikleriyle bilgi edinecek (SEO + güven)

---

## 2) Hedef Kitle

- İlk kez randevu alacak hastalar
- Doktor/klinik değiştirmek isteyenler
- Belirli bir şikâyet/tedavi arayanlar (Google üzerinden gelenler)
- Yakın lokasyonda doktor arayanlar

---

## 3) Site Haritası (Sayfa Yapısı)

### Zorunlu Sayfalar
1. **Anasayfa**
2. **Hakkımda / Doktor Hakkında**
3. **Hizmetler** (liste)
4. **Hizmet Detay Sayfası** (her hizmet için ayrı URL)
5. **Randevu Al**
6. **İletişim** (harita + form + çalışma saatleri)
7. **Blog / Sağlık Rehberi**
8. **Blog Yazısı Detay**
9. **KVKK / Gizlilik Politikası**
10. **Çerez Politikası**

### Opsiyonel (Önerilen)
- Sıkça Sorulan Sorular (SSS)
- Hasta Yorumları
- Galeri (Klinik fotoğrafları)
- Basında / Sertifikalar
- Online Danışmanlık (varsa)

---

## 4) Tasarım Dili ve UI Kuralları

### Görsel Stil
- Minimal, modern, ferah
- Beyaz alan bol
- “Güven” hissi: temiz tipografi, sakin görseller
- Aşırı renk ve kalabalık tasarımdan kaçın

### Tipografi
- Başlıklar: güçlü ve okunaklı (H1-H2 net hiyerarşi)
- Metinler: 16–18px, satır aralığı rahat

### Renk Kullanımı
- 1 ana renk + 1 destek rengi + gri tonlar
- CTA butonları (Randevu Al) dikkat çekici olmalı

### Butonlar (CTA)
- Primary: “Randevu Al”
- Secondary: “WhatsApp ile Sor”, “Yol Tarifi”, “Ara”

---

## 5) Anasayfa Detay Yapısı (Section Section)

### 5.1 Hero Alanı
- Başlık: Uzmanlık + güçlü değer önerisi
- Alt metin: 1–2 cümle güven ve hizmet özeti
- CTA: **Randevu Al** + **WhatsApp / Ara**
- Yanında doktor fotoğrafı veya klinik görseli

**Örnek metin:**
- H1: “Uzman Dr. [Ad Soyad] — [Branş]”
- Alt: “Kişiye özel yaklaşım ve güncel tedavi yöntemleriyle sağlığınız için yanınızdayım.”

### 5.2 Güven Blokları (3-4 kutu)
- “X+ Yıl Tecrübe”
- “Yüzlerce Hasta”
- “Bilimsel Yaklaşım”
- “Modern Klinik”

### 5.3 Hizmetler (Kartlar)
- 6–8 adet hizmet kartı
- Her kart hizmet detay sayfasına gider

### 5.4 “Neden Bizi Tercih Etmelisiniz?”
- 4 madde (kanıt odaklı)
- Sertifikalar, cihaz altyapısı, yaklaşım vs.

### 5.5 Yorumlar / Referanslar
- KVKK dikkat: isimleri kısaltma veya onaylı yayınla
- 6–10 yorum slider

### 5.6 Blog Öne Çıkanlar
- Son 3 yazı
- “Tüm Yazılar” CTA

### 5.7 İletişim ve Harita
- Adres
- Çalışma saatleri
- Harita embed
- “Yol Tarifi” butonu

---

## 6) Hizmet Sayfaları (SEO için kritik)

Her hizmetin ayrı sayfası olmalı:
- URL: `/hizmetler/diz-agrisi-tedavisi` gibi
- Sayfada:
  - H1: Hizmet adı
  - Kimler için?
  - Nasıl uygulanır?
  - Süre / seans bilgisi (genel)
  - SSS
  - CTA: Randevu Al

**Not:** Tıbbi iddialarda kesin sonuç vaadi yok.

---

## 7) Blog Stratejisi (SEO Motoru)

### Blog Kategorileri
- Tedavi Rehberi
- Belirti & Şikayetler
- Önleyici Sağlık
- Sık Sorulan Sorular

### Blog Yazı Şablonu
- H1: Net soru / konu
- Giriş: 2–3 paragraf
- H2/H3 başlıklarla yapı
- “Ne zaman doktora başvurmalı?” bölümü
- SSS
- Son: Randevu CTA

### Örnek Blog Başlıkları
- “[Belirti] Neden Olur? Ne Zaman Tehlikeli?”
- “[Tedavi] Süreci Nasıl İşler?”
- “[Şikâyet] için Evde Yapılabilecekler ve Dikkat Edilmesi Gerekenler”

---

## 8) Teknik Gereksinimler

### Performans
- Lighthouse hedef: 90+
- Görseller WebP
- Lazy load
- CDN (varsa)

### Mobil Öncelik
- Mobile-first
- CTA butonu mobilde sabit (sticky) olabilir: “Randevu Al / Ara”

### Formlar
- Randevu Formu:
  - Ad Soyad
  - Telefon
  - Tercih edilen tarih/saat
  - Mesaj
  - KVKK onayı (checkbox)
- İletişim Formu (benzer)

### Entegrasyonlar
- WhatsApp “tıkla yaz”
- Telefon “tıkla ara”
- Google Maps
- Google Analytics / Tag Manager
- Search Console
- (Opsiyonel) Online randevu sistemi entegrasyonu

---

## 9) SEO Yapılandırması (Olmazsa Olmaz)

### Sayfa Bazlı
- Title ve Meta Description her sayfada özel
- H1 tek, başlık hiyerarşisi düzgün
- İç linkleme (Hizmet -> Randevu, Blog -> Hizmet)
- Breadcrumb (kırıntı menü)

### Schema (Yapılandırılmış Veri)
- Organization / LocalBusiness / Physician (duruma göre)
- FAQ schema (SSS alanlarında)
- Article schema (blog yazılarında)

### Yerel SEO
- İletişim sayfasında:
  - Açık adres
  - Telefon
  - Çalışma saatleri
- “Şehir + branş” odaklı içerikler

---

## 10) İçerik Listesi (Müşteriden İstenecekler)

- Doktor adı soyadı, unvan
- Uzmanlık alanı
- Biyografi
- Diploma / sertifika (gerekirse)
- Klinik adresi + harita linki
- Telefon / WhatsApp
- Çalışma saatleri
- Hizmet listesi
- Fotoğraflar (doktor + klinik)
- Hasta yorumları (onaylı)
- Sosyal medya linkleri

---

## 11) Hukuki ve Uyum Notları (Önemli)

- KVKK metinleri
- Çerez bildirimi ve tercih yönetimi
- “Bilgilendirme amaçlıdır, tanı/tedavi yerine geçmez” uyarıları
- Kesin sonuç vaadi yok (“%100 garanti” gibi ifadeler kullanılmaz)

---

## 12) Örnek Menü

- Anasayfa
- Hakkımda
- Hizmetler
- Blog
- SSS
- İletişim
- **Randevu Al** (buton)

---

## 13) CTA Metin Örnekleri

- “Hemen Randevu Al”
- “WhatsApp’tan Bilgi Al”
- “Yol Tarifi Al”
- “İletişime Geç”
- “Size Uygun Saati Seçin”

---

## 14) Teslimat Kapsamı (Örnek)

- 6–10 sayfa tasarım + geliştirme
- Responsive (mobil/tablet/desktop)
- Temel SEO kurulumu
- Formlar + yönlendirme
- Hız optimizasyonu
- Yayına alma (deploy)

---

## 15) Kullanılabilecek Teknoloji Önerileri

- Next.js / React (hız + SEO)
- TailwindCSS
- Headless CMS (opsiyonel): Strapi / Sanity / Contentful
- Alternatif: WordPress + iyi bir performans kurulumu

---

# Sonuç

Bu doküman; doktor web sitesi tasarımını hem dönüşüm (randevu) hem SEO açısından “üst seviye” yapmak için hazırlanmıştır.
Bu yapıya göre site üretilecek.
