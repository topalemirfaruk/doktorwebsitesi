import Link from 'next/link';
import Image from 'next/image';
import { doctorInfo, services } from '@/data/siteData';
import {
    StethoscopeIcon, InstagramIcon, FacebookIcon, YouTubeIcon, LinkedInIcon,
    MapPinIcon, PhoneIcon, EmailIcon, ClockIcon, WhatsAppIcon
} from '@/components/Icons';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-about">
                        <div className="footer-logo">
                            <span className="logo-icon"><StethoscopeIcon size={20} /></span>
                            <span>{doctorInfo.fullTitle}</span>
                        </div>
                        <p>{doctorInfo.shortBio}</p>
                        <div className="footer-social">
                            <a href={doctorInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={18} /></a>
                            <a href={doctorInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon size={18} /></a>
                            <a href={doctorInfo.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YouTubeIcon size={18} /></a>
                            <a href={doctorInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Hizmetler</h4>
                        <ul>
                            {services.slice(0, 5).map(s => (
                                <li key={s.slug}>
                                    <Link href={`/hizmetler/${s.slug}`}>{s.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Hızlı Linkler</h4>
                        <ul>
                            <li><Link href="/hakkimda">Hakkımda</Link></li>
                            <li><Link href="/hizmetler">Hizmetler</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/sss">SSS</Link></li>
                            <li><Link href="/randevu">Randevu Al</Link></li>
                            <li><Link href="/iletisim">İletişim</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>İletişim</h4>
                        <div className="footer-contact-item">
                            <span><MapPinIcon size={16} /></span>
                            <span>{doctorInfo.address}</span>
                        </div>
                        <div className="footer-contact-item">
                            <span><PhoneIcon size={14} /></span>
                            <span><a href={`tel:${doctorInfo.phone}`}>{doctorInfo.phone}</a></span>
                        </div>
                        <div className="footer-contact-item">
                            <span><EmailIcon size={14} /></span>
                            <span><a href={`mailto:${doctorInfo.email}`}>{doctorInfo.email}</a></span>
                        </div>
                        <div className="footer-contact-item">
                            <span><ClockIcon size={14} /></span>
                            <span>Pzt-Cum: 09:00-18:00</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} {doctorInfo.fullTitle}. Tüm hakları saklıdır.</p>
                    <div className="footer-bottom-links">
                        <Link href="/kvkk">KVKK Aydınlatma Metni</Link>
                        <Link href="/cerez-politikasi">Çerez Politikası</Link>
                    </div>
                </div>

                {/* Techcorn Credit */}
                <div className="footer-credit">
                    <div className="footer-credit-inner">
                        <Image src="/images/techcorn-logo.png" alt="Techcorn" width={24} height={24} style={{ borderRadius: 4, objectFit: 'contain' }} />
                        <span>Tasarım & Geliştirme: <a href="https://bionluk.com/techcorn" target="_blank" rel="noopener noreferrer"><strong>Techcorn</strong></a></span>
                        <div className="footer-credit-links">
                            <a href="https://wa.me/905438483858" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon size={14} /></a>
                            <a href="https://instagram.com/techcornn" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={14} /></a>
                            <a href="mailto:techcorn@protonmail.com" aria-label="E-posta"><EmailIcon size={14} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
