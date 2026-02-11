'use client';
import { useState } from 'react';
import Link from 'next/link';
import { doctorInfo } from '@/data/siteData';
import { MapPinIcon, PhoneIcon, EmailIcon, ClockIcon, WhatsAppIcon, CheckIcon } from '@/components/Icons';

export default function IletisimPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', kvkk: false });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.message && formData.kvkk) {
            setSubmitted(true);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumb-list" style={{ justifyContent: 'center', marginBottom: 16 }}>
                        <Link href="/">Anasayfa</Link>
                        <span className="separator">/</span>
                        <span className="current">İletişim</span>
                    </div>
                    <h1>İletişim</h1>
                    <p>Bizimle iletişime geçin, sorularınızı yanıtlayalım.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-card">
                            <div className="contact-card-icon"><MapPinIcon size={24} style={{ color: 'var(--primary)' }} /></div>
                            <h4>Adres</h4>
                            <p>{doctorInfo.address}</p>
                        </div>
                        <div className="contact-card">
                            <div className="contact-card-icon"><PhoneIcon size={22} style={{ color: 'var(--primary)' }} /></div>
                            <h4>Telefon</h4>
                            <p><a href={`tel:${doctorInfo.phone}`}>{doctorInfo.phone}</a></p>
                        </div>
                        <div className="contact-card">
                            <div className="contact-card-icon"><EmailIcon size={22} style={{ color: 'var(--primary)' }} /></div>
                            <h4>E-posta</h4>
                            <p><a href={`mailto:${doctorInfo.email}`}>{doctorInfo.email}</a></p>
                        </div>
                        <div className="contact-card">
                            <div className="contact-card-icon"><ClockIcon size={22} style={{ color: 'var(--primary)' }} /></div>
                            <h4>Çalışma Saatleri</h4>
                            {doctorInfo.workingHours.map((wh, i) => (
                                <p key={i} style={{ margin: '2px 0' }}>{wh.day}: {wh.hours}</p>
                            ))}
                        </div>
                    </div>

                    <div className="contact-main-grid">
                        <div>
                            <h2 style={{ marginBottom: 8 }}>Bize Yazın</h2>
                            <p style={{ color: 'var(--gray-500)', marginBottom: 24 }}>Sorularınız veya önerileriniz için formu doldurun.</p>

                            {submitted ? (
                                <div className="success-message" style={{ padding: 40 }}>
                                    <div className="success-icon"><CheckIcon size={32} /></div>
                                    <h3 style={{ marginBottom: 12 }}>Mesajınız İletildi!</h3>
                                    <p style={{ color: 'var(--gray-500)' }}>En kısa sürede size dönüş yapacağız.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Ad Soyad <span className="required">*</span></label>
                                        <input type="text" name="name" className="form-control" placeholder="Adınız Soyadınız" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                        <div className="form-group">
                                            <label>E-posta</label>
                                            <input type="email" name="email" className="form-control" placeholder="ornek@email.com" value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Telefon</label>
                                            <input type="tel" name="phone" className="form-control" placeholder="05XX XXX XX XX" value={formData.phone} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Mesajınız <span className="required">*</span></label>
                                        <textarea name="message" className="form-control" placeholder="Mesajınızı yazınız..." value={formData.message} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox-group">
                                            <input type="checkbox" name="kvkk" id="kvkkContact" checked={formData.kvkk} onChange={handleChange} required />
                                            <label htmlFor="kvkkContact">
                                                <Link href="/kvkk">KVKK Aydınlatma Metni</Link>&apos;ni okudum ve onaylıyorum. <span className="required">*</span>
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg">Mesajı Gönder</button>
                                </form>
                            )}
                        </div>

                        <div>
                            <h2 style={{ marginBottom: 8 }}>Konum</h2>
                            <p style={{ color: 'var(--gray-500)', marginBottom: 24 }}>Kliniğimize kolayca ulaşabilirsiniz.</p>
                            <div className="contact-map" style={{ marginBottom: 24 }}>
                                <iframe
                                    src={doctorInfo.mapEmbed}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Klinik Konumu"
                                    style={{ height: 350 }}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(doctorInfo.address)}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    <MapPinIcon size={16} /> Yol Tarifi Al
                                </a>
                                <a href={`https://wa.me/${doctorInfo.whatsapp.replace(/\s/g, '')}`} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                                    <WhatsAppIcon size={16} /> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
