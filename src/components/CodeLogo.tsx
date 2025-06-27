import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MapPin, Home, Heart, Shield, Smile, Mail, BookOpen, ChevronDown } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo.avif';
import ColumbiaCareLogo from './CodeLogo';

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

// Compact Logo Component for Mobile Menu
const CompactLogo = () => (
  <div className="flex items-center gap-3">
    <div className="relative">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="text-emerald-300"
      >
        <path
          d="M3 9.5l9-7 9 7V21H3V9.5z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          fillOpacity="0.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 21V12h6v9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-xl opacity-20 -z-10" />
    </div>
    <div>
      <h1 className="text-lg font-bold text-white">
        <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
          Columbia Care Home
        </span>
      </h1>
    </div>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Handle body scroll lock
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

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Check if content is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      if (menuRef.current) {
        const { scrollHeight, clientHeight } = menuRef.current;
        setShowScrollIndicator(scrollHeight > clientHeight);
      }
    };
    
    if (isMenuOpen) {
      checkScrollable();
      window.addEventListener('resize', checkScrollable);
      return () => window.removeEventListener('resize', checkScrollable);
    }
  }, [isMenuOpen]);

  const navLinksForMobile = [
    { name: 'Home', path: '/#home', icon: Home },
    { name: 'Our Promise', path: '/#about', icon: Heart },
    { name: 'How We Care', path: '/#services', icon: Shield },
    { name: 'Peace of Mind', path: '/#faq', icon: Smile },
    { name: 'Contact', path: '/#contact', icon: Mail },
    { name: 'Our Story', path: '/about-us', icon: BookOpen }
  ];

  // Animation variants for the mobile menu
  const menuVariants: Variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 300, damping: 30 } 
    },
    exit: { 
      x: '100%', 
      opacity: 0, 
      transition: { duration: 0.2, ease: 'easeInOut' } 
    },
  };

  const linkContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.05, delayChildren: 0.1 } 
    }
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 300, damping: 25 } 
    }
  };

  return (
    <>
      {/* Top Contact Bar - unchanged */}
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

      {/* Main Header - unchanged */}
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
              <NavLink to="/#home" onClick={() => setIsMenuOpen(false)} isActive={activeSection === 'home'}>Home</NavLink>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <NavLink to="/#about" onClick={() => setIsMenuOpen(false)} isActive={activeSection === 'about'}>Our Promise</NavLink>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <NavLink to="/#services" onClick={() => setIsMenuOpen(false)} isActive={activeSection === 'services'}>How We Care</NavLink>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <NavLink to="/#faq" onClick={() => setIsMenuOpen(false)} isActive={activeSection === 'faq'}>Peace of Mind</NavLink>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              <NavLink to="/#contact" onClick={() => setIsMenuOpen(false)} isActive={activeSection === 'contact'}>Contact</NavLink>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <Link to="/about-us">
                <AnimatedPill>Our Story</AnimatedPill>
              </Link>
            </motion.div>
          </motion.nav>
          <motion.div className="lg:hidden" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="relative z-[60] inline-flex items-center justify-center p-2 rounded-lg text-stone-700 hover:text-emerald-700 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
              <Menu size={24} />
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm z-[9999] bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-900 shadow-2xl lg:hidden"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Header with Logo and Close Button */}
              <div className="sticky top-0 z-10 bg-gradient-to-b from-slate-900 to-slate-900/95 backdrop-blur-sm border-b border-emerald-800/30">
                <div className="flex items-center justify-between p-6">
                  <HashLink smooth to="/#home" onClick={() => setIsMenuOpen(false)}>
                    <CompactLogo />
                  </HashLink>
                  
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Scrollable Navigation Area */}
              <motion.nav
                ref={menuRef}
                className="flex-1 overflow-y-auto overscroll-contain px-6 py-4"
                style={{ maxHeight: 'calc(100vh - 120px)' }}
                variants={linkContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="space-y-2">
                  {navLinksForMobile.map((link) => {
                    const Icon = link.icon;
                    const LinkComponent = ({ children }: { children: React.ReactNode }) =>
                      link.path.includes('#') ?
                        (<HashLink smooth to={link.path} onClick={() => setIsMenuOpen(false)}>{children}</HashLink>) :
                        (<Link to={link.path} onClick={() => setIsMenuOpen(false)}>{children}</Link>);

                    return (
                      <motion.div key={link.name} variants={linkVariants}>
                        <LinkComponent>
                          <motion.div
                            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-emerald-800/20 transition-colors group"
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="p-2 rounded-lg bg-emerald-800/30 group-hover:bg-emerald-700/30 transition-colors">
                              <Icon className="w-5 h-5 text-emerald-400" />
                            </div>
                            <span className="text-lg font-medium text-stone-200">
                              {link.name}
                            </span>
                          </motion.div>
                        </LinkComponent>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 pt-8 border-t border-emerald-800/30 space-y-4">
                  <motion.a
                    href="tel:555-123-4567"
                    className="flex items-center justify-center gap-3 p-4 bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone size={20} className="text-white" />
                    <span className="text-white font-semibold">Call Now</span>
                  </motion.a>
                  
                  <Link to="/schedule-a-tour" onClick={() => setIsMenuOpen(false)}>
                    <motion.button
                      className="w-full p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-white font-semibold transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Schedule a Tour
                    </motion.button>
                  </Link>
                </div>

                {/* Add padding at bottom for safe scrolling */}
                <div className="h-8" />
              </motion.nav>

              {/* Scroll Indicator */}
              <AnimatePresence>
                {showScrollIndicator && (
                  <motion.div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-none"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronDown className="w-6 h-6 text-emerald-400/50" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;