import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SEOHead from './SEOHead';
import Testimonials from './Testimonials';
import bhargavPhoto from '../assets/Bhargav_Patel.jpg';
import sheetalPhoto from '../assets/Sheetal_Khadsare.jpeg';

// Hero background image
const carePhoto = 'https://images.pexels.com/photos/7551623/pexels-photo-7551623.jpeg?auto=compress&cs=tinysrgb&w=1260';

const AboutUsPage = () => {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="bg-stone-50 text-stone-700">
      <SEOHead
        title="About Columbia Care Home - Our Story & Mission"
        description="Learn about Columbia Care Home's mission to provide compassionate, professional care in a warm, home-like environment. Meet our founders and discover our commitment to senior care excellence."
        image="https://www.columbiacarehome.com/og-our-story.jpg"
        url="https://www.columbiacarehome.com/about-us"
      />
      {/* Hero Section */}
      <motion.section
        className="relative py-32 bg-gradient-to-br from-emerald-50 via-stone-50 to-emerald-100"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${carePhoto})` }}></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <Link to="/" className="inline-flex items-center text-emerald-700 hover:text-emerald-900 transition-colors mb-4">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-6xl font-bold text-stone-800 font-serif mb-4">
            Our Story & Clinical Vision
          </h1>
          <p className="text-xl text-stone-600">
            Founded by Doctors of Physical Therapy to provide a smaller, more clinically attentive alternative to traditional senior living.
          </p>
        </div>
      </motion.section>

      {/* Meet Our Founders Section */}
      <motion.section
        className="py-24 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-4xl font-bold text-center text-stone-800 font-serif mb-20">
            Meet Our Founders
          </motion.h2>

          <div className="space-y-32">
            {/* Bhargav's Story */}
            <motion.div className="grid md:grid-cols-2 gap-12 items-center relative" variants={fadeIn}>
              <div className="relative group">
                <img
                  loading="lazy"
                  src={bhargavPhoto}
                  alt="Bhargav Patel, DPT at Columbia Care Home"
                  className="relative rounded-lg shadow-xl w-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="space-y-6 relative">
                <h3 className="font-serif text-4xl text-stone-800 font-bold">Bhargav Patel, PT, DPT</h3>
                <h4 className="text-xl text-emerald-700 font-semibold">Doctor of Physical Therapy & Founder</h4>

                <p className="text-lg leading-relaxed text-stone-600">
                  Before Columbia Care Home, Bhargav spent over a decade visiting thousands of senior patients across Howard County as the founder of At Home Rehab. He witnessed a heartbreaking, industry-wide pattern: when elders moved into massive, 100+ bed corporate facilities, their mobility rapidly declined.
                </p>
                <p className="text-lg leading-relaxed text-stone-600">
                  The long, cavernous hallways were too difficult to navigate. The 1-to-20 staff ratios meant residents sitting idle for hours. And without daily physical encouragement, they lost their independence.
                </p>
                <div className="pl-6 border-l-4 border-emerald-500 py-2 my-6">
                  <p className="text-xl font-serif text-stone-800 italic">
                    "I realized that preserving movement is essential to preserving dignity. I couldn't change the corporate facilities, so I built the absolute opposite."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sheetal's Story */}
            <motion.div className="grid md:grid-cols-2 gap-12 items-center relative" variants={fadeIn}>
              <div className="md:order-last relative group">
                <img
                  loading="lazy"
                  src={sheetalPhoto}
                  alt="Sheetal Khadsare, DPT at Columbia Care Home"
                  className="relative rounded-lg shadow-xl w-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="space-y-6 relative">
                <h3 className="font-serif text-4xl text-stone-800 font-bold">Sheetal Khadsare, PT, DPT</h3>
                <h4 className="text-xl text-emerald-700 font-semibold">Doctor of Physical Therapy & Co-Founder</h4>
                <p className="text-lg leading-relaxed text-stone-600">
                  Sheetal Khadsare shares the exact same rigorous clinical background. But at 10610 Hickory Point Lane, her focus is on transforming our high-level medical expertise into a warm, lived reality.
                </p>
                <p className="text-lg leading-relaxed text-stone-600">
                  By strictly capping our home at 8 residents, Sheetal ensures that our Level 3 Care never feels sterile. She oversees the daily rhythms of the house—from personalized nutrition to afternoon activities—guaranteeing that every resident receives the kind of cultural respect, close supervision, and genuine friendship that large institutions simply cannot scale.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Real Google Reviews Section */}
      <Testimonials />

      {/* The Anti-Corporate Narrative */}
      <motion.section
        className="py-24 bg-stone-100 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 font-serif mb-6">
              The 8-Bed Clinical Advantage
            </h2>
            <p className="text-xl text-stone-600">
              Why our scale is our greatest medical asset.
            </p>
          </div>

            <div className="bg-white p-10 rounded-xl shadow-lg border-l-8 border-emerald-600">
              <h3 className="text-2xl font-bold font-serif text-stone-800 mb-4">You Are Never Just a Room Number</h3>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                In Howard County, the standard assisted living model relies on volume—massive buildings with hundreds of units. While these facilities look like luxury hotels in the lobby, the reality of the care is often driven by corporate quotas and high staff turnover.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                At Columbia Care Home, we legally cap our residence at 8 beds. This guarantees a strict 1:3 day and 1:4 night caregiver ratio. Our caregivers aren't rushing down long hallways to answer call bells; they are sitting in the same room, anticipating needs before they arise.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-lg border-l-8 border-teal-600">
              <h3 className="text-2xl font-bold font-serif text-stone-800 mb-4">A Layout Designed for Aging in Place</h3>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Large facilities inadvertently create fall risks with their sprawling layouts. For residents with cognitive decline or physical frailty, navigating elevators and 100-yard hallways is exhausting and disorienting.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Our home at 10610 Hickory Point Lane is a single-family property intentionally adapted for senior mobility. Navigation is intuitive, lines of sight are clear, and the environment is universally accessible. It feels like home because it <em>is</em> a home.
              </p>
            </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto py-20 text-center px-4">
          <h2 className="text-4xl font-bold font-serif mb-6">
            Consult With Our Founders
          </h2>
          <p className="text-xl text-stone-400 mb-8 max-w-2xl mx-auto">
            Deciding on a care level is a complex medical decision. Call us directly to discuss your loved one's specific physical and cognitive needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <button className="bg-emerald-600 text-white px-10 py-5 rounded-full hover:bg-emerald-500 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                Contact Bhargav & Sheetal Directly
              </button>
            </Link>
            <Link to="/virtual-tour">
              <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full hover:bg-white hover:text-stone-900 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                Take a Virtual Tour
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;