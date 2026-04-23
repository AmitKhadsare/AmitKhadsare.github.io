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
                    "dateModified": post.date,
                    "author": {
                        "@type": "Person",
                        "name": post.author,
                        "jobTitle": "Doctor of Physical Therapy",
                        "url": "https://www.columbiacarehome.com/about-us"
                    },
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

                        <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base font-medium">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{readingTime} min read</span>
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
            prose-a:text-emerald-700 prose-a:no-underline prose-a:border-b-2 prose-a:border-emerald-200 hover:prose-a:border-emerald-600 prose-a:transition-colors
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
