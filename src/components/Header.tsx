import React, { useState, useEffect } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.avif';
import MobileMenu from './MobileMenu';

// Your existing AnimatedPill component (no changes)
const AnimatedPill = ({ children, isActive = false }: { children: React.ReactNode; isActive?: boolean }) => (
  <motion.div
    className={`relative overflow-hidden rounded-full px-4 py-2 font-medium text-sm transition-all duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
        : 'bg-white/80 backdrop-blur-sm text-stone-700 hover:bg-white hover:text-emerald-700 border border-stone-200/50'
    }`}
    whileHover={{
      scale: 1.05,
      boxShadow: isActive ? "0 8px 25px rgba(16, 185, 129, 0.3)" : "0 4px 15px rgba(0, 0, 0, 0.1)",
      y: -2
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
      animate={{ translateX: ['0%', '200%'] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
    />
    <span className="relative z-10">{children}</span>
  </motion.div>
);

const NavLink = ({ to, children, onClick, isActive }: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
}) => {
  return (
    <HashLink smooth to={to} onClick={onClick}>
      <AnimatedPill isActive={isActive}>{children}</AnimatedPill>
    </HashLink>
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

  return (
    <>
      {/* Top Contact Bar & Main Header (No changes here) */}
      <motion.div
        className="bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-900 text-white py-3 px-4 relative overflow-hidden"
        initial={{ y: -50 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-sm relative z-10">
          <a href="tel:555-123-4567" className="flex items-center space-x-2 hover:text-emerald-300 transition-all duration-300 group">
            <motion.div className="p-1.5 bg-emerald-600/20 rounded-full group-hover:bg-emerald-500/30 transition-colors" whileHover={{ rotate: 10, scale: 1.1 }}>
              <Phone size={14} />
            </motion.div>
            <span className="font-medium">Call us: (555) 123-4567</span>
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=123+Care+Street,+Columbia,+SC+29201" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-center md:text-left hover:text-emerald-300 transition-all duration-300 group">
            <motion.div className="p-1.5 bg-teal-600/20 rounded-full group-hover:bg-teal-500/30 transition-colors" whileHover={{ rotate: -10, scale: 1.1 }}>
              <MapPin size={14} />
            </motion.div>
            <span className="font-medium">Visit us: 123 Care Street, Columbia, SC 29201</span>
          </a>
        </div>
      </motion.div>
      <motion.header
        className="sticky top-0 z-50 bg-white border-b border-stone-200 relative"
        style={{ boxShadow: `0 1px 3px rgba(0, 0, 0, 0.1)`}}
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 lg:h-24 px-4 sm:px-6 lg:px-8">
          <motion.div className="flex-shrink-0 relative" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
            <HashLink smooth to="/#home" className="flex-shrink-0 group">
              <div className="relative">
                <motion.img src={logo} alt="Columbia Care Home Logo" className="h-20 lg:h-24 w-auto transition-all duration-300 group-hover:drop-shadow-lg" whileHover={{ filter: "drop-shadow(0 4px 8px rgba(16, 185, 129, 0.2))" }} />
                <motion.div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 -z-10" transition={{ duration: 0.3 }} />
              </div>
            </HashLink>
          </motion.div>
          <motion.nav className="hidden lg:flex items-center space-x-2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, staggerChildren: 0.1 }}>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <NavLink to="/#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <NavLink to="/#about" onClick={() => setIsMenuOpen(false)}>Our Promise</NavLink>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <NavLink to="/#services" onClick={() => setIsMenuOpen(false)}>How We Care</NavLink>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <Link to="/services">
                <AnimatedPill>All Services</AnimatedPill>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              <NavLink to="/#faq" onClick={() => setIsMenuOpen(false)}>Peace of Mind</NavLink>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <NavLink to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
              <Link to="/about-us">
                <AnimatedPill>Our Story</AnimatedPill>
              </Link>
            </motion.div>
          </motion.nav>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;