import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, doctorInfo } from '@/data/siteData';
import { notFound } from 'next/navigation';
import { CalendarIcon, WhatsAppIcon, BookIcon } from '@/components/Icons';

export function generateStaticParams() {
    return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) notFound();

    const otherPosts = blogPosts.filter(p => p.slug !== slug);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "author": { "@type": "Person", "name": doctorInfo.fullTitle },
        "datePublished": post.date,
        "publisher": { "@type": "Organization", "name": doctorInfo.fullTitle },
    };

    const renderContent = (content) => {
        const lines = content.split('\n');
        const elements = [];
        let currentList = [];
        let listType = null;

        const flushList = () => {
            if (currentList.length > 0) {
                if (listType === 'ul') {
                    elements.push(<ul key={`list-${elements.length}`}>{currentList.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: parseBold(item) }} />)}</ul>);
                } else {
                    elements.push(<ol key={`list-${elements.length}`}>{currentList.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: parseBold(item) }} />)}</ol>);
                }
                currentList = [];
                listType = null;
            }
        };

        const parseBold = (text) => text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        lines.forEach((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) { flushList(); return; }
            if (trimmed.startsWith('## ')) { flushList(); elements.push(<h2 key={i}>{trimmed.replace('## ', '')}</h2>); }
            else if (trimmed.startsWith('### ')) { flushList(); elements.push(<h3 key={i}>{trimmed.replace('### ', '')}</h3>); }
            else if (trimmed.startsWith('> ')) { flushList(); elements.push(<blockquote key={i} dangerouslySetInnerHTML={{ __html: parseBold(trimmed.replace('> ', '')) }} />); }
            else if (trimmed.startsWith('- ')) { if (listType !== 'ul') flushList(); listType = 'ul'; currentList.push(trimmed.replace('- ', '')); }
            else if (/^\d+\.\s/.test(trimmed)) { if (listType !== 'ol') flushList(); listType = 'ol'; currentList.push(trimmed.replace(/^\d+\.\s/, '')); }
            else { flushList(); elements.push(<p key={i} dangerouslySetInnerHTML={{ __html: parseBold(trimmed) }} />); }
        });
        flushList();
        return elements;
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            <section className="page-hero" style={{ paddingBottom: 30 }}>
                <div className="container">
                    <div className="breadcrumb-list" style={{ justifyContent: 'center', marginBottom: 16 }}>
                        <Link href="/">Anasayfa</Link>
                        <span className="separator">/</span>
                        <Link href="/blog">Blog</Link>
                        <span className="separator">/</span>
                        <span className="current">{post.title.length > 40 ? post.title.substring(0, 40) + '...' : post.title}</span>
                    </div>
                </div>
            </section>

            <div className="blog-detail">
                <div className="blog-detail-header">
                    <div className="blog-detail-meta">
                        <span className="blog-card-category">{post.category}</span>
                        <span className="blog-card-date">{post.date}</span>
                        <span className="blog-card-date" style={{ display: 'flex', alignItems: 'center', gap: 4 }}><BookIcon size={12} /> {post.readTime}</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>{post.title}</h1>
                </div>

                <Image src={post.image} alt={post.title} width={800} height={400} style={{ borderRadius: 16, width: '100%', height: 'auto', objectFit: 'cover', marginBottom: 32 }} />

                <div className="blog-detail-content">
                    {renderContent(post.content)}
                </div>

                <div style={{ background: 'var(--gray-50)', padding: 32, borderRadius: 16, textAlign: 'center', margin: '40px 0' }}>
                    <h3 style={{ marginBottom: 12 }}>Sağlığınız Hakkında Sorularınız mı Var?</h3>
                    <p style={{ color: 'var(--gray-500)', marginBottom: 24 }}>Uzman doktorumuzdan kişiye özel değerlendirme için randevu alın.</p>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/randevu" className="btn btn-primary"><CalendarIcon size={16} /> Randevu Al</Link>
                        <a href={`https://wa.me/${doctorInfo.whatsapp.replace(/\s/g, '')}`} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> WhatsApp</a>
                    </div>
                </div>

                {otherPosts.length > 0 && (
                    <div>
                        <h3 style={{ marginBottom: 20 }}>Diğer Yazılar</h3>
                        <div className="blog-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                            {otherPosts.map(p => (
                                <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                                    <div className="blog-card-image-wrapper">
                                        <Image src={p.image} alt={p.title} width={400} height={200} className="blog-card-image" />
                                    </div>
                                    <div className="blog-card-body">
                                        <div className="blog-card-meta">
                                            <span className="blog-card-category">{p.category}</span>
                                            <span className="blog-card-date">{p.date}</span>
                                        </div>
                                        <h3>{p.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
