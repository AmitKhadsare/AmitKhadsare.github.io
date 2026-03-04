import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, MessageSquare, ShieldCheck,
  ChevronRight, Stethoscope
} from 'lucide-react';
import diningImage from '../assets/Facility/Our Kitchen/dining-area-looking-towards-living-room.jpg';
import SEOHead from './SEOHead';

interface PartnershipCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

const PartnershipCard: React.FC<PartnershipCardProps> = ({ icon: Icon, title, description, delay = 0 }) => (
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

const FamilyPartnershipPage = () => {
  const partnershipModes = [
    {
      icon: Stethoscope,
      title: "Direct Clinical Access",
      description: "You don't talk to a 'representative' or a salesperson. You have direct access to our clinical leads (DPT/RN) who manage your loved one's care personally."
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "We communicate health metrics and care plan updates simply. We translate complex medical status into plain language so your family always understands the full picture."
    },
    {
      icon: ShieldCheck,
      title: "Care You Can See",
      description: "In an 8-resident home, there is nowhere to hide. We take total ownership of our care decisions and invite you into the planning process at every step."
    }
  ];

  const partnershipSchema = {
    "@type": "Service",
    "name": "Family Communication & Care Transparency",
    "provider": {
      "@id": "https://www.columbiacarehome.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Columbia"
    },
    "serviceType": "Senior Family Consultation",
    "description": "Direct communication and care transparency for families. Direct RN/DPT access for personal care planning in a small 8-resident assisted living home in Columbia, MD.",
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
        title="Family Communication & Care Transparency | Assisted Living Columbia MD"
        description="Transparent communication for families. Direct clinical access to our RN/DPT team for personal care planning in our small 8-resident home in Columbia, MD."
        structuredData={partnershipSchema}
        image="https://www.columbiacarehome.com/og-family-partnership.jpg"
        url="/family-partnership"
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
              Family Communication & Care Transparency | Columbia MD
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
              Direct Communication <span className="text-emerald-200">With Your Care Team</span>
            </h2>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
              Eliminating institutional barriers. Direct, personal partnership between families and the clinicians managing their care.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Radical Transparency Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 font-serif">A Seat at the Table</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-emerald-200 pl-6">
                "In typical senior living, families often feel like they are petitioning a bureaucracy for information. Here, you are a member of our clinical team."
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that family involvement is a clinical asset. Because we are an 8-resident home, there are no "gatekeepers" between you and the care leads. You have direct access to the clinical owners (DPT/RN) who are on-site and intimately familiar with your loved one's daily status.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Because communication is direct and personal, families never have to wonder if a concern was passed along during a shift change. If something changes, we talk with you directly and adjust the care plan together.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {['Direct RN/DPT Lines', 'Clinical Health Updates', 'Collaborative Planning', 'Open Visiting Rhythm'].map((item) => (
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
              src={diningImage}
              alt="Our family table where care planning and community connection happens"
              className="relative w-full rounded-2xl shadow-xl z-10"
            />
          </motion.div>
        </div>

        {/* Partnership Modes */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif mb-4 text-center">Trust Built on Proximity</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Our small-home model removes the friction of institutional communication.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipModes.map((mode, index) => (
              <PartnershipCard
                key={mode.title}
                icon={mode.icon}
                title={mode.title}
                description={mode.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Accountability Section */}
        <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 -mr-32 -mt-32" />
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-serif">Owners on the Front Lines</h2>
              <p className="text-xl text-emerald-100 leading-relaxed">
                When you choose Columbia Care Home, you aren't hiring a corporation; you are partnering with families just like yours. Our founders are involved in the daily rhythm of care, providing a level of accountability that only a small home can provide.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="border-l-2 border-emerald-500 pl-4">
                  <div className="text-2xl font-bold text-white">Direct</div>
                  <div className="text-sm text-emerald-300">Communication</div>
                </div>
                <div className="border-l-2 border-emerald-500 pl-4">
                  <div className="text-2xl font-bold text-white">Owner</div>
                  <div className="text-sm text-emerald-300">Managed</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4 font-serif text-emerald-100">Our Transparency Promise</h3>
              <ul className="space-y-4">
                {[
                  "No scripted corporate responses",
                  "Direct access to your care lead's phone",
                  "Invitations to care huddles",
                  "Total status visibility"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-28 text-center bg-white rounded-3xl p-10 md:p-20 shadow-xl border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6">
            Experience True Partnership
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Searching for senior care is high-stakes. We invite you to sit down with us at the family table, meet our clinicians, and see how simple, direct communication creates a better care experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-emerald-500/40 transition-all text-center">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                Talk to a Clinician
              </motion.span>
            </Link>
            <Link to="/schedule-a-tour" className="w-full sm:w-auto px-10 py-5 bg-white text-emerald-700 border-2 border-emerald-100 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all text-center">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                Tour Our Home
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyPartnershipPage;
