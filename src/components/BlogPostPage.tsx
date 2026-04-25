// src/components/BlogPostPage.tsx
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import SEOHead from './SEOHead';
import { blogs } from '../data/blogs';

const BlogPostPage = () => {
    const { slug } = useParams();
    const post = blogs.find(b => b.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Calculate reading time
    const wordCount = post.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return (
        <div className="min-h-screen bg-stone-50">
            <SEOHead
                title={`${post.title} - Columbia Care Home Blog`}
                description={post.excerpt}
                image={post.image}
                type="article"
                url={`https://www.columbiacarehome.com/blog/${post.slug}`}
                structuredData={{
                    "@type": "BlogPosting",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://www.columbiacarehome.com/blog/${post.slug}`
                    },
                    "headline": post.title,
                    "description": post.excerpt,
                    "image": post.image,
                    "datePublished": post.date,
                    "dateModified": post.lastModified || post.date,
                    "author": {
                        "@type": "Organization",
                        "name": post.author,
                        "url": "https://www.columbiacarehome.com/blog"
                    },
                    "reviewedBy": [
                        {
                            "@type": "Person",
                            "name": "Bhargav Patel",
                            "jobTitle": "Doctor of Physical Therapy",
                            "url": "https://www.columbiacarehome.com/about-us"
                        },
                        {
                            "@type": "Person",
                            "name": "Sheetal Khadsare",
                            "jobTitle": "Doctor of Physical Therapy",
                            "url": "https://www.columbiacarehome.com/about-us"
                        }
                    ],
                    "publisher": {
                        "@type": "Organization",
                        "name": "Columbia Care Home",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.columbiacarehome.com/logos/header_logo.webp"
                        }
                    }
                }}
            />

            {/* Header Section */}
            <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-900/90" />
                </div>

                <div className="relative h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-24">
                    <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8 group w-fit">
                        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-md">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif leading-tight mb-6 drop-shadow-lg"
                            dangerouslySetInnerHTML={{ __html: post.title }}
                        />

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-white/90 text-sm md:text-base font-medium">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <div className="flex flex-col sm:flex-row sm:gap-2">
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                    {post.lastModified && (
                                        <span className="text-white/60 text-xs sm:text-base">
                                            (Updated: {new Date(post.lastModified).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })})
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{readingTime} min read</span>
                            </div>
                        </div>

                        {/* Clinical Oversight Badge */}
                        <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 bg-emerald-900/40 backdrop-blur-md border border-emerald-400/30 rounded-xl">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-emerald-500 overflow-hidden bg-stone-200">
                                    <img src="/src/assets/Bhargav_Patel.jpg" alt="Bhargav Patel" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-emerald-500 overflow-hidden bg-stone-200">
                                    <img src="/src/assets/Sheetal_Khadsare.jpeg" alt="Sheetal Khadsare" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="text-left">
                                <span className="block text-[10px] uppercase font-bold tracking-widest text-emerald-300 leading-none mb-1">Clinical Oversight</span>
                                <span className="text-xs text-white/90 font-medium">Informed by Bhargav Patel, DPT & Sheetal Khadsare, DPT</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 border border-stone-100"
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .prose .blog-accent {
                            color: #064e3b;
                            font-weight: 700;
                            font-style: normal;
                        }
                        /* Fix for figure and caption spacing */
                        .prose figure {
                            margin-top: 3rem;
                            margin-bottom: 3rem;
                        }
                        .prose figcaption {
                            margin-top: 1rem;
                            color: #78716c;
                        }
                    `}} />
                    <div
                        className="prose prose-xl prose-stone max-w-none
            prose-headings:font-serif prose-headings:text-emerald-950 prose-headings:font-bold
            prose-p:text-stone-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-emerald-600 prose-a:font-bold prose-a:no-underline prose-a:border-b-2 prose-a:border-emerald-500/30 hover:prose-a:text-emerald-500 hover:prose-a:border-emerald-500 prose-a:transition-all
            prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50/50 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-emerald-900 prose-blockquote:font-medium prose-blockquote:my-10
            prose-li:text-stone-700 prose-li:mb-2
            prose-strong:text-emerald-950 prose-strong:font-bold
            [&>h2]:mt-14 [&>h2]:mb-6 [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:font-serif [&>h2]:text-stone-900
            [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-xl md:[&>h3]:text-2xl [&>h3]:text-emerald-900
            [&>ul]:my-6 [&>ul]:list-disc [&>ul]:pl-6
            [&>ol]:my-6 [&>ol]:list-decimal [&>ol]:pl-6
            [&>div]:my-12
            [&>hr]:my-12 [&>hr]:border-stone-200"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.div>
            </article>
        </div>
    );
};

export default BlogPostPage;
