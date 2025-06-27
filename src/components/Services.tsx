import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Heart, Home, Users, Shield, Sparkles, Activity, BrainCircuit } from 'lucide-react';
import familyImage from '../assets/family.avif';
import dignifiedPersonalAssistanceImage from '../assets/dignifiedpersonalassistance.avif';
import comfortingHomelikeHavenImage from '../assets/comforting_homelike_haven.avif';
import nourishingBodySoulImage from '../assets/Nourishing_Body_Soul.avif';
import vibrantLifeAndWellnessImage from '../assets/vibrantlifeandwelness.avif';
import proactiveHealthSafetyImage from '../assets/proactivehealthsafety.avif';
import physicalTherapyImage from '../assets/physical_therapy.avif';
import memoryCareImage from '../assets/mentalhealth.avif';

// Custom hook to detect if the screen is desktop-sized
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleMediaQueryChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);
  return isDesktop;
};

// TypeScript interfaces for our service data
interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<any>;
  accentColor: 'emerald' | 'teal' | 'orange' | 'blue' | 'stone' | 'red' | 'indigo';
  features: string[];
}

interface ServiceCardProps {
  service: Service;
  isDesktop: boolean; // Prop to control animations
}

// The list of all services
const services: Service[] = [
    { title: 'Comprehensive Rehabilitation Services', description: 'Professional in-home and on-site physical therapy programs designed to maintain mobility, strength, and independence.', image: physicalTherapyImage, icon: Activity, accentColor: 'blue', features: ['In-Home Physical Therapy', 'On-Site Therapy Center', 'Personalized Treatment Plans'] },
    { title: 'Dignified Personal Assistance', description: 'Respectful, discreet support with daily activities like bathing, dressing, and medication reminders.', image: dignifiedPersonalAssistanceImage, icon: Heart, accentColor: 'red', features: ['24/7 Personal Care', 'Medication Management', 'Mobility Support'] },
    { title: 'A Comforting, Homelike Haven', description: "Our residences offer the warmth of home with the security of 24/7 supervision in a nurturing space.", image: comfortingHomelikeHavenImage, icon: Home, accentColor: 'teal', features: ['Home-like Environment', 'Safe & Secure', 'Comfortable Living'] },
    { title: 'Nourishing Body & Soul', description: 'Delicious, dietician-approved meals that cater to individual tastes and nutritional needs.', image: nourishingBodySoulImage, icon: Sparkles, accentColor: 'orange', features: ['Nutritious Meals', 'Dietary Accommodations', 'Fresh Ingredients'] },
    { title: 'Vibrant Life & Wellness', description: 'Engaging activities, gentle exercise, and social events to stimulate mind, body, and spirit.', image: vibrantLifeAndWellnessImage, icon: Activity, accentColor: 'emerald', features: ['Daily Activities', 'Exercise Programs', 'Social Events'] },
    { title: 'Proactive Health & Safety', description: 'On-site medical oversight and close coordination with healthcare providers for peace of mind.', image: proactiveHealthSafetyImage, icon: Shield, accentColor: 'blue', features: ['Medical Oversight', 'Health Monitoring', 'Emergency Response'] },
    { title: 'A Partnership with Families', description: "Open communication, regular updates, and dedicated support, making you a part of your loved one's journey.", image: familyImage, icon: Users, accentColor: 'stone', features: ['Family Communication', 'Regular Updates', 'Transparent Care'] },
    { title: 'Specialized Memory Care', description: 'A secure, structured environment for residents with dementia, promoting cognitive function and reducing anxiety.', image: memoryCareImage, icon: BrainCircuit, accentColor: 'indigo', features: ['Secure Dementia-Friendly Wing', 'Cognitive Enhancement Activities', 'Specially Trained Staff'] }
];

// Animation variants for the cards (used only on desktop)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.2, duration: 0.5 } }
};
const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

