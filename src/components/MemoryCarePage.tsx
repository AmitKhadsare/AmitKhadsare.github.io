import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BrainCircuit, Lock, Puzzle } from 'lucide-react';
import memoryCareImage from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-living-room-seating.jpg';
import SEOHead from './SEOHead';

const MemoryCarePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Physical Therapist-Led Memory Care in Columbia, MD | Columbia Care Home"
        description="Our physical therapist-led 8-resident home in Columbia, MD provides specialized memory care for seniors with dementia, sundowning, and behavioral anxiety."
        image="https://www.columbiacarehome.com/og-memory-care.jpg"
        url="/memory-care"
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
              Specialized Memory Care in Columbia, MD
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Behavioral Oversight in an 8-Resident Clinical Home led by Doctors of Physical Therapy.
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
              loading="lazy" src={memoryCareImage}
              alt="A peaceful, secure seating area at Columbia Care Home's 8-bed residence"
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
              Developed by Doctors of Physical Therapy Bhargav Patel and Sheetal Khadsare, whose clinical backgrounds in geriatric rehabilitation shape our approach to dementia care.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Unlike large facilities where 100+ residents create a high-stimulus environment that triggers sunsetting anxiety, our home is built for <span className="text-emerald-700 font-semibold">physiological safety</span>. Every hallway and common area is scaled to prevent the cognitive overwhelm that leads to exit-seeking behaviors in seniors with dementia.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The decision to seek memory care in Howard County often comes during a crisis—usually a fall or an unmanageable sundowning episode. Our approach focuses on stabilizing these behaviors through <span className="text-emerald-700 font-semibold">consistent mobility oversight</span> and daytime regulation, utilizing our clinical <Link to="/blog/managing-sundowning-memory-care-columbia-md" className="text-emerald-700 font-bold underline decoration-emerald-200 hover:decoration-emerald-500 transition-colors">sundowning protocol</Link> to reduce the need for heavy chemical sedation. Our daytime mobility routines are based on the same principles used in our <Link to="/rehabilitation" className="text-emerald-700 font-semibold hover:underline">rehabilitation</Link> and <Link to="/residential-care" className="text-emerald-700 font-semibold hover:underline">residential care</Link> protocols.
            </p>
          </motion.div>
        </div>

        {/* Clinical Explainer Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-24">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-10">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">Secure Independence</h3>
              <p className="text-gray-600 leading-relaxed">
                Wandering is a natural response to the anxiety of memory loss. Our property at 10610 Hickory Point Lane is fully secured, allowing residents the freedom to pace and explore safely without the restrictive feel of a traditional 'locked ward'.
              </p>
            </div>
            <div className="p-10">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <BrainCircuit className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">Sundowning Management</h3>
              <p className="text-gray-600 leading-relaxed">
                As physical therapists, we know that unregulated energy leads to evening agitation. Our daytime mobility routines are clinically designed to stimulate the body, significantly reducing the severity of 'sundowning' and promoting restful sleep.
              </p>
            </div>
            <div className="p-10">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <Puzzle className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">The Howard County 1:4 Protocol</h3>
              <p className="text-gray-600 leading-relaxed">
                Memory care requires deep familiarity. With only 8 residents in our home, our unmatched staffing ratio ensures that our caregivers know exactly how to redirect your loved one's anxiety based on their specific personality and history.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-emerald-800 rounded-2xl shadow-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">
            Discuss Your Loved One’s Care Needs
          </h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Memory care is a clinical decision, not just a lifestyle choice. Speak directly with our founders to determine if our 8-resident care model is the right medical fit for your family.
          </p>
          <Link to="/contact">
            <motion.button
              className="group px-8 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Contact Our Admissions Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemoryCarePage;