import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      image: 'https://images.pexels.com/photos/2852063/pexels-photo-2852063.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Personal Care',
      description: 'Compassionate assistance with daily activities including bathing, dressing, and grooming with dignity and respect.'
    },
    {
      image: 'https://images.pexels.com/photos/3771596/pexels-photo-3771596.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Health Monitoring',
      description: '24/7 medical supervision and health monitoring by our qualified nursing staff to ensure optimal wellness.'
    },
    {
      image: 'https://images.pexels.com/photos/3759459/pexels-photo-3759459.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Medication Management',
      description: 'Professional medication administration and management to ensure proper dosing and timing for all residents.'
    },
    {
      image: 'https://images.pexels.com/photos/3760003/pexels-photo-3760003.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Physical Therapy',
      description: 'Specialized rehabilitation services and physical therapy to maintain mobility and independence.'
    },
    {
      image: 'https://images.pexels.com/photos/3764285/pexels-photo-3764285.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Social Engagement',
      description: 'Meaningful activities and social programs that promote mental wellness and community connection.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="relative">
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {carouselImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <div className="max-w-7xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">{slide.title}</h3>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300"
        >
          <ChevronLeft className="text-white" size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300"
        >
          <ChevronRight className="text-white" size={20} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;