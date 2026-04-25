import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Clock, Users, Heart, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';

const PricingPage = () => {
  const inclusiveFeatures = [
    {
      title: "24/7 Awake Care",
      description: "Our caregivers don't sleep on shift. They stay awake through the night, so your parent doesn't have to press a button and wait while someone is roused from a cot.",
      icon: Clock
    },
    {
      title: "Clinical Oversight",
      description: "Our clinical team, both Doctors of Physical Therapy, monitor every resident daily. This isn’t a checkbox. It’s how decisions actually get made here.",
      icon: Users
    },
    {
      title: "Medication Management",
      description: "Every medication, every dose, logged and administered by trained staff. No pill organizer left on a nightstand. No family chasing refills.",
      icon: ShieldCheck
    },
    {
      title: "Full Personal Assistance",
      description: "Bathing, dressing, toileting, transfers. Whether it takes 20 minutes or an hour, it's part of what we do. We don't clock care time.",
      icon: Heart
    },
    {
      title: "Meals & Snacks",
      description: "Home-cooked food served throughout the day. Not a tray dropped off at a door. A shared table, with people who know your parent’s preferences.",
      icon: Heart
    },
    {
      title: "Housekeeping & Laundry",
      description: "Your loved one's room is kept clean and their laundry done. These aren't optional add-ons. They're part of living here with dignity.",
      icon: CheckCircle2
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <SEOHead
        title="Pricing & Value | Transparent Senior Care in Columbia, MD"
        description="One flat monthly rate. No hidden tiers, no care-point surcharges. Learn how our all-inclusive pricing model works for Level 3 assisted living in Columbia, MD."
        url="https://www.columbiacarehome.com/pricing"
      />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              Financial Transparency
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-8 leading-tight">
              One number.<br />
              <span className="italic text-emerald-400 font-serif">It doesn’t change later.</span>
            </h1>
            <p className="text-xl text-emerald-100/70 max-w-2xl mx-auto leading-relaxed">
              We run one home. Eight residents maximum. In Columbia, Maryland. This isn’t a network or a franchise. It’s one house. And the way we charge reflects that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story Section — replaces corporate comparison grid */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-stone-100">
            <span className="block text-xs font-bold uppercase tracking-widest text-emerald-700 mb-6">This is what families tell us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 italic leading-tight">
              "We were told one rate a month. By month three, we were paying nearly double."
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed border-l-4 border-emerald-100 pl-8">
              <p>
                We hear this all the time from families who call us after a bad experience somewhere else. A facility advertises a low base rate. What they don't say upfront is that <strong className="text-stone-800">every care task costs extra.</strong> A "care point" for help with dressing, another for escorting to the dining room, another for a medication reminder.
              </p>
              <p>
                As your parent's needs increase, which they often do, so does the monthly bill. <strong className="text-stone-800">The number keeps changing. And you stop trusting what you’re being told.</strong> Families end up comparing bills instead of focusing on their loved one.
              </p>
              <p>
                We built our model to be the opposite of that. One flat monthly rate. Everything included. The same bill every month. <strong className="text-stone-800">If your parent needs more help this week than last, the number doesn’t change.</strong>
              </p>
              <p className="mt-6 pt-6 border-t border-stone-100">
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-bold rounded-md mb-3 uppercase tracking-wider text-xs">Typical Range</span>
                <br />
                Our all-inclusive rate typically falls between <strong>$7,000 to $10,000</strong> per month, depending on the specific care and mobility needs at the time of admission. No hidden tiers, no surprise invoices.
              </p>
              <div className="mt-8">
                <Link to="/blog/care-points-trap-hidden-costs-assisted-living" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:underline">
                  Read our deep-dive on why these "Care Point" traps exist →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-6 italic text-emerald-800">What this looks like in real life</h2>
            <p className="text-stone-500 max-w-xl mx-auto text-lg leading-relaxed">
              This is how the house actually runs every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inclusiveFeatures.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="text-emerald-700" size={24} />
                </div>
                <h4 className="text-xl font-bold text-stone-800 mb-3">{item.title}</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Move-in process section */}
      <section className="pt-16 pb-12 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center bg-white rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-stone-100">
            <div className="md:col-span-2 flex justify-center">
              <div className="w-28 h-28 bg-emerald-900 rounded-[2rem] flex items-center justify-center shadow-xl transform -rotate-3">
                <ClipboardCheck className="text-emerald-400" size={52} />
              </div>
            </div>
            <div className="md:col-span-3">
              <span className="block text-xs font-bold uppercase tracking-widest text-emerald-700 mb-4">Before someone moves in</span>
              <h3 className="text-2xl font-serif font-bold text-stone-800 mb-5 leading-snug">Move-in process</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                When someone moves into our home, we spend time understanding their medical history, mobility, and daily routines so care is set up properly from day one.
              </p>
              <p className="text-stone-600 leading-relaxed">
                There is a one-time move-in fee that covers onboarding, preparation, and setup before arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-8 italic">Pricing matters. <br/>But the right fit matters more.</h2>
          <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We'd rather you visit, ask every question, and leave feeling clear, rather than sign something you're not sure about. Come see how we actually operate.
          </p>
          <Link to="/schedule-a-tour" className="inline-block">
            <button className="bg-emerald-600 text-white px-10 py-5 rounded-full hover:bg-emerald-500 transition-all duration-300 font-bold text-lg shadow-xl">
              Schedule a Private Tour
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
