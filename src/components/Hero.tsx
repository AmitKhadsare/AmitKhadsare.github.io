// src/components/Hero.tsx
import { motion, Variants } from 'framer-motion';
import { Heart, Shield, Users, MessageSquare } from 'lucide-react';
import HeroVisual from './HeroVisual';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0.01 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0.01, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const trustIndicators = [
    {
      icon: Shield,
      title: "Level 3 Licensed",
      subtitle: "Complex Care Ready",
      detail: "State-licensed for high-acuity needs",
      iconBg: "bg-emerald-900/80",
      iconFill: "text-emerald-400 fill-emerald-400/50"
    },
    {
      icon: Heart,
      title: "Physical Therapist-Owned",
      subtitle: "Clinical Oversight",
      detail: "Led by Doctors of Physical Therapy",
      iconBg: "bg-emerald-900/80",
      iconFill: "text-emerald-400 fill-emerald-400/50"
    },
    {
      icon: Users,
      title: "Strict 1:4 Staffing",
      subtitle: "Unmatched Attention",
      detail: "Maximum of 8 residents total",
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
              <motion.div
                className="relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
                  <span className="h-[1px] w-6 bg-emerald-500/50 hidden sm:block"></span>
                  <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
                    Physical Therapist-Led
                  </span>
                  <span className="h-[1px] w-6 bg-emerald-500/50 hidden sm:block"></span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-[1.1] font-serif">
                  <span className="text-white block">
                    A Higher Standard of
                  </span>
                  <span className="text-white block">
                    Residential Assisted Living.
                  </span>
                </h1>
              </motion.div>
              <p className="text-xl text-stone-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Created by Doctors of Physical Therapy, Columbia Care Home combines high-acuity clinical oversight with the calm environment of an intimate 8-resident residential home and a strict 1:4 caregiver-to-resident ratio.
              </p>
              <p className="text-stone-300/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Our care model prioritizes individualized attention over institutional scale. Instead of large corridors and rotating staff, residents receive consistent supervision, mobility support, and personal care within a calm residential environment.
              </p>
            </motion.div>

            {/* --- OPTIMIZED CTA BUTTON --- */}
            <motion.div className="flex justify-center lg:justify-start" variants={itemVariants}>
              <a
                href="/contact"
                className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 sm:px-10 sm:py-5 rounded-full font-semibold shadow-2xl overflow-hidden block w-fit"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <span className="relative z-10 flex items-center justify-center gap-3 sm:gap-4">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-100 flex-shrink-0" />
                  <span className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="text-lg sm:text-xl font-bold leading-tight">Contact Our Clinical Team</span>
                    <span className="text-xs sm:text-sm text-emerald-100 font-normal">Direct Physical Therapist Access</span>
                  </span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  initial={{ x: "-200%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </a>
            </motion.div>
            {/* --- END OPTIMIZED CTA BUTTON --- */}
          </motion.div>

          {/* New Modular Visual Component */}
          <motion.div className="flex-1 relative order-1 lg:order-2 w-full" variants={itemVariants}>
            <HeroVisual />
          </motion.div>
        </div>

        {/* Trust Indicators - Now below visual/content for better desktop alignment */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 sm:mt-16 border-t border-slate-800/50 pt-12 sm:pt-16"
          variants={itemVariants}
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-6 bg-slate-800/40 rounded-2xl shadow-sm overflow-hidden backdrop-blur-md border border-slate-700/30 text-center sm:text-left hover:bg-slate-800/60 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div
                className={`p-4 ${indicator.iconBg} rounded-full relative`}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <indicator.icon className={`${indicator.iconFill} relative z-10`} size={24} />
              </div>
              <div className="relative z-10">
                <div className="font-bold text-lg text-stone-200">{indicator.title}</div>
                <div className="text-stone-400 font-medium">{indicator.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
