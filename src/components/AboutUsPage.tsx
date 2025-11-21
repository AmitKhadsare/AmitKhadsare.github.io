import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, Stethoscope, ShieldCheck, HeartHandshake, Sparkles, Users } from 'lucide-react';
import SEOHead from './SEOHead';
import bhargavPhoto from '../assets/Bhargav_Patel.jpg';
import sheetalPhoto from '../assets/Sheetal_Khadsare.jpeg';

// Hero background image
const carePhoto = 'https://images.pexels.com/photos/7551623/pexels-photo-7551623.jpeg?auto=compress&cs=tinysrgb&w=1260';

const AboutUsPage = () => {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const timelineItem: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const philosophyCard: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-stone-50 text-stone-700">
      <SEOHead
        title="About Columbia Care Home - Our Story & Mission"
        description="Learn about Columbia Care Home's mission to provide compassionate, professional care in a warm, home-like environment. Meet our founders and discover our commitment to senior care excellence."
        keywords="about Columbia Care Home, senior care mission Maryland, care home founders, elder care philosophy, Columbia care home story"
        image="https://www.columbiacarehome.com/og-our-story.png"
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
            A Legacy of Compassion, A Future of Care.
          </h1>
          <p className="text-xl text-stone-600">
            Learn about the family, vision, and values that make Columbia Care Home a true home.
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
            <motion.div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center relative" variants={fadeIn}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-emerald-100 rounded-full opacity-50 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-teal-100 rounded-full opacity-50 blur-2xl"></div>
                <img
                  loading="lazy"
                  src={bhargavPhoto}
                  alt="Bhargav Patel"
                  className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/5] transform transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-emerald-100 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <Stethoscope className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider">Specialty</p>
                      <p className="text-sm font-bold text-emerald-800">Physical Therapy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 relative">
                <div className="absolute -top-10 -left-10 text-9xl font-serif text-emerald-50 -z-10 opacity-50">"</div>
                <h3 className="font-serif text-4xl text-stone-800 font-bold">Bhargav Patel, PT, DPT</h3>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Founder</span>
                </div>
                <p className="text-lg leading-relaxed text-stone-600">
                  The vision for Columbia Care Home began with Bhargav Patel. As a licensed Doctor of Physical Therapy and the founder of At Home Rehab, Bhargav spent years dedicated to helping patients recover their mobility and independence.
                </p>
                <p className="text-lg leading-relaxed text-stone-600">
                  It was through this direct experience that he identified a profound need in senior living: a place where proactive, expert-led therapy wasn't just an option, but the very core of the care philosophy. He was the driving force behind creating a home built on the principle that preserving movement is essential to preserving dignity.
                </p>
              </div>
            </motion.div>

            {/* Sheetal's Story */}
            <motion.div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center relative" variants={fadeIn}>
              <div className="md:order-last relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                <div className="absolute top-0 left-0 -ml-8 -mt-8 w-32 h-32 bg-teal-100 rounded-full opacity-50 blur-2xl"></div>
                <div className="absolute bottom-0 right-0 -mr-8 -mb-8 w-32 h-32 bg-emerald-100 rounded-full opacity-50 blur-2xl"></div>
                <img
                  loading="lazy"
                  src={sheetalPhoto}
                  alt="Sheetal Khadsare"
                  className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/5] transform transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-teal-100 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <HeartHandshake className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider">Focus</p>
                      <p className="text-sm font-bold text-teal-800">Community Care</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 relative">
                <div className="absolute -top-10 -right-10 text-9xl font-serif text-teal-50 -z-10 opacity-50">"</div>
                <h3 className="font-serif text-4xl text-stone-800 font-bold">Sheetal Khadsare, DPT</h3>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold">
                  <Users className="w-4 h-4" />
                  <span>Co-Founder</span>
                </div>
                <p className="text-lg leading-relaxed text-stone-600">
                  Joining Bhargav in his mission, Sheetal Khadsare was instrumental in bringing the vision of Columbia Care Home to life. As a fellow Doctor of Physical Therapy, she shares his clinical expertise but brings a unique focus on creating a true community.
                </p>
                <p className="text-lg leading-relaxed text-stone-600">
                  Sheetal is the heart of the home's warm, family-like atmosphere. She ensures that the high standard of clinical care is delivered with the compassion, respect, and personal attention that makes residents feel genuinely cared for.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        className="py-24 bg-gradient-to-br from-stone-100 to-emerald-50 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-4xl font-bold text-center text-stone-800 font-serif mb-16">
            Our Care Philosophy
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={philosophyCard} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <ShieldCheck className="mx-auto text-emerald-600 h-12 w-12 mb-4" />
              <h4 className="font-serif text-xl font-bold text-stone-800">Rooted in Dignity</h4>
              <p className="mt-2">Providing care that honors each resident's independence and personal history.</p>
            </motion.div>
            <motion.div variants={philosophyCard} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <HeartHandshake className="mx-auto text-red-500 h-12 w-12 mb-4" />
              <h4 className="font-serif text-xl font-bold text-stone-800">A Spirit of Family</h4>
              <p className="mt-2">Creating a warm, inclusive community where everyone feels they belong.</p>
            </motion.div>
            <motion.div variants={philosophyCard} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Stethoscope className="mx-auto text-blue-500 h-12 w-12 mb-4" />
              <h4 className="font-serif text-xl font-bold text-stone-800">Led by Expertise</h4>
              <p className="mt-2">Integrating professional medical insight into all aspects of daily care.</p>
            </motion.div>
            <motion.div variants={philosophyCard} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Sparkles className="mx-auto text-yellow-500 h-12 w-12 mb-4" />
              <h4 className="font-serif text-xl font-bold text-stone-800">Joyful Living</h4>
              <p className="mt-2">Fostering an environment that encourages engagement, activity, and happiness.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        className="py-24 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-stone-800 font-serif mb-16">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-emerald-200"></div>
            <motion.div variants={timelineItem} className="relative pl-12 pb-12">
              <div className="absolute left-0 top-1.5 w-8 h-8 bg-white border-4 border-emerald-500 rounded-full"></div>
              <h4 className="font-serif text-2xl font-bold text-emerald-700">A Vision for Rehabilitation</h4>
              <p className="mt-2">Bhargav Patel founds At Home Rehab, dedicating his career to helping patients regain strength and independence through physical therapy.</p>
            </motion.div>
            <motion.div variants={timelineItem} className="relative pl-12 pb-12">
              <div className="absolute left-0 top-1.5 w-8 h-8 bg-white border-4 border-emerald-500 rounded-full"></div>
              <h4 className="font-serif text-2xl font-bold text-emerald-700">Identifying a Need</h4>
              <p className="mt-2">Through his work, Bhargav observes a critical need for senior care that is not only medically sound but also affordable and deeply compassionate.</p>
            </motion.div>
            <motion.div variants={timelineItem} className="relative pl-12">
              <div className="absolute left-0 top-1.5 w-8 h-8 bg-white border-4 border-emerald-500 rounded-full"></div>
              <h4 className="font-serif text-2xl font-bold text-emerald-700">Columbia Care Home is Born</h4>
              <p className="mt-2">Bhargav and Sheetal unite their clinical expertise and passion for community, establishing Columbia Care Home to provide a safe, family-like environment backed by professional therapy expertise.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto py-20 text-center px-4">
          <h2 className="text-4xl font-bold font-serif mb-4">
            Experience the Difference Yourself
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            We invite you to visit our home, meet our family, and see why residents love living at Columbia Care Home.
          </p>
          <Link to="/schedule-a-tour">
            <button className="bg-white text-emerald-800 px-8 py-4 rounded-full hover:bg-emerald-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule a Personal Tour
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;