import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Clock, Users, Heart, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';

const PricingPage = () => {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);

  const careNeeds = [
    { id: 'meds', name: 'Medication Administration', price: 950, desc: 'Trained staff logging, ordering, and administering daily doses.' },
    { id: 'bathing', name: 'Bathing Assistance', price: 750, desc: 'Help with showers, transfers, and safety supervision.' },
    { id: 'dressing', name: 'Dressing & Grooming', price: 650, desc: 'Daily support with morning and evening routines.' },
    { id: 'mobility', name: 'High-Acuity Physical Transfers', price: 1450, desc: 'Physical assist for transfers (gait belt/2-person/lifts).' },
    { id: 'trays', name: 'Room Meal Tray Delivery', price: 450, desc: 'Delivering meals to private room during recovery or illness.' },
    { id: 'incontinence', name: 'Incontinence & Extra Linen Care', price: 850, desc: 'Routine hygiene checks, assistance, and heavy laundering.' },
    { id: 'night', name: 'Dementia & Night Agitation Monitoring', price: 1100, desc: 'Supervision and redirection during nighttime hours.' }
  ];

  const baseRate = 5200;

  const toggleNeed = (id: string) => {
    setSelectedNeeds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const calculatedTotal = baseRate + careNeeds
    .filter(need => selectedNeeds.includes(need.id))
    .reduce((sum, need) => sum + need.price, 0);

  const setPreset = (level: 'level1' | 'level2' | 'level3') => {
    if (level === 'level1') {
      setSelectedNeeds(['meds', 'trays']);
    } else if (level === 'level2') {
      setSelectedNeeds(['meds', 'bathing', 'dressing', 'trays']);
    } else if (level === 'level3') {
      setSelectedNeeds(['meds', 'bathing', 'dressing', 'mobility', 'trays', 'incontinence', 'night']);
    }
  };

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

      {/* 1. The Story Section FIRST after Hero */}
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
                Our all-inclusive rate typically falls between <strong>$7,500 to $10,000</strong> per month, depending on the specific care and mobility needs at the time of admission. No hidden tiers, no surprise invoices.
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

      {/* 2. Maryland Licensed Care Levels Guide */}
      <section className="py-16 bg-stone-100/60 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
              Maryland State Regulatory Framework
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-6 italic">
              Understanding Maryland Care Levels (Level 1, 2 & 3)
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Under Maryland Department of Health regulations (COMAR 10.07.14), assisted living facilities are licensed to provide specific levels of care. Know what your parent actually needs before comparing pricing models.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-stone-200/80 hover:border-emerald-300 transition-all shadow-sm">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 font-bold text-xs rounded-full uppercase">Level 1: Low Need</span>
              <h3 className="text-xl font-bold text-stone-800 mt-4 mb-3 font-serif">Minimal Assistance</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Occasional reminders for meals or medication. Independent mobility and bathing. Requires light oversight rather than hands-on physical support.
              </p>
              <span className="text-xs text-stone-500 font-semibold block">Typical Corporate Base: $5,200 – $6,600/mo</span>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-stone-200/80 hover:border-emerald-300 transition-all shadow-sm">
              <span className="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full uppercase">Level 2: Moderate Need</span>
              <h3 className="text-xl font-bold text-stone-800 mt-4 mb-3 font-serif">Daily Hands-On Help</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Daily assistance with bathing, dressing, grooming, and routine medication management. Minor assistance needed when standing up or walking.
              </p>
              <span className="text-xs text-stone-500 font-semibold block">Typical Corporate Cost: $7,000 – $9,000/mo</span>
            </div>

            <div className="p-8 rounded-3xl bg-emerald-50/50 border-2 border-emerald-500/40 shadow-sm relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"></div>
              <span className="px-3 py-1 bg-emerald-700 text-white font-bold text-xs rounded-full uppercase tracking-wider">Level 3: High Acuity</span>
              <h3 className="text-xl font-bold text-emerald-950 mt-4 mb-3 font-serif">High Physical & Cognitive Care</h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                Full physical assistance for transfers, complex multi-dose medication regimens, incontinence care, and 24/7 awake supervision for fall prevention or dementia.
              </p>
              <div className="pt-3 border-t border-emerald-200/60 flex justify-between items-center">
                <span className="text-xs text-emerald-900 font-bold">Columbia Care Specialty</span>
                <span className="text-xs text-emerald-800 font-bold">$7,500 – $10,000 Flat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Calculator Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
              Interactive Calculator
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-6 italic">
              Expose the "Care Points" Trap
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed mb-6">
              Most corporate facilities quote a low starting rate but charge extra for every task. Select your parent's required care needs below or tap a preset to see how corporate bills reach $8,000–$12,000+.
            </p>

            {/* Quick 1-Click Presets */}
            <div className="flex flex-wrap justify-center gap-3">
              <button 
                onClick={() => setPreset('level1')}
                className="px-4 py-2 rounded-full bg-stone-100 border border-stone-300 text-stone-700 text-xs font-bold hover:border-emerald-500 hover:text-emerald-700 transition-all"
              >
                Preset: Level 1 Minimal ($6,600/mo Corporate)
              </button>
              <button 
                onClick={() => setPreset('level2')}
                className="px-4 py-2 rounded-full bg-stone-100 border border-stone-300 text-stone-700 text-xs font-bold hover:border-emerald-500 hover:text-emerald-700 transition-all"
              >
                Preset: Level 2 Moderate ($7,750/mo Corporate)
              </button>
              <button 
                onClick={() => setPreset('level3')}
                className="px-4 py-2 rounded-full bg-emerald-800 text-white text-xs font-bold hover:bg-emerald-700 transition-all shadow-sm"
              >
                Preset: Level 3 High-Acuity ($11,400/mo Corporate)
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Panel: Inputs */}
            <div className="lg:col-span-7 bg-stone-50/70 rounded-3xl p-6 md:p-8 border border-stone-200/60 shadow-sm space-y-3">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-stone-800 font-serif">Select Care Needs</h3>
                <button 
                  onClick={() => setSelectedNeeds([])}
                  className="text-xs text-stone-400 hover:text-stone-600 underline"
                >
                  Clear All
                </button>
              </div>
              {careNeeds.map((need) => {
                const isSelected = selectedNeeds.includes(need.id);
                return (
                  <div 
                    key={need.id}
                    onClick={() => toggleNeed(need.id)}
                    className={`flex items-start gap-4 p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'border-emerald-500 bg-emerald-50/50' 
                        : 'border-stone-200/70 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <input 
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}}
                      className="mt-1 h-5 w-5 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="font-semibold text-stone-800 text-sm md:text-base">{need.name}</span>
                        <span className="text-emerald-700 font-bold text-sm">+${need.price}/mo</span>
                      </div>
                      <p className="text-xs text-stone-500 leading-snug">{need.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Panel: Visualization */}
            <div className="lg:col-span-5 bg-stone-50/70 rounded-3xl p-6 md:p-8 border border-stone-200/60 shadow-sm flex flex-col justify-between h-full min-h-[450px]">
              <div>
                <h3 className="text-xl font-bold text-stone-800 mb-6 font-serif">Estimated Monthly Total</h3>
                
                {/* Point System Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-stone-600">Corporate Point-System:</span>
                    <span className="text-amber-800 text-lg font-bold">${calculatedTotal}</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-amber-500 h-full transition-all duration-500"
                      style={{ width: `${Math.min((calculatedTotal / 13000) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] text-stone-500 mt-1 block">Includes base rent of $5,200</span>
                </div>

                {/* Columbia Care Flat Rate Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-emerald-900 font-bold">Columbia Care All-Inclusive:</span>
                    <span className="text-emerald-700 text-lg font-bold">$7,500 - $10,000</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-emerald-600 h-full w-[76%]"
                    ></div>
                  </div>
                  <span className="text-[10px] text-emerald-700 mt-1 block font-semibold">One flat rate, no matter how much care increases</span>
                </div>
              </div>

              {/* Callout box */}
              <div className="bg-white rounded-2xl p-4 border border-stone-200/70 mt-6 shadow-sm">
                {calculatedTotal > 7500 ? (
                  <p className="text-xs md:text-sm text-stone-700">
                    💡 <strong>Financial Insight:</strong> With your selected care needs, a corporate point-system facility totals <strong>${calculatedTotal}/mo</strong>. This easily exceeds our all-inclusive rate ($7,500–$10,000/mo). Unlike corporate facilities, we <strong>never</strong> charge extra when care needs increase.
                  </p>
                ) : (
                  <p className="text-xs md:text-sm text-stone-700">
                    💡 <strong>Compare Value:</strong> Corporate facilities advertise low base rates as bait. As a senior's mobility or health needs progress, point surcharges can quickly push monthly costs above $10,000.
                  </p>
                )}
                <span className="text-[9px] text-stone-400 block mt-3 text-center">
                  *Estimated average market rates for corporate facilities in Maryland as of July 2026.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Anonymous 3-Model Facility Comparison Matrix */}
      <section className="py-16 bg-stone-100/60 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
              Operational Comparison Matrix
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-6 italic">
              Comparing Senior Living Models
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Understand the fundamental differences between large corporate facilities, franchise chains, and a Doctor of Physical Therapy-led residential home.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-stone-200 rounded-3xl overflow-hidden bg-white shadow-sm text-sm">
              <thead>
                <tr className="bg-stone-900 text-white font-serif">
                  <th className="p-4 md:p-6 border-b border-stone-800">Operational Feature</th>
                  <th className="p-4 md:p-6 border-b border-stone-800 text-stone-300">Model A: 100+ Bed Corporate</th>
                  <th className="p-4 md:p-6 border-b border-stone-800 text-stone-300">Model B: Tiered Chain</th>
                  <th className="p-4 md:p-6 border-b border-stone-800 text-emerald-400 font-bold bg-emerald-950/60">Model C: Columbia Care Home</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="hover:bg-stone-50/50">
                  <td className="p-4 md:p-6 font-bold text-stone-900">Pricing Structure</td>
                  <td className="p-4 md:p-6">Point-system surcharges for every task</td>
                  <td className="p-4 md:p-6">Tiered packages (Tiers 1–5)</td>
                  <td className="p-4 md:p-6 font-bold text-emerald-800 bg-emerald-50/30">100% Flat-Rate All-Inclusive</td>
                </tr>
                <tr className="hover:bg-stone-50/50">
                  <td className="p-4 md:p-6 font-bold text-stone-900">Clinical Leadership</td>
                  <td className="p-4 md:p-6">Administrative floor managers</td>
                  <td className="p-4 md:p-6">Visiting off-site nursing staff</td>
                  <td className="p-4 md:p-6 font-bold text-emerald-800 bg-emerald-50/30">Doctors of Physical Therapy (DPT) On-Site Daily</td>
                </tr>
                <tr className="hover:bg-stone-50/50">
                  <td className="p-4 md:p-6 font-bold text-stone-900">Staff-to-Resident Ratio</td>
                  <td className="p-4 md:p-6">1 caregiver : 15–20 residents</td>
                  <td className="p-4 md:p-6">1 caregiver : 10–12 residents</td>
                  <td className="p-4 md:p-6 font-bold text-emerald-800 bg-emerald-50/30">1 caregiver : 4 residents max (8 total)</td>
                </tr>
                <tr className="hover:bg-stone-50/50">
                  <td className="p-4 md:p-6 font-bold text-stone-900">Fall & Transfer Protocol</td>
                  <td className="p-4 md:p-6">Strict "No-Lift" Policy / 911 Call</td>
                  <td className="p-4 md:p-6">911 Call for unassisted falls</td>
                  <td className="p-4 md:p-6 font-bold text-emerald-800 bg-emerald-50/30">DPT Biomechanical Assessment & Assist</td>
                </tr>
                <tr className="hover:bg-stone-50/50">
                  <td className="p-4 md:p-6 font-bold text-stone-900">Nighttime Care</td>
                  <td className="p-4 md:p-6">Call-pendant response (on-call staff)</td>
                  <td className="p-4 md:p-6">Sleeping caregiver on cot</td>
                  <td className="p-4 md:p-6 font-bold text-emerald-800 bg-emerald-50/30">24/7 Awake Caregivers On Shift</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Transparent Coverage: What's Included vs. Excluded */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto bg-stone-50/80 rounded-3xl p-8 md:p-12 border border-stone-200/80 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-stone-800 font-serif mb-6 text-center">
            Radical Transparency: What's Included & Excluded
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-emerald-800 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600" /> 100% Covered in Flat Monthly Rate
              </h4>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li>• Level 1, 2, & 3 high-acuity personal care</li>
                <li>• Complete medication administration</li>
                <li>• 2-person physical transfers & gait support</li>
                <li>• Incontinence management & extra linen care</li>
                <li>• All home-cooked meals, snacks, & room tray service</li>
                <li>• Daily housekeeping & personal laundry</li>
                <li>• 24/7 awake night supervision</li>
                <li>• DPT mobility oversight & fall prevention</li>
              </ul>
            </div>

            <div className="space-y-3 border-t md:border-t-0 md:border-l border-stone-200/60 pt-6 md:pt-0 md:pl-8">
              <h4 className="text-stone-500 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                External / Third-Party Direct Expenses
              </h4>
              <ul className="space-y-2 text-stone-500 text-sm">
                <li>• Prescription medication co-pays (billed by pharmacy)</li>
                <li>• Personal incontinence pull-ups/pads (family provided)</li>
                <li>• Specialized dry cleaning services</li>
                <li>• Third-party 1-on-1 private duty nursing beyond licensure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. What's Included */}
      <section className="py-16 bg-stone-100/60 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-6 italic text-emerald-800">What this looks like in real life</h2>
            <p className="text-stone-500 max-w-xl mx-auto text-lg leading-relaxed">
              This is how the house actually runs every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inclusiveFeatures.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-stone-200/80 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
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

      {/* 7. Move-in process section */}
      <section className="pt-16 pb-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center bg-stone-50/80 rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-stone-200/80">
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
