'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookieAccepted');
        if (!accepted) {
            setTimeout(() => setShow(true), 2000);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('cookieAccepted', 'true');
        setShow(false);
    };

    const reject = () => {
        localStorage.setItem('cookieAccepted', 'rejected');
        setShow(false);
    };

    return (
        <div className={`cookie-banner ${show ? 'show' : ''}`}>
            <div className="cookie-content">
                <p className="cookie-text">
                    Bu web sitesi deneyiminizi iyileştirmek için çerezleri kullanmaktadır.{' '}
                    <Link href="/cerez-politikasi">Çerez Politikası</Link> sayfamızdan detaylı bilgi alabilirsiniz.
                </p>
                <div className="cookie-buttons">
                    <button className="btn btn-sm btn-secondary" onClick={reject}>Reddet</button>
                    <button className="btn btn-sm btn-primary" onClick={accept}>Kabul Et</button>
                </div>
            </div>
        </div>
    );
}
