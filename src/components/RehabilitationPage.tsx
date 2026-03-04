import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, PersonStanding,
  Brain, ShieldCheck, Activity, ExternalLink
} from 'lucide-react';
import physicalTherapyImage from '../assets/physical_therapy.avif';
import SEOHead from './SEOHead';

interface TherapyCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

const TherapyCard: React.FC<TherapyCardProps> = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
      <Icon className="w-7 h-7 text-emerald-700" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const RehabilitationPage = () => {
  const therapies = [
    {
      icon: PersonStanding,
      title: "Physical Therapy",
      description: "Our Physical Therapy program focuses on restoring strength, improving balance, and rebuilding the functional mobility that matters most — walking to the dining table, safely using the bathroom, getting in and out of bed without help. Because Bhargav Patel, our founder, has spent years delivering outpatient physical therapy at At Home Rehabilitation, our approach goes far beyond basic exercises."
    },
    {
      icon: Activity,
      title: "Occupational Therapy",
      description: "Occupational Therapy at Columbia Care Home focuses on the practical activities of daily life. Our therapists work with residents on dressing, bathing, meal preparation, and fine-motor tasks — helping them retain independence and confidence. In an 8-resident home, these sessions are one-on-one, not group-based, so every plan is genuinely personal."
    },
    {
      icon: Brain,
      title: "Speech Therapy",
      description: "For residents managing conditions like stroke or Parkinson's, Speech Therapy addresses communication, cognitive clarity, and safe swallowing. Our therapists work closely with the care team at Columbia Care Home so that gains made inside a session are immediately reinforced throughout the day — something impossible to coordinate in a large, 100-bed facility."
    }
  ];

  const highlights = [
    {
      icon: ShieldCheck,
      title: "Level 3 Licensed Facility",
      description: "We are licensed by the Maryland Department of Health as a Level 3 Assisted Living Home — the highest complexity tier for residential facilities. This means we're equipped to manage more advanced medical and rehabilitation needs than a standard care home."
    },
    {
      icon: PersonStanding,
      title: "Founded & Led by Doctors of Physical Therapy",
      description: "Bhargav Patel (DPT) and Sheetal Khadsare (DPT) didn't just hire therapists — they are the therapists. This clinical foundation shapes every care decision made under this roof, from how we set up a room to how we design a resident's daily routine."
    },
    {
      icon: Activity,
      title: "Integrated Care, Not an Add-On",
      description: "At most facilities, therapy is a scheduled service you pay extra for. At Columbia Care Home, rehabilitation is woven into how we live. Our therapists and caregivers work together, so the progress made in a session is actively supported between sessions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Rehabilitation & Physical Therapy Services | Columbia Care Home"
        description="Physical, Occupational, and Speech Therapy led by Doctors of Physical Therapy in our Level 3 licensed, 8-bed care home in Columbia, MD. Integrated, personalized rehabilitation — not an add-on."
        keywords="physical therapy Columbia MD, occupational therapy assisted living Howard County, speech therapy senior care, Level 3 assisted living Maryland, rehabilitation care home Columbia"
        url="/rehabilitation"
        type="website"
      />

      {/* Hero */}
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
              Physical, Occupational, and Speech Therapy — delivered by Doctors of Physical Therapy, inside your loved one's home.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* The At Home Rehab Connection */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            className="rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              loading="lazy"
              src={physicalTherapyImage}
              alt="Physical therapist working one-on-one with a resident at Columbia Care Home"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 font-serif">
              Built by Therapists Who've Seen What's Missing
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Before founding Columbia Care Home, Bhargav Patel spent years running{' '}
              <a
                href="https://www.athomerehabilitation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-medium underline underline-offset-2 hover:text-emerald-800 inline-flex items-center gap-1"
              >
                At Home Rehabilitation
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              , an outpatient Physical, Occupational, and Speech Therapy practice based in Columbia, MD. He visited hundreds of seniors in their homes and in care facilities across Howard County.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              What he saw repeatedly was that rehabilitation was treated as an afterthought — a box to check, not a core part of how care worked day to day. Columbia Care Home was built to change that. Our residents have direct, integrated access to the same clinical expertise that At Home Rehabilitation has been providing to Columbia families for years.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium italic border-l-4 border-emerald-400 pl-4">
              "Preserving movement is essential for preserving dignity."
            </p>
          </motion.div>
        </div>

        {/* Three Therapies */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif mb-4">
              Three Therapies, One Integrated Team
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Unlike large facilities where PT, OT, and Speech are siloed departments, our team at Columbia Care Home collaborates daily — because we share the same 8-resident home.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {therapies.map((therapy, index) => (
              <TherapyCard
                key={therapy.title}
                icon={therapy.icon}
                title={therapy.title}
                description={therapy.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Why It's Different */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif mb-4">
              Why Our Approach Is Different
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Our Level 3 license, our 8-bed size, and our founders' clinical backgrounds combine to create a rehabilitation experience that simply isn't possible in a larger setting.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <TherapyCard
                key={highlight.title}
                icon={highlight.icon}
                title={highlight.title}
                description={highlight.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">
            Talk to Us About Your Loved One's Rehabilitation Needs
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether your parent is recovering from a surgery, managing a neurological condition, or simply needs expert support to stay mobile and independent — we want to hear from you.
          </p>
          <Link to="/contact">
            <motion.button
              className="group px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Get in Touch
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