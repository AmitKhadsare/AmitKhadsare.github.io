import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Heart, Home, Users, Shield, Sparkles, Activity, BrainCircuit, LucideIcon, Plus } from 'lucide-react';

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
  { title: 'Comprehensive Rehabilitation Services', description: 'Professional in-home and on-site physical therapy programs designed to maintain mobility, strength, and independence.', image: physicalTherapyImage, icon: Activity, accentColor: 'blue', features: ['In-Home Physical Therapy', 'On-Site Therapy Center', 'Personalized Treatment Plans'], path: '/rehabilitation' },
  { 
    title: 'Dignified Personal Assistance', 
    description: 'Respectful, discreet support with daily activities like bathing, dressing, and medication reminders.', 
    image: dignifiedPersonalAssistanceImage, 
    icon: Heart, 
    accentColor: 'red', 
    features: ['24/7 Personal Care', 'Medication Management', 'Mobility Support'], 
    path: '/personal-assistance'
  },
  { 
    title: 'Specialized Memory Care', 
    description: 'A secure, structured environment for residents with dementia, promoting cognitive function and reducing anxiety.', 
    image: memoryCareImage, 
    icon: BrainCircuit, 
    accentColor: 'indigo', 
    features: ['Secure Dementia-Friendly Wing', 'Cognitive Enhancement Activities', 'Specially Trained Staff'], 
    path: '/memory-care'
  },
  { title: 'A Comforting, Homelike Haven', description: "Our residences offer the warmth of home with the security of 24/7 supervision in a nurturing space.", image: comfortingHomelikeHavenImage, icon: Home, accentColor: 'teal', features: ['Home-like Environment', 'Safe & Secure', 'Comfortable Living'], path: '/residential-care' },
  { title: 'Nourishing Body & Soul', description: 'Delicious, dietician-approved meals that cater to individual tastes and nutritional needs.', image: nourishingBodySoulImage, icon: Sparkles, accentColor: 'orange', features: ['Nutritious Meals', 'Dietary Accommodations', 'Fresh Ingredients'], path: '/dietary' },
  { title: 'Vibrant Life & Wellness', description: 'Engaging activities, gentle exercise, and social events to stimulate mind, body, and spirit.', image: vibrantLifeAndWellnessImage, icon: Activity, accentColor: 'emerald', features: ['Daily Activities', 'Exercise Programs', 'Social Events'], path: '/recreation' },
  { title: 'Proactive Health & Safety', description: 'On-site medical oversight and close coordination with healthcare providers for peace of mind.', image: proactiveHealthSafetyImage, icon: Shield, accentColor: 'blue', features: ['Medical Oversight', 'Health Monitoring', 'Emergency Response'], path: '/health-safety' },
  { title: 'A Partnership with Families', description: "Open communication, regular updates, and dedicated support, making you a part of your loved one's journey.", image: familyImage, icon: Users, accentColor: 'stone', features: ['Family Communication', 'Regular Updates', 'Transparent Care'], path: '/family-partnership' }
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

const DiscoverMoreCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentPreview, setCurrentPreview] = useState(0);
  
  // Get remaining services (not shown as main cards)
  const remainingServices = services.slice(2);
  
  // Function to get accent color classes
  const getAccentClasses = (color: Service['accentColor']) => {
    const colors = {
      emerald: 'from-emerald-500 to-emerald-600',
      teal: 'from-teal-500 to-teal-600',
      orange: 'from-orange-500 to-orange-600',
      blue: 'from-blue-500 to-blue-600',
      stone: 'from-stone-500 to-stone-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colors[color] || colors.emerald;
  };
  
  // Auto-rotate previews
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPreview((prev) => (prev + 1) % remainingServices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [remainingServices.length]);

  return (
    <Link to="/services">
      <motion.div
        className="bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col cursor-pointer"
        whileHover={{ y: -8 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Animated Background Pattern */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-600">
          {/* Floating Circles Animation */}
          <motion.div
            className="absolute inset-0"
            animate={{ 
              background: [
                'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          {/* Service Icons Grid */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 p-8">
              {remainingServices.slice(0, 6).map((service, idx) => (
                <motion.div
                  key={idx}
                  className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {(() => {
                    const IconComponent = service.icon;
                    return <IconComponent className="w-7 h-7 text-white" />;
                  })()}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Number Indicator */}
          <motion.div 
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          >
            <span className="text-emerald-700 font-bold text-lg">
              +{remainingServices.length} Services
            </span>
          </motion.div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 font-serif mb-3">
            Discover More Ways We Care
          </h3>
          <p className="text-gray-600 mb-6">
            Explore our complete range of specialized services designed to meet every aspect of your loved one's needs.
          </p>
          
          {/* Service Preview Carousel */}
          <div className="bg-white/50 rounded-xl p-4 mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPreview}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center gap-3"
              >
                {remainingServices[currentPreview] && (
                  <>
                    <div className={`w-10 h-10 bg-gradient-to-br ${getAccentClasses(remainingServices[currentPreview].accentColor)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {(() => {
                        const IconComponent = remainingServices[currentPreview].icon;
                        return <IconComponent className="w-5 h-5 text-white" />;
                      })()}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {remainingServices[currentPreview].title}
                      </h4>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Interactive Elements */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700">{services.length}</div>
              <div className="text-sm text-gray-600">Total Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-700">24/7</div>
              <div className="text-sm text-gray-600">Care Available</div>
            </div>
          </div>
          
          {/* CTA Button */}
          <motion.button 
            className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              Explore All Services
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </motion.div>
            </span>
          </motion.button>
        </div>
      </motion.div>
    </Link>
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
            ✨ Our Services
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-800 bg-clip-text text-transparent leading-tight font-serif mb-6">
            How We Care For You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive services are designed to nurture, support, and enrich the lives of our residents.
          </p>
        </motion.div>
        
        {/* Services Grid - Desktop: 3 columns, Mobile: 1 column */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {/* First 2 Service Cards */}
          {services.slice(0, 2).map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
          
          {/* Discover More Card - Desktop Only */}
          <motion.div 
            className="hidden lg:block"
            variants={itemVariants}
          >
            <DiscoverMoreCard />
          </motion.div>
        </motion.div>
        
        {/* Mobile View All Button */}
        <motion.div 
          className="lg:hidden text-center mt-12"
          variants={itemVariants}
        >
          <Link to="/services">
            <motion.button 
              className="group px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                View All Our Services
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