import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Calendar, User } from 'lucide-react';
import { blogs, BlogPost } from '../data/blogs';

const FeaturedInsights = () => {
    // Deterministic selection based on current date
    // Helper to check if a post is "New" (less than 7 days old)
    const isPostNew = (dateString: string) => {
        const postDate = new Date(dateString);
        const today = new Date();
        const diffTime = Math.abs(today.getTime() - postDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 7;
    };

    const getDailyBlogs = (allBlogs: BlogPost[]) => {
        // 1. Identify "New" blogs
        const newBlogs = [...allBlogs]
            .filter(blog => isPostNew(blog.date))
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        // 2. Deterministic selection for non-new blogs
        const otherBlogs = allBlogs.filter(blog => !isPostNew(blog.date));
        
        // Create a stable seed based on the date string
        const today = new Date();
        const seedString = today.toDateString();
        let hash = 0;
        for (let i = 0; i < seedString.length; i++) {
            hash = (hash << 5) - hash + seedString.charCodeAt(i);
            hash |= 0;
        }
        const absHash = Math.abs(hash);

        // 3. Combine: Prioritize New, then backfill with Daily rotation
        const selected: BlogPost[] = [];

        // Add the first post (prioritizing New)
        if (newBlogs.length > 0) {
            selected.push(newBlogs[0]);
        } else if (otherBlogs.length > 0) {
            const index1 = absHash % otherBlogs.length;
            selected.push(otherBlogs[index1]);
        }

        // Add the second post (ensuring unique image if possible)
        if (selected.length === 1) {
            const firstImage = selected[0].image;
            
            // Try to find a second post with a different image
            let candidate: BlogPost | undefined;

            // Try from New blogs first
            candidate = newBlogs.slice(1).find(b => b.image !== firstImage);
            
            // If not found, try from Other blogs
            if (!candidate) {
                const candidates = otherBlogs.filter(b => b.id !== selected[0].id);
                // Deterministic check to avoid duplicate image
                candidate = candidates.find((_, i) => {
                    const idx = (absHash + 7 + i) % candidates.length;
                    return candidates[idx].image !== firstImage;
                }) || candidates[absHash % candidates.length]; // Fallback to any post if no unique image exists
            }

            if (candidate) selected.push(candidate);
        }
        
        return selected.slice(0, 2);
    };

    const dailyBlogs = getDailyBlogs(blogs);

    return (
        <section className="py-24 bg-stone-50 overflow-hidden relative">
            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
                            Care Insights
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6 italic">
                            Family <span className="text-emerald-700">Guides</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-stone-600 text-lg leading-relaxed italic">
                            Practical guidance to help you understand care, costs, and what to expect as needs change.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {dailyBlogs.map((blog, index) => {
                        const isNew = isPostNew(blog.date);
                        return (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <Link to={`/blog/${blog.slug}`} className="group block h-full">
                                    <article className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-200 h-full flex flex-col relative">
                                        {/* Image Container */}
                                        <div className="aspect-[16/9] overflow-hidden relative">
                                            <img 
                                                src={blog.image} 
                                                alt={blog.title} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            
                                            {/* NEW Badge */}
                                            {isNew && (
                                                <div className="absolute top-6 left-6 z-20">
                                                    <span className="bg-emerald-700 text-white px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase shadow-lg border border-emerald-500/30">
                                                        New
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content Wrapper */}
                                        <div className="p-8 lg:p-10 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-stone-400 text-xs font-medium mb-4 uppercase tracking-widest">
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <User className="w-3.5 h-3.5" />
                                                    {blog.author}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-emerald-950 mb-4 group-hover:text-emerald-700 transition-colors leading-tight italic">
                                                {blog.title}
                                            </h3>

                                            <p className="text-stone-600 line-clamp-3 mb-8 text-lg leading-relaxed italic">
                                                {blog.excerpt}
                                            </p>

                                            <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                                                <span className="text-emerald-800 font-bold flex items-center gap-2 group-hover:gap-3 transition-all italic">
                                                    Read the Full Guide 
                                                    <ArrowRight className="w-5 h-5" />
                                                </span>
                                                
                                                <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-emerald-900 group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-300">
                                                    <BookOpen className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/blog">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 border-2 border-emerald-800/20 text-emerald-900 rounded-full font-bold hover:bg-emerald-900 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm"
                        >
                            Explore All Insights
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedInsights;
