import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Phone, MessageSquare, Calendar } from 'lucide-react';
import familyImage from '../assets/family.avif';

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
    <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="w-8 h-8 text-stone-700" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const FamilyPartnershipPage = () => {
  const features = [
    {
      icon: Calendar,
      title: "Regular Care Conferences",
      description: "Scheduled meetings with our care team to discuss your loved one's progress, health, and happiness."
    },
    {
      icon: MessageSquare,
      title: "Open Communication Channels",
      description: "A dedicated point of contact on our team ensures you always have someone to turn to with questions or concerns."
    },
    {
      icon: Phone,
      title: "Proactive Updates",
      description: "We believe in transparency, providing immediate updates on any changes in health or care plans."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
              A Partnership with Families
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Transparent communication and dedicated support, because you are a vital part of your loved one's care team.
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
              src={familyImage} 
              alt="A family visiting a resident at the care home" 
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
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Stronger Together</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Choosing a care home for a loved one is a journey you don't have to walk alone. We view our relationship with families as a true partnership, built on a foundation of trust, transparency, and open communication.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your insights and involvement are invaluable to us. By working together, we can create the most supportive, responsive, and loving environment possible, ensuring your family member receives care that truly feels like it's coming from family.
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">How We Keep You Connected</h2>
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
            Let's Start the Conversation
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're here to answer your questions and welcome you into our community. Reach out to us today.
          </p>
          <Link to="/contact">
            <motion.button
              className="group px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Contact Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FamilyPartnershipPage;