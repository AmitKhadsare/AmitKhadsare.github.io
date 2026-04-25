import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Bath, Pill, Shirt,
  ShieldCheck, Heart, Users, ChevronRight
} from 'lucide-react';
import dignifiedCareImage from '../assets/dignifiedpersonalassistance.avif';
import SEOHead from './SEOHead';

interface ADLCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

const ADLCard: React.FC<ADLCardProps> = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-rose-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const PersonalAssistancePage = () => {
  const adls = [
    {
      icon: Bath,
      title: "Dignified Hygiene & Grooming",
      description: "Assistance with bathing, dressing, and personal care is delivered with absolute discretion. We focus on maintaining the resident's routine and self-esteem, ensuring they start each day feeling refreshed and respected."
    },
    {
      icon: Pill,
      title: "Strict Medication Management",
      description: "Under clinical oversight, our team ensures every medication is administered with 100% accuracy and on schedule. We monitor for side effects and coordinate directly with visiting physicians to optimize health outcomes."
    },
    {
      icon: Shirt,
      title: "Functional Mobility Support",
      description: "Leveraging our founders' backgrounds in Physical Therapy, we provide expert assistance with transfers, walking, and positioning. Our goal is to keep residents moving safely while preventing falls and skin breakdown."
    }
  ];

  const valueProps = [
    {
      icon: ShieldCheck,
      title: "Clinical Level 3 Oversight",
      description: "As a Level 3 facility, we manage complex care needs that go beyond standard assisted living, overseen by Doctors of Physical Therapy."
    },
    {
      icon: Users,
      title: "The 1:3 Care Advantage",
      description: "In our 8-resident home, caregivers are never 'too busy.' With a 1:3 ratio and 24/7 overnight awake staff, assistance is immediate, personal, and never rushed."
    },
    {
      icon: Heart,
      title: "Preserving Independence",
      description: "We don't just 'do for' residents; we support their abilities. Every assistance plan is designed to help residents retain their autonomy for as long as possible."
    }
  ];

  const personalAssistanceSchema = {
    "@type": "Service",
    "name": "Personal Assistance and ADL Support",
    "provider": {
      "@id": "https://www.columbiacarehome.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Columbia"
    },
    "serviceType": "Assisted Living Personal Care",
    "description": "Clinical-led assistance with activities of daily living including mobility support, medication management, and hygiene care.",
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
        title="Personal Assistance & ADL Support in Columbia MD | Columbia Care Home"
        description="Clinical-led personal assistance with daily living (ADLs). 1:3 staffing ratio in a premium 8-bed care home in Columbia, MD. Overseen by Doctors of Physical Therapy."
        structuredData={personalAssistanceSchema}
        image="https://www.columbiacarehome.com/og-personal-assistance.jpg"
        url="/personal-assistance"
      />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-emerald-700 to-teal-800 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Care Services
            </Link>
            <h1 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-emerald-200 mb-4">
              Personal Assistance & ADL Support in Columbia MD
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
              Assistance That Honors <span className="text-emerald-200">The Individual</span>
            </h2>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed mb-6">
              Professional, clinical support for daily activities, delivered with the intimacy of a private home and the expertise of doctors.
            </p>
            <p className="text-emerald-100/90 max-w-2xl mx-auto text-lg italic">
              Our Columbia, MD assisted living home provides expert support with activities of daily living (ADLs) including mobility assistance, hygiene care, and medication management.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Lead Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-800 font-serif italic leading-relaxed text-center">
              "We believe that personal assistance isn't just about 'completing tasks'—it's about removing the barriers to a dignified, active life."
            </p>
            <div className="mt-8 flex justify-center items-center gap-4 text-emerald-700 font-bold uppercase tracking-widest text-sm">
              <span className="h-px w-8 bg-emerald-200" />
              The Columbia Care Philosophy
              <span className="h-px w-8 bg-emerald-200" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* The DPT-Led Difference */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-100 rounded-2xl transform -rotate-2" />
            <img
              loading="lazy"
              decoding="async"
              src={dignifiedCareImage}
              alt="Caregiver providing respectful assistance"
              className="relative w-full rounded-2xl shadow-xl z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
              <div className="text-3xl font-bold text-emerald-700 mb-1">1:3</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Staff Ratio</div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Clinical Oversight Makes the Difference</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                In most facilities, personal care is delivered by staff who follow a checklist. At Columbia Care Home, every care plan is designed and supervised by our founders, who are <strong>Doctors of Physical Therapy</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Physical therapists specialize in mobility, fall prevention, and functional independence — three factors that significantly impact long-term senior health.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This means we look at assistance through a clinical lens. We train our caregivers in advanced body mechanics and transfer techniques to ensure safety, and we constantly evaluate each resident's mobility to identify small health changes before they become emergencies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our founders’ background in physical therapy also informs our approach to mobility and fall prevention. Learn more about{' '}
                <Link to="/blog/physical-therapist-owned-care-home-advantage" className="text-emerald-700 font-bold underline underline-offset-4 hover:text-emerald-800 transition-colors">
                  The Clinical Advantage: Why a Physical Therapist-Owned Care Home Changes the Aging Experience.
                </Link>
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {['Level 3 Clinical License', 'RN Case Management', 'DPT-Led Training', 'Dignity-First Protocols'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-800 font-medium bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                  <ChevronRight className="w-4 h-4 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ADL Section */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif mb-4">Support For Every Room of Life</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We provide comprehensive support with Activities of Daily Living (ADLs) in a way that feels natural, not medical.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {adls.map((adl, index) => (
              <ADLCard
                key={adl.title}
                icon={adl.icon}
                title={adl.title}
                description={adl.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Why 8 Beds Matter */}
        <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 -mr-32 -mt-32" />
          <div className="relative z-10 grid lg:grid-cols-3 gap-12">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <prop.icon className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-xl font-bold">{prop.title}</h3>
                <p className="text-emerald-100/80 leading-relaxed">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-28 text-center bg-white rounded-3xl p-10 md:p-20 shadow-xl border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6">
            A Better Baseline for Care
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your loved one deserves care that is both clinically sound and emotionally supportive. Let's discuss how our 1:3 ratio, overnight awake staff, and therapist-led team can give your family peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-emerald-500/40 transition-all text-center">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                Start the Conversation
              </motion.span>
            </Link>
            <Link to="/schedule-a-tour" className="w-full sm:w-auto px-10 py-5 bg-white text-emerald-700 border-2 border-emerald-100 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all text-center">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                See the Home
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAssistancePage;
