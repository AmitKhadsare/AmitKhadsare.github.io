import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import {
  ArrowLeft, ChevronDown, Search, Users, Shield, DollarSign, Utensils, Heart, Activity
} from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  faqs: FAQ[];
}

// Comprehensive FAQ data organized by categories
const faqCategories: FAQCategory[] = [
  {
    name: "Admission & Costs",
    icon: DollarSign,
    faqs: [
      {
        question: "What's included in the monthly fee?",
        answer: "Our monthly fee covers accommodation, 24/7 care, three nutritious meals plus snacks, housekeeping, laundry, activities, and basic medical supplies. Additional services like physical therapy or specialized care may incur extra charges."
      },
      {
        question: "Do you accept insurance or Medicare/Medicaid?",
        answer: "We accept private pay. While we don't directly bill Medicare/Medicaid, we can provide documentation for reimbursement. Our admissions team can help you understand your payment options."
      },
      {
        question: "What is the admission process?",
        answer: "Our admission process includes: 1) Initial tour and consultation, 2) Health assessment by our nursing team, 3) Review of medical records, 4) Care plan development, and 5) Room selection and move-in coordination. The entire process typically takes 5-7 days."
      },
      {
        question: "Is there a waiting list?",
        answer: "Availability varies based on the level of care needed. We maintain a waiting list for preferred rooms and can typically accommodate urgent admissions within 24-48 hours based on availability."
      }
    ]
  },
  {
    name: "Daily Life & Care",
    icon: Heart,
    faqs: [
      {
        question: "What does a typical day look like?",
        answer: "Days begin with morning care and breakfast, followed by activities like exercise, crafts, or therapy sessions. After lunch, residents enjoy quiet time or social activities. Evenings include dinner, entertainment, and personalized care routines."
      },
      {
        question: "Can residents bring their own furniture?",
        answer: "Yes! We encourage residents to personalize their rooms with familiar furniture, photos, and decorations to create a home-like environment. We just ensure all items meet safety standards."
      },
      {
        question: "How do you handle residents' medications?",
        answer: "Our licensed nurses manage all medications, including storage, administration, and monitoring. We use an electronic medication administration record (eMAR) system and coordinate with pharmacies and physicians for refills and changes."
      },
      {
        question: "What personal care services are provided?",
        answer: "We assist with all activities of daily living including bathing, dressing, grooming, toileting, and mobility. Care is personalized based on each resident's needs and preferences while promoting independence."
      }
    ]
  },
  {
    name: "Visiting & Family",
    icon: Users,
    faqs: [
      {
        question: "What are visiting hours?",
        answer: "Regular visiting hours are 9 AM to 8 PM daily, but we understand family schedules vary. Special arrangements can be made for early morning or late evening visits. We encourage family involvement!"
      },
      {
        question: "Can family members join for meals?",
        answer: "Absolutely! Family members are welcome to join residents for meals. We just ask for 24-hour notice so our kitchen can prepare accordingly. Guest meals are available for a small fee."
      },
      {
        question: "How do you keep families informed?",
        answer: "We provide regular updates through monthly care conferences, phone calls for any changes in condition, a family portal for care notes, and quarterly newsletters. Families are always welcome to call with questions."
      },
      {
        question: "Can residents leave for family visits?",
        answer: "Yes, residents can go on outings or overnight visits with family. We just need advance notice to prepare medications and care instructions. Our team will help coordinate everything needed for a safe visit."
      }
    ]
  },
  {
    name: "Health & Safety",
    icon: Shield,
    faqs: [
      {
        question: "How do you handle medical emergencies?",
        answer: "We have RNs on-site 24/7, emergency response protocols, direct lines to EMS, and relationships with nearby hospitals. All staff are trained in CPR and emergency procedures."
      },
      {
        question: "What safety measures are in place?",
        answer: "Our safety features include 24/7 security, emergency call systems, grab bars, non-slip flooring, secure entrances, fire safety systems, and generator backup power."
      },
      {
        question: "Do you provide physical therapy?",
        answer: "Yes, we offer on-site physical, occupational, and speech therapy services. Our therapy team creates personalized treatment plans to maintain or improve residents' functional abilities."
      },
      {
        question: "How do you prevent falls?",
        answer: "We use comprehensive fall risk assessments, exercise programs for strength and balance, proper lighting, clear pathways, appropriate footwear, and assistive devices as needed."
      }
    ]
  },
  {
    name: "Dining & Nutrition",
    icon: Utensils,
    faqs: [
      {
        question: "What kind of meals do you serve?",
        answer: "Our chef prepares home-style meals with restaurant-quality options. Menus rotate monthly and include resident favorites. All meals are approved by our registered dietitian."
      },
      {
        question: "How do you handle special diets?",
        answer: "We accommodate all dietary needs including diabetic, heart-healthy, low-sodium, pureed textures, allergies, and cultural or religious preferences. Each resident's diet is individually planned."
      },
      {
        question: "Are snacks available between meals?",
        answer: "Yes, nutritious snacks and beverages are available 24/7. We also have a café area where residents can enjoy coffee, tea, and light refreshments throughout the day."
      },
      {
        question: "Can residents eat in their rooms?",
        answer: "While we encourage dining room socialization, residents can certainly have meals in their rooms when preferred or needed. Room service is always available."
      }
    ]
  },
  {
    name: "Activities & Social Life",
    icon: Activity,
    faqs: [
      {
        question: "What activities are offered?",
        answer: "Daily activities include exercise classes, arts and crafts, music therapy, pet therapy, gardening, games, movie nights, spiritual services, and community outings."
      },
      {
        question: "Can residents continue their hobbies?",
        answer: "Absolutely! We encourage residents to continue their hobbies and interests. Our activity team helps facilitate everything from knitting clubs to book discussions to gardening."
      },
      {
        question: "Do you organize outings?",
        answer: "Yes, we schedule regular outings including shopping trips, restaurant visits, cultural events, and scenic drives. Transportation and staff accompaniment are provided."
      },
      {
        question: "How do you celebrate holidays and birthdays?",
        answer: "We love celebrations! Every holiday includes decorations, special meals, and activities. Birthdays are celebrated with parties, and families are always invited to join."
      }
    ]
  }
];

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories = faqCategories.filter(category => {
    if (selectedCategory !== 'All' && category.name !== selectedCategory) {
      return false;
    }
    if (searchTerm) {
      return category.faqs.some(
        faq =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return true;
  });

  // Generate FAQPage structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category =>
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Frequently Asked Questions | Columbia Care"
        description="Find answers to common questions about our senior care services, admission process, costs, and daily life at Columbia Care Home."
        keywords="senior care faq, nursing home questions, assisted living answers, columbia care faq, elderly care information"
        image="https://www.columbiacarehome.com/og-faq.jpg"
        url="/faq"
        structuredData={faqStructuredData}
      />
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Link to="/">
              <button className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </button>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Everything you need to know about Columbia Care Home
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${selectedCategory === 'All'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              All Categories
            </button>
            {faqCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${selectedCategory === category.name
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredCategories.map((category) => {
              const Icon = category.icon;
              const filteredFAQs = searchTerm
                ? category.faqs.filter(
                  faq =>
                    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
                )
                : category.faqs;

              if (filteredFAQs.length === 0) return null;

              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                  </div>

                  {/* FAQ Items */}
                  <div className="space-y-3">
                    {filteredFAQs.map((faq, index) => {
                      const isOpen = openItems[`${category.name}-${index}`];

                      return (
                        <motion.div
                          key={index}
                          className="bg-white rounded-lg shadow-sm border border-gray-100"
                          whileHover={{ y: -1 }}
                        >
                          <button
                            onClick={() => toggleItem(category.name, index)}
                            className="w-full px-6 py-4 text-left"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold text-gray-900 pr-4">
                                {faq.question}
                              </h3>
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
                                <p className="text-gray-600 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </motion.div>
                            )}
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Contact Section */}
        <motion.div
          className="mt-16 bg-emerald-50 rounded-2xl p-8 lg:p-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our caring team is here to help. Contact us directly for personalized answers to your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:301-500-0809" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors">(301) 500-0809</a>
            <a href="tel:201-885-9225" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors">(201) 885-9225</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
