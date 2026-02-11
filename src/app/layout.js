import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import CookieBanner from '@/components/CookieBanner';
import DemoBanner from '@/components/DemoBanner';

export const metadata = {
  title: {
    default: 'Uzm. Dr. Ahmet Yılmaz - İç Hastalıkları Uzmanı | İstanbul',
    template: '%s | Uzm. Dr. Ahmet Yılmaz'
  },
  description: 'Uzm. Dr. Ahmet Yılmaz - İstanbul Beşiktaş\'ta İç Hastalıkları (Dahiliye) uzmanı. Kişiye özel tedavi, modern klinik, 15+ yıl tecrübe. Hemen randevu alın.',
  keywords: ['dahiliye uzmanı', 'iç hastalıkları', 'doktor istanbul', 'check-up', 'diyabet tedavisi', 'hipertansiyon', 'tiroid'],
  authors: [{ name: 'Uzm. Dr. Ahmet Yılmaz' }],
  openGraph: {
    title: 'Uzm. Dr. Ahmet Yılmaz - İç Hastalıkları Uzmanı',
    description: 'Kişiye özel yaklaşım ve güncel tedavi yöntemleriyle sağlığınız için yanınızdayız.',
    type: 'website',
    locale: 'tr_TR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Uzm. Dr. Ahmet Yılmaz",
    "description": "İç Hastalıkları (Dahiliye) Uzmanı",
    "telephone": "+90 212 555 0123",
    "email": "info@drahmetyilmaz.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Levent Mah. Sağlık Cad. No:42 Kat:3",
      "addressLocality": "Beşiktaş",
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "medicalSpecialty": "Internal Medicine",
    "priceRange": "₺₺"
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <DemoBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
