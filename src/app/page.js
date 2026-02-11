import Link from 'next/link';
import Image from 'next/image';
import { doctorInfo, stats, services, whyUs, testimonials, blogPosts } from '@/data/siteData';
import {
  ServiceIcon, WhyUsIcon, StatIcon,
  CalendarIcon, WhatsAppIcon, HospitalIcon, StarIcon, StarEmptyIcon,
  ArrowRightIcon, MapPinIcon, PhoneIcon, ClockIcon, QuoteIcon, MedkitIcon, BookIcon,
  StethoscopeIcon, DoctorIcon
} from '@/components/Icons';

export default function HomePage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <MedkitIcon size={16} />
              <span>İç Hastalıkları Uzmanı</span>
            </div>
            <h1>{doctorInfo.fullTitle}</h1>
            <p className="hero-branch">{doctorInfo.branch}</p>
            <p>{doctorInfo.shortBio}</p>
            <div className="hero-buttons">
              <Link href="/randevu" className="btn btn-primary btn-lg">
                <CalendarIcon size={18} /> Randevu Al
              </Link>
              <a
                href={`https://wa.me/${doctorInfo.whatsapp.replace(/\s/g, '')}`}
                className="btn btn-whatsapp btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} /> WhatsApp ile Sor
              </a>
            </div>
          </div>
          <div className="hero-image">
            <Image src="/images/doctor-hero.png" alt={doctorInfo.fullTitle} width={520} height={520} priority />
            <div className="hero-floating-card">
              <div className="card-icon"><HospitalIcon size={22} style={{ color: 'var(--primary)' }} /></div>
              <div className="card-text">
                <strong>15+ Yıl</strong>
                Tecrübe
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-icon"><StatIcon index={i} size={28} /></div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Hizmetlerimiz</span>
            <h2>Uzman Sağlık Hizmetleri</h2>
            <p>Güncel tıbbi yaklaşımlar ve modern klinik altyapımızla kapsamlı sağlık hizmetleri sunuyoruz.</p>
          </div>
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

      {/* ========== WHY US ========== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Neden Biz?</span>
            <h2>Neden Bizi Tercih Etmelisiniz?</h2>
            <p>Sağlığınız için en iyi hizmeti sunmak, birinci önceliğimizdir.</p>
          </div>
          <div className="why-us-grid">
            {whyUs.map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-icon"><WhyUsIcon iconKey={item.iconKey} size={24} style={{ color: 'var(--primary)' }} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Hasta Yorumları</span>
            <h2>Hastalarımız Ne Diyor?</h2>
            <p>Hastalarımızın değerli görüşleri ve deneyimleri.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.slice(0, 6).map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, si) => (
                    si < t.rating
                      ? <StarIcon key={si} size={16} style={{ color: 'var(--accent)' }} />
                      : <StarEmptyIcon key={si} size={16} style={{ color: 'var(--gray-300)' }} />
                  ))}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div className="testimonial-info">
                    <div className="name">{t.name}</div>
                    <div className="date">{t.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BLOG PREVIEW ========== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Sağlık Rehberi</span>
            <h2>Blog Yazılarımız</h2>
            <p>Sağlığınız hakkında bilgilendirici ve güncel içerikler.</p>
          </div>
          <div className="blog-grid">
            {blogPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-image-wrapper">
                  <Image src={post.image} alt={post.title} width={400} height={200} className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-category">{post.category}</span>
                    <span className="blog-card-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/blog" className="btn btn-secondary">
              Tüm Yazıları Gör <ArrowRightIcon size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CONTACT PREVIEW ========== */}
      <section className="section contact-preview">
        <div className="container">
          <div>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: 40 }}>
              <span className="section-badge" style={{ background: 'rgba(13,148,136,0.2)' }}>İletişim</span>
              <h2 style={{ color: 'white' }}>Bize Ulaşın</h2>
              <p style={{ color: '#94A3B8' }}>Randevu veya bilgi almak için bizimle iletişime geçin.</p>
            </div>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon"><MapPinIcon size={20} style={{ color: 'var(--primary-light)' }} /></div>
                <div className="contact-info-text">
                  <h4>Adres</h4>
                  <p>{doctorInfo.address}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><PhoneIcon size={18} style={{ color: 'var(--primary-light)' }} /></div>
                <div className="contact-info-text">
                  <h4>Telefon</h4>
                  <p><a href={`tel:${doctorInfo.phone}`} style={{ color: '#CBD5E1' }}>{doctorInfo.phone}</a></p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><ClockIcon size={18} style={{ color: 'var(--primary-light)' }} /></div>
                <div className="contact-info-text">
                  <h4>Çalışma Saatleri</h4>
                  {doctorInfo.workingHours.map((wh, i) => (
                    <p key={i}>{wh.day}: {wh.hours}</p>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
              <Link href="/iletisim" className="btn btn-primary">İletişime Geç</Link>
              <a href={`tel:${doctorInfo.phone}`} className="btn btn-outline-light"><PhoneIcon size={14} /> Ara</a>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              src={doctorInfo.mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Klinik Konumu"
            />
          </div>
        </div>
      </section>
    </>
  );
}
