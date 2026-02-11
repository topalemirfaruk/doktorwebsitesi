'use client';
import { useState } from 'react';
import Link from 'next/link';
import { doctorInfo } from '@/data/siteData';
import { CalendarIcon, PhoneIcon, WhatsAppIcon, ClockIcon, MapPinIcon, CheckIcon } from '@/components/Icons';

export default function RandevuPage() {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', date: '', time: '', message: '', kvkk: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Ad Soyad zorunludur';
        if (!formData.phone.trim()) newErrors.phone = 'Telefon zorunludur';
        if (!formData.date) newErrors.date = 'Tarih seçiniz';
        if (!formData.kvkk) newErrors.kvkk = 'KVKK onayı zorunludur';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    if (submitted) {
        return (
            <>
                <section className="page-hero">
                    <div className="container">
                        <h1>Randevu Talebi</h1>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="success-message">
                            <div className="success-icon"><CheckIcon size={32} /></div>
                            <h2 style={{ marginBottom: 16 }}>Randevu Talebiniz Alındı!</h2>
                            <p style={{ color: 'var(--gray-500)', maxWidth: 500, margin: '0 auto 32px' }}>
                                En kısa sürede sizinle iletişime geçeceğiz. Acil durumlarda lütfen bizi arayınız.
                            </p>
                            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/" className="btn btn-primary">Anasayfaya Dön</Link>
                                <a href={`tel:${doctorInfo.phone}`} className="btn btn-secondary"><PhoneIcon size={14} /> Bizi Arayın</a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumb-list" style={{ justifyContent: 'center', marginBottom: 16 }}>
                        <Link href="/">Anasayfa</Link>
                        <span className="separator">/</span>
                        <span className="current">Randevu Al</span>
                    </div>
                    <h1>Randevu Al</h1>
                    <p>Size en uygun zamanda randevu oluşturun.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="appointment-section">
                        <div className="appointment-form-card">
                            <h3 style={{ marginBottom: 24 }}>Randevu Formu</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Ad Soyad <span className="required">*</span></label>
                                    <input type="text" name="name" className="form-control" placeholder="Adınız Soyadınız" value={formData.name} onChange={handleChange} />
                                    {errors.name && <span style={{ color: 'var(--error)', fontSize: '0.8rem' }}>{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label>Telefon <span className="required">*</span></label>
                                    <input type="tel" name="phone" className="form-control" placeholder="05XX XXX XX XX" value={formData.phone} onChange={handleChange} />
                                    {errors.phone && <span style={{ color: 'var(--error)', fontSize: '0.8rem' }}>{errors.phone}</span>}
                                </div>

                                <div className="form-group">
                                    <label>E-posta</label>
                                    <input type="email" name="email" className="form-control" placeholder="ornek@email.com" value={formData.email} onChange={handleChange} />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                    <div className="form-group">
                                        <label>Tercih Edilen Tarih <span className="required">*</span></label>
                                        <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} />
                                        {errors.date && <span style={{ color: 'var(--error)', fontSize: '0.8rem' }}>{errors.date}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Tercih Edilen Saat</label>
                                        <select name="time" className="form-control" value={formData.time} onChange={handleChange}>
                                            <option value="">Saat Seçiniz</option>
                                            <option value="09:00">09:00</option>
                                            <option value="09:30">09:30</option>
                                            <option value="10:00">10:00</option>
                                            <option value="10:30">10:30</option>
                                            <option value="11:00">11:00</option>
                                            <option value="11:30">11:30</option>
                                            <option value="13:00">13:00</option>
                                            <option value="13:30">13:30</option>
                                            <option value="14:00">14:00</option>
                                            <option value="14:30">14:30</option>
                                            <option value="15:00">15:00</option>
                                            <option value="15:30">15:30</option>
                                            <option value="16:00">16:00</option>
                                            <option value="16:30">16:30</option>
                                            <option value="17:00">17:00</option>
                                            <option value="17:30">17:30</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Mesajınız</label>
                                    <textarea name="message" className="form-control" placeholder="Şikâyetiniz veya sormak istediğiniz bir şey var mı?" value={formData.message} onChange={handleChange} />
                                </div>

                                <div className="form-group">
                                    <div className="checkbox-group">
                                        <input type="checkbox" name="kvkk" id="kvkk" checked={formData.kvkk} onChange={handleChange} />
                                        <label htmlFor="kvkk">
                                            <Link href="/kvkk">KVKK Aydınlatma Metni</Link>&apos;ni okudum ve onaylıyorum. <span className="required">*</span>
                                        </label>
                                    </div>
                                    {errors.kvkk && <span style={{ color: 'var(--error)', fontSize: '0.8rem' }}>{errors.kvkk}</span>}
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                    <CalendarIcon size={18} /> Randevu Talebini Gönder
                                </button>
                            </form>
                        </div>

                        <div className="appointment-info">
                            <h2>Randevu Bilgileri</h2>
                            <p>Formu doldurarak veya aşağıdaki kanallardan bize ulaşarak randevu alabilirsiniz.</p>

                            <div className="appointment-features">
                                <div className="appointment-feature">
                                    <div className="appointment-feature-icon"><PhoneIcon size={20} style={{ color: 'var(--primary)' }} /></div>
                                    <div className="appointment-feature-text">
                                        <h4>Telefonla Randevu</h4>
                                        <p><a href={`tel:${doctorInfo.phone}`}>{doctorInfo.phone}</a></p>
                                    </div>
                                </div>
                                <div className="appointment-feature">
                                    <div className="appointment-feature-icon"><WhatsAppIcon size={20} style={{ color: 'var(--primary)' }} /></div>
                                    <div className="appointment-feature-text">
                                        <h4>WhatsApp</h4>
                                        <p><a href={`https://wa.me/${doctorInfo.whatsapp.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer">WhatsApp ile yazın</a></p>
                                    </div>
                                </div>
                                <div className="appointment-feature">
                                    <div className="appointment-feature-icon"><ClockIcon size={20} style={{ color: 'var(--primary)' }} /></div>
                                    <div className="appointment-feature-text">
                                        <h4>Çalışma Saatleri</h4>
                                        {doctorInfo.workingHours.map((wh, i) => (
                                            <p key={i}>{wh.day}: {wh.hours}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="appointment-feature">
                                    <div className="appointment-feature-icon"><MapPinIcon size={20} style={{ color: 'var(--primary)' }} /></div>
                                    <div className="appointment-feature-text">
                                        <h4>Klinik Adresi</h4>
                                        <p>{doctorInfo.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: 32, padding: 20, background: 'var(--primary-50)', borderRadius: 12 }}>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                                    <strong>Bilgi:</strong> Randevu talebiniz alındıktan sonra en kısa sürede sizinle iletişime geçilecektir. Talebiniz onay anlamına gelmez.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
