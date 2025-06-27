import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Home, Heart, Shield, Smile, Mail, BookOpen } from 'lucide-react';
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();

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
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 20, mass: 0.8 } },
    exit: { y: '-100%', opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };
  const linkContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
  };
  const linkVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
  };

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
            <motion.button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative z-[10000] inline-flex items-center justify-center p-2 rounded-lg text-stone-700 hover:text-emerald-700 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={24} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* --- REVISED "EMERALD HUB" MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 to-emerald-900 flex flex-col p-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* --- CHANGE: Logo alignment and size updated --- */}
            <motion.div
              className="w-full flex justify-start pl-4 pt-8 pb-12"
              variants={linkVariants}
            >
              <HashLink smooth to="/#home" onClick={() => setIsMenuOpen(false)}>
                <ColumbiaCareLogo />
              </HashLink>
            </motion.div>

            {/* Centered Navigation Links with Icons */}
            <div className="flex-grow flex flex-col justify-start">
              <motion.nav
                className="flex flex-col items-center space-y-2"
                variants={linkContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinksForMobile.map((link) => {
                  const Icon = link.icon;
                  const LinkComponent = ({ children }: { children: React.ReactNode }) =>
                    link.path.includes('#') ?
                      (<HashLink smooth to={link.path} onClick={() => setIsMenuOpen(false)}>{children}</HashLink>) :
                      (<Link to={link.path} onClick={() => setIsMenuOpen(false)}>{children}</Link>);

                  return (
                    <motion.div key={link.name} variants={linkVariants} className="w-full max-w-xs">
                      <LinkComponent>
                        <motion.div
                          className="flex items-center w-full gap-4 p-4 rounded-lg"
                          whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="w-6 h-6 text-emerald-400" />
                          <span className="text-2xl font-semibold text-stone-200">
                            {link.name}
                          </span>
                        </motion.div>
                      </LinkComponent>
                    </motion.div>
                  );
                })}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;