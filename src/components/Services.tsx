import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Heart, Home, Users, Shield, Sparkles, Activity, BrainCircuit, LucideIcon } from 'lucide-react';

// Import your images
import familyImage from '../assets/family.avif';
import dignifiedPersonalAssistanceImage from '../assets/dignifiedpersonalassistance.avif';
import comfortingHomelikeHavenImage from '../assets/comforting_homelike_haven.avif';
import nourishingBodySoulImage from '../assets/Nourishing_Body_Soul.avif';
import vibrantLifeAndWellnessImage from '../assets/vibrantlifeandwelness.avif';
import proactiveHealthSafetyImage from '../assets/proactivehealthsafety.avif';
import physicalTherapyImage from '../assets/physical_therapy.avif';
import memoryCareImage from '../assets/mentalhealth.avif';

interface Service {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  accentColor: 'emerald' | 'teal' | 'orange' | 'blue' | 'stone' | 'red' | 'indigo';
  features: string[];
  path: string;
}

const services: Service[] = [
  {
    title: 'Assisted Living & Residential Care',
    description: "Our residences offer the warmth of home with the security of 24/7 supervision in a nurturing space.",
    image: comfortingHomelikeHavenImage,
    icon: Home,
    accentColor: 'emerald',
    features: ['Home-like Environment', 'Safe & Secure', 'Comfortable Living'],
    path: '/residential-care'
  },
  {
    title: 'PT-Driven Rehabilitation Services',
    description: 'Professional in-home and on-site physical therapy programs designed to maintain mobility, strength, and independence.',
    image: physicalTherapyImage,
    icon: Activity,
    accentColor: 'emerald',
    features: ['In-Home Physical Therapy', 'On-Site Therapy Center', 'Personalized Treatment Plans'],
    path: '/rehabilitation'
  },
  {
    title: 'Specialized Memory Care',
    description: 'A secure, structured environment for residents with dementia, promoting cognitive function and reducing anxiety.',
    image: memoryCareImage,
    icon: BrainCircuit,
    accentColor: 'emerald',
    features: ['Secure Dementia-Friendly Wing', 'Cognitive Enhancement Activities', 'Specially Trained Staff'],
    path: '/memory-care'
  },
  {
    title: 'Dignified Personal Assistance',
    description: 'Respectful, discreet support with daily activities like bathing, dressing, and medication reminders.',
    image: dignifiedPersonalAssistanceImage,
    icon: Heart,
    accentColor: 'emerald',
    features: ['24/7 Personal Care', 'Medication Management', 'Mobility Support'],
    path: '/personal-assistance'
  },
  { title: 'Nourishing Body & Soul', description: 'Delicious, dietician-approved meals that cater to individual tastes and nutritional needs.', image: nourishingBodySoulImage, icon: Sparkles, accentColor: 'emerald', features: ['Nutritious Meals', 'Dietary Accommodations', 'Fresh Ingredients'], path: '/dietary' },
  { title: 'Vibrant Life & Wellness', description: 'Engaging activities, gentle exercise, and social events to stimulate mind, body, and spirit.', image: vibrantLifeAndWellnessImage, icon: Activity, accentColor: 'emerald', features: ['Daily Activities', 'Exercise Programs', 'Social Events'], path: '/recreation' },
  { title: 'Proactive Health & Safety', description: 'On-site medical oversight and close coordination with healthcare providers for peace of mind.', image: proactiveHealthSafetyImage, icon: Shield, accentColor: 'emerald', features: ['Medical Oversight', 'Health Monitoring', 'Emergency Response'], path: '/health-safety' },
  { title: 'A Partnership with Families', description: "Open communication, regular updates, and dedicated support, making you a part of your loved one's journey.", image: familyImage, icon: Users, accentColor: 'emerald', features: ['Family Communication', 'Regular Updates', 'Transparent Care'], path: '/family-partnership' }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getAccentClasses = (color: Service['accentColor']) => {
    const colors = {
      emerald: 'from-emerald-500 to-emerald-600 text-emerald-600',
      teal: 'from-teal-500 to-teal-600 text-teal-600',
      orange: 'from-orange-500 to-orange-600 text-orange-600',
      blue: 'from-blue-500 to-blue-600 text-blue-600',
      stone: 'from-stone-500 to-stone-600 text-stone-600',
      red: 'from-red-500 to-red-600 text-red-600',
      indigo: 'from-indigo-500 to-indigo-600 text-indigo-600'
    };
    return colors[color] || colors.emerald;
  };

  const accentClasses = getAccentClasses(service.accentColor);

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Floating Icon */}
        <motion.div
          className={`absolute bottom-4 right-4 w-14 h-14 bg-gradient-to-br ${accentClasses.split(' ')[0]} ${accentClasses.split(' ')[1]} rounded-2xl flex items-center justify-center shadow-lg`}
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {(() => {
            const IconComponent = service.icon;
            return <IconComponent className="w-7 h-7 text-white" />;
          })()}
        </motion.div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-gray-800 font-serif mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>

          {/* Features */}
          <div className="space-y-2">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isHovered ? 1 : 0.7, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <CheckCircle2 className={`w-5 h-5 ${accentClasses.split(' ')[2]} flex-shrink-0`} />
                <span className="text-sm text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button - Fixed at bottom */}
        <div className="mt-6">
          <Link to={service.path}>
            <motion.button
              className={`w-full py-3 px-4 bg-gradient-to-r ${accentClasses.split(' ')[0]} ${accentClasses.split(' ')[1]} text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                Learn More
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};



const Services: React.FC<{ displayAll?: boolean }> = ({ displayAll = false }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (displayAll) {
    // All services page layout
    return (
      <motion.section
        className="py-16 bg-gradient-to-br from-gray-50 to-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-20 text-center"
            variants={itemVariants}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 font-serif mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                See firsthand how our caring approach creates a vibrant, nurturing environment for your loved one.
              </p>
              <Link to="/schedule-a-tour">
                <motion.button
                  className="group px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3">
                    Schedule Your Personal Tour
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  // Homepage services section
  return (
    <motion.section
      id="services"
      className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Clinical Capabilities
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 leading-tight font-serif mb-6">
            Built for <span className="text-emerald-700">High-Acuity</span> Needs
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Many residential homes are designed for basic assistance. Because our home is led by Doctors of Physical Therapy, we are equipped to support seniors experiencing mobility decline, fall risk, and increasing care needs.
          </p>
        </motion.div>

        {/* High-Acuity Solutions Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-serif mb-3">Complex Mobility</h3>
            <p className="text-stone-600 mb-6">From 2-person transfers to severe fall-risk management, our staff is trained directly by Doctors of Physical Therapy to handle significant physical decline securely.</p>
            <Link to="/rehabilitation" className="text-emerald-700 font-semibold flex items-center gap-2 hover:text-emerald-800">
              View rehab protocols <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-serif mb-3">Aging In Place</h3>
            <p className="text-stone-600 mb-6">Many facilities discharge residents when care becomes "too difficult." Our Level 3 license, 1:3 ratio, and overnight awake staff ensure we can support your loved one through late-stage decline.</p>
            <Link to="/residential-care" className="text-emerald-700 font-semibold flex items-center gap-2 hover:text-emerald-800">
              Explore residential care <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <BrainCircuit className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-serif mb-3">Sundowning & Anxiety</h3>
            <p className="text-stone-600 mb-6">We use biomechanical daytime routines and environmental controls to reduce late-day anxiety, minimizing the need for heavy chemical sedatives.</p>
            <Link to="/memory-care" className="text-emerald-700 font-semibold flex items-center gap-2 hover:text-emerald-800">
              Read our approach <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
        >
          <Link to="/services">
            <motion.button
              className="group px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Explore All Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;