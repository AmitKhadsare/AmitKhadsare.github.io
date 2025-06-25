import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Calendar, Clock, User, Send, Mail, Phone, Users, MessageSquare } from 'lucide-react';

const ScheduleTourPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    guestCount: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Tour request submitted:', formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
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
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
      } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <div className="bg-gradient-to-br from-stone-100 to-emerald-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-serif font-bold text-stone-800 mb-4 tracking-tight">
            Come See Our Home for Yourself
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-stone-600 max-w-3xl mx-auto">
            We invite you to a no-pressure, personal tour to see our facilities, meet our caring staff, and feel the warmth of our community. We're happy to answer all your questions.
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {isSubmitted ? (
            <motion.div 
              className="flex flex-col items-center justify-center h-full text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h3 className="text-3xl font-serif font-semibold text-emerald-700 mb-4">Thank You!</h3>
              <p className="text-lg text-stone-600">Your tour request has been sent successfully. Our team will call you shortly to confirm your visit.</p>
            </motion.div>
          ) : (
            <>
              <motion.h2 variants={itemVariants} className="text-3xl font-serif font-semibold text-stone-800 mb-8 text-center">Schedule Your Personal Tour</motion.h2>
              <motion.form onSubmit={handleSubmit} className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors" placeholder="Your full name" />
                    </div>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone Number *</label>
                    <div className="relative">
                       <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors" placeholder="(555) 123-4567" />
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email Address *</label>
                   <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors" placeholder="your.email@example.com" />
                  </div>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-stone-700 mb-2">Preferred Date *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                      <input type="date" id="preferredDate" name="preferredDate" required value={formData.preferredDate} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors" />
                    </div>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-stone-700 mb-2">Preferred Time *</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                      <select id="preferredTime" name="preferredTime" required value={formData.preferredTime} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors appearance-none">
                        <option value="">Select a time</option>
                        <option value="Morning (9am-12pm)">Morning (9am-12pm)</option>
                        <option value="Afternoon (1pm-4pm)">Afternoon (1pm-4pm)</option>
                      </select>
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-stone-700 mb-2">Number of Guests</label>
                   <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                    <input type="number" id="guestCount" name="guestCount" min="1" value={formData.guestCount} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors" placeholder="e.g., 2" />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Questions or Comments</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-stone-400" />
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors resize-none" placeholder="Is there anything specific you'd like to see or discuss?"></textarea>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-700 text-white py-4 px-6 rounded-lg hover:bg-emerald-800 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 disabled:bg-emerald-800/50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                  >
                    <Send size={20} />
                    <span>{isSubmitting ? 'Submitting...' : 'Request Your Tour'}</span>
                  </button>
                </motion.div>
              </motion.form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ScheduleTourPage; 