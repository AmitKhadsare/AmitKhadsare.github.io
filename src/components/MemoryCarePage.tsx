import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BrainCircuit, Lock, Puzzle } from 'lucide-react';
import memoryCareImage from '../assets/mentalhealth.avif';
import SEOHead from './SEOHead';

const MemoryCarePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Physical Therapist-Led Memory Care & Dementia Support | Columbia MD"
        description="Compassionate Level 3 memory care for residents with Alzheimer's and dementia. Structured routines designed by Doctors of Physical Therapy to reduce anxiety and maintain mobility in an intimate 8-bed home."
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
              Clinical Memory Care
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              A secure, clinically-supervised residence designed specifically to reduce anxiety and preserve dignity for those with Alzheimer's and dementia.
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
            <h2 className="text-3xl font-bold text-gray-900 font-serif">A Home Designed for Cognitive Security</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Caring for a loved one with memory loss requires more than just a locked door—it requires a profound understanding of how the environment impacts cognitive health. At Columbia Care Home, our 8-bed layout is a medical advantage. Unlike large facilities where cavernous hallways can trigger "sundowning" and agitation, our home offers a familiar, navigable scale that fosters calm.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded by Doctors of Physical Therapy, our program is built on **structured daily routines** specifically designed to maintain mobility and reduce the anxiety often associated with dementia. We don't just provide "person-centered" care; we provide clinically-informed support that acknowledges each resident's unique life history and physical needs.
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
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">The 1-to-4 Protocol</h3>
              <p className="text-gray-600 leading-relaxed">
                Memory care requires deep familiarity. With only 8 residents in our home, our unmatched staffing ratio ensures that our caregivers know exactly how to redirect your loved one's anxiety based on their specific personality and history.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-emerald-800 rounded-2xl shadow-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">
            Consult With Our Clinical Founders
          </h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Memory care placement is a serious medical decision. Speak directly with Bhargav or Sheetal to discuss if our 8-bed clinical model is the right fit.
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