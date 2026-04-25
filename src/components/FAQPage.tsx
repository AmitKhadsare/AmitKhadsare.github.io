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
            <div className="pb-10 text-stone-600 leading-relaxed text-lg">
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
      question: "How does an 8-bed home actually compare to a 100-bed facility?",
      answer: (
        <div className="space-y-4">
          <p>
            The difference is the <strong>1:3 staff-to-resident ratio</strong>. In a large institutional facility, one caregiver may be responsible for 12 to 20 residents simultaneously. When two people need help at the same time, someone waits.
          </p>
          <p>
            That wait is where problems start. Falls. Frustration. Loss of dignity. In our home, there are no long hallways or elevators. Caregivers are in the same space as residents — steps away, not across a building.
          </p>
          <p>
            <Link to="/blog/8-bed-vs-large-facility-howard-county" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:underline">
              We wrote a full guide on exactly this comparison →
            </Link>
          </p>
        </div>
      ),
      schemaAnswer: "Columbia Care Home provides a 1:3 staff-to-resident ratio, compared to 1:12 or 1:20 in large facilities. This intimacy prevents falls and ensures dignity by providing immediate assistance without the wait times typical of institutional settings."
    },
    {
      question: "What exactly is 'Level 3' Assisted Living in Maryland?",
      answer: (
        <div className="space-y-4">
          <p>
            Level 3 is the highest level of assisted living care in Maryland. It means we’re allowed to care for residents who need more physical help, complex medications, or higher supervision.
          </p>
          <p>
            Our licence number is <strong>AL-01052</strong>. You can verify our current standing directly on the{' '}
            <a href="https://health.maryland.gov/ohcq/Pages/Assisted-Living-Programs-Consumers.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">
              Maryland OHCQ website
            </a>.
          </p>
          <p>
            <Link to="/blog/level-3-assisted-living-meaning-columbia-md" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:underline">
              Read what Level 3 actually means in daily care →
            </Link>
          </p>
        </div>
      ),
      schemaAnswer: "Level 3 is Maryland's highest assisted living license, allowing for complex medical oversight and physical assistance. Columbia Care Home is fully licensed (AL-01052) to provide this advanced level of clinical care."
    },
    {
      question: "Does '24/7 Awake Staff' actually mean someone is awake all night?",
      answer: (
        <div className="space-y-4">
          <p>
            <strong>Yes. And it matters more than people realize.</strong> Many residential homes use "sleep-in" staff — caregivers who are on-site but asleep, available only if an alarm triggers. At Columbia Care Home, our caregivers are on a dedicated awake night shift.
          </p>
          <p>
            For residents who are fall risks or have mobility limitations, even a short delay can become a real problem. We stay awake so your family can sleep.
          </p>
          <p>
            <Link to="/health-safety" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:underline">
              See how we approach safety and overnight care →
            </Link>
          </p>
        </div>
      ),
      schemaAnswer: "Yes. Our facility is staffed 24/7 by awake caregivers on a dedicated night shift. This is a critical safety difference from homes that use sleep-in staff who only respond to alarms."
    },
    {
      question: "What if my parent's health declines significantly — will they be asked to leave?",
      answer: (
        <div className="space-y-4">
          <p>
            This is one of the most important questions, and most families don’t ask it early enough. In many corporate facilities, when a resident's needs become more complex, they receive a discharge notice and the family has to start over.
          </p>
          <p>
            Because our team is trained to handle higher levels of care, we are equipped to handle needs that would cause a standard facility to transfer a resident to skilled nursing. Our goal is to be the last move your family has to make.
          </p>
          <p>
            We discuss this directly and honestly during every admission consultation.
          </p>
        </div>
      ),
      schemaAnswer: "We prioritize safety through a clinical-first model led by Doctors of Physical Therapy. Our team is trained to handle high-acuity needs that often trigger discharge in standard facilities."
    },
    {
      question: "How do you handle physical therapy and mobility?",
      answer: (
        <div className="space-y-4">
          <p>
            Mobility isn’t a separate service here. It’s part of everyday care here. Safe transfers, fall prevention, and body mechanics are part of every daily interaction in this house, not scheduled as a weekly session.
          </p>
          <p>
            For residents who need formal PT or OT sessions, we coordinate with preferred local providers to bring those sessions directly into our home — so your loved one doesn't have to travel for care.
          </p>
          <p>
            <Link to="/rehabilitation" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:underline">
              Learn about our rehabilitation approach →
            </Link>
          </p>
        </div>
      ),
      schemaAnswer: "Columbia Care Home is owned and led by a Doctor of Physical Therapy. This means mobility, transfer safety, and rehabilitation are part of the daily care culture, not just an occasional outside service."
    },
    {
      question: "Who owns and operates Columbia Care Home?",
      answer: (
        <div className="space-y-4">
          <p>
            The home is owned and run by our clinical team, both Doctors of Physical Therapy. This isn’t a franchise or a facility managed by a corporate group. We are on-site daily, overseeing care and making clinical decisions ourselves.
          </p>
          <p>
            When you have a concern, you talk to the people actually responsible for the care, not a regional manager.
          </p>
          <p>
            <Link to="/about-us" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:underline">
              Read our full story →
            </Link>
          </p>
        </div>
      ),
      schemaAnswer: "Columbia Care Home is a founder-led residence owned by two Doctors of Physical Therapy who are on-site daily overseeing all clinical and residential operations."
    },
    {
      question: "Is there a waitlist? How does admission work?",
      answer: (
        <div className="space-y-4">
          <p>
            We have a maximum of 8 residents. Availability is limited and doesn’t change often. If you're considering Columbia Care Home for a loved one, it’s better to reach out early, even if you're just exploring.
          </p>
          <p>
            Admission begins with a conversation and a clinical consultation. There are no forms to fill out upfront. We get to know your family first.
          </p>
          <p>
            <Link to="/schedule-a-tour" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:underline">
              Start the conversation →
            </Link>
          </p>
        </div>
      ),
      schemaAnswer: "With only 8 residents, availability is limited. Admission begins with a direct clinical consultation to ensure we are the right fit for your loved one's needs."
    },
    {
      question: "Can I just drop by for a visit or a tour anytime?",
      answer: (
        <div className="space-y-4">
          <p>
            We don't allow unannounced walk-in tours. This is our residents' private home, not a showroom. To protect their privacy, dignity, and daily rhythms, all prospective family visits are scheduled in advance.
          </p>
          <p>
            For current families, we maintain a genuinely open relationship. We just coordinate visits to avoid interrupting therapy, rest periods, or mealtimes. You'll always be welcome here.
          </p>
          <p>
            <Link to="/schedule-a-tour" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:underline">
              Schedule your private visit →
            </Link>
          </p>
        </div>
      ),
      schemaAnswer: "To protect resident privacy, all tours must be scheduled in advance. Current families enjoy open visitation coordinated around therapeutic and rest cycles."
    },
    {
      question: "How does your pricing model work?",
      answer: (
        <div className="space-y-4">
          <p>
            We use a single, flat monthly rate. Many assisted living facilities in Maryland advertise a low base rate but add extra charges for every task: help with dressing, a medication reminder, assistance walking to the dining room. By month three, the bill often looks very different from what they were told.
          </p>
          <p>
            At Columbia Care Home, your rate covers 24/7 clinical oversight, medication management, all meals, and full personal assistance. It is the same bill every month, even if your loved one needs more help.
          </p>
          <p>
            <Link to="/pricing" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:underline">
              Read how our pricing model works in full →
            </Link>
          </p>
        </div>
      ),
      schemaAnswer: "We use an all-inclusive monthly rate that covers 24/7 care, medications, and meals. Unlike large facilities that add charges for every task, our transparent pricing stays the same even as care needs increase."
    },
    {
      question: "What is the Community Fee for?",
      answer: (
        <div className="space-y-4">
          <p>
            The Community Fee is a one-time fee charged at move-in.
          </p>
          <p>
            We’ll walk you through it clearly during your visit so you know exactly what to expect.
          </p>
          <p>
            <Link to="/schedule-a-tour" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:underline">
              Ask us directly during your tour →
            </Link>
          </p>
        </div>
      ),
      schemaAnswer: "The Community Fee is a one-time move-in fee. We provide full transparency on all costs during your initial tour so there are no surprises."
    },
    {
      question: "What clinical specialties (like Podiatry or Diabetic Care) do you provide?",
      answer: (
        <div className="space-y-4">
          <p>
            Because we are a <strong>Level 3 facility</strong> led by clinicians, we provide proactive management for chronic conditions on-site.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Diabetic Management:</strong> Our clinical staff provides consistent monitoring, insulin administration, and dietary oversight to maintain stable levels.</li>
            <li><strong>On-site Podiatry:</strong> Foot health is critical for mobility and fall prevention. We coordinate on-site podiatry visits to ensure residents receive specialized care without the stress of external travel.</li>
          </ul>
          <p>
            Our goal is to bring the specialized care your loved one needs to them, rather than forcing frequent, exhausting trips to external clinics.
          </p>
        </div>
      ),
      schemaAnswer: "As a Level 3 facility led by clinicians, we manage chronic conditions like diabetes and provide on-site podiatry. We bring specialized care to the resident, avoiding frequent trips to external clinics."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": (faq as any).schemaAnswer || "Please visit our website for the full details on this topic. We focus on transparent, all-inclusive care and personalized clinical support."
      }
    }))
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SEOHead
        title="FAQ - Truthful Answers About Our Care | Columbia Care Home"
        description="Get direct, transparent answers about our all-inclusive pricing model, 1:3 staff ratio, 24/7 awake care, and Maryland Level 3 licensing."
        url="https://www.columbiacarehome.com/faq"
      />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-900 text-white overflow-hidden">
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
              Straight answers about <br /><span className="italic text-emerald-400">how we actually operate</span>
            </h1>
            <p className="text-xl text-emerald-50/70 max-w-2xl mx-auto leading-relaxed">
              These are the questions families usually ask after something goes wrong somewhere else. We’d rather answer them upfront.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* FAQ List */}
            <div className="lg:w-2/3">
              <div>
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

            {/* Sticky Sidebar */}
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
                        <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Call Our Clinical Team</span>
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
                      <button className="w-full mt-6 bg-emerald-700 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-all shadow-lg">
                        Ask a Specific Question
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Trust Signals */}
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

                {/* Quick Links */}
                <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
                  <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4">Explore Further</h4>
                  <div className="space-y-3">
                    <Link to="/pricing" className="flex items-center justify-between text-stone-700 hover:text-emerald-700 transition-colors py-1 border-b border-stone-50">
                      <span className="font-medium">Pricing & Value</span>
                      <span className="text-stone-400">→</span>
                    </Link>
                    <Link to="/about-us" className="flex items-center justify-between text-stone-700 hover:text-emerald-700 transition-colors py-1 border-b border-stone-50">
                      <span className="font-medium">Our Story</span>
                      <span className="text-stone-400">→</span>
                    </Link>
                    <Link to="/rehabilitation" className="flex items-center justify-between text-stone-700 hover:text-emerald-700 transition-colors py-1 border-b border-stone-50">
                      <span className="font-medium">Rehabilitation & Therapy</span>
                      <span className="text-stone-400">→</span>
                    </Link>
                    <Link to="/family-partnership" className="flex items-center justify-between text-stone-700 hover:text-emerald-700 transition-colors py-1">
                      <span className="font-medium">Family Partnership</span>
                      <span className="text-stone-400">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-stone-800 mb-8 italic">
            Still have questions?
          </h2>
          <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Come see how we operate. Meet our clinical team, walk through the home, and ask anything you need to. No pressure. No pitch.
          </p>
          <Link to="/schedule-a-tour" className="inline-block">
            <button className="bg-emerald-600 text-white px-10 py-5 rounded-full hover:bg-emerald-500 transition-all duration-300 font-bold text-lg shadow-xl">
              Request a Private Tour
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
