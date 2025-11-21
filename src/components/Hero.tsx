// src/components/Hero.tsx
import { motion, Variants } from 'framer-motion';
import { Video } from 'lucide-react';
import { Heart, Shield, Users } from 'lucide-react';
import carehomeImage from '../assets/carehome.avif';

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

  const trustIndicators = [
    {
      icon: Shield,
      title: "Licensed",
      subtitle: "State Certified",
      detail: "Fully licensed by Maryland Department of Health",
      iconBg: "bg-emerald-900/80",
      iconFill: "text-emerald-400 fill-emerald-400/50"
    },
    {
      icon: Heart,
      title: "24/7 Care",
      subtitle: "Always Available",
      detail: "Round-the-clock nursing support",
      iconBg: "bg-red-900/50",
      iconFill: "text-red-400 fill-red-400/50"
    },
    {
      icon: Users,
      title: "Family Focused",
      subtitle: "Personal Approach",
      detail: "Your loved one is our family",
      iconBg: "bg-emerald-900/80",
      iconFill: "text-emerald-400 fill-emerald-400/50"
    }
  ];

  return (
    <motion.section
      id="home"
      className="relative bg-gradient-to-br from-slate-900 to-emerald-900 py-16 lg:py-12 overflow-hidden text-center lg:text-left"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl opacity-10 lg:opacity-5"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-10 lg:opacity-5"
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-600 rounded-full filter blur-3xl opacity-5 lg:hidden"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute inset-0 bg-slate-800/10 opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            className="flex-1 space-y-8 order-2 lg:order-1"
            variants={containerVariants}
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.h1
                className="text-5xl lg:text-6xl font-bold leading-tight font-serif relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent block">
                  A Home of Comfort,
                </span>
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent block">
                  A Heart of Care.
                </span>
              </motion.h1>
              <p className="text-xl text-stone-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Find peace of mind knowing your loved one is in a safe, nurturing home where they are treated with dignity, respect, and the personalized attention they deserve.
              </p>
            </motion.div>

            {/* --- UPDATED CTA BUTTON --- */}
            <motion.div className="flex justify-center lg:justify-start" variants={itemVariants}>
              <a href="/virtual-tour">
                <motion.button
                  className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Video className="w-6 h-6" />
                    <span className="flex flex-col items-start">
                      <span className="text-xl font-bold">Take a Virtual Tour</span>
                      <span className="text-sm text-emerald-100 font-normal">Video & 3D Experience</span>
                    </span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    initial={{ x: "-200%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </motion.button>
              </a>
            </motion.div>
            {/* --- END UPDATED CTA BUTTON --- */}

            {/* Trust Indicators */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8" variants={itemVariants}>
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  className="group relative flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg shadow-sm overflow-hidden backdrop-blur-sm border border-slate-700/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div
                    className={`p-3 ${indicator.iconBg} rounded-full relative`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <indicator.icon className={`${indicator.iconFill} relative z-10`} size={24} />
                  </div>
                  <div className="relative z-10">
                    <div className="font-semibold text-stone-200">{indicator.title}</div>
                    <div className="text-sm text-stone-400">{indicator.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div className="flex-1 relative order-1 lg:order-2" variants={itemVariants}>
            <div className="relative z-10">
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  loading="lazy" src={carehomeImage}
                  alt="A compassionate caregiver with a resident"
                  className="rounded-2xl shadow-2xl w-full h-auto max-h-[500px] object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 blur-xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full opacity-15 blur-xl"
                animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-slate-500 rounded-2xl transform rotate-3 scale-105 opacity-20"
              animate={{ rotate: [3, 6, 3] }}
              transition={{ duration: 15, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;