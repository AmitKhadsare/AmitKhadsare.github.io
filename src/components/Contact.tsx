import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

interface ContactInfoCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  href: string;
  delay?: number;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon: Icon, title, children, href, delay = 0 }) => (
  <motion.a
    href={href}
    className="group relative flex items-start p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200/50 hover:shadow-2xl hover:border-emerald-200/50 transition-all duration-300 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, type: "spring", stiffness: 100 }}
    whileHover={{ y: -4 }}
    target={href.startsWith('http') ? "_blank" : undefined}
    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
  >
    {/* Animated background gradient */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100"
      transition={{ duration: 0.3 }}
    />
    
    <div className="flex-shrink-0 mr-5">
      <motion.div 
        className="relative w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg"
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="text-white" size={28} />
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </div>
    <div className="relative z-10">
      <h4 className="text-xl lg:text-2xl font-bold text-stone-800 mb-2">{title}</h4>
      <div className="text-stone-600 space-y-1">{children}</div>
    </div>
    
    {/* Hover arrow */}
    <motion.div
      className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
      initial={{ x: -10 }}
      whileHover={{ x: 0 }}
    >
      <ArrowRight className="text-emerald-600" size={20} />
    </motion.div>
  </motion.a>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section 
      id="contact" 
      className="py-16 lg:py-20 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/50 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-teal-300 to-emerald-300 rounded-full filter blur-3xl opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="inline w-4 h-4 mr-1" />
            Get in Touch
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-800 bg-clip-text text-transparent leading-tight font-serif mb-6">
            Connect With Our Compassionate Team
          </h2>
          <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Whether you have a question, need guidance, or just want to talk, we're here to listen. Reaching out is the first step towards peace of mind.
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
        >
          {/* Left Column: Contact Info & Map */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <ContactInfoCard icon={Phone} title="Call Us Anytime" href="tel:555-123-4567" delay={0.1}>
                <p className="text-lg font-semibold text-emerald-700">(555) 123-4567</p>
                <p className="text-sm">Available 24/7 for inquiries and emergencies</p>
              </ContactInfoCard>
              
              <ContactInfoCard icon={Mail} title="Send Us an Email" href="mailto:info@columbiacarehome.com" delay={0.2}>
                <p className="text-lg font-semibold text-emerald-700">info@columbiacarehome.com</p>
                <p className="text-sm">We'll respond within one business day</p>
              </ContactInfoCard>
              
              <ContactInfoCard icon={MapPin} title="Visit Our Location" href="https://www.google.com/maps/search/?api=1&query=123+Care+Street,+Columbia,+SC+29201" delay={0.3}>
                <p className="text-lg font-semibold text-emerald-700">123 Care Street</p>
                <p>Columbia, SC 29201</p>
                <div className="flex items-center gap-2 mt-2 text-emerald-600">
                  <Clock size={16} />
                  <span className="text-sm">Tours available daily 9AM-5PM</span>
                </div>
              </ContactInfoCard>
            </div>

            {/* Map with overlay */}
            <motion.div 
              className="relative overflow-hidden rounded-2xl shadow-2xl group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105941.47707474433!2d-81.14134403759326!3d33.99616075990263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a56979203643%3A0x8e09e3969450c184!2sColumbia%2C%20SC!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Columbia, SC"
                className="w-full"
              />
              
              {/* Map overlay with CTA */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
              >
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=123+Care+Street,+Columbia,+SC+29201" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-emerald-700 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Directions
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Enhanced Contact Form */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-stone-200/50">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    className="flex flex-col items-center justify-center h-full text-center py-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="text-white" size={40} />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-emerald-700 mb-4">Thank You!</h3>
                    <p className="text-lg text-stone-600 max-w-md">
                      Your message has been sent successfully. Our caring team will reach out to you within 24 hours.
                    </p>
                    <motion.button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-emerald-600 font-semibold hover:text-emerald-700"
                      whileHover={{ scale: 1.05 }}
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <h3 className="text-2xl lg:text-3xl font-bold text-stone-800 mb-6">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            value={formData.name} 
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className="peer w-full px-4 py-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:bg-white transition-all duration-300 outline-none" 
                            placeholder=" "
                          />
                          <label 
                            htmlFor="name" 
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                              formData.name || focusedField === 'name' 
                                ? 'text-xs -top-2 bg-white px-2 text-emerald-600' 
                                : 'top-4 text-stone-500'
                            }`}
                          >
                            Full Name *
                          </label>
                        </motion.div>
                    
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            className="peer w-full px-4 py-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:bg-white transition-all duration-300 outline-none" 
                            placeholder=" "
                          />
                          <label 
                            htmlFor="phone" 
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                              formData.phone || focusedField === 'phone' 
                                ? 'text-xs -top-2 bg-white px-2 text-emerald-600' 
                                : 'top-4 text-stone-500'
                            }`}
                          >
                            Phone Number
                          </label>
                        </motion.div>
                      </div>

                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required 
                          value={formData.email} 
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="peer w-full px-4 py-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:bg-white transition-all duration-300 outline-none" 
                          placeholder=" "
                        />
                        <label 
                          htmlFor="email" 
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            formData.email || focusedField === 'email' 
                              ? 'text-xs -top-2 bg-white px-2 text-emerald-600' 
                              : 'top-4 text-stone-500'
                          }`}
                        >
                          Email Address *
                        </label>
                      </motion.div>

                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <textarea 
                          id="message" 
                          name="message" 
                          required 
                          rows={5} 
                          value={formData.message} 
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className="peer w-full px-4 py-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:border-emerald-500 focus:bg-white transition-all duration-300 outline-none resize-none" 
                          placeholder=" "
                        />
                        <label 
                          htmlFor="message" 
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            formData.message || focusedField === 'message' 
                              ? 'text-xs -top-2 bg-white px-2 text-emerald-600' 
                              : 'top-4 text-stone-500'
                          }`}
                        >
                          How can we help you? *
                        </label>
                      </motion.div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Animated background on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600"
                          initial={{ x: "100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </span>
                      </motion.button>

                      <p className="text-center text-sm text-stone-500 mt-4">
                        By submitting this form, you agree to be contacted by our team.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full opacity-15 blur-xl"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`
              }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Visit Us?
              </h3>
              <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-white/90">
                Schedule a personalized tour today and see firsthand how we create a warm, caring environment for our residents.
              </p>
              <motion.a
                href="/schedule-a-tour"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-700 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Your Tour
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;