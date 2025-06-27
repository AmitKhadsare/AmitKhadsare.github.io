import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Heart, Home, Users, Sparkles, ArrowRight } from 'lucide-react';
import newAboutImage from '../assets/aboutus.avif';

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        duration: 1.2,
        bounce: 0.3,
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="about"
      // THEME UPDATE: Changed background gradient from purple/pink to stone/emerald
      className="py-12 lg:py-16 bg-gradient-to-br from-stone-100 to-emerald-50 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* THEME UPDATE: Animated Background Elements now use theme colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-20 blur-xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-teal-200 to-emerald-300 rounded-full opacity-15 blur-xl"
          animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-stone-200 to-emerald-200 rounded-full opacity-10 blur-lg"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

          {/* Enhanced Image Section */}
          <motion.div
            className="relative order-1 lg:order-1 lg:flex-1 w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none"
            variants={imageVariants}
          >
            <div className="relative z-10 group">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={newAboutImage}
                  alt="A compassionate caregiver supporting a resident"
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white/50"
                />
                {/* THEME UPDATE: Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>

            {/* THEME UPDATE: Floating decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full p-4 shadow-xl"
              variants={floatingVariants}
              animate="animate"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl p-3 shadow-lg"
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1 }}
            >
              <Heart className="w-6 h-6 text-white" />
            </motion.div>

            {/* THEME UPDATE: Background decorative shapes */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-3xl transform -rotate-6 scale-105 opacity-30 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-emerald-200 rounded-3xl transform rotate-3 scale-110 opacity-20 -z-20"></div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div className="space-y-12 order-2 lg:order-2 lg:flex-1" variants={containerVariants}>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <motion.div
                // THEME UPDATE: Mission tag
                className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full text-sm font-semibold mb-4"
                whileHover={{ scale: 1.05 }}
              >
                ✨ Our Mission
              </motion.div>
              <h2
                // THEME UPDATE: Main headline gradient
                className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-800 bg-clip-text text-transparent leading-tight font-serif mb-6 text-center lg:text-left"
              >
                A Home Filled with Heart & Joy
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed text-center lg:text-left font-medium">
                {/* THEME UPDATE: Highlighted text span */}
                Columbia Care Home was founded with a <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent font-bold">simple yet powerful mission</span>: to provide compassionate, dignified care in a setting that sparkles with warmth and feels like home.
              </p>
            </motion.div>

            {/* Story Section */}
            <motion.div variants={itemVariants}>
              <h3
                // THEME UPDATE: Story headline
                className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-serif mb-6 text-center lg:text-left"
              >
                Our Inspiring Story
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center lg:text-left">
                {/* THEME UPDATE: Founder name colors */}
                At the heart of this vision are <span className="font-bold text-emerald-700">Dr. Bhargav Patel</span> and <span className="font-bold text-teal-700">Dr. Sheetal Patel</span>, both qualified physiotherapists who bring medical expertise and boundless compassion to create a space where residents thrive like family.
              </p>

              {/* THEME UPDATE: Enhanced Feature Cards now use theme colors */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <motion.div
                  className="relative p-6 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl shadow-xl text-white overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-6 translate-x-6" />
                  <Heart className="h-12 w-12 mb-4 relative z-10" />
                  <p className="font-bold text-lg relative z-10">Compassionate 24/7 Staff</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <motion.div
                  className="relative p-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-xl text-white overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-6 translate-x-6" />
                  <Home className="h-12 w-12 mb-4 relative z-10" />
                  <p className="font-bold text-lg relative z-10">Warm, Home-like Vibes</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <motion.div
                  className="relative p-6 bg-gradient-to-br from-blue-600 to-teal-700 rounded-2xl shadow-xl text-white overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-6 translate-x-6" />
                  <Users className="h-12 w-12 mb-4 relative z-10" />
                  <p className="font-bold text-lg relative z-10">Expert Physiotherapy</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </motion.div>

            {/* THEME UPDATE: Enhanced CTA Button */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <Link to="/about-us">
                <motion.button
                  className="group relative px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-full font-bold text-xl shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Discover Our Amazing Story
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-600 via-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;