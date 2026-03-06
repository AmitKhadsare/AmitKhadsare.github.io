import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Stethoscope } from 'lucide-react';

const About = () => (
  <section id="about" className="py-20 lg:py-24 bg-white overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-bold tracking-wide uppercase border border-emerald-100 mb-4">
          <Stethoscope className="w-4 h-4" />
          The 8-Bed Clinical Advantage
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 leading-tight font-serif">
          Corporate facilities manage the masses.<br />
          <span className="text-emerald-700">We manage the individual.</span>
        </h2>

        <p className="text-xl text-stone-600 leading-relaxed font-serif italic max-w-3xl mx-auto">
          "When you tour a 100-bed facility, you see beautiful dining halls. What you don't see is how they operate at 5:00 PM when staffing drops and 30 residents need critical redirection simultaneously."
        </p>

        <div className="text-lg text-stone-700 leading-relaxed space-y-6 text-left max-w-3xl mx-auto bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-inner">
          <p>
            Columbia Care Home was founded by <strong className="text-stone-900">Bhargav Patel</strong> and <strong className="text-stone-900">Sheetal Khadsare</strong>, Doctors of Physical Therapy who spent years treating seniors in massive corporate facilities. They saw firsthand the catastrophic falls, the heavy chemical sedation used to manage behaviors, and the loss of dignity that happens when care is industrialized.
          </p>
          <p>
            They built this <strong className="text-emerald-700">8-bed residential model</strong> to provide a radical alternative:
            a strict 1:4 caregiver ratio where clinical oversight is proactive, not reactive. We don't wait for sunset to manage anxiety. We use a physiological, biomechanical approach to aging that keeps your loved one safe, active, and medication-free whenever possible.
          </p>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/about-us">
            <motion.button
              className="group relative px-8 py-4 bg-emerald-700 text-white rounded-full font-bold text-lg shadow-lg overflow-hidden hover:bg-emerald-800 transition-all w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Meet the Clinical Founders
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
          <div className="flex items-center gap-2 text-stone-500 font-medium text-sm mt-4 sm:mt-0 sm:ml-4">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Level 3 High-Acuity Licensed
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;