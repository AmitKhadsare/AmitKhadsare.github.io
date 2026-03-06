import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ShieldCheck, Stethoscope,
  Activity, Heart, BellRing, ClipboardCheck, ChevronRight
} from 'lucide-react';
import healthHeroImage from '../assets/Facility/Our Gym & Therapy/gym-training-area-and-exit.jpg';
import safetyMonitoringImage from '../assets/proactivehealthsafety.avif';
import SEOHead from './SEOHead';

interface SafetyFeatureProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

const SafetyFeature: React.FC<SafetyFeatureProps> = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-teal-700" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const HealthAndSafetyPage = () => {
  const safetyFeatures = [
    {
      icon: Activity,
      title: "Proactive Health Monitoring",
      description: "Unlike facilities that react to issues, we perform daily wellness checks and vital sign monitoring. Our small scale allows us to identify subtle changes in health before they become emergencies."
    },
    {
      icon: ClipboardCheck,
      title: "RN-Managed Care Systems",
      description: "Our medication and health systems are managed under the oversight of a Registered Nurse (RN). This ensures hospital-grade accuracy in medication reconciliation and clinical reporting."
    },
    {
      icon: BellRing,
      title: "Rapid Clinical Response",
      description: "With a 1:3 staffing ratio and 24/7 overnight awake staff, assistance isn't just a button-press away—caregivers are physically present and attuned to resident needs, ensuring the fastest possible response in any situation."
    }
  ];

  const safetyValues = [
    {
      icon: Heart,
      title: "DPT-Led Safety Training",
      description: "Our caregivers are personally trained by our physical therapist founders in advanced body mechanics and safe transfer techniques, significantly reducing fall risks."
    },
    {
      icon: Stethoscope,
      title: "Medical Coordination",
      description: "We coordinate directly with visiting physicians, podiatrists, and specialists, ensuring that your loved one's medical plan is executed with 100% fidelity."
    },
    {
      icon: ShieldCheck,
      title: "Proactive Fall Prevention",
      description: "Using our facility's professional gym and therapy equipment, we integrate balance and strength training into daily life to proactively prevent injuries."
    }
  ];

  const healthSafetySchema = {
    "@type": "Service",
    "name": "Medical Oversight & Senior Safety",
    "medicalSpecialty": "Geriatric Care",
    "provider": {
      "@id": "https://www.columbiacarehome.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Columbia"
    },
    "serviceType": "Assisted Living Medical Safety",
    "description": "Clinical-managed senior safety services including RN oversight, DPT-led fall prevention, and proactive health monitoring in a small home setting.",
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
        title="Medical Oversight & Senior Safety | Assisted Living Columbia MD"
        description="Clinical-managed senior safety in a small 8-resident home. RN oversight, DPT-led fall prevention, and proactive health monitoring in Columbia, MD."
        structuredData={healthSafetySchema}
        image="https://www.columbiacarehome.com/og-health-safety.jpg"
        url="/health-safety"
      />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-emerald-700 to-teal-800 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
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
              RN Oversight & Senior Safety | Columbia MD
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold font-serif mb-4 leading-tight">
              Clinical Safety in a <span className="text-emerald-200">Small Home Setting</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-emerald-100 mb-8 uppercase tracking-widest">
              RN Oversight • Fall Prevention • Clinical Monitoring
            </p>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed mb-6">
              Providing families peace of mind through RN-managed oversight, therapist-led safety protocols, 24/7 overnight awake staff, and a 1:3 proactive care ratio.
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
              "Safety isn't just about bells and alarms—it's about a medical team that knows your loved one's 'normal' so well that we catch the first sign of a change."
            </p>
            <div className="mt-8 flex justify-center items-center gap-4 text-teal-700 font-bold uppercase tracking-widest text-sm">
              <span className="h-px w-8 bg-teal-200" />
              Proactive Clinical Oversight
              <span className="h-px w-8 bg-teal-200" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Medical Oversight Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-teal-50 rounded-2xl transform -rotate-2" />
            <img
              loading="lazy"
              decoding="async"
              src={safetyMonitoringImage}
              alt="Clinical health monitoring in a home setting"
              className="relative w-full rounded-2xl shadow-xl z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
              <div className="flex items-center gap-3 text-teal-700 font-bold">
                <ClipboardCheck className="w-5 h-5" />
                <span>RN Case Management</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 font-serif">When Healthcare Meets Home</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Most families come to us because they are tired of the 'revolving door' of hospitalizations. At Columbia Care Home, we specialize in stability.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Safety here is a clinical function. Our team handles complex medication management, wound care coordination, and health monitoring that reflects our clinical background. By bridging the gap between clinical settings and home life, we help residents stay healthy and out of the hospital.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This medical oversight is tightly integrated with our{' '}
                <Link to="/rehabilitation" className="text-teal-700 font-bold underline underline-offset-4 hover:text-teal-800 transition-colors">
                  rehabilitation programs
                </Link>{' '}
                and our specialized{' '}
                <Link to="/dietary" className="text-teal-700 font-bold underline underline-offset-4 hover:text-teal-800 transition-colors">
                  dietary services
                </Link>{' '}
                to ensure a holistic approach to wellness. We follow the best practices outlined in our{' '}
                <Link to="/blog/guide-to-transitioning-assisted-living-columbia-md" className="text-teal-700 font-bold underline underline-offset-4 hover:text-teal-800 transition-colors">
                  guide to safe transitioning
                </Link>.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {['RN Oversight', 'DPT-Led Transfers', 'Medication Reconciliation', '24/7 Awake Staff'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-800 font-medium bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                  <ChevronRight className="w-4 h-4 text-teal-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Safety Features */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif mb-4">Proactive Protection</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Our safety systems are carefully designed to provide security without an institutional feel.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <SafetyFeature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Clinical Stability Values */}
        <div className="bg-teal-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl opacity-50 -mr-32 -mt-32" />
          <div className="relative z-10 grid lg:grid-cols-3 gap-12">
            {safetyValues.map((val, index) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <val.icon className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="text-xl font-bold">{val.title}</h3>
                <p className="text-teal-100/80 leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Therapy Image Section */}
        <motion.div
          className="mt-28 rounded-3xl shadow-2xl overflow-hidden relative h-[450px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img
            loading="lazy"
            decoding="async"
            src={healthHeroImage}
            alt="Our professional therapy and gym area"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="text-2xl text-white font-serif italic mb-4">
                "We use professional tools and clinical expertise to ensure your loved one stays safe, strong, and stable."
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-28 text-center bg-white rounded-3xl p-10 md:p-20 shadow-xl border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6">
            Peace of Mind is a Conversation Away
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Safety is our highest clinical priority. Let's discuss your loved one's specific medical needs and how our overseeing nurses and therapists can ensure their wellbeing.
          </p>
          <p className="text-lg text-gray-500 mb-10 italic">
            Families are welcome to speak with our clinical team and see our safety protocols in person during a private tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-teal-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-teal-500/40 transition-all text-center">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                Start the Conversation
              </motion.span>
            </Link>
            <Link to="/schedule-a-tour" className="w-full sm:w-auto px-10 py-5 bg-white text-teal-700 border-2 border-teal-100 rounded-full font-bold text-lg hover:bg-teal-50 transition-all text-center">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                Schedule a Tour
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAndSafetyPage;
