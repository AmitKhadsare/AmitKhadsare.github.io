import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Services from './Services'; // We will reuse the Services component logic

const AllServicesPage = () => {
  return (
    <div className="bg-stone-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-semibold transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Homepage
          </Link>
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-800 bg-clip-text text-transparent leading-tight font-serif mb-4">
            Our Comprehensive Services
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl">
            Every service we offer is designed with one goal in mind: to provide a nurturing, supportive, and enriching environment where our residents can thrive.
          </p>
        </motion.div>
      </div>

      {/* We are reusing the main Services component, but it will be on its own page */}
      <Services displayAll={true} />
    </div>
  );
};

export default AllServicesPage; 