// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { HashLink } from 'react-router-hash-link';
import { Phone, MapPin, Menu as MenuIcon, ChevronDown } from 'lucide-react';
const logo = "/logos/header_logo.webp";
import MobileMenu from './MobileMenu';
import MegaMenu from './MegaMenu';
import { menuData } from '../data/navigationData';

// Simplified CompactLogo component
export const CompactLogo = () => (
  <img src={logo} alt="Columbia Care Home" className="h-12 w-auto" />
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const location = useLocation(); // Get current location

  const handleMegaMenuToggle = (menuName: string) => {
    setActiveMegaMenu(activeMegaMenu === menuName ? null : menuName);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (activeMegaMenu && !target.closest('nav') && !target.closest('[aria-haspopup="true"]')) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [activeMegaMenu]);

  // Function to determine link style
  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? 'text-base font-semibold text-emerald-700 transition-colors' // Active style
      : 'text-base font-semibold text-gray-700 hover:text-emerald-700 transition-colors'; // Default style
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile View: High-Density Single Line */}
          <div className="flex md:hidden items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-bold text-emerald-400 whitespace-nowrap uppercase tracking-wider">Only 1 Room Available</span>
            </div>
            <a 
              href="tel:301-500-0809" 
              className="flex items-center gap-1.5 bg-emerald-600 px-3 py-1 rounded-full font-bold text-[10px] animate-pulse shadow-lg shadow-emerald-900/20"
            >
              <Phone size={10} />
              CALL TO CONFIRM
            </a>
          </div>

          {/* Desktop View: Full Status Message */}
          <div className="hidden md:flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-emerald-400">Limited Availability:</span>
                <span className="text-stone-300">Only 1 room remains in our Columbia home.</span>
              </div>
              <a href="tel:301-500-0809" className="ml-4 bg-emerald-500/10 hover:bg-emerald-500/20 px-4 py-1 rounded-full border border-emerald-500/30 transition-all flex items-center gap-2">
                <Phone size={14} className="text-emerald-400" />
                <span className="font-bold">Call to Confirm: (301) 500-0809</span>
              </a>
            </div>
            
            <a 
              href="https://maps.google.com/?q=10610+Hickory+Point+Lane,+Columbia,+MD+21044" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-stone-400 hover:text-emerald-300 transition-colors"
            >
              <MapPin size={14} />
              <span>10610 Hickory Point Lane, Columbia</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[76px] sm:h-20 md:h-20 lg:h-24 xl:h-28 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex-1 lg:flex-initial py-0 lg:py-2 flex items-center">
            <img
              src={logo}
              alt="Columbia Care Home"
              className="h-[74px] sm:h-16 md:h-16 lg:h-20 xl:h-24 w-auto max-w-none sm:max-w-[340px] md:max-w-[260px] lg:max-w-[300px] xl:max-w-[340px] object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 h-full">
            <HashLink
              to="/#home"
              // Special check for homepage (root path or hash link)
              className={location.pathname === '/' || location.hash === '#home'
                ? 'text-base font-semibold text-emerald-700 transition-colors'
                : 'text-base font-semibold text-gray-700 hover:text-emerald-700 transition-colors'
              }
            >
              Home
            </HashLink>
            <div className="relative h-full flex items-center">
              <button
                aria-haspopup="true"
                aria-expanded={activeMegaMenu === 'services'}
                onClick={() => handleMegaMenuToggle('services')}
                className="flex items-center gap-1 text-base font-semibold text-gray-700 hover:text-emerald-700 transition-colors"
              >
                <span>Our Services</span>
                <motion.div animate={{ rotate: activeMegaMenu === 'services' ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={16} />
                </motion.div>
              </button>
            </div>
            <div className="relative h-full flex items-center">
              <button
                aria-haspopup="true"
                aria-expanded={activeMegaMenu === 'aboutUs'}
                onClick={() => handleMegaMenuToggle('aboutUs')}
                className="flex items-center gap-1 text-base font-semibold text-gray-700 hover:text-emerald-700 transition-colors"
              >
                <span>About Us</span>
                <motion.div animate={{ rotate: activeMegaMenu === 'aboutUs' ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={16} />
                </motion.div>
              </button>
            </div>

            {/* --- ADDED FACILITY LINK with Active Styling --- */}
            <Link to="/facility" className={getLinkClass('/facility')}>
              Our Facility
            </Link>
            {/* --- END ADDED FACILITY LINK --- */}

            <Link to="/virtual-tour" className={getLinkClass('/virtual-tour')}>
              Virtual Tour
            </Link>

            <Link to="/blog" className={getLinkClass('/blog')}>
              Blog
            </Link>

            <Link to="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button - REMOVED as per request */}
          <div className="hidden lg:block">
            {/* 3D Tour button removed */}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1.5 sm:p-2 rounded-lg"
              aria-label="Open menu"
            >
              <MenuIcon size={24} className="sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMegaMenu === 'services' && (
            <MegaMenu sections={menuData.services.sections} onLinkClick={() => setActiveMegaMenu(null)} />
          )}
          {activeMegaMenu === 'aboutUs' && (
            <MegaMenu sections={menuData.aboutUs.sections} onLinkClick={() => setActiveMegaMenu(null)} />
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;