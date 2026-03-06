import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

const AuthorityInsight = () => {
    return (
        <section className="py-20 lg:py-24 bg-emerald-900 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-white space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800 rounded-full text-sm font-bold tracking-wide uppercase border border-emerald-700 mb-2">
                            <BookOpen className="w-4 h-4" />
                            Clinical Insight
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight font-serif text-white">
                            Not ready for a tour?<br />
                            <span className="text-emerald-300">Understand your options.</span>
                        </h2>

                        <p className="text-xl text-emerald-50/90 leading-relaxed font-serif italic border-l-4 border-emerald-500 pl-4">
                            "How a facility handles 5:00 PM sundowning agitation reveals everything you need to know about their clinical capability."
                        </p>

                        <p className="text-emerald-100/80 leading-relaxed text-lg pb-4">
                            We believe families deserve complete transparency about how dementia anxiety is managed. Read our Doctors' protocol on managing sundowning without heavy chemical sedation.
                        </p>

                        <Link to="/blog/managing-sundowning-memory-care-columbia-md" className="inline-block">
                            <motion.button
                                className="group relative px-8 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg shadow-xl overflow-hidden transition-all"
                                whileHover={{ scale: 1.02, backgroundColor: '#f0fdf4' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Read the Sundowning Protocol
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-800/50 relative group">
                            <img src="/images/blog/living-room-seating.jpg" alt="Calm Living Room Environment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/20 to-transparent flex items-end p-8">
                                <div className="bg-emerald-900/95 backdrop-blur-sm p-5 rounded-2xl border border-emerald-700 shadow-2xl max-w-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white font-bold text-xl leading-snug mb-2">Managing Sundowning Without Heavy Medication</p>
                                    <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                                        <BookOpen className="w-4 h-4" /> The 8-Bed Advantage
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AuthorityInsight;
