import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Users, Clock, Utensils, Heart, Calendar } from 'lucide-react';

interface FAQItem {
  icon: React.ComponentType<{ className?: string }>;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    icon: Clock,
    question: "Can family visit anytime?",
    answer: "Yes! We encourage family visits and have flexible visiting hours from 9 AM to 8 PM daily. Special arrangements can be made for visits outside these hours. We also welcome family participation in activities and care planning.",
  },
  {
    icon: Users,
    question: "What is your staff-to-resident ratio?",
    answer: "We maintain a high staff-to-resident ratio that exceeds state requirements. During the day, we typically have 1 staff member for every 5-6 residents, and at night, 1 for every 8-10 residents, ensuring personalized attention.",
  },
  {
    icon: Utensils,
    question: "How do you handle dietary restrictions?",
    answer: "Our registered dietitian works with each resident to create personalized meal plans accommodating allergies, preferences, and medical needs including diabetic, low-sodium, kosher, and texture-modified diets.",
  },
  {
    icon: Heart,
    question: "How do you handle medical emergencies?",
    answer: "We have registered nurses on-site 24/7 and established emergency protocols. We're located near major hospitals and work closely with local emergency services to ensure rapid response when needed.",
  },
  {
    icon: Calendar,
    question: "What activities do you offer?",
    answer: "We provide diverse daily activities including exercise classes, arts and crafts, music therapy, gardening, games, spiritual services, and community outings. Activities are tailored to residents' interests and abilities.",
  },
];

interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onClick }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
      whileHover={{ y: -2 }}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-emerald-700" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 pr-2">{item.question}</h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </motion.div>
            </div>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3"
              >
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </motion.div>
            )}
          </div>
        </div>
      </button>
    </motion.div>
  );
};

const UpdatedFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Your Questions Answered
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our care services, facilities, and admission process.
          </p>
        </motion.div>

        {/* FAQ Grid - 2 columns on desktop */}
        <motion.div 
          className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Have More Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Browse our complete FAQ or speak directly with our care team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/faq">
              <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                View All FAQs
              </button>
            </Link>
            <a 
              href="tel:555-123-4567" 
              className="px-6 py-3 bg-white text-emerald-600 border-2 border-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Call (555) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpdatedFAQSection;