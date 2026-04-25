import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Phone, ShieldCheck, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-xl md:text-2xl font-serif font-bold transition-colors ${isOpen ? 'text-emerald-800' : 'text-stone-800 group-hover:text-emerald-700'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 ml-4 ${isOpen ? 'text-emerald-600' : 'text-stone-400'}`}
        >
          <ChevronDown size={28} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="pb-10 text-stone-600 leading-relaxed text-lg font-medium">
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
      answer: (
        <div className="space-y-4">
          <p>We believe in a strictly <strong>All-Inclusive Billing Model</strong>. Many facilities in the Maryland market advertise a low base rate but then add complex "care points" or "tiers" that can increase your bill by thousands of dollars every month for basic tasks.</p>
          <p>At Columbia Care Home, we provide a single, transparent monthly rate that covers 24/7 clinical oversight, medication management, all meals, and personalized assistance. This ensures families have total financial predictability with no hidden charges or care-level surcharges.</p>
        </div>
      )
    },
    {
      question: "What is the Community Fee for?",
      answer: "The Community Fee is a one-time administrative and clinical intake fee. Unlike corporate entry fees that go toward marketing, ours covers the intensive clinical assessment performed by our founders (both Doctors of Physical Therapy) to ensure we can safely and effectively manage your loved one's mobility and health needs from day one."
    },
    {
      question: "Does '24/7 Awake Staff' really mean they stay awake all night?",
      answer: (
        <div className="space-y-4">
          <p><strong>Yes.</strong> This is a critical distinction. Many residential homes use "sleep-in" staff who only wake up if an alarm goes off. At Columbia Care Home, our caregivers are on a dedicated awake shift throughout the night.</p>
          <p>For Level 3 residents who are fall risks or experience sundowning, a 30-second delay in response is the difference between a safe transfer and a hospital visit. We stay awake so you can sleep.</p>
        </div>
      )
    },
    {
      question: "How does an 8-bed home compare to a 100-bed facility?",
      answer: (
        <div className="space-y-4">
          <p>It's about the <strong>1:3 Ratio</strong>. In a large facility, one caregiver might be responsible for 15+ residents. If two people need help at the same time, someone waits. In our home, caregivers are always mere steps away. We don't have long hallways, elevators, or "zones." We have a family living room where oversight is constant and natural.</p>
        </div>
      )
    },
    {
      question: "What exactly is 'Level 3' Assisted Living in Maryland?",
      answer: (
        <div className="space-y-4">
          <p>Level 3 is the highest care designation provided by the Maryland Department of Health. It means we are licensed to provide comprehensive assistance to residents with high-acuity physical and cognitive needs—including those who require a 'two-person assist' for transfers.</p>
          <p>Our license number is <strong>AL-01052</strong>. You can verify our status and clean record directly on the <a href='https://health.maryland.gov/ohcq/Pages/Assisted-Living-Programs-Consumers.aspx' target='_blank' rel='noopener' className='text-emerald-700 underline'>Maryland OHCQ website</a>.</p>
        </div>
      )
    },
    {
      question: "Can I just drop in for a visit anytime?",
      answer: (
        <div className="space-y-4">
          <p>To protect the privacy and safety of our 8 residents, we do not allow unannounced "walk-in" tours. This is their private home, not a retail storefront. We ask that all prospective families <Link to='/schedule-a-tour' className='text-emerald-700 underline'>Schedule a Tour</Link> in advance.</p>
          <p>For current families, we maintain an open-door policy but coordinate visits to ensure they don't interfere with therapy sessions or the quiet house rhythms our residents enjoy.</p>
        </div>
      )
    },
    {
      question: "How do you handle physical therapy and mobility?",
      answer: "Because we are Physical Therapist-led, mobility is our baseline, not an 'extra' service. We integrate safe movement into every daily interaction. If your loved one needs formal physical or occupational therapy, we coordinate with preferred local providers to have sessions right here in the comfort of our home."
    },
    {
      question: "Who owns and operates Columbia Care Home?",
      answer: (
        <div className="space-y-4">
          <p>We are family-owned and clinically operated. Founders <strong>Bhargav Patel, PT, DPT</strong> and <strong>Sheetal Khadsare, PT, DPT</strong> are involved in the daily clinical oversight. We are not a franchise or a corporate chain. When you have a question, you talk directly to the owners who know your loved one by name.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <SEOHead
        title="FAQ - Truthful Answers About Our Care | Columbia Care Home"
        description="Get direct, transparent answers about our all-inclusive pricing model, 1:3 staff ratio, 24/7 awake care, and Maryland Level 3 licensing."
        url="https://www.columbiacarehome.com/faq"
      />

      {/* Standard Hero Section - Matching AboutUs/Services Page Format */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Transparency First
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-8 leading-tight">
              Honest Answers for <br/><span className="italic text-emerald-400">Concerned Families</span>
            </h1>
            <p className="text-xl text-emerald-50/70 max-w-2xl mx-auto leading-relaxed">
              Deciding on senior care is overwhelming. We've compiled the most frequent questions from our Howard County families to provide the clarity you deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Side Sidebar */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* FAQ List */}
            <div className="lg:w-2/3">
              <div className="space-y-4">
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
            </div>

            {/* Sticky Contact Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
                  <h3 className="text-2xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-3">
                    <MessageCircle className="text-emerald-600" />
                    Direct Contact
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-emerald-700" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Call Our Founders</span>
                        <a href="tel:301-500-0809" className="text-lg font-bold text-emerald-900 hover:underline">(301) 500-0809</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-emerald-700" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Verify Our License</span>
                        <p className="text-stone-600 text-sm">Maryland OHCQ: <strong>AL-01052</strong></p>
                      </div>
                    </div>
                    <Link to="/contact">
                      <button className="w-full mt-6 bg-emerald-700 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-all shadow-lg hover:shadow-emerald-900/20">
                        Ask a Specific Question
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Trust Signal Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 text-center">
                    <ShieldCheck className="mx-auto mb-3 text-emerald-700" size={32} />
                    <span className="block text-xs font-bold text-emerald-900 uppercase">1:3 Ratio</span>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 text-center">
                    <Scale className="mx-auto mb-3 text-emerald-700" size={32} />
                    <span className="block text-xs font-bold text-emerald-900 uppercase">Level 3 MD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto py-24 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8 italic">
            Schedule Your <span className="text-emerald-400 font-sans not-italic">Clinical Consultation</span>
          </h2>
          <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto">
            Brochures only tell half the story. Meet Bhargav and Sheetal to discuss your family's specific medical and mobility needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/schedule-a-tour" className="w-full sm:w-auto">
              <button className="w-full bg-emerald-600 text-white px-10 py-5 rounded-full hover:bg-emerald-500 transition-all duration-300 font-bold text-lg shadow-xl">
                Request a Private Tour
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
