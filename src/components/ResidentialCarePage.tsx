import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home, Users, Stethoscope } from 'lucide-react';
import residentialHomeImage from '../assets/Facility/Our Home (Exterior)/our-home-front-view.jpg';
import SEOHead from './SEOHead';

const ResidentialCarePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Level 3 Residential Care in Columbia, MD | Columbia Care Home"
        description="Our physical therapist-led 8-resident home in Columbia, MD provides specialized Level 3 residential care for seniors with complex medical and mobility needs."
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
              Level 3 Residential Care in Columbia, MD
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Residential Care Redefined in a specialized 8-Resident Home led by Doctors of Physical Therapy.
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
              loading="lazy" src={residentialHomeImage}
              alt="Welcoming front view of Columbia Care Home, an intimate 8-resident residential care home in Columbia, MD"
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
            <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/30 rounded-r-lg">
              Developed by Doctors of Physical Therapy Bhargav Patel and Sheetal Khadsare, whose clinical backgrounds in geriatric rehabilitation shape our approach to residential care.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Unlike traditional assisted living homes operated by non-clinical staff, Columbia Care Home was founded and is guided by <span className="text-emerald-700 font-semibold">Doctors of Physical Therapy</span> with deep experience in geriatric rehabilitation. Our home functions as a highly personalized form of assisted living, designed for seniors throughout Howard County who need daily support but deserve a peaceful residential environment rather than a large institutional facility.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Maryland’s <span className="text-emerald-700 font-semibold">Level 3 assisted living license</span> allows us to care for residents with significant medical needs, mobility challenges, and advanced assistance requirements. This same clinical rigor and attention to detail extends to our <Link to="/memory-care" className="text-emerald-700 font-semibold hover:underline">Specialized Memory Care</Link> and <Link to="/rehabilitation" className="text-emerald-700 font-semibold hover:underline">Rehabilitation Services</Link>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With our site-wide <span className="text-emerald-700 font-semibold">1:3 staffing protocol</span> and dedicated <span className="text-emerald-700 font-semibold">overnight awake staff</span>, we ensure that every resident's medical, physical, and emotional needs are met with a degree of attention that massive 100-bed complexes simply cannot match. For more on how we manage these transitions, read our guide on <Link to="/blog/guide-to-transitioning-assisted-living-columbia-md" className="text-emerald-700 font-bold underline decoration-emerald-200 hover:decoration-emerald-500 transition-colors">transitioning to assisted living</Link>.
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
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">Stair Glide Accessible</h3>
              <p className="text-gray-600 leading-relaxed">
                Falls are the primary mechanism of decline in seniors. Our home is equipped with a professional stair glide, ensuring safe and comfortable transitions between floors. This allows residents to enjoy the full space of a real home while maintaining the highest level of safety.
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
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">The 1-to-3 Protocol</h3>
              <p className="text-gray-600 leading-relaxed">
                Corporate facilities often stretch one aide across 20+ residents. At Columbia Care Home, our 8-bed limit, 1:3 staffing ratio, and 24/7 overnight awake staff guarantee that your loved one has immediate, personalized assistance the moment they need to stand, walk, or eat.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-teal-800 rounded-2xl shadow-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">
            Speak Directly With Our Founders
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Discuss your clinical care needs without a middleman. Schedule a private tour of our 8-resident home today.
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