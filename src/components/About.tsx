import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Import your images here
import dignifiedCareImage from '../assets/dignifiedpersonalassistance.avif';
import comfortingHavenImage from '../assets/comforting_homelike_haven.avif';
import nurseCheckingImage from '../assets/medium-shot-nurse-checking-man_converted.avif';
import caregiverWheelchairImage from '../assets/caregiver-taking-care-woman-wheelchair_converted.avif';
import nurseListeningImage from '../assets/nurse-retirement-home-listening-old-sick-man-heart-bead-pensioner-lies-hospital-bed_converted.avif';

const ElegantPeekAbout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Updated with actual image imports
  const images = [
    { src: dignifiedCareImage, alt: 'Dignified personal assistance care' },
    { src: comfortingHavenImage, alt: 'Comforting homelike environment' },
    { src: nurseCheckingImage, alt: 'Nurse providing medical care' },
    { src: caregiverWheelchairImage, alt: 'Caregiver assisting with mobility' },
    { src: nurseListeningImage, alt: 'Nurse listening and providing emotional support' },
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Get the three images to display
  const mainImage = images[currentIndex];
  const leftPeekImage = images[(currentIndex + 1) % images.length];
  const rightPeekImage = images[(currentIndex + 2) % images.length];

  return (
    <section id="about" className="py-12 lg:py-16 bg-gradient-to-br from-stone-100 to-emerald-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Desktop: Elegant Peek | Mobile: Simple Carousel */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Desktop Layout */}
            <div className="hidden lg:block relative h-[450px]">
              
              {/* Main Image with Navigation */}
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl z-30">
                <img 
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => prevImage()}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">
                    {currentIndex + 1} / {images.length}
                  </span>
                </div>
              </div>
              
              {/* Peeking Images - Interactive */}
              <button
                onClick={nextImage}
                className="absolute bottom-0 left-0 w-[48%] h-[150px] rounded-xl overflow-hidden shadow-lg transform translate-y-[50px] z-20 transition-transform hover:translate-y-[45px]"
              >
                <img 
                  src={leftPeekImage.src}
                  alt={leftPeekImage.alt}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </button>
              
              <button
                onClick={() => setCurrentIndex((currentIndex + 2) % images.length)}
                className="absolute bottom-0 right-0 w-[48%] h-[150px] rounded-xl overflow-hidden shadow-lg transform translate-y-[50px] z-20 transition-transform hover:translate-y-[45px]"
              >
                <img 
                  src={rightPeekImage.src}
                  alt={rightPeekImage.alt}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </button>
            </div>

            {/* Mobile Layout - Simple Carousel */}
            <div className="lg:hidden relative h-[300px]">
              <motion.div 
                className="relative h-full rounded-2xl overflow-hidden shadow-xl"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, { offset }) => {
                  if (offset.x > 50) prevImage();
                  else if (offset.x < -50) nextImage();
                }}
              >
                <motion.img 
                  key={currentIndex}
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Mobile Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex 
                          ? 'bg-white w-6' 
                          : 'bg-white/60'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content Section - Keeping your original styling */}
          <motion.div 
            className="space-y-8 lg:pl-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Mission Tag */}
            <div>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full text-sm font-semibold mb-4">
                ✨ Our Mission
              </span>
              
              {/* Main Heading */}
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-800 bg-clip-text text-transparent leading-tight font-serif mb-6">
                A Home Filled with Heart & Joy
              </h2>
              
              {/* Description */}
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Columbia Care Home was founded with a{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent font-bold">
                  simple yet powerful mission
                </span>
                : to provide compassionate, dignified care in a setting that sparkles with warmth and feels like home.
              </p>
            </div>
            
            {/* Story Section */}
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
            
            {/* CTA Button */}
            <div className="pt-4">
              <Link to="/about-us">
                <motion.button 
                  className="group relative px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-full font-bold text-xl shadow-2xl overflow-hidden hover:shadow-emerald-500/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Discover Our Amazing Story
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ElegantPeekAbout;