// src/components/FacilityPage.tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Camera, Video, Utensils, Bed, Users, Heart, Wind, MapPin } from 'lucide-react';
import SEOHead from './SEOHead';

import { galleryData, heroBgImage } from '../data/facilityGallery';

// --- No need to edit below this line ---

// Component Interfaces
interface ImageLightboxProps {
  photos: Array<{ src: string; label: string }>;
  selectedIndex: number;
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

interface PhotoCardProps {
  photo: { src: string; label: string };
  onClick: () => void;
}

// Animation Variants
const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const lightboxVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
};

// Lightbox Component
const ImageLightbox: React.FC<ImageLightboxProps> = ({ photos, selectedIndex, onClose, onNavigate }) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const currentPhoto = photos[selectedIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      onNavigate('next');
    }
    if (touchStart - touchEnd < -75) {
      onNavigate('prev');
    }
  };

  useEffect(() => {
    // SSR guard
    if (typeof window === 'undefined') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center p-4"
        variants={lightboxVariants}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhoto.src}
            className="relative w-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.label}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 bg-black/70 backdrop-blur-md p-4 rounded-lg">
              <p className="text-white text-center text-sm md:text-lg leading-relaxed">
                {currentPhoto.label}
              </p>
              <p className="text-gray-400 text-center text-xs md:text-sm mt-2">
                {selectedIndex + 1} / {photos.length}
              </p>
              <p className="text-gray-500 text-center text-xs mt-2 md:hidden">
                Swipe to navigate
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 md:p-3 bg-black/60 rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
        aria-label="Close"
      >
        <X size={20} className="md:w-6 md:h-6" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNavigate('prev'); }}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 text-white p-3 bg-black/50 rounded-full hover:bg-black/80 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNavigate('next'); }}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-4 text-white p-3 bg-black/50 rounded-full hover:bg-black/80 transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={32} />
      </button>
    </motion.div>
  );
};

// Photo Card Component
const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 group cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    onClick={onClick}
    whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="relative overflow-hidden">
      <img
        src={photo.src}
        alt={photo.label}
        loading="lazy"
        decoding="async"
        className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">
          <Camera className="w-8 h-8 text-emerald-600" />
        </div>
      </div>
    </div>
    <div className="p-4">
      <p className="text-gray-700 text-sm leading-relaxed line-clamp-2 group-hover:text-emerald-700 transition-colors">
        {photo.label}
      </p>
    </div>
  </motion.div>
);

