import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CareHomeCarousel from './CareHomeCarousel';

const About = () => (
  <section id="about" className="py-12 lg:py-8 bg-gradient-to-br from-stone-100 to-emerald-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile Layout: Text first, then carousel */}
      <div className="lg:hidden space-y-8">
        <motion.div 
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full text-sm font-semibold mb-4">
              ✨ Our Mission
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-800 bg-clip-text text-transparent leading-tight font-serif mb-6">
              A Home Filled with Heart & Joy
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
              Columbia Care Home was founded with a{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent font-bold">
                simple yet powerful mission
              </span>
              : to provide compassionate, dignified care in a setting that sparkles with warmth and feels like home.
            </p>
          </div>
        </motion.div>
        
        {/* Carousel on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CareHomeCarousel />
        </motion.div>
        
        <motion.div 
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-serif mb-4">
              Our Inspiring Story
            </h3>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              At the heart of this vision are{' '}
              <span className="font-bold text-emerald-700">Dr. Bhargav Patel</span> and{' '}
              <span className="font-bold text-teal-700">Dr. Sheetal Patel</span>, 
              both qualified physiotherapists who bring medical expertise and boundless compassion 
              to create a space where residents thrive like family.
            </p>
          </div>
          <div className="pt-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/about-us">
                <motion.button 
                  className="group relative px-8 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-full font-bold text-lg lg:text-xl shadow-2xl overflow-hidden hover:shadow-emerald-500/30 transition-all w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Discover Our Story
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              <Link to="/facility">
                <motion.button 
                  className="group relative px-8 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-slate-600 via-gray-600 to-slate-700 text-white rounded-full font-bold text-lg lg:text-xl shadow-2xl overflow-hidden hover:shadow-slate-500/30 transition-all w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Explore Our Facility
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop Layout: Side by side */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <CareHomeCarousel />
        <motion.div 
          className="space-y-8 lg:pl-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full text-sm font-semibold mb-4">
              ✨ Our Mission
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-800 bg-clip-text text-transparent leading-tight font-serif mb-6">
              A Home Filled with Heart & Joy
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Columbia Care Home was founded with a{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent font-bold">
                simple yet powerful mission
              </span>
              : to provide compassionate, dignified care in a setting that sparkles with warmth and feels like home.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-serif mb-4">
              Our Inspiring Story
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At the heart of this vision are{' '}
              <span className="font-bold text-emerald-700">Dr. Bhargav Patel</span> and{' '}
              <span className="font-bold text-teal-700">Dr. Sheetal Patel</span>, 
              both qualified physiotherapists who bring medical expertise and boundless compassion 
              to create a space where residents thrive like family.
            </p>
          </div>
          <div className="pt-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/about-us">
                <motion.button 
                  className="group relative px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-full font-bold text-xl shadow-2xl overflow-hidden hover:shadow-emerald-500/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Discover Our Story
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              <Link to="/facility">
                <motion.button 
                  className="group relative px-10 py-5 bg-gradient-to-r from-slate-600 via-gray-600 to-slate-700 text-white rounded-full font-bold text-xl shadow-2xl overflow-hidden hover:shadow-slate-500/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Explore Our Facility
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;