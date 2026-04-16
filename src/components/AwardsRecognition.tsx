import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const AwardsRecognition: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-white to-[#f0f9f4] relative overflow-hidden">
      {/* Background decoration to match site vibe */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100/40 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold tracking-widest uppercase border border-emerald-200">
              <Award className="w-4 h-4" />
              2026 Excellence Featured
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] font-serif">
              Recognized for <span className="text-emerald-700">Clinical Excellence</span>
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed font-serif italic border-l-4 border-emerald-500 pl-6">
              "Awards are a reflection of the specialized care our physical therapy-led team provides to the Columbia community every single day."
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Verified for Excellence in Senior Care in Maryland</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Recognized for physical therapist-led clinical oversight</span>
              </div>
            </div>

            <p className="text-slate-500 pt-4">
              We are honored to be featured by <span className="font-semibold text-emerald-800">Assisted Living Magazine</span> as a premier senior living resource in the region.
            </p>
          </motion.div>

          {/* Right Side: The Massive Badge Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Card "Seat" */}
            <div className="absolute inset-0 bg-emerald-900/5 translate-x-4 translate-y-4 rounded-[2rem] blur-sm -z-10" />
            
            <a
              href="https://assistedlivingmagazine.com/nursing-home/columbia-care-home/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="group block bg-white p-12 lg:p-16 rounded-[2rem] shadow-[0_20px_50px_rgba(5,150,105,0.1)] border border-emerald-50 hover:shadow-[0_40px_80px_rgba(5,150,105,0.15)] transition-all duration-500"
              aria-label="View our Excellence in Senior Care award on Assisted Living Magazine"
            >
              <div className="flex flex-col items-center">
                <img
                  src="/BestinSeniorLivin.png"
                  alt="2026 Excellence in Senior Care Award Badge"
                  className="w-full max-w-[320px] h-auto drop-shadow-2xl scale-100 group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="mt-12 text-center">
                  <span className="inline-block px-6 py-3 bg-slate-900 text-white rounded-full font-bold text-sm tracking-wide group-hover:bg-emerald-700 transition-colors">
                    View Published Feature
                  </span>
                  <p className="mt-4 text-slate-400 text-xs font-semibold uppercase tracking-widest">
                    Maryland Level 3 Licensed Facility
                  </p>
                </div>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;
