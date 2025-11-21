
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Video, Globe, Play } from 'lucide-react';
import SEOHead from './SEOHead';

const VirtualTourPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <SEOHead
                title="Virtual Tour | Columbia Care Home"
                description="Take a virtual tour of Columbia Care Home. Watch our video walkthrough and explore our facility in immersive 3D to see our beautiful, caring environment."
                keywords="virtual tour, 3D tour, video tour, facility tour, Columbia care home tour, nursing home tour Maryland"
                image="https://www.columbiacarehome.com/og-virtual-tour.png"
                url="/virtual-tour"
            />

            {/* Hero Header */}
            <div className="relative bg-gradient-to-br from-slate-900 to-emerald-900 py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <Link to="/" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            Back to Home
                        </Link>
                        <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-4 text-white">
                            Experience Our Home Virtually
                        </h1>
                        <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
                            Explore Columbia Care Home from the comfort of your own home. Watch our guided video tour or take an interactive 3D walkthrough.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="space-y-16">

                    {/* Video Tour Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-emerald-600 rounded-full">
                                <Video className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900">
                                    Video Home Tour
                                </h2>
                                <p className="text-lg text-gray-600 mt-1">
                                    Guided walkthrough of our facility
                                </p>
                            </div>
                        </div>

                        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                            <div className="aspect-video bg-gradient-to-br from-slate-900 to-emerald-900 relative group">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/ZyAEwLR1lsE?rel=0&modestbranding=1"
                                    title="Columbia Care Home Video Tour"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>

                                {/* Decorative corner accents */}
                                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-emerald-400 opacity-50 pointer-events-none"></div>
                                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-emerald-400 opacity-50 pointer-events-none"></div>
                            </div>

                            <div className="p-6 lg:p-8 bg-gradient-to-br from-emerald-50 to-white">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-2 bg-emerald-100 rounded-lg">
                                        <Play className="w-5 h-5 text-emerald-700" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            See Our Home Come to Life
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Join us on a comprehensive video tour of Columbia Care Home. See our spacious living areas,
                                            comfortable bedrooms, modern therapy center, and beautiful outdoor spaces. Meet our caring
                                            staff and get a feel for the warm, family-like atmosphere that makes our home special.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t-2 border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-gray-50 px-6 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                Or
                            </span>
                        </div>
                    </div>

                    {/* 3D Virtual Tour Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-teal-600 rounded-full">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900">
                                    3D Virtual Tour
                                </h2>
                                <p className="text-lg text-gray-600 mt-1">
                                    Interactive 360° exploration
                                </p>
                            </div>
                        </div>

                        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                            <div className="aspect-video bg-gradient-to-br from-slate-900 to-teal-900 relative">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://my.matterport.com/show?play=1&lang=en-US&m=Ek5iHJBymGt"
                                    title="Columbia Care Home 3D Virtual Tour"
                                    allow="xr-spatial-tracking; gyroscope; accelerometer"
                                    allowFullScreen
                                ></iframe>

                                {/* Decorative corner accents */}
                                <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-teal-400 opacity-50 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-teal-400 opacity-50 pointer-events-none"></div>
                            </div>

                            <div className="p-6 lg:p-8 bg-gradient-to-br from-teal-50 to-white">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-2 bg-teal-100 rounded-lg">
                                        <Globe className="w-5 h-5 text-teal-700" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Explore at Your Own Pace
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            Take control of your tour with our immersive 3D experience. Navigate through every room,
                                            zoom in on details, and get a true sense of our home's layout and ambiance. It's the next
                                            best thing to being here in person.
                                        </p>
                                        <a
                                            href="https://my.matterport.com/show?play=1&lang=en-US&m=Ek5iHJBymGt"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors"
                                        >
                                            Open in Full Screen
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* CTA Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 lg:p-12 text-center shadow-2xl"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold font-serif text-white mb-4">
                            Ready to Visit in Person?
                        </h2>
                        <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
                            While our virtual tours give you a great overview, nothing compares to experiencing
                            our warm, caring environment firsthand. Schedule a personal tour today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/schedule-a-tour">
                                <motion.button
                                    className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Schedule a Tour
                                </motion.button>
                            </Link>
                            <Link to="/contact">
                                <motion.button
                                    className="bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all border-2 border-white/20"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Us
                                </motion.button>
                            </Link>
                        </div>
                    </motion.section>

                </div>
            </div>
        </div>
    );
};

export default VirtualTourPage;
