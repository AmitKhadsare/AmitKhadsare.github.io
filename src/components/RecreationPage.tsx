import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Brain,
  Users, Coffee, ChevronRight,
  Sparkles
} from 'lucide-react';
import commonAreaImage from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-living-room-seating.jpg';
import firesideImage from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-fireplace-and-tv-area.jpg';
import SEOHead from './SEOHead';

interface EngagementCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

const EngagementCard: React.FC<EngagementCardProps> = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-emerald-700" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const RecreationPage = () => {
  const engagementModes = [
    {
      icon: Brain,
      title: "Cognitive Vitality",
      description: "We focus on thoughtfully designed mental exercises, from high-engagement trivia and word games to reading clubs, created to keep the mind active and engaged."
    },
    {
      icon: Users,
      title: "Social Intimacy",
      description: "Unlike large facilities where residents can feel 'lost in the crowd,' our small home ensures every person is seen. Our fireside chats and shared meals foster deep, meaningful friendships."
    },
    {
      icon: Coffee,
      title: "Purpose-Driven Daily Life",
      description: "Engagement isn't just a 2 PM event; it's the rhythm of the day. Whether it's light gardening or participating in meal preparation, we ensure every resident feels valued and needed."
    }
  ];

  const recreationSchema = {
    "@type": "Service",
    "name": "Senior Activities & Life Enrichment",
    "provider": {
      "@id": "https://www.columbiacarehome.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Columbia"
    },
    "serviceType": "Senior Life Enrichment",
    "description": "Meaningful senior activities and life enrichment in a small 8-resident home setting in Columbia, MD. Focus on cognitive health and social connection.",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Columbia",
          "addressRegion": "MD"
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Senior Activities & Life Enrichment | Assisted Living Columbia MD"
        description="Therapeutic recreation that honors the individual. Experience meaningful social connection and activities designed for wellbeing in our small 8-resident home."
        structuredData={recreationSchema}
        image="https://www.columbiacarehome.com/og-recreation.jpg"
        url="/recreation"
      />

      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-emerald-700 to-teal-800 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Care Services
            </Link>
            <h1 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-emerald-200 mb-4">
              Senior Activities & Life Enrichment | Columbia MD
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
              Life Enrichment in a <span className="text-emerald-200">Small Home Setting</span>
            </h2>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
              Fostering joy, connection, and cognitive vitality through activities designed to support cognitive and emotional wellbeing.
            </p>
          </motion.div>
        </div>
      </div>

      {/* The Small Home Advantage Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 font-serif">The Cure for Isolation</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-emerald-200 pl-6">
                "In a large facility, you can be surrounded by 100 people and still feel alone. In a home, you are surrounded by 7 friends and a team that knows your life story."
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Many families searching for assisted living worry that their loved one will spend long hours alone. Our small-home model ensures that activities and social interaction happen naturally throughout the day.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Recreation here isn't just a calendar on a wall—it's the heartbeat of our community. We replace large-group entertainment with meaningful, face-to-face engagements that reflect our residents' lifelong passions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach is deeply connected to our clinical roots. Whether it is gentle movement led by our founders (DPTs) or brain-stimulating trivia, every activity is designed to support the holistic wellness of our residents. By linking engagement to our{' '}
                <Link to="/rehabilitation" className="text-emerald-700 font-bold hover:underline">rehabilitation</Link>{' '}
                and{' '}
                <Link to="/health-safety" className="text-emerald-700 font-bold hover:underline">health oversight</Link>, we ensure that "fun" is also functional.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {['Word Games & Trivia', 'Fireside Reading', 'DPT-Led Movement', 'Culinary Participation'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-800 font-medium bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                  <ChevronRight className="w-4 h-4 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-50 rounded-2xl transform rotate-2" />
            <img
              loading="lazy"
              decoding="async"
              src={commonAreaImage}
              alt="Shared living space designed for conversation and connection"
              className="relative w-full rounded-2xl shadow-xl z-10"
            />
          </motion.div>
        </div>

        {/* Engagement Modes */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif mb-4 text-center">A Holistic Focus on Engagement</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We focus on three primary pillars of life enrichment to ensure every resident remains a vibrant part of our family.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {engagementModes.map((mode, index) => (
              <EngagementCard
                key={mode.title}
                icon={mode.icon}
                title={mode.title}
                description={mode.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Real Home Living Section */}
        <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 -mr-32 -mt-32" />
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800/50 rounded-full text-emerald-200 text-sm font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                The Fireside Advantage
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif">Community Happens Around the Hearth</h2>
              <p className="text-xl text-emerald-100 leading-relaxed">
                In our home, the "recreation room" is actually just our living room. By centering life around the fireplace and the family table, we maintain the warmth and familiarity that triggers memories and reduces the anxiety often found in medical environments.
              </p>
              <div className="flex gap-8 items-center pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">8</div>
                  <div className="text-sm text-emerald-300">Max Residents</div>
                </div>
                <div className="h-10 w-px bg-emerald-700" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1:4</div>
                  <div className="text-sm text-emerald-300">Ratio</div>
                </div>
                <div className="h-10 w-px bg-emerald-700" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">No One</div>
                  <div className="text-sm text-emerald-300">Left Out</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-800/30">
              <img
                loading="lazy"
                decoding="async"
                src={firesideImage}
                alt="Our living room with fireplace for social gathering"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-28 text-center bg-white rounded-3xl p-10 md:p-20 shadow-xl border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6">
            Witness a Different Kind of Energy
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            The best way to understand our "Meaningful Engagement" model is to see it in action. Hear the laughter, smell the home-cooked meals, and feel the genuine connection of a true home setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/schedule-a-tour" className="w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-emerald-500/40 transition-all text-center">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                Schedule a Private Visit
              </motion.span>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-white text-emerald-700 border-2 border-emerald-100 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all text-center">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                Request Activities Calendar
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecreationPage;
