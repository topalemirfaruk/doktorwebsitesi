'use client';
import { doctorInfo } from '@/data/siteData';
import Link from 'next/link';
import { CalendarIcon, PhoneIcon, WhatsAppIcon } from '@/components/Icons';

export default function MobileCTA() {
    return (
        <>
            <div className="mobile-cta-bar">
                <div className="mobile-cta-buttons">
                    <Link href="/randevu" className="btn btn-primary">
                        <CalendarIcon size={16} /> Randevu Al
                    </Link>
                    <a href={`tel:${doctorInfo.phone}`} className="btn btn-secondary">
                        <PhoneIcon size={14} /> Ara
                    </a>
                    <a
                        href={`https://wa.me/${doctorInfo.whatsapp.replace(/\s/g, '')}`}
                        className="btn btn-whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <WhatsAppIcon size={18} />
                    </a>
                </div>
            </div>

            <a
                href={`https://wa.me/${doctorInfo.whatsapp.replace(/\s/g, '')}`}
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
            >
                <WhatsAppIcon size={28} />
            </a>
        </>
    );
}
