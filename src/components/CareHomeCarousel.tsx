import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CareHomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel data with Pexels images
  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Elegant Living Spaces',
      description: 'Our thoughtfully designed rooms offer a perfect blend of comfort and sophistication, with plenty of natural light and personalized touches.',
      badge: 'Premium Care'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Dedicated Care Team',
      description: 'Our highly trained caregivers provide round-the-clock support with warmth and professionalism, ensuring personalized attention.',
      badge: '24/7 Support'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Enriching Activities',
      description: 'From morning yoga to afternoon tea socials, our diverse activity program promotes wellness and meaningful connections.',
      badge: 'Active Living'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1906437/pexels-photo-1906437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Beautiful Gardens',
      description: 'Our meticulously maintained gardens provide peaceful outdoor spaces for gentle walks and quiet reflection.',
      badge: 'Serene Environment'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Exceptional Cuisine',
      description: 'Our executive chef prepares nutritious, restaurant-quality meals using fresh, seasonal ingredients.',
      badge: 'Gourmet Dining'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  // Handle swipe gestures
  const handleDragEnd = (_: any, { offset, velocity }: any) => {
    const swipe = offset.x * velocity.x;
    if (swipe < -10000) {
      nextSlide();
    } else if (swipe > 10000) {
      prevSlide();
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="text-center mb-10 lg:hidden">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-800 bg-clip-text text-transparent font-serif mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience Our Care
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Take a glimpse into the warm, nurturing environment we've created for our residents
        </motion.p>
      </div>

      {/* Carousel Container */}
      <motion.div 
        className="relative overflow-hidden rounded-2xl shadow-2xl bg-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides Container */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              {/* Image with Gradient Overlay */}
              <div className="relative h-full w-full">
                <img 
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Badge */}
                <motion.div 
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-emerald-700 font-semibold text-sm">
                    {slides[currentSlide].badge}
                  </span>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="max-w-3xl">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-serif">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                      {slides[currentSlide].description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-emerald-700 transition-colors" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-emerald-700 transition-colors" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 h-2 bg-white' 
                  : 'w-2 h-2 bg-white/60 hover:bg-white/80'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 0
            }}
            key={currentSlide}
          />
        </div>
      </motion.div>

      {/* Thumbnail Navigation - Desktop Only */}
      <div className="hidden lg:flex gap-4 mt-8 justify-center">
        {slides.map((slide, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
              index === currentSlide 
                ? 'ring-4 ring-emerald-600 ring-offset-2' 
                : 'opacity-70 hover:opacity-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={slide.image}
              alt={`Thumbnail ${index + 1}`}
              className="w-32 h-20 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CareHomeCarousel;