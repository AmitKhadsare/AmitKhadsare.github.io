import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';
import myPhoto from '../assets/about-us.png';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-stone-100 via-stone-50 to-emerald-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-700 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-stone-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-stone-800 leading-tight font-serif">
                Compassionate Care for
                <span className="text-emerald-700 block">Your Loved Ones</span>
              </h1>
              
              <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
                At Columbia Care Home, we provide exceptional senior care with dignity, 
                respect, and personalized attention. Our experienced team creates a warm, 
                family-like environment where residents thrive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-700 text-white px-8 py-4 rounded-full hover:bg-emerald-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule a Tour Today
              </button>
              <button className="border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-full hover:bg-emerald-700 hover:text-white transition-all duration-300 font-semibold text-lg">
                Download Brochure
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Shield className="text-emerald-700" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-stone-800">Licensed</div>
                  <div className="text-sm text-stone-600">State Certified</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="p-2 bg-red-100 rounded-full">
                  <Heart className="text-red-500" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-stone-800">24/7 Care</div>
                  <div className="text-sm text-stone-600">Always Available</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Users className="text-emerald-700" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-stone-800">Family Focused</div>
                  <div className="text-sm text-stone-600">Personal Approach</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={myPhoto} 
                alt="About Us"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-stone-200 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;