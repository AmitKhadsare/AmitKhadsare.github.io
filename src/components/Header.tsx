import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Phone, MapPin, Menu as MenuIcon, ChevronDown } from 'lucide-react';
import logo from '../assets/cch-landscape.svg';
import MobileMenu from './MobileMenu';
import MegaMenu from './MegaMenu';
import { menuData } from '../data/navigationData';

// --- CHANGE: Simplified CompactLogo to be the image only ---
export const CompactLogo = () => (
  <img src={logo} alt="Columbia Care Home" className="h-10 w-auto" />
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

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

  return (
    <>
      {/* Top Bar and Desktop Nav... (no changes here) */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-900 text-white py-2 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 sm:gap-4 text-xs sm:text-sm md:text-base text-center">
          <span className="flex items-center space-x-1 sm:space-x-2 truncate w-full md:w-auto justify-center">
            <Phone size={14} />
            <span>Call us:</span>
            <a href="tel:201-885-9225" className="hover:text-emerald-300 ml-1 whitespace-nowrap">(201) 885-9225</a>
            <span className="mx-1">|</span>
            <a href="tel:301-500-0809" className="hover:text-emerald-300 whitespace-nowrap">(301) 500-0809</a>
          </span>
          <a href="https://www.google.com/maps/search/?api=1&query=10610+Hickory+Point+Lane,+Columbia,+MD+21044" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 sm:space-x-2 text-center md:text-left hover:text-emerald-300 truncate w-full md:w-auto justify-center">
            <MapPin size={14} />
            <span className="hidden sm:inline">Visit us:</span>
            <span className="truncate">10610 Hickory Point Lane, Columbia, MD 21044</span>
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Columbia Care Home Logo" 
              className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[280px] xl:max-w-none object-contain" 
            />
          </Link>
          <nav className="hidden lg:flex items-center space-x-8 h-full">
            <HashLink to="/#home" className="text-base font-semibold text-gray-700 hover:text-emerald-700 transition-colors">Home</HashLink>
            <div className="relative h-full flex items-center">
              <button aria-haspopup="true" aria-expanded={activeMegaMenu === 'services'} onClick={() => handleMegaMenuToggle('services')} className="flex items-center gap-1 text-base font-semibold text-gray-700 hover:text-emerald-700 transition-colors">
                <span>Our Services</span>
                <motion.div animate={{ rotate: activeMegaMenu === 'services' ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown size={16} /></motion.div>
              </button>
            </div>
            <div className="relative h-full flex items-center">
              <button aria-haspopup="true" aria-expanded={activeMegaMenu === 'aboutUs'} onClick={() => handleMegaMenuToggle('aboutUs')} className="flex items-center gap-1 text-base font-semibold text-gray-700 hover:text-emerald-700 transition-colors">
                <span>About Us</span>
                <motion.div animate={{ rotate: activeMegaMenu === 'aboutUs' ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown size={16} /></motion.div>
              </button>
            </div>
            <Link to="/faq" className="text-base font-semibold text-gray-700 hover:text-emerald-700 transition-colors">FAQ</Link>
            <Link to="/contact" className="text-base font-semibold text-gray-700 hover:text-emerald-700 transition-colors">Contact</Link>
          </nav>
          <div className="hidden lg:block">
            <Link to="/schedule-a-tour"><motion.button className="px-5 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-sm hover:shadow-md">Schedule a Tour</motion.button></Link>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-1.5 sm:p-2 rounded-lg" aria-label="Open menu"><MenuIcon size={24} className="sm:w-7 sm:h-7" /></button>
          </div>
        </div>
        <AnimatePresence>
          {activeMegaMenu === 'services' && <MegaMenu sections={menuData.services.sections} onLinkClick={() => setActiveMegaMenu(null)} />}
          {activeMegaMenu === 'aboutUs' && <MegaMenu sections={menuData.aboutUs.sections} onLinkClick={() => setActiveMegaMenu(null)} />}
        </AnimatePresence>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;