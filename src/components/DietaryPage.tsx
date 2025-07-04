import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Utensils, Leaf, Fish } from 'lucide-react';
const nourishingImage = 'https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg';

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="w-8 h-8 text-orange-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const DietaryPage = () => {
  const features = [
    {
      icon: Leaf,
      title: "Fresh & Quality Ingredients",
      description: "We prioritize high-quality, seasonal ingredients to create meals that are fresh, flavorful, and nutritious."
    },
    {
      icon: Fish,
      title: "Specialized Diet Accommodation",
      description: "Our team prepares meals that are approved by licensed dietitians and thoughtfully planned to meet a variety of dietary needs, including low-sodium, diabetic, heart-healthy, and pureed or soft-texture diets."
    },
    {
      icon: Utensils,
      title: "Balanced & Wholesome Meals",
      description: "Every meal is thoughtfully planned to provide a complete nutritional profile, balancing lean proteins, complex carbohydrates, and healthy fats, along with essential vitamins and fiber."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
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
              Nourishing Body & Soul
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Delicious, dietitian-approved meals designed to support wellness and delight the senses.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Introduction Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            className="rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src={nourishingImage} 
              alt="A delicious and healthy plate of food" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 font-serif">A Taste of Home</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that great food is a cornerstone of a great life. Our dining program is centered around creating delicious, nutritionally balanced meals that our residents look forward to every day. It's about more than just sustenance; it's about creating joyful, social experiences around the dinner table.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team members, guided by a registered dietitian, crafts menus that are both healthy and appealing, always ready to accommodate the personal tastes and dietary needs of each individual resident.
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Dining Philosophy</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Caring Through Every Meal
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our residents enjoy meals that are both nutritious and comforting, thoughtfully tailored to their individual dietary needs.
          </p>
          <Link to="/schedule-a-tour">
            <motion.button
              className="group px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Schedule a Tour
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DietaryPage;