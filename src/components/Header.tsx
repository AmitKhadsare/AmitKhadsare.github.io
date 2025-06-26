import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import logo from '../assets/logo.png';

const AnimatedPill = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="bg-teal-950 text-white rounded-full px-3 py-1 font-body font-medium text-base"
    whileHover={{ scale: 1.05, backgroundColor: "#115e59" }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {children}
  </motion.div>
);

const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => {
  return (
    <HashLink smooth to={to} onClick={onClick}>
      <AnimatedPill>{children}</AnimatedPill>
    </HashLink>
  );
};

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => {
  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.div variants={linkVariants}>
      <HashLink
        smooth
        to={to}
        onClick={onClick}
        className="text-4xl font-serif text-stone-800 hover:text-emerald-700 transition-colors duration-300"
      >
        {children}
      </HashLink>
    </motion.div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  const menuContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    exit: { opacity: 0, transition: { when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 } },
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-l from-teal-950 to-[#081e22] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 text-xs">
          <a href="tel:555-123-4567" className="flex items-center space-x-2 hover:text-emerald-300 transition-colors">
              <Phone size={14} />
              <span>(555) 123-4567</span>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=123+Care+Street,+Columbia,+SC+29201"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-center md:text-left hover:text-emerald-300 transition-colors"
          >
            <MapPin size={14} />
            <span>123 Care Street, Columbia, SC 29201</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-[#f5fbf7] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <HashLink smooth to="/#home" className="flex-shrink-0">
                <img
                  src={logo}
                  alt="Columbia Care Home Logo"
                className="h-20 w-auto"
                />
              </HashLink>
            </div>

            {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <NavLink to="/#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/#about" onClick={() => setIsMenuOpen(false)}>Our Promise</NavLink>
            <NavLink to="/#services" onClick={() => setIsMenuOpen(false)}>How We Care</NavLink>
            <NavLink to="/#faq" onClick={() => setIsMenuOpen(false)}>Peace of Mind</NavLink>
            <NavLink to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            <Link to="/about-us">
              <AnimatedPill>Our Story</AnimatedPill>
            </Link>
            </nav>

            {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

            {/* Mobile Navigation */}
      <AnimatePresence>
            {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-[#f5fbf7]/80 backdrop-blur-lg flex items-center justify-center pt-20"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuContainerVariants}
          >
            <nav className="flex flex-col items-center space-y-8">
              <MobileNavLink to="/#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/#about" onClick={() => setIsMenuOpen(false)}>Our Promise</MobileNavLink>
              <MobileNavLink to="/#services" onClick={() => setIsMenuOpen(false)}>How We Care</MobileNavLink>
              <MobileNavLink to="/#faq" onClick={() => setIsMenuOpen(false)}>Peace of Mind</MobileNavLink>
              <MobileNavLink to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
              <motion.div>
                <Link
                  to="/about-us"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-serif text-stone-800 hover:text-emerald-700 transition-colors duration-300"
                >
                  Our Story
                </Link>
              </motion.div>
            </nav>
          </motion.div>
            )}
      </AnimatePresence>
    </>
  );
};

export default Header;