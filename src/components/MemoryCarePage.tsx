import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BrainCircuit, Lock, Puzzle } from 'lucide-react';
import memoryCareImage from '../assets/mentalhealth.avif';
import SEOHead from './SEOHead';

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="w-8 h-8 text-indigo-700" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const MemoryCarePage = () => {
  const features = [
    {
      icon: Lock,
      title: "Secure & Safe Environment",
      description: "Our memory care wing is designed with enhanced safety features, including secure exits and monitored spaces."
    },
    {
      icon: BrainCircuit,
      title: "Cognitive Enhancement",
      description: "We use evidence-based programs, including sensory and reminiscence therapies, to support cognitive function."
    },
    {
      icon: Puzzle,
      title: "Specially Trained Staff",
      description: "Our team receives ongoing, specialized training in dementia and Alzheimer's care to provide expert, patient support."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Specialized Memory Care & Dementia Support | Columbia Care"
        description="Secure and compassionate memory care environment for residents with Alzheimer's and dementia, focusing on safety, dignity, and cognitive support."
        keywords="memory care, dementia care, alzheimers care, secure facility, cognitive support, senior safety"
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
              Specialized Memory Care
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              A secure, supportive, and engaging environment for residents with Alzheimer's and dementia.
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
              alt="A caregiver providing supportive interaction for memory care"
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
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Care that Cherishes Every Moment</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Caring for a loved one with memory loss requires a special kind of compassion and expertise. Our Specialized Memory Care program is designed to provide a safe, structured, and nurturing environment that minimizes confusion and anxiety.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We focus on "person-centered" care, which means we get to know each resident's life story, preferences, and routines. This allows us to create moments of joy, connection, and purpose, helping residents live a dignified and fulfilling life at every stage.
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Memory Care Program</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Schedule a Private Consultation
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We understand this journey can be challenging. Let's talk about how our specialized program can support your family.
          </p>
          <Link to="/contact">
            <motion.button
              className="group px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/30"
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