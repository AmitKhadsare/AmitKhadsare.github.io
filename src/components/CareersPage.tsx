import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Star, Users, Clock } from 'lucide-react';
import SEOHead from './SEOHead';

const CareersPage = () => {
  const benefitCards = [
    {
      icon: Heart,
      title: "Comprehensive Benefits",
      description: "We offer competitive health, dental, and vision insurance plans for our full-time employees."
    },
    {
      icon: Star,
      title: "Recognition Programs",
      description: "We celebrate our staff's dedication through monthly awards and performance bonuses."
    },
    {
      icon: Users,
      title: "Supportive Environment",
      description: "Join a close-knit team that values collaboration, respect, and mutual support."
    },
    {
      icon: Clock,
      title: "Professional Growth",
      description: "We provide ongoing training and opportunities for career advancement within our organization."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Careers & Employment Opportunities | Columbia Care Home"
        description="Join the Columbia Care Home team. We are looking for compassionate professionals dedicated to providing exceptional senior care. Explore current job openings."
        keywords="careers, jobs, nursing jobs, caregiver jobs, senior care employment, columbia md jobs"
        url="/careers"
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
            <Link to="/" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-serif">Join Our Compassionate Team</h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              We believe that exceptional care starts with exceptional people. Discover a rewarding career at Columbia Care Home.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Work With Us Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Work at Columbia Care Home?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are more than just a workplace; we are a family dedicated to providing the highest standard of care with dignity and heart.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefitCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Open Positions Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Current Opportunities</h2>
          <div className="text-center text-gray-600 space-y-4">
            <p>
              While we may not have specific openings at this moment, we are always looking for dedicated and compassionate individuals to join our team in the following roles:
            </p>
            <p className="font-semibold text-emerald-700">
              Registered Nurses • Licensed Practical Nurses • Certified Nursing Assistants • Caregivers • Activities Coordinators • Dining Staff
            </p>
            <p>
              If you believe in our mission of providing dignified, family-focused care, we would love to hear from you.
            </p>
            <div className="pt-6">
              <a
                href="mailto:careers@columbiacarehome.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg"
              >
                <Users className="w-5 h-5" />
                Submit Your Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;