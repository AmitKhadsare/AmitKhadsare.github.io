import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Heart, Home, Users, Shield, Utensils, Activity, Brain, Dumbbell, CheckCircle2 } from 'lucide-react';
import SEOHead from './SEOHead';
import dignifiedCareImage from '../assets/dignifiedpersonalassistance.avif';
import proactiveHealthImage from '../assets/proactivehealthsafety.avif';
import physicalTherapyImage from '../assets/Facility/Our Gym & Therapy/gym-therapy-and-cardio-zone.jpg';
import familyImage from '../assets/Facility/Our Kitchen/dining-area-looking-towards-living-room.jpg';
import memoryCareImage from '../assets/mentalhealth.avif';
import kitchenImage from '../assets/Facility/Our Kitchen/kitchen-main-view.jpg';
import livingRoomImage from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-living-area-and-windows.jpg';
import fireplaceImage from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-fireplace-and-tv-area.jpg';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  imagePosition: string;
  color: 'blue' | 'rose' | 'emerald' | 'orange' | 'purple' | 'teal' | 'indigo';
  path?: string;
}

// Service data synchronized with deep-dive overhauls
const services: Service[] = [
  {
    id: 1,
    title: 'DPT-Owned Rehabilitation',
    description: 'Expert-led recovery from our Doctors of Physical Therapy. We bridge the gap between hospital settings and home with pro-active mobile and on-site rehab.',
    features: ['Founder-Led Therapy', 'Clinical Fall Prevention', 'Mobility Restoration'],
    icon: Dumbbell,
    image: physicalTherapyImage,
    imagePosition: 'object-center',
    color: 'blue',
    path: '/rehabilitation'
  },
  {
    id: 2,
    title: 'Dignified Personal Assistance',
    description: 'Respectful support with daily living that preserves independence. Licensed caregivers providing help for those who need a light hand or full physical support.',
    features: ['24/7 Personal Care', 'Medication Management', 'Dignity-First Support'],
    icon: Heart,
    image: dignifiedCareImage,
    imagePosition: 'object-[center_25%]',
    color: 'rose',
    path: '/personal-assistance'
  },
  {
    id: 3,
    title: 'Residential Care Services',
    description: 'The safety of 24/7 supervision in a real, intimate home setting. We provide a secure, comforting haven for seniors who prefer a smaller group size.',
    features: ['8-Resident Max', 'Intimate Home Environment', '24/7 Awake Staff'],
    icon: Home,
    image: fireplaceImage,
    imagePosition: 'object-center',
    color: 'emerald',
    path: '/residential-care'
  },
  {
    id: 4,
    title: 'Clinical-Led Nutrition & Dietary',
    description: 'Nutrition as medicine. Fresh, heart-healthy meals prepared in our open kitchen, tailored to clinical requirements and individual joy.',
    features: ['Heart-Healthy Menus', 'Open Concept Kitchen', 'Therapeutic Nutrition'],
    icon: Utensils,
    image: kitchenImage,
    imagePosition: 'object-center',
    color: 'orange',
    path: '/dietary'
  },
  {
    id: 5,
    title: 'Life Enrichment & Activities',
    description: 'Meaningful engagement designed to keep the mind active and prevent isolation. Tailored small-group interaction that honors the individual.',
    features: ['Cognitive Vitality', 'Small Group Setting', 'Social Intimacy'],
    icon: Activity,
    image: livingRoomImage,
    imagePosition: 'object-center',
    color: 'purple',
    path: '/recreation'
  },
  {
    id: 6,
    title: 'Medical Oversight & Safety',
    description: 'Safety built on clinical foundations. RN oversight and 24/7 monitoring in a home that exceeds standard assisted living safety protocols.',
    features: ['RN Clinical Oversight', 'Fall Prevention', 'Proactive Monitoring'],
    icon: Shield,
    image: proactiveHealthImage,
    imagePosition: 'object-center',
    color: 'teal',
    path: '/health-safety'
  },
  {
    id: 7,
    title: 'Direct Family Communication',
    description: 'Direct communication with the clinicians caring for your loved one. You have a seat at the table with direct access to the RN and DPT clinicians managing your loved one’s care.',
    features: ['Direct Clinician Access', 'Clear Transparency', 'Family Partnerships'],
    icon: Users,
    image: familyImage,
    imagePosition: 'object-center',
    color: 'indigo',
    path: '/family-partnership'
  },
  {
    id: 8,
    title: 'Specialized Memory Care',
    description: 'Sensitive, secure memory care delivered by staff trained in dementia-specific clinical approaches and compassionate engagement.',
    features: ['Cognitive Support', 'Secure Environment', 'Clinical Dementia Care'],
    icon: Brain,
    image: memoryCareImage,
    imagePosition: 'object-center',
    color: 'purple',
    path: '/memory-care'
  }
];

// Get color classes for each service
const getColorClasses = (color: Service['color']) => {
  const colors = {
    blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
    rose: 'bg-rose-50 text-rose-600 group-hover:bg-rose-100',
    emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100',
    orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-100',
    purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-100',
    teal: 'bg-teal-50 text-teal-600 group-hover:bg-teal-100',
    indigo: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'
  };
  return colors[color] || colors.emerald;
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  const colorClass = getColorClasses(service.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Image with smart positioning */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className={`w-full h-full object-cover ${service.imagePosition} group-hover:scale-105 transition-transform duration-300`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-3">
          <div className={`p-3 rounded-lg ${colorClass} transition-colors flex-shrink-0`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight flex-1">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Features List */}
        <div className="space-y-3 mb-6 flex-grow">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-base sm:text-lg text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        {service.path ? (
          <Link to={service.path} className="w-full">
            <button className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-base sm:text-lg transition-colors inline-flex items-center justify-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        ) : (
          <button className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-base sm:text-lg transition-colors inline-flex items-center justify-center gap-2">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

const AllServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Senior Care & Assisted Living Services | Columbia MD"
        description="Discover our full range of senior care services including assisted living, memory care, physical therapy, and personal assistance. Professional care in a warm, home-like environment."
        image="https://www.columbiacarehome.com/og-services.jpg"
        url="https://www.columbiacarehome.com/services"
      />
      {/* Green Header with Stats */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Back Link */}
            <button className="inline-flex items-center gap-2 text-emerald-100 hover:text-white font-medium mb-8 transition-colors text-base sm:text-lg">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>

            {/* Page Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight">
              Assisted Living & Clinical Senior Care in a <span className="text-emerald-200">Small Home Setting</span>
            </h1>
            <p className="text-lg sm:text-xl text-emerald-50 max-w-3xl mb-12 leading-relaxed mx-auto">
              Every service we offer is designed to bridge the gap between institutional clinical care and the warmth of a real home.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">DPT</div>
                <div className="text-emerald-100 text-sm sm:text-base lg:text-lg">Founder Owned</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">24/7</div>
                <div className="text-emerald-100 text-sm sm:text-base lg:text-lg">RN Oversight</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">8</div>
                <div className="text-emerald-100 text-sm sm:text-base lg:text-lg">Max Capacity</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid - 2 columns with features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="bg-emerald-50 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Experience Exceptional Care?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Schedule a personalized tour to see how our comprehensive services can support your loved one's journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl text-base sm:text-lg">
              Schedule Your Tour
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors text-base sm:text-lg">
                Speak With a Care Advisor
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AllServicesPage;