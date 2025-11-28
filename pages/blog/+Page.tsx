// pages/blog/+Page.tsx
import '../../src/index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import SEOHead from '../../src/components/SEOHead';
import { blogs } from '../../src/data/blogs.js';

const BlogIndexPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <SEOHead
                title="Blog - Expert Senior Care Insights | Columbia Care Home"
                description="Read expert insights on senior care, physiotherapy, fall prevention, and aging with dignity from the licensed physical therapists at Columbia Care Home in Columbia, MD."
                keywords="senior care blog, physiotherapy insights, fall prevention, aging in place, Columbia MD senior living"
                image="https://www.columbiacarehome.com/og-image.jpg"
                url="https://www.columbiacarehome.com/blog"
            />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-serif">
                            Care Insights & Resources
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
                            Expert perspectives on senior care, physiotherapy, and healthy aging from our licensed physical therapists
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Featured Image */}
                            <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Meta Information */}
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <time dateTime={post.date}>
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </time>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        <span>{post.author}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-serif line-clamp-2">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium"
                                        >
                                            <Tag className="w-3 h-3" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Read More Link */}
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors group"
                                >
                                    Read Full Article
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Empty State (if no posts, though we have one) */}
                {blogs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg">No blog posts yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogIndexPage;
