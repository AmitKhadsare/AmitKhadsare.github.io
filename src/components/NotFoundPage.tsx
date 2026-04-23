import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';
import SEOHead from './SEOHead';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-white flex items-center justify-center px-4 py-20">
      <SEOHead 
        title="Page Not Found | Columbia Care Home"
        description="The page you are looking for does not exist. Return to Columbia Care Home to explore our senior care services."
      />
      
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Visual Element */}
          <div className="relative mb-8 flex justify-center">
            <div className="w-32 h-32 bg-emerald-50 rounded-full flex items-center justify-center animate-pulse">
              <Search className="w-16 h-16 text-emerald-600 opacity-20" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl font-bold text-emerald-900/10 font-serif">404</span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Something's Missing
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
            The page you're looking for might have been moved, deleted, or perhaps the URL was mistyped.
          </p>

          {/* Quick Links */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-12">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 p-4 bg-emerald-600 text-white rounded-xl font-semibold shadow-md hover:bg-emerald-700 transition-colors"
              >
                <Home className="w-5 h-5" />
                Return Home
              </motion.div>
            </Link>
            
            <Link to="/services">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 p-4 bg-white text-emerald-700 border-2 border-emerald-100 rounded-xl font-semibold hover:border-emerald-200 transition-all"
              >
                <Search className="w-5 h-5" />
                Our Services
              </motion.div>
            </Link>
          </div>

          {/* Support Link */}
          <div className="pt-8 border-t border-gray-100">
            <p className="text-gray-500 mb-4">Need immediate assistance?</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:301-500-0809" className="flex items-center gap-2 text-emerald-700 font-medium hover:underline">
                <Phone className="w-4 h-4" />
                (301) 500-0809
              </a>
              <Link to="/contact" className="flex items-center gap-2 text-emerald-700 font-medium hover:underline">
                <ArrowLeft className="w-4 h-4 rotate-180" />
                Contact Support
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
