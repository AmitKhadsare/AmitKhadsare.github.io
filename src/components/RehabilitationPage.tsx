import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, HeartPulse, ShieldCheck, TrendingUp } from 'lucide-react';
import physicalTherapyImage from '../assets/physical_therapy.avif';

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
    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="w-8 h-8 text-emerald-700" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const RehabilitationPage = () => {
  const features = [
    {
      icon: HeartPulse,
      title: "Personalized Treatment Plans",
      description: "Every resident receives a one-on-one assessment to develop a custom therapy plan tailored to their specific goals and needs."
    },
    {
      icon: ShieldCheck,
      title: "Licensed Physical Therapists",
      description: "Our on-site therapy team is composed of licensed professionals with extensive experience in geriatric care and rehabilitation."
    },
    {
      icon: TrendingUp,
      title: "Focus on Independence",
      description: "Our primary goal is to help residents regain strength, improve balance, and maintain the highest possible level of independence."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header - Matching FAQ/Contact Page Style */}
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
              Rehabilitation & Physical Therapy
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Expert, on-site care designed to restore mobility, build strength, and enhance quality of life.
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
              loading="lazy" src={physicalTherapyImage} 
              alt="Therapist assisting a resident with exercises" 
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
            <h2 className="text-3xl font-bold text-gray-900 font-serif">A Foundation of Expertise</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded by licensed Physical Therapists, Columbia Care Home was built on a deep understanding of the importance of mobility and physical wellness in senior care. Unlike many facilities, we have a fully-equipped, on-site therapy center staffed by our own team.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This integration allows us to make physical therapy a consistent and seamless part of our residents' daily lives, not just a reactive measure. We are committed to proactive care that helps residents maintain their strength and live more fully.
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Approach to Rehabilitation</h2>
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
            Learn More About Our Care Plans
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how a personalized therapy plan can make a difference. Contact our admissions team today.
          </p>
          <Link to="/contact">
            <motion.button
              className="group px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Contact Us Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RehabilitationPage;