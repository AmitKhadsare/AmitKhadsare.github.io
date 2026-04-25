import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg md:text-xl font-serif font-semibold transition-colors ${isOpen ? 'text-emerald-800' : 'text-stone-800 group-hover:text-emerald-700'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 ml-4 ${isOpen ? 'text-emerald-600' : 'text-stone-400'}`}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-stone-600 leading-relaxed text-lg prose prose-stone max-w-none">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does your pricing model work?",
      answer: "We believe in complete financial transparency. Unlike corporate facilities that use complex 'tier-based' pricing or add-on charges for every extra minute of care, Columbia Care Home uses an all-inclusive monthly model. This covers all personal care, meals, medication management, and daily clinical oversight. Our goal is to ensure families never face unexpected billing surprises."
    },
    {
      question: "What is the 'Community Fee' mentioned in the contract?",
      answer: "The Community Fee is a standard, one-time administrative and clinical assessment fee paid at the time of admission. This fee covers the comprehensive clinical evaluation by our Doctors of Physical Therapy and the administrative setup required to integrate a new resident into our care ecosystem. It is disclosed upfront with no hidden components."
    },
    {
      question: "What exactly does 'Level 3 Licensed' mean?",
      answer: "Level 3 is the highest license tier granted by the Maryland Department of Health for assisted living. It authorizes us to provide care for residents with 'high-acuity' needs—those requiring significant assistance with multiple activities of daily living (bathing, dressing, mobility) and those with complex medical or cognitive challenges that require professional oversight."
    },
    {
      question: "Is there staff awake and available 24/7?",
      answer: "Yes. Safety is our non-negotiable priority. We maintain awake staff 24 hours a day, including throughout the overnight hours. Because we are an 8-bed home, our caregivers are always just steps away from any resident room, ensuring immediate response times that larger facilities simply cannot match."
    },
    {
      question: "What is your staff-to-resident ratio?",
      answer: "We maintain a consistent ratio of 1 caregiver for every 3 residents. In a traditional corporate facility, a single caregiver may be responsible for 15 to 20 residents. Our 1:3 ratio ensures that care is proactive rather than reactive—we anticipate needs before they become emergencies."
    },
    {
      question: "Is the home truly owned and led by Physical Therapists?",
      answer: "Yes. Columbia Care Home was founded and is actively led by Bhargav Patel, DPT and Sheetal Khadsare, DPT. Both are Doctors of Physical Therapy with extensive experience in geriatric rehabilitation. This clinical DNA is woven into everything we do, from staff training to our focus on resident mobility and fall prevention."
    },
    {
      question: "Can we visit our loved one at any time?",
      answer: "We consider our residents' home to be their private sanctuary. To maintain a peaceful, secure environment for all 8 residents, we ask that family visits be coordinated or scheduled. This ensures that therapy sessions, rest periods, and house rhythms are respected while welcoming family involvement."
    },
    {
      question: "Do you provide specialized memory care?",
      answer: "Absolutely. Our intimate environment is particularly beneficial for those with cognitive decline, Alzheimer's, or dementia. The smaller scale reduces the 'environmental noise' and confusion often found in large institutions, while our high staff ratio allows for the patience and redirection required for high-quality memory support."
    },
    {
      question: "How do you handle medical emergencies?",
      answer: "Our caregivers are trained in emergency protocols under the direction of our clinical founders. We maintain close relationships with local Howard County medical providers and emergency services. Because our staff is always awake and present, we can identify subtle changes in a resident's condition early, often preventing an emergency before it escalates."
    },
    {
      question: "Is there a long-term commitment or lease?",
      answer: "Our residency agreements are designed to be fair and flexible, focusing on the resident's best interest. We discuss all terms, including notice periods and discharge policies, transparently during the initial consultation to ensure families feel secure and informed."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-20">
      <SEOHead
        title="Frequently Asked Questions | Columbia Care Home"
        description="Find answers to common questions about our physical therapist-led assisted living, pricing, staff ratios, and Level 3 care model in Columbia, MD."
        url="https://www.columbiacarehome.com/faq"
      />

      {/* Hero Section */}
      <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/50 border border-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-300 mb-6">
              <HelpCircle size={14} />
              Support Center
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Common Questions</h1>
            <p className="text-xl text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
              Transparent answers about our care model, pricing, and daily life at Columbia Care Home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 p-8 md:p-12"
          >
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
            
            <div className="mt-16 p-8 bg-stone-50 rounded-2xl border border-stone-100 text-center">
              <h3 className="text-xl font-bold font-serif text-stone-800 mb-2">Still have questions?</h3>
              <p className="text-stone-600 mb-6 italic">We're here to help you navigate this important decision with clarity and honesty.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:301-500-0809" className="flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-full font-bold hover:bg-emerald-800 transition-all shadow-md">
                  <Phone size={18} />
                  (301) 500-0809
                </a>
                <Link to="/contact" className="flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 border border-emerald-200 rounded-full font-bold hover:bg-stone-50 transition-all shadow-sm">
                  <MessageCircle size={18} />
                  Send a Message
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <div className="bg-emerald-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 italic">Experience the Difference in Person</h2>
            <p className="text-emerald-100/80 text-lg mb-10 max-w-2xl mx-auto">
              The best way to understand our unique 1:3 care model is to see it in action. Schedule a private tour of our 8-bed residential home today.
            </p>
            <Link to="/schedule-a-tour">
              <button className="px-10 py-5 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all transform hover:-translate-y-1 shadow-xl">
                Schedule Your Visit
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