// Main Facility Page Component
const FacilityPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{ categoryIndex: number, photoIndex: number } | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const galleryContentRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const activeCategory = galleryData[activeTab];

  const handleOpenLightbox = (categoryIndex: number, photoIndex: number) => {
    setSelectedImage({ categoryIndex, photoIndex });
  };

  const handleCloseLightbox = () => setSelectedImage(null);

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    const { categoryIndex, photoIndex } = selectedImage;
    const totalPhotos = galleryData[categoryIndex].photos.length;
    let newIndex;
    if (direction === 'next') {
      newIndex = (photoIndex + 1) % totalPhotos;
    } else {
      newIndex = (photoIndex - 1 + totalPhotos) % totalPhotos;
    }
    setSelectedImage({ categoryIndex, photoIndex: newIndex });
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    // Scroll the selected tab into view on mobile
    if (scrollContainerRef.current) {
      const buttons = scrollContainerRef.current.querySelectorAll('button');
      buttons[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    // Scroll to gallery content section
    setTimeout(() => {
      const navHeight = 80; // Approximate height of fixed navbar

      // SSR guard for window access
      if (typeof window !== 'undefined' && galleryContentRef.current) {
        // Adjust offset for mobile vs desktop if needed

        const elementPosition = galleryContentRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  // Swipe detection for category navigation on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left - next category
      if (activeTab < galleryData.length - 1) {
        handleTabChange(activeTab + 1);
      }
    }
    if (touchStart - touchEnd < -100) {
      // Swipe right - previous category
      if (activeTab > 0) {
        handleTabChange(activeTab - 1);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Assisted Living Facility Tour | Columbia MD"
        description="Take an inside look at Columbia Care Home, an intimate 8-resident assisted living home in Columbia, Maryland. View our private rooms, modern therapy gym, and secure outdoor spaces."
        image="https://www.columbiacarehome.com/og-facility.jpg"
        url="https://www.columbiacarehome.com/facility"
        structuredData={{
          "@type": "ImageGallery",
          "name": "Columbia Care Home Facility Gallery",
          "about": "Interior and exterior photos of Columbia Care Home assisted living facility in Columbia Maryland"
        }}
      />
      {/* Hero Section with Background Image */}
      <div
        className="relative text-white py-16 md:py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/70 to-teal-700/70" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6 md:mb-8 transition-colors group">
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium text-sm md:text-base">Back to Home</span>
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-serif">
              Tour Our Assisted Living Facility
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-emerald-50 max-w-4xl mx-auto leading-relaxed mb-4">
              Explore our intimate, clinical-led care home in Columbia, MD
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro Description for SEO & Context */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600 text-center">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Columbia Care Home is an intimate 8-resident assisted living home located in the heart of Columbia, Maryland. Our facility is purposely designed to feel like a real home rather than a large institution, featuring sun-drenched living areas, private bedrooms, and dedicated clinical therapy spaces. Residents receive personalized support including <Link to="/memory-care" className="text-emerald-700 font-medium hover:underline">memory care</Link>, <Link to="/personal-assistance" className="text-emerald-700 font-medium hover:underline">personal assistance</Link>, and <Link to="/rehabilitation" className="text-emerald-700 font-medium hover:underline">rehabilitation services</Link>.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              We invite families to explore our facility through the high-resolution gallery below or schedule an in-person tour to experience our unique "Small Home Advantage" firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Overview Section */}
      <section className="bg-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
              Inside Our Columbia Care Home
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Users, text: "8-resident intimate care home" },
              { icon: Bed, text: "Spacious private suites" },
              { icon: Wind, text: "Large outdoor deck & backyard" },
              { icon: Heart, text: "Dedicated therapy & mobility area" },
              { icon: Utensils, text: "Comfortable shared living/dining" },
              { icon: MapPin, text: "Quiet residential location" }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-emerald-100">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <feature.icon className="w-6 h-6 text-emerald-700" />
                </div>
                <span className="text-gray-700 font-medium text-lg">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Mobile Navigation with Swipe Indicator */}
      <div className="bg-white border-b border-gray-200 sticky top-16 sm:top-[72px] md:top-20 lg:top-24 xl:top-28 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Tabs */}
          <nav className="hidden lg:flex justify-center flex-wrap gap-2 py-4" aria-label="Gallery sections">
            {galleryData.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => handleTabChange(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${activeTab === index
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Enhanced Mobile Navigation - Compact Card Style */}
          <div className="lg:hidden py-3">
            <div
              ref={scrollContainerRef}
              className="flex gap-2.5 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {galleryData.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.name}
                    onClick={() => handleTabChange(index)}
                    className={`flex-shrink-0 snap-start flex flex-col items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-medium text-[10px] transition-all min-w-[85px] ${activeTab === index
                      ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 active:scale-95'
                      }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className={`w-5 h-5`} />
                    <span className="whitespace-normal text-center leading-tight">{category.name}</span>
                    {activeTab === index && (
                      <motion.div
                        className="w-6 h-0.5 bg-white rounded-full mt-0.5"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
            {/* Swipe Indicator */}
            <div className="flex justify-center items-center gap-2 mt-2 pb-1 text-xs text-gray-400">
              <ChevronLeft className="w-3 h-3 animate-pulse" />
              <span>Swipe to browse</span>
              <ChevronRight className="w-3 h-3 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content with Swipe Support */}
      <div
        ref={galleryContentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-12">
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <activeCategory.icon className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
              </motion.div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-serif mb-3 md:mb-4">
                {activeCategory.name}
              </h2>
              <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                {activeCategory.description}
              </p>
              <div className="mt-3 md:mt-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs md:text-sm font-medium">
                  <Camera className="w-4 h-4" />
                  {activeCategory.photos.length} photos
                </span>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {activeCategory.photos.map((photo, photoIndex) => (
                <PhotoCard
                  key={photo.src}
                  photo={photo}
                  onClick={() => handleOpenLightbox(activeTab, photoIndex)}
                />
              ))}
            </div>

            {/* Navigation Dots for Mobile */}
            <div className="flex justify-center gap-2 mt-8 lg:hidden">
              {galleryData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`w-2 h-2 rounded-full transition-all ${activeTab === index
                    ? 'bg-emerald-600 w-8'
                    : 'bg-gray-300'
                    }`}
                  aria-label={`Go to ${galleryData[index].name}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Virtual Tour CTA Section */}
      <div className="bg-gradient-to-br from-gray-50 to-emerald-50 py-12 md:py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl mb-6">
              <Video className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
              Experience Our Home Virtually
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Take a comprehensive video tour and explore our facility in immersive 3D from the comfort of your own home.
            </p>
            <Link to="/virtual-tour">
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-lg hover:bg-emerald-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Video className="w-5 h-5" />
                Take the Virtual Tour
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Trust Section: Designed for Safety & Dignity */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6">
              Designed for Safety, Comfort, and Dignity
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Our home is intentionally designed to balance medical-grade safety with residential comfort. Wide hallways, supportive mobility spaces, and carefully arranged common areas help residents move confidently throughout the home while maintaining a familiar, dignified atmosphere. Every bathroom is fully accessible, every floor is non-slip, and every room is filled with the light of home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white font-serif mb-3 md:mb-4">
              Ready to Visit in Person?
            </h2>
            <p className="text-base md:text-xl text-emerald-50 mb-6 md:mb-8 px-4">
              Schedule a personalized tour and experience our unique small home culture firsthand
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/schedule-a-tour" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-700 rounded-full font-bold text-lg shadow-lg hover:bg-emerald-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Your Visit
                </motion.button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-800/30 text-white border-2 border-white/50 rounded-full font-bold text-lg hover:bg-emerald-800/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Speak With a Care Advisor
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <ImageLightbox
            photos={galleryData[selectedImage.categoryIndex].photos}
            selectedIndex={selectedImage.photoIndex}
            onClose={handleCloseLightbox}
            onNavigate={handleNavigation}
          />
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default FacilityPage;