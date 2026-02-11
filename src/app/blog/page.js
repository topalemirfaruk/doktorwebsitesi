import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/siteData';
import { BookIcon } from '@/components/Icons';

export const metadata = {
    title: 'Blog - Sağlık Rehberi',
    description: 'Sağlığınız hakkında bilgilendirici ve güncel blog yazıları. Tedavi rehberleri, belirtiler ve önleyici sağlık ipuçları.',
};

export default function BlogPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumb-list" style={{ justifyContent: 'center', marginBottom: 16 }}>
                        <Link href="/">Anasayfa</Link>
                        <span className="separator">/</span>
                        <span className="current">Blog</span>
                    </div>
                    <h1>Sağlık Rehberi</h1>
                    <p>Sağlığınız hakkında bilgilendirici ve güncel içerikler.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
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
                                        <span className="blog-card-date" style={{ display: 'flex', alignItems: 'center', gap: 4 }}><BookIcon size={12} /> {post.readTime}</span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--gray-50)', textAlign: 'center' }}>
                <div className="container">
                    <p style={{ color: 'var(--gray-500)', fontSize: '0.85rem', maxWidth: 600, margin: '0 auto' }}>
                        Bu sitedeki yazılar genel sağlık bilgilendirmesi amaçlıdır ve tıbbi tanı/tedavi yerine geçmez. Sağlık sorunlarınız için mutlaka bir sağlık kuruluşuna başvurunuz.
                    </p>
                </div>
            </section>
        </>
    );
}
