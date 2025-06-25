import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import myPhoto from '../assets/about-us.png';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.section
      id="home"
      className="relative bg-gradient-to-br from-slate-900 to-emerald-900 py-20 overflow-hidden text-center lg:text-left"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="flex-1 space-y-8 order-2 lg:order-1"
            variants={containerVariants}
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <h1 className="text-5xl lg:text-6xl font-bold text-stone-200 leading-tight font-serif">
                A Place Where Care
                <span className="text-emerald-400 block">Feels Like Family.</span>
              </h1>
              <p className="text-xl text-stone-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Find peace of mind knowing your loved one is in a safe, nurturing home where they are treated with dignity, respect, and the personalized attention they deserve.
              </p>
            </motion.div>

            <motion.div className="flex justify-center lg:justify-start" variants={itemVariants}>
              <Link to="/schedule-a-tour">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1">
                  Schedule a Tour Today
                </button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8" variants={itemVariants}>
              <div className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg shadow-sm">
                <div className="p-2 bg-emerald-900/80 rounded-full">
                  <Shield className="text-emerald-400" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-stone-200">Licensed</div>
                  <div className="text-sm text-stone-400">State Certified</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg shadow-sm">
                <div className="p-2 bg-red-900/50 rounded-full">
                  <Heart className="text-red-400" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-stone-200">24/7 Care</div>
                  <div className="text-sm text-stone-400">Always Available</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg shadow-sm">
                <div className="p-2 bg-emerald-900/80 rounded-full">
                  <Users className="text-emerald-400" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-stone-200">Family Focused</div>
                  <div className="text-sm text-stone-400">Personal Approach</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div className="flex-1 relative order-1 lg:order-2" variants={itemVariants}>
            <div className="relative z-10">
              <img
                src={myPhoto}
                alt="A compassionate caregiver with a resident"
                className="rounded-2xl shadow-2xl w-full h-auto max-h-[500px] object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-slate-500 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;