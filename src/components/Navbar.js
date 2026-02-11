'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { doctorInfo } from '@/data/siteData';
import { StethoscopeIcon } from '@/components/Icons';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [mobileOpen]);

    const navItems = [
        { href: '/', label: 'Anasayfa' },
        { href: '/hakkimda', label: 'Hakkımda' },
        { href: '/hizmetler', label: 'Hizmetler' },
        { href: '/blog', label: 'Blog' },
        { href: '/sss', label: 'SSS' },
        { href: '/iletisim', label: 'İletişim' },
    ];

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <Link href="/" className="nav-logo">
                        <span className="logo-icon"><StethoscopeIcon size={22} /></span>
                        <span>{doctorInfo.title} {doctorInfo.name.split(' ').pop()}</span>
                    </Link>

                    <div className="nav-links">
                        {navItems.map(item => (
                            <Link key={item.href} href={item.href}>{item.label}</Link>
                        ))}
                        <Link href="/randevu" className="btn btn-primary btn-sm nav-cta">
                            Randevu Al
                        </Link>
                    </div>

                    <div
                        className={`hamburger ${mobileOpen ? 'active' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />
            <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
                {navItems.map(item => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                        {item.label}
                    </Link>
                ))}
                <Link href="/randevu" className="btn btn-primary" style={{ marginTop: 24, textAlign: 'center' }} onClick={() => setMobileOpen(false)}>
                    Randevu Al
                </Link>
            </div>
        </>
    );
}
