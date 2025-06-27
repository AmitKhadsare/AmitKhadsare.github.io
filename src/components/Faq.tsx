import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Plus, Minus, Users, ClipboardList, ShieldCheck, HeartPulse, Sparkles, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    icon: Users,
    question: "What is the staff-to-resident ratio?",
    answer: "We pride ourselves on maintaining a high staff-to-resident ratio to ensure personalized attention and care for every resident. The exact ratio varies based on the time of day and the specific needs of our residents, but we always exceed state requirements.",
    category: "Staffing"
  },
  {
    icon: ClipboardList,
    question: "How do you develop personalized care plans?",
    answer: "Each resident's care plan is developed through a collaborative process involving the resident, their family, our nursing staff, and their physician. We conduct a comprehensive assessment upon admission and regularly review and update the plan to adapt to any changing needs.",
    category: "Care Planning"
  },
  {
    icon: ShieldCheck,
    question: "What safety and security measures are in place?",
    answer: "Our facility is equipped with 24/7 security, emergency call systems in every room, and secure entrances and exits. Our staff is fully trained in emergency procedures to ensure the highest level of safety for our residents at all times.",
    category: "Safety"
  },
  {
    icon: HeartPulse,
    question: "How do you handle medical emergencies?",
    answer: "We have registered nurses on-site 24/7 and established protocols for medical emergencies. We are located in close proximity to major hospitals and work with local emergency services to ensure rapid response when needed.",
    category: "Healthcare"
  }
];

interface AccordionItemProps {
  icon: React.ElementType;
  question: string;
  answer: string;
  category: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const AccordionItem: React.FC<AccordionItemProps> = ({ icon: Icon, question, answer, category, isOpen, onClick, index }) => {
  return (
    <motion.div 
      className="group relative"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className={`relative bg-white rounded-2xl shadow-lg border transition-all duration-300 overflow-hidden ${
          isOpen 
            ? 'border-emerald-300 shadow-emerald-200/50' 
            : 'border-stone-200/80 hover:border-emerald-200 hover:shadow-xl'
        }`}
        layout
        whileHover={{ y: -2 }}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        
        <motion.button
          className="relative w-full flex items-center p-6 lg:p-8 cursor-pointer text-left"
          onClick={onClick}
          whileTap={{ scale: 0.99 }}
        >
          {/* Number badge */}
          <div className="absolute -left-3 -top-3 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg lg:hidden">
            {index + 1}
          </div>
          
          <div className="mr-4 lg:mr-6 flex-shrink-0">
            <motion.div 
              className={`flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-xl transition-all duration-300 ${
                isOpen 
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600' 
                  : 'bg-gradient-to-br from-emerald-50 to-teal-50 group-hover:from-emerald-100 group-hover:to-teal-100'
              }`}
              animate={isOpen ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Icon className={`transition-colors duration-300 ${
                isOpen ? 'text-white' : 'text-emerald-700'
              }`} size={28} />
            </motion.div>
          </div>
          
          <div className="flex-grow pr-4">
            <div className="flex items-start justify-between">
              <div>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 transition-colors duration-300 ${
                  isOpen 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : 'bg-stone-100 text-stone-600'
                }`}>
                  {category}
                </span>
                <h3 className="text-lg lg:text-xl font-bold text-stone-800 leading-tight pr-4">
                  {question}
                </h3>
              </div>
              
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`rounded-full p-2 transition-colors duration-300 ${
                    isOpen 
                      ? 'bg-emerald-100' 
                      : 'bg-stone-100 group-hover:bg-emerald-50'
                  }`}
                >
                  {isOpen ? 
                    <Minus size={20} className="text-emerald-700" /> : 
                    <Plus size={20} className="text-stone-500 group-hover:text-emerald-600" />
                  }
                </motion.div>
              </div>
            </div>
          </div>
        </motion.button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 lg:px-8 pb-6 lg:pb-8 pl-20 lg:pl-28">
                <motion.p 
                  className="text-stone-600 leading-relaxed"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {answer}
                </motion.p>
                <motion.div
                  className="flex items-center gap-2 mt-4 text-emerald-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <CheckCircle size={16} />
                  <span className="text-sm font-medium">Verified by our care team</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section 
      id="faq" 
      className="py-16 lg:py-20 bg-gradient-to-br from-stone-50 via-white to-emerald-50 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-stone-200 to-emerald-100 rounded-full filter blur-2xl opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="inline w-4 h-4 mr-1" />
            Your Peace of Mind
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-800 bg-clip-text text-transparent leading-tight font-serif mb-6">
            Your Questions, Answered
          </h2>
          <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            We believe in transparency and providing you with all the information you need to make the best decision for your family.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-4 lg:space-y-6"
          variants={containerVariants}
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              icon={item.icon}
              question={item.question}
              answer={item.answer}
              category={item.category}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
              index={index}
            />
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12 lg:mt-16"
          variants={itemVariants}
        >
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-stone-200/50">
            <h3 className="text-2xl lg:text-3xl font-bold text-stone-800 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
              We're here to help! Our caring team is ready to answer any questions you may have about our services and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/faq">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold shadow-lg hover:shadow-emerald-500/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All FAQs
                </motion.button>
              </Link>
              <a href="tel:555-123-4567">
                <motion.button
                  className="px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-600 rounded-full font-semibold hover:bg-emerald-50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Us Now
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Faq;