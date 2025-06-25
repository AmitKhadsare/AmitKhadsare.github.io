import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface ContactInfoCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  href: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon: Icon, title, children, href }) => (
  <motion.a
    href={href}
    className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-stone-200/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    variants={itemVariants}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mr-5">
      <Icon className="text-emerald-700" size={24} />
    </div>
    <div>
      <h4 className="font-lora text-xl font-semibold text-stone-800">{title}</h4>
      <div className="font-nunito text-stone-600">{children}</div>
    </div>
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    console.log('Form submitted:', formData);
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
      className="py-12 bg-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-lora font-bold text-stone-800 mb-4 tracking-tight">
            Connect With Our Compassionate Team
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto font-nunito">
            Whether you have a question, need guidance, or just want to talk, we're here to listen. Reaching out is the first step towards peace of mind.
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column: Contact Info & Map */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <ContactInfoCard icon={Phone} title="By Phone" href="tel:555-123-4567">
                <p>(555) 123-4567</p>
                <p className="text-sm text-stone-500">Available 24/7 for inquiries</p>
              </ContactInfoCard>
              <ContactInfoCard icon={Mail} title="By Email" href="mailto:info@columbiacarehome.com">
                <p>info@columbiacarehome.com</p>
                <p className="text-sm text-stone-500">We'll respond within one business day</p>
              </ContactInfoCard>
              <ContactInfoCard icon={MapPin} title="Our Location" href="#">
                <p>123 Care Street</p>
                <p>Columbia, SC 29201</p>
              </ContactInfoCard>
            </div>

            <motion.div className="overflow-hidden rounded-2xl shadow-lg" variants={itemVariants}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105941.47707474433!2d-81.14134403759326!3d33.99616075990263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a56979203643%3A0x8e09e3969450c184!2sColumbia%2C%20SC!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Columbia, SC"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg" variants={itemVariants}>
            {isSubmitted ? (
              <motion.div 
                className="flex flex-col items-center justify-center h-full text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <h3 className="text-2xl font-lora font-semibold text-emerald-700 mb-4">Thank You!</h3>
                <p className="font-nunito text-stone-600">Your message has been sent successfully. Our team will get back to you shortly.</p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-lora font-semibold text-stone-800 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2 font-nunito">
                        Full Name *
                      </label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors" placeholder="Your full name" />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2 font-nunito">
                        Phone Number
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors" placeholder="(555) 123-4567" />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2 font-nunito">
                      Email Address *
                    </label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors" placeholder="your.email@example.com" />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2 font-nunito">
                      Message *
                    </label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors resize-none" placeholder="Tell us about your care needs or questions..."></textarea>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-700 text-white py-4 px-6 rounded-lg hover:bg-emerald-800 transition-all duration-300 font-nunito font-semibold flex items-center justify-center space-x-2 disabled:bg-emerald-800/50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                    >
                      <Send size={20} />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </motion.div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;