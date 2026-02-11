'use client';
import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

export default function DemoBanner() {
    return (
        <div className="demo-banner">
            <div className="demo-banner-inner">
                <a href="https://bionluk.com/techcorn" target="_blank" rel="noopener noreferrer" className="demo-banner-brand">
                    <Image src="/images/techcorn-logo.png" alt="Techcorn" width={120} height={36} style={{ objectFit: 'contain', height: 'auto' }} />
                </a>
                <span className="demo-banner-divider"></span>
                <span className="demo-banner-text">Bu bir <strong>demo projedir</strong> · Benzer bir web sitesi için iletişime geçin</span>
                <div className="demo-banner-links">
                    <a href="https://bionluk.com/techcorn" target="_blank" rel="noopener noreferrer" className="demo-banner-cta">
                        <FaExternalLinkAlt size={10} /> Bionluk
                    </a>
                    <a href="https://wa.me/905438483858" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={15} />
                    </a>
                    <a href="https://instagram.com/techcornn" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={15} />
                    </a>
                    <a href="mailto:techcorn@protonmail.com">
                        <FaEnvelope size={13} />
                    </a>
                </div>
            </div>
        </div>
    );
}
