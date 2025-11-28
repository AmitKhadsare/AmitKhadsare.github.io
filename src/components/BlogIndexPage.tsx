// src/components/BlogIndexPage.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEOHead from './SEOHead';
import { blogs } from '../data/blogs.js';

const BlogIndexPage = () => {
    return (
        <div className="min-h-screen bg-stone-50">
            <SEOHead
                title="Blog - Expert Senior Care Insights | Columbia Care Home"
                description="Read expert insights on senior care, physiotherapy, fall prevention, and aging with dignity from the licensed physical therapists at Columbia Care Home in Columbia, MD."
                keywords="senior care blog, physiotherapy insights, fall prevention, aging in place, Columbia MD senior living"
                image="https://www.columbiacarehome.com/og-image.jpg"
                url="https://www.columbiacarehome.com/blog"
            />

            {/* Hero Section - Simplified for performance */}
            <div className="bg-emerald-900 text-white py-20 md:py-24 relative overflow-hidden">
                {/* Subtle pattern instead of heavy image */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-100 text-sm font-medium mb-6">
                            Our Blog
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif tracking-tight">
                            Care Insights & Resources
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed font-light">
                            Expert perspectives on senior care, physiotherapy, and healthy aging from our licensed physical therapists.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${blogs.length < 3 ? 'justify-center' : ''}`}>
                    {blogs.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 overflow-hidden flex flex-col h-full"
                        >
                            {/* Featured Image */}
                            <Link to={`/blog/${post.slug}`} className="relative h-56 overflow-hidden block bg-stone-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </Link>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                {/* Meta Information */}
                                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-stone-500 mb-4 uppercase tracking-wider">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <time dateTime={post.date}>
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </time>
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-stone-300"></div>
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5" />
                                        <span>{post.author}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <Link to={`/blog/${post.slug}`} className="block mb-3">
                                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 font-serif leading-tight group-hover:text-emerald-700 transition-colors">
                                        {post.title}
                                    </h2>
                                </Link>

                                {/* Excerpt */}
                                <p className="text-stone-600 leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {post.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center px-2.5 py-1 bg-stone-100 text-stone-600 rounded-md text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Read More Button */}
                                <div className="pt-6 border-t border-stone-100 mt-auto">
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm uppercase tracking-wide group/btn"
                                    >
                                        Read Article
                                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Empty State */}
                {blogs.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border border-stone-100 shadow-sm max-w-2xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-100 rounded-full mb-6">
                            <Calendar className="w-8 h-8 text-stone-400" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">No posts yet</h3>
                        <p className="text-stone-500">Check back soon for new updates and insights.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogIndexPage;