// The ServiceCard component now receives an 'isDesktop' prop
const ServiceCard: React.FC<ServiceCardProps> = ({ service, isDesktop }) => {
  const getAccentClasses = (color: Service['accentColor']): string => {
    const colors = {
      emerald: 'text-emerald-400 bg-emerald-600 hover:bg-emerald-700',
      teal: 'text-teal-400 bg-teal-600 hover:bg-teal-700',
      orange: 'text-orange-400 bg-orange-500 hover:bg-orange-600',
      blue: 'text-blue-400 bg-blue-500 hover:bg-blue-600',
      stone: 'text-stone-400 bg-stone-500 hover:bg-stone-600',
      red: 'text-red-400 bg-red-500 hover:bg-red-600',
      indigo: 'text-indigo-400 bg-indigo-500 hover:bg-indigo-600'
    };
    return colors[color] || colors.emerald;
  };
  const accentClasses = getAccentClasses(service.accentColor);

  return (
    <motion.div
      className="bg-gradient-to-br from-slate-900 to-emerald-900 rounded-2xl overflow-hidden shadow-lg border border-emerald-800/50 flex flex-col"
      // Conditionally apply animations based on isDesktop
      variants={isDesktop ? cardVariants : {}}
      whileHover={isDesktop ? { y: -8, transition: { duration: 0.3 } } : {}}
    >
      <div className="relative h-56 overflow-hidden">
        <motion.img src={service.image} alt={service.title} className="w-full h-full object-cover" whileHover={isDesktop ? { scale: 1.05 } : {}} transition={{ duration: 0.6 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-2xl font-bold text-stone-100 font-serif leading-tight">{service.title}</h3>
          <p className="text-lg text-stone-300 leading-relaxed font-medium mt-2">{service.description}</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-3 pt-2">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3"><CheckCircle2 className={`w-5 h-5 ${accentClasses.split(' ')[0]} flex-shrink-0`} /><span className="text-base text-stone-200 font-semibold">{feature}</span></div>
            ))}
          </div>
          <div className="pt-2">
            <Link to="/schedule-a-tour">
              <motion.button className={`w-full py-3 px-4 ${accentClasses.split(' ')[1]} ${accentClasses.split(' ')[2]} text-white rounded-xl font-semibold text-sm`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <span className="flex items-center justify-center gap-2">Learn More<ArrowRight className="w-4 h-4" /></span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// The main Services component that controls the logic
const Services: React.FC<{ displayAll?: boolean }> = ({ displayAll = false }) => {
  const isDesktop = useIsDesktop();
  const servicesToShow = displayAll ? services : (isDesktop ? services.slice(0, 3) : services.slice(0, 2));
  const gridCols = !displayAll && isDesktop ? 'lg:grid-cols-3' : 'lg:grid-cols-4';

  return (
    <motion.section
      id="services"
      className="py-12 lg:py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-stone-100 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!displayAll && (
          <motion.div className="text-center mb-16" variants={cardVariants}>
             <motion.div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full text-sm font-semibold mb-6" whileHover={{ scale: 1.05 }}>✨ Our Services</motion.div>
             <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-800 bg-clip-text text-transparent leading-tight font-serif mb-6">How We Care For You</h2>
             <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">Our comprehensive services are designed to nurture, support, and enrich the lives of our residents.</p>
          </motion.div>
        )}
        <motion.div className={`grid md:grid-cols-2 ${gridCols} gap-8`} variants={containerVariants}>
          {servicesToShow.map((service, index) => (
            <ServiceCard key={index} service={service} isDesktop={isDesktop} />
          ))}
        </motion.div>
        <motion.div className="text-center mt-20" variants={cardVariants}>
          {!displayAll ? (
            <Link to="/services">
              <motion.button className="group px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-xl shadow-lg hover:shadow-emerald-500/30" whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"}} whileTap={{ scale: 0.95 }}>
                <span className="flex items-center gap-3">View All Our Services<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" /></span>
              </motion.button>
            </Link>
          ) : (
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-stone-200 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-stone-800 font-serif mb-4">Ready to Experience the Difference?</h3>
              <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">See firsthand how our caring approach creates a vibrant, nurturing environment for your loved one.</p>
              <Link to="/schedule-a-tour">
                <motion.button className="group px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/30" whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"}} whileTap={{ scale: 0.95 }}>
                  <span className="flex items-center gap-3">Schedule Your Personal Tour<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                </motion.button>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;