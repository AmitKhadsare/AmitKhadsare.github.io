// pages/blog/@slug/+Page.tsx
import '../../../src/index.css';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../../../src/components/SEOHead';
import { blogs } from '../../../src/data/blogs.js';

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();

    // Find the blog post by slug
    const post = blogs.find((blog) => blog.slug === slug);

    // If post not found, redirect to blog index
    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = post.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    // Schema.org BlogPosting JSON-LD
    const blogPostingSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: `https://www.columbiacarehome.com${post.image}`,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            '@type': 'Organization',
            name: post.author,
            url: 'https://www.columbiacarehome.com'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Columbia Care Home',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.columbiacarehome.com/og-image.jpg'
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.columbiacarehome.com/blog/${post.slug}`
        },
        keywords: post.tags.join(', ')
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <SEOHead
                title={`${post.title} | Columbia Care Home Blog`}
                description={post.excerpt}
                keywords={post.tags.join(', ')}
                image={`https://www.columbiacarehome.com${post.image}`}
                url={`https://www.columbiacarehome.com/blog/${post.slug}`}
            />

            {/* JSON-LD Schema */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(blogPostingSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6 transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Back to Blog</span>
                        </Link>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-emerald-100">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>{readingTime} min read</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-lg p-6 md:p-10 lg:p-12"
                >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-200">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium"
                            >
                                <Tag className="w-4 h-4" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Article Body */}
                    <div
                        className="prose prose-lg prose-emerald max-w-none
              prose-headings:font-serif prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:font-bold
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-semibold
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-700
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-6 prose-ul:space-y-2
              prose-li:text-gray-700 prose-li:leading-relaxed
              prose-img:rounded-xl prose-img:shadow-lg
              [&_.lead]:text-xl [&_.lead]:text-gray-600 [&_.lead]:mb-8 [&_.lead]:leading-relaxed
              [&_.cta-text]:text-lg [&_.cta-text]:font-semibold [&_.cta-text]:text-emerald-700 [&_.cta-text]:mt-8"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 md:p-10 text-center text-white"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
                        Ready to Learn More?
                    </h3>
                    <p className="text-emerald-50 text-lg mb-6 max-w-2xl mx-auto">
                        Schedule a personalized tour of Columbia Care Home and see how our physiotherapy-led approach makes a difference.
                    </p>
                    <Link
                        to="/schedule-a-tour"
                        className="inline-block px-8 py-4 bg-white text-emerald-700 rounded-full font-bold text-lg shadow-lg hover:bg-emerald-50 transition-colors"
                    >
                        Schedule Your Visit
                    </Link>
                </motion.div>

                {/* Back to Blog */}
                <div className="mt-12 text-center">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to All Articles
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default BlogPostPage;
