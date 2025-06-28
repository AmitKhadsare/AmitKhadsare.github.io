import React, { useState, useEffect } from 'react';
import { X, Phone, MapPin, Home, Heart, Shield, Smile, Mail, BookOpen, Grid3X3, ChevronDown, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.avif';

interface MenuItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
  onItemClick: () => void;
}

// Menu Section Component
const MenuSection = ({ title, items, isOpen, onToggle, onItemClick }: MenuSectionProps) => {
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4">
              {items.map((item) => {
                const LinkComponent = item.path.includes('#') ? HashLink : Link;
                return (
                  <LinkComponent
                    key={item.name}
                    to={item.path}
                    className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 transition-colors"
                    onClick={onItemClick}
                  >
                    <item.icon className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">{item.name}</span>
                  </LinkComponent>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StripeStyleMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState('care');

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuSections = [
    {
      id: 'care',
      title: 'Care Services',
      items: [
        { name: 'Our Promise', path: '/#about', icon: Heart },
        { name: 'How We Care', path: '/#services', icon: Shield },
        { name: 'All Services', path: '/services', icon: Grid3X3 },
      ]
    },
    {
      id: 'info',
      title: 'Information',
      items: [
        { name: 'Peace of Mind', path: '/#faq', icon: Smile },
        { name: 'Our Story', path: '/about-us', icon: BookOpen },
      ]
    },
    {
      id: 'connect',
      title: 'Connect',
      items: [
        { name: 'Contact Us', path: '/#contact', icon: Mail },
        { name: 'Visit Us', path: '/#location', icon: MapPin },
      ]
    }
  ];

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 relative">
          <motion.span
            className="absolute w-6 h-0.5 bg-gray-900 left-0"
            animate={{
              top: isOpen ? '11px' : '5px',
              rotate: isOpen ? 45 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute w-6 h-0.5 bg-gray-900 left-0 top-[11px]"
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.1 }}
          />
          <motion.span
            className="absolute w-6 h-0.5 bg-gray-900 left-0"
            animate={{
              top: isOpen ? '11px' : '17px',
              rotate: isOpen ? -45 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 bg-white shadow-xl z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              {/* Logo - kept compact for mobile */}
              <HashLink to="/#home" className="flex items-center" onClick={() => setIsOpen(false)}>
                <img 
                  src={logo} 
                  alt="Columbia Care Home" 
                  className="h-10 w-auto"
                />
              </HashLink>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="h-full overflow-y-auto pb-32">
              {/* Home Link */}
              <HashLink
                to="/#home"
                className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Home className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700 font-medium">Home</span>
              </HashLink>

              {/* Accordion Sections */}
              {menuSections.map((section) => (
                <MenuSection
                  key={section.id}
                  title={section.title}
                  items={section.items}
                  isOpen={openSection === section.id}
                  onToggle={() => setOpenSection(openSection === section.id ? '' : section.id)}
                  onItemClick={() => setIsOpen(false)}
                />
              ))}

              {/* Footer Actions */}
              <div className="p-6 space-y-3 border-t border-gray-100 mt-8">
                <a
                  href="tel:555-123-4567"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Call Now</span>
                </a>
                <Link
                  to="/schedule-a-tour"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">Schedule a Tour</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StripeStyleMobileMenu;