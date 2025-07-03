import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BedDouble, ShieldCheck, Armchair } from 'lucide-react';
import comfortingHavenImage from '../assets/comforting_homelike_haven.avif';

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

const ResidentialCarePage = () => {
  const features = [
    {
      icon: BedDouble,
      title: "Personalized Rooms",
      description: "Each room is thoughtfully arranged to meet the unique needs of the resident, with options for layout, comfort features, and accessibility adjustments based on individual care requirements."
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure",
      description: "We prioritize resident safety with thoughtful features throughout the facility, including secure access, trained staff on-site 24/7, and emergency support available when needed."
    },
    {
      icon: Armchair,
      title: "Comfortable Living",
      description: "From cozy common areas to beautifully maintained outdoor spaces, every detail is designed for resident comfort."
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
              Residential Care Services
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              A secure, vibrant, and truly homelike environment with 24/7 professional supervision.
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
              src={comfortingHavenImage} 
              alt="A cozy and bright common area in the care home" 
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
            <h2 className="text-3xl font-bold text-gray-900 font-serif">More than a care home - A place to belong</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe a senior living facility should feel less like a facility and more like a home. Our residential care services are built around this core principle. We provide a clean, secure, and beautifully maintained environment where residents feel comfortable, safe, and part of a true community.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With professional staff available 24/7, families have peace of mind knowing that support is always just a moment away, while residents enjoy the freedom to live their lives with confidence and dignity.
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Living Environment</h2>
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
            See Our Home for Yourself
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The best way to experience our community is with a personal visit. We invite you to schedule a tour today.
          </p>
          <Link to="/schedule-a-tour">
            <motion.button
              className="group px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/30"
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