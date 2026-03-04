import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home, Users, Stethoscope } from 'lucide-react';
import comfortingHavenImage from '../assets/comforting_homelike_haven.avif';
import SEOHead from './SEOHead';

const ResidentialCarePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Level 3 Residential Care & Senior Living | Columbia MD"
        description="Authentic, 8-bed residential senior care in Columbia, MD. Level 3 medical expertise led by Doctors of Physical Therapy in an intimate family home environment."
        image="https://www.columbiacarehome.com/og-residential-care.jpg"
        url="/residential-care"
      />
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6">
              <ArrowLeft className="w-5 h-5" />
              Back to All Services
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-4">
              Residential Care Redefined
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              A secure, clinically-supervised home at Hickory Point Lane where 8 residents receive the level of personal attention corporate facilities simply cannot provide.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Introduction Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            className="rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              loading="lazy" src={comfortingHavenImage}
              alt="The bright, accessible, single-floor living space at 10610 Hickory Point Lane"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 font-serif">A Multi-Generational Home, Not a Facility</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe senior living should feel like a true home, not a hotel. Our residence at 10610 Hickory Point Lane is a spacious, light-filled 2007 home specifically chosen for its layout. With single-floor navigation and wide common areas, we've minimized the physical barriers that often lead to falls and confusion in larger institutional settings.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded by Doctors of Physical Therapy, our Level 3 medical expertise allows us to provide a level of oversight that is both clinically rigorous and deeply personal. With an incredible **1-to-8 caregiver ratio**, we ensure that every resident's medical, physical, and emotional needs are met with a degree of attention that massive 100-bed complexes legally and logistically cannot match.
            </p>
          </motion.div>
        </div>

        {/* The 8-Bed Clinical Reality */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-24">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-10">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">Single-Floor Navigation</h3>
              <p className="text-gray-600 leading-relaxed">
                Falls are the primary mechanism of decline in seniors. By utilizing a spacious 2007 residential property, we provide an environment without elevators or complex floor plans. Every common area and bedroom is immediately accessible.
              </p>
            </div>
            <div className="p-10">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">Level 3 Medical Oversight</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't just provide 'room and board.' As a Level 3 licensed home managed by Doctors of Physical Therapy, we are state-certified to handle complex medical protocols, medication administration, and significant physical assistance.
              </p>
            </div>
            <div className="p-10">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">The 1-to-8 Maximum</h3>
              <p className="text-gray-600 leading-relaxed">
                Corporate facilities often stretch one aide across 20+ residents. At Columbia Care Home, our strict 8-bed limit guarantees that your loved one has immediate, personalized assistance the moment they need to stand, walk, or eat.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-teal-800 rounded-2xl shadow-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">
            Discuss Your Loved One's Needs
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Bypass the placement agencies and speak directly with the clinical founders of our home.
          </p>
          <Link to="/contact">
            <motion.button
              className="group px-8 py-4 bg-white text-teal-900 rounded-full font-bold text-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Schedule a Personal Tour
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResidentialCarePage;