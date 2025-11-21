import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Clock, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  subContent?: string;
  href: string;
  delay?: number;
  target?: string;
  rel?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, content, subContent, href, delay = 0, target, rel }) => (
  <motion.a
    href={href}
    className="group block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -2 }}
    target={target}
    rel={rel}
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
          <Icon className="w-6 h-6 text-emerald-700" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-emerald-700 font-medium">{content}</p>
        {subContent && (
          <p className="text-sm text-gray-500 mt-1">{subContent}</p>
        )}
      </div>
    </div>
  </motion.a>
);

const SimplifiedContact: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you have questions or you're ready to schedule a visit, we're here to help every step of the way.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <ContactCard
            icon={Phone}
            title="Call Us"
            content="(301) 500-0809, (201) 885-9225"
            href="tel:301-500-0809"
            delay={0.1}
            target="_blank"
            rel="noopener noreferrer"
          />

          <ContactCard
            icon={Mail}
            title="Email Us"
            content="columbiacarehomes@gmail.com"
            subContent="Response within 24 hours"
            href="mailto:columbiacarehomes@gmail.com"
            delay={0.2}
          />

          <ContactCard
            icon={MapPin}
            title="Visit Us"
            content="10610 Hickory Point Lane, Columbia, MD 21044"
            subContent="Columbia, MD 21044"
            href="https://www.google.com/maps/search/?api=1&query=10610+Hickory+Point+Lane,+Columbia,+MD+21044"
            delay={0.3}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 lg:p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to See Our Community?
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Schedule a personalized tour and discover how we create a warm, caring home for our residents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schedule-a-tour">
                <motion.div
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Clock className="w-5 h-5" />
                  Schedule a Tour
                </motion.div>
              </Link>

              <Link to="/contact">
                <motion.div
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white border-2 border-white/50 rounded-lg font-semibold hover:bg-white/10 hover:border-white transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Full Contact Info
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimplifiedContact;