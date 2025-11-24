import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Mail, MessageSquare, Phone, Send, User, CheckCircle2 } from 'lucide-react';
import SEOHead from './SEOHead';

const ScheduleTourPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('There was an error submitting your request. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Schedule a Tour | Columbia Care Home"
        description="Schedule a personal tour of Columbia Care Home. Experience our facilities, meet our team, and see why we are the best choice for your loved one."
        keywords="schedule tour, nursing home tour, senior living visit, columbia care tour, facility tour"
        image="https://www.columbiacarehome.com/og-schedule.jpg"
        url="/schedule-tour"
      />
      {/* Hero Header */}
      <div className="relative bg-gray-900 py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/70 to-teal-700/70" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-4 text-white">
              Schedule Your Personal Tour
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              The best way to experience our home is to see it for yourself. We invite you to a no-pressure visit to explore our facility and meet our team.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center h-full text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <h3 className="text-3xl font-serif font-semibold text-emerald-700 mb-4">Thank You!</h3>
                  <p className="text-lg text-stone-600">Your tour request has been sent. Our team will call you shortly to confirm your visit.</p>
                </motion.div>
              ) : (
                <form
                  name="tour-request"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="tour-request" />
                  <input type="hidden" name="bot-field" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Full Name *</label>
                      <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" /><input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-stone-100 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors" placeholder="Your full name" /></div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone Number *</label>
                      <div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" /><input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-stone-100 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors" placeholder="(301) 500-0809" /></div>
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email Address *</label>
                    <div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" /><input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-stone-100 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors" placeholder="your.email@example.com" /></div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-stone-700 mb-2">Preferred Date *</label>
                      <div className="relative"><Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" /><input type="date" id="preferredDate" name="preferredDate" required value={formData.preferredDate} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-stone-100 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors" /></div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-stone-700 mb-2">Preferred Time *</label>
                      <div className="relative"><Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" /><select id="preferredTime" name="preferredTime" required value={formData.preferredTime} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-stone-100 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors appearance-none"><option value="">Select a time</option><option value="Morning (9am-12pm)">Morning (9am-12pm)</option><option value="Afternoon (1pm-4pm)">Afternoon (1pm-4pm)</option></select></div>
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Questions or Comments</label>
                    <div className="relative"><MessageSquare className="absolute left-3 top-4 h-5 w-5 text-stone-400" /><textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-stone-100 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none" placeholder="Is there anything specific you'd like to see or discuss?"></textarea></div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-emerald-700 text-white py-4 px-6 rounded-lg hover:bg-emerald-800 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 disabled:bg-emerald-800/50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"><Send size={20} /><span>{isSubmitting ? 'Submitting...' : 'Request Your Tour'}</span></button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </div>

          {/* Right Column: Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 font-serif mb-4">What to Expect on Your Tour</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" /><span>A guided walk-through of our common areas, resident rooms, and outdoor spaces.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" /><span>An opportunity to meet our leadership team and caring staff.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" /><span>A chance to observe daily activities and the community atmosphere.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" /><span>A private consultation to discuss your family's specific needs and questions.</span></li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-emerald-50 rounded-2xl p-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Can't Wait?</h3>
              <p className="text-emerald-800 mb-4">Feel free to call us directly for immediate questions.</p>
              <div className="flex flex-col items-center gap-2">
                <a href="tel:301-500-0809" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors">(301) 500-0809</a>
                <a href="tel:201-885-9225" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors">(201) 885-9225</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTourPage;