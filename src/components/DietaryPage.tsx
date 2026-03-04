import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Utensils, Leaf,
  Fish, ShieldCheck, Heart, ChefHat, ChevronRight
} from 'lucide-react';
import kitchenImage from '../assets/Facility/Our Kitchen/kitchen-main-view.jpg';
import diningImage from '../assets/Facility/Our Kitchen/kitchen-and-dining-area.jpg';
import SEOHead from './SEOHead';

interface DietaryFeatureProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

const DietaryFeature: React.FC<DietaryFeatureProps> = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-orange-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const DietaryPage = () => {
  const dietaryFeatures = [
    {
      icon: ChefHat,
      title: "Home-Cooked Philosophy",
      description: "Unlike institutional facilities with steam-table buffets, our meals are prepared fresh in our open kitchen. The aroma of home-cooked food is not just about nutrition—it's a vital part of creating a homelike haven."
    },
    {
      icon: Fish,
      title: "Specialized Clinical Diets",
      description: "Our team manages complex dietary needs including low-sodium, diabetic, renal, and heart-healthy diets. We also provide expert support for texture-modified needs (pureed/soft) for those with swallowing challenges."
    },
    {
      icon: Leaf,
      title: "Brain & Bone Health Focus",
      description: "Our menus emphasize anti-inflammatory ingredients, lean proteins, and vital nutrients designed specifically to support cognitive function and mobility in seniors, dovetailing with our founders' clinical expertise."
    }
  ];

  const diningValues = [
    {
      icon: Utensils,
      title: "The Family Table",
      description: "We dine together at a shared table. This social interaction is critical for preventing isolation and ensuring every resident actually enjoys their meal."
    },
    {
      icon: ShieldCheck,
      title: "Integrated Safety",
      description: "Our care team is trained in dysphagia (swallowing safety) protocols, ensuring that dining is safe as well as delicious, even for those with advanced neurological conditions."
    },
    {
      icon: Heart,
      title: "Personal Choice",
      description: "In an 8-resident home, we know your loved one's preferences. If they prefer a different side dish or have a favorite recipe, we prepare meals according to their tastes."
    }
  ];

  const dietaryServiceSchema = {
    "@type": "Service",
    "name": "Senior Nutrition & Dietary Care",
    "provider": {
      "@id": "https://www.columbiacarehome.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Columbia"
    },
    "serviceType": "Assisted Living Dietary Care",
    "description": "Clinical-led senior nutrition in a small 8-resident assisted living home. Dietitian-approved menus, dysphagia support, and fresh home-cooked meals.",
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
        title="Senior Nutrition & Dietary Care in Columbia MD | Columbia Care Home"
        description="Clinical-led senior nutrition in a small 8-resident assisted living home. Dietitian-approved menus, dysphagia support, and fresh home-cooked meals in Columbia, MD."
        structuredData={dietaryServiceSchema}
        image="https://www.columbiacarehome.com/og-dietary.jpg"
        url="/dietary"
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
              Senior Nutrition & Dietary Care in Columbia MD
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
              Nourishing Body <span className="text-emerald-200">& Soul</span>
            </h2>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed mb-6">
              Where clinical nutrition meets the warmth of a family kitchen. Dietitian-approved meals prepared fresh, specifically for senior wellness.
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
              "Nutrition is a cornerstone of rehabilitation. We don't just 'serve food'—we deliver clinical fuel through the comforting experience of home cooking."
            </p>
            <div className="mt-8 flex justify-center items-center gap-4 text-emerald-700 font-bold uppercase tracking-widest text-sm">
              <span className="h-px w-8 bg-emerald-200" />
              Dietitian-Led Dining
              <span className="h-px w-8 bg-emerald-200" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Real Kitchen Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-orange-50 rounded-2xl transform rotate-2" />
            <img
              loading="lazy"
              decoding="async"
              src={kitchenImage}
              alt="Our clean, modern kitchen area"
              className="relative w-full rounded-2xl shadow-xl z-10"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
              <div className="flex items-center gap-3 text-emerald-700 font-bold">
                <Leaf className="w-5 h-5" />
                <span>Small Scale, High Quality</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 font-serif">The Advantage of an 8-Resident Home</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                In large facilities, food is often prepared in industrial quantities and transported on carts. At Columbia Care Home, your loved one sits in our dining area and smells the garlic sautéing or the bread baking.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This sensory experience is a powerful appetite stimulant for seniors. Because we only cook for eight, we can focus on culinary excellence and clinical precision. Every menu is <strong>dietitian-approved</strong> and tailored to individual medical requirements.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nutrition also supports our rehabilitation philosophy, helping residents maintain muscle strength, balance, and recovery after illness or hospitalization. It works alongside our{' '}
                <Link to="/rehabilitation" className="text-emerald-700 font-bold underline underline-offset-4 hover:text-emerald-800 transition-colors">
                  rehabilitation programs
                </Link>{' '}
                and{' '}
                <Link to="/memory-care" className="text-emerald-700 font-bold underline underline-offset-4 hover:text-emerald-800 transition-colors">
                  memory care
                </Link>{' '}
                to ensure the best outcomes, with daily support integrated from our{' '}
                <Link to="/personal-assistance" className="text-emerald-700 font-bold underline underline-offset-4 hover:text-emerald-800 transition-colors">
                  personal assistance
                </Link>{' '}
                team.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium text-emerald-800">
                Our team is trained to monitor residents for signs of aspiration risk and coordinate with speech therapists when texture adjustments are needed.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {['RD-Approved Menus', 'Dysphagia Support', 'Seasonal Ingredients', 'Custom Flavor Palettes'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-800 font-medium bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                  <ChevronRight className="w-4 h-4 text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Nutritional Features */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif mb-4">Nutrition Designed for Senior Health</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We leverage nutritional science to support the cognitive and physical health goals of our residents.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dietaryFeatures.map((feature, index) => (
              <DietaryFeature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Dining Environment */}
        <div className="bg-orange-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-800 rounded-full blur-3xl opacity-50 -ml-32 -mb-32" />
          <div className="relative z-10 grid lg:grid-cols-3 gap-12">
            {diningValues.map((val, index) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <val.icon className="w-6 h-6 text-orange-200" />
                </div>
                <h3 className="text-xl font-bold">{val.title}</h3>
                <p className="text-orange-50/80 leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Image / Dining View */}
        <motion.div
          className="mt-28 rounded-3xl shadow-2xl overflow-hidden relative h-[400px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img
            loading="lazy"
            decoding="async"
            src={diningImage}
            alt="Residents environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8 md:p-12">
            <p className="text-2xl text-white font-serif italic max-w-2xl">
              "Mealtime is the heartbeat of our home. It's where stories are shared and strength is rebuilt."
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-28 text-center bg-white rounded-3xl p-10 md:p-20 shadow-xl border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6">
            Join Us for a Meal
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            We invite you to tour our home and see our kitchen area in action. Let's discuss your loved one's nutritional needs and flavor preferences.
          </p>
          <p className="text-lg text-gray-500 mb-10 italic">
            Families are welcome to visit the kitchen, speak with our team, and see how meals are prepared for residents.
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
                Schedule a Visit
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietaryPage;
