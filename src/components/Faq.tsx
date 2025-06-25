import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Users, ClipboardList, ShieldCheck, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    icon: Users,
    question: "What is the staff-to-resident ratio?",
    answer: "We pride ourselves on maintaining a high staff-to-resident ratio to ensure personalized attention and care for every resident. The exact ratio varies based on the time of day and the specific needs of our residents, but we always exceed state requirements."
  },
  {
    icon: ClipboardList,
    question: "How do you develop personalized care plans?",
    answer: "Each resident's care plan is developed through a collaborative process involving the resident, their family, our nursing staff, and their physician. We conduct a comprehensive assessment upon admission and regularly review and update the plan to adapt to any changing needs."
  },
  {
    icon: ShieldCheck,
    question: "What safety and security measures are in place?",
    answer: "Our facility is equipped with 24/7 security, emergency call systems in every room, and secure entrances and exits. Our staff is fully trained in emergency procedures to ensure the highest level of safety for our residents at all times."
  },
  {
    icon: HeartPulse,
    question: "How do you handle medical emergencies?",
    answer: "We have registered nurses on-site 24/7 and established protocols for medical emergencies. We are located in close proximity to major hospitals and work with local emergency services to ensure rapid response when needed."
  }
];

interface AccordionItemProps {
  icon: React.ElementType;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ icon: Icon, question, answer, isOpen, onClick }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm border border-stone-200/80 overflow-hidden"
      layout
      transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
    >
      <motion.div
        className="flex items-center p-6 cursor-pointer"
        onClick={onClick}
      >
        <div className="mr-5 flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 bg-teal-50 rounded-full">
            <Icon className="text-emerald-700" size={24} />
          </div>
        </div>
        <h3 className="flex-grow text-lg font-lora text-stone-800">{question}</h3>
        <div className="w-8 h-8 flex items-center justify-center ml-4">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isOpen ? 'minus' : 'plus'}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <Minus size={20} className="text-emerald-700" /> : <Plus size={20} className="text-stone-500" />}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-6 pl-[92px]">
              <p className="font-nunito text-stone-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl lg:text-4xl font-lora font-bold text-stone-800 mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Your Questions, Answered
          </motion.h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto font-nunito">
            We believe in transparency and providing you with all the information you need to make the best decision for your family.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.slice(0, 4).map((item, index) => (
            <AccordionItem
              key={index}
              icon={item.icon}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/faq"
            className="inline-block bg-emerald-700 text-white font-nunito font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-emerald-800 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View All Questions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faq; 