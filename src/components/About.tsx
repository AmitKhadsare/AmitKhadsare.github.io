import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Heart, Home, Users } from 'lucide-react';
import myPhoto from '../assets/about-us.png';

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.5,
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-24 bg-gradient-to-br from-stone-100 to-emerald-50 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <motion.div className="relative order-2 lg:order-1" variants={imageVariants}>
            <div className="relative z-10">
              <img
                src={myPhoto}
                alt="Dr. Bhargav Patel and Dr. Sheetal Patel"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-stone-200 rounded-2xl transform -rotate-3 scale-105 opacity-20"></div>
          </motion.div>

          <motion.div className="space-y-10 order-1 lg:order-2" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 leading-tight font-serif mb-6">
                Our Mission: A Home Filled with Heart
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Columbia Care Home was founded with a simple yet powerful mission: to provide compassionate, dignified care to elderly individuals in a setting that truly feels like home.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-emerald-700 font-serif mb-4">
                Our Story
              </h3>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                At the heart of this vision is Dr. Bhargav Patel and his wife Dr. Sheetal Patel, both qualified physiotherapists. They bring medical expertise and a deep sense of purpose to create a space where residents feel safe, valued, and cared for like family.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">
                <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
                  <Heart className="mx-auto text-red-500 h-10 w-10 mb-2" />
                  <p className="font-semibold text-stone-700">Compassionate 24/7 Staff</p>
                </div>
                <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
                  <Home className="mx-auto text-emerald-700 h-10 w-10 mb-2" />
                  <p className="font-semibold text-stone-700">Warm, Home-like Environment</p>
                </div>
                <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
                  <Users className="mx-auto text-blue-500 h-10 w-10 mb-2" />
                  <p className="font-semibold text-stone-700">Inclusive Physiotherapy</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link to="/about-us">
                <button className="bg-emerald-700 text-white px-8 py-4 rounded-full hover:bg-emerald-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Learn More About Us
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;