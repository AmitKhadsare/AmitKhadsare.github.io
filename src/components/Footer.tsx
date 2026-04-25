import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react';

interface FooterAccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const FooterAccordionItem: React.FC<FooterAccordionItemProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-4 text-left text-white" aria-label={`Toggle ${title} section`}
      >
        <h4 className="text-md font-semibold uppercase tracking-wider">{title}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordionToggle = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'Our Promise', path: '/#about' },
    { name: 'How We Care', path: '/#services' },
    { name: 'Start the Conversation', path: '/#contact' },
  ];

  const resourceLinks = [
    { name: 'Our Story', path: '/about-us' },
    { name: 'Schedule a Tour', path: '/schedule-a-tour' },
    { name: 'Pricing & Value', path: '/pricing' },
    { name: 'Family Stories', path: '/family-stories' },
    { name: 'Family Guides', path: '/blog' },
    { name: 'Common Questions (FAQ)', path: '/faq' },
    { name: 'Our Facility', path: '/facility' },
  ];

  const servicesLinks = [
    { name: 'Rehabilitation', path: '/rehabilitation' },
    { name: 'Memory Care', path: '/memory-care' },
    { name: 'Personal Assistance', path: '/personal-assistance' },
    { name: 'Residential Care', path: '/residential-care' },
  ];

  const contactInfo = [
    { icon: <Phone size={16} />, text: '(301) 500-0809 (Primary), (201) 885-9225 (Alt)' },
    { icon: <Mail size={16} />, text: 'contact@columbiacarehome.com' },
    { icon: <MapPin size={16} />, text: '10610 Hickory Point Lane, Columbia, MD 21044' },
  ];

  const linkHoverVariant = {
    hover: { color: '#A5B4FC', transition: { duration: 0.3 } },
  };

  const locationContent = (
    <div className="space-y-4 text-center md:text-left">
      <div className="hidden md:block">
        <h3 className="text-xl font-bold text-white">Columbia Care Home</h3>
        <p className="text-sm text-gray-400">Physical Therapist-Led Assisted Living in an Intimate Residential Setting.</p>
      </div>
      <ul className="space-y-3 pt-3">
        {contactInfo.map((item, index) => (
          <li key={index} className="flex items-center justify-center md:justify-start space-x-3">
            <span className="text-indigo-300">{item.icon}</span>
            <span className="text-gray-400 text-sm">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const footerSections = [
    {
      title: 'Navigation',
      content: (
        <div className="space-y-2 text-center md:text-left">
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={linkHoverVariant} whileHover="hover">
              <HashLink smooth to={link.path} className="text-gray-400 text-sm block py-1">
                {link.name}
              </HashLink>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      title: 'Expert Services',
      content: (
        <div className="space-y-2 text-center md:text-left">
          {servicesLinks.map((link) => (
            <motion.div key={link.name} variants={linkHoverVariant} whileHover="hover">
              <Link to={link.path} className="text-gray-400 text-sm block py-1">
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      title: 'Resources',
      content: (
        <div className="space-y-2 text-center md:text-left">
          {resourceLinks.map((link) => (
            <motion.div key={link.name} variants={linkHoverVariant} whileHover="hover">
              <Link to={link.path} className="text-gray-400 text-sm block py-1">
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      )
    }
  ];

  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Desktop Footer */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          <div>
            {locationContent}
          </div>
          {footerSections.map(section => (
            <div key={section.title}>
              <h4 className="text-md font-semibold text-white mb-3 uppercase tracking-wider text-center md:text-left">{section.title}</h4>
              {section.content}
            </div>
          ))}
        </div>

        {/* Mobile Accordion Footer */}
        <div className="md:hidden">
          <FooterAccordionItem
            title="Get In Touch"
            isOpen={openAccordion === 'location'}
            onToggle={() => handleAccordionToggle('location')}
          >
            <ul className="space-y-3 pt-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center justify-center space-x-3">
                  <span className="text-indigo-300">{item.icon}</span>
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </FooterAccordionItem>

          {footerSections.map(section => (
            <FooterAccordionItem
              key={section.title}
              title={section.title}
              isOpen={openAccordion === section.title}
              onToggle={() => handleAccordionToggle(section.title)}
            >
              {section.content}
            </FooterAccordionItem>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-4 md:mb-0">
            <p className="text-gray-500">
              © {year} Columbia Care Home. All Rights Reserved.
            </p>
            <span className="hidden md:block text-gray-700">|</span>
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-gray-500 italic">
              <span>Maryland Licensed Assisted Living Program</span>
              <span className="hidden md:inline">·</span>
              <div className="flex items-center gap-2">
                <span>Licence No. AL-01052</span>
                <span className="text-gray-700">|</span>
                <span>Level 3</span>
              </div>
            </div>
          </div>
          <div className="space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;