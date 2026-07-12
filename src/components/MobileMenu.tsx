import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { 
  X, Phone, Calendar, ArrowLeft, ChevronRight, ChevronDown, ChevronUp, MapPin,
  Home, Building2, Video, Coins, Heart, BookOpen, HelpCircle, Newspaper, Shield 
} from 'lucide-react';
import { menuData } from '../data/navigationData';

const logo = "/logos/header_logo.webp";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<'call' | null>(null);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setTimeout(() => {
        setActiveSubMenu(null);
        setServicesExpanded(false);
      }, 250);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const panelVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { type: "tween", duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.98, transition: { type: "tween", duration: 0.15, ease: 'easeIn' } },
  };
  const listVariants: Variants = {
    enter: { x: 0, opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
    exit: { x: -30, opacity: 0, transition: { duration: 0.15 } },
  };
  const subMenuVariants: Variants = {
    enter: { x: 0, opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
    exit: { x: 30, opacity: 0, transition: { duration: 0.15 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 bg-white z-[9999] flex flex-col overflow-hidden"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-100">
              <HashLink to="/#home" onClick={onClose}>
                <img
                  src={logo}
                  alt="Columbia Care Home"
                  className="h-12 w-auto object-contain"
                />
              </HashLink>
              <button onClick={onClose} className="p-2 text-gray-400 hover:text-emerald-700 transition-colors" aria-label="Close menu"><X size={24} /></button>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence initial={false} mode="wait">
                {!activeSubMenu ? (
                  <motion.div key="main-menu" className="absolute w-full h-full flex flex-col" variants={listVariants} initial="enter" animate="enter" exit="exit">
                    <nav className="flex-1 overflow-y-auto p-4 space-y-4">
                      
                      {/* Primary Links */}
                      <div className="flex flex-col space-y-1">
                        <HashLink 
                          to="/#home" 
                          onClick={onClose} 
                          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-stone-50 text-stone-800 hover:text-emerald-700 active:scale-95 transition-all text-sm font-semibold"
                        >
                          <Home size={16} className="text-emerald-700/80" />
                          <span>Home</span>
                        </HashLink>

                        {/* Accordion Care Model */}
                        <div className="space-y-0.5">
                          <button 
                            onClick={() => setServicesExpanded(!servicesExpanded)} 
                            className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-stone-50 text-stone-800 hover:text-emerald-700 active:scale-95 transition-all text-sm font-semibold text-left"
                          >
                            <div className="flex items-center gap-3">
                              <Shield size={16} className="text-emerald-700/80" />
                              <span>Our Care Services</span>
                            </div>
                            {servicesExpanded ? (
                              <ChevronUp size={16} className="text-stone-400" />
                            ) : (
                              <ChevronDown size={16} className="text-stone-400" />
                            )}
                          </button>

                          <AnimatePresence>
                            {servicesExpanded && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-6 pr-2 py-0.5 space-y-0.5 border-l border-emerald-100/60 overflow-hidden ml-5"
                              >
                                {menuData.services.sections.flatMap(s => s.links).map((link, idx) => {
                                  const LinkIcon = link.icon;
                                  return (
                                    <Link
                                      key={idx}
                                      to={link.path}
                                      onClick={onClose}
                                      className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-stone-600 hover:text-emerald-750 hover:bg-emerald-50/20 transition-all text-[13px] font-medium"
                                    >
                                      <LinkIcon size={12} className="text-emerald-600/70" />
                                      <span>{link.name}</span>
                                    </Link>
                                  );
                                })}
                                <Link
                                  to="/services"
                                  onClick={onClose}
                                  className="block text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors pt-1.5 px-2.5 border-t border-stone-100 w-fit"
                                >
                                  View All Services & Care Model →
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <Link 
                          to="/virtual-tour" 
                          onClick={onClose} 
                          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-stone-50 text-stone-850 hover:text-emerald-700 active:scale-95 transition-all text-sm font-semibold"
                        >
                          <Video size={16} className="text-emerald-700/80" />
                          <span>Virtual Tour</span>
                        </Link>
                      </div>

                      {/* Secondary Links Grid */}
                      <div>
                        <span className="block text-[9px] font-bold text-stone-400 uppercase tracking-widest px-3 mb-2">Explore More</span>
                        <div className="grid grid-cols-2 gap-2">
                          <Link 
                            to="/facility" 
                            onClick={onClose} 
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50/60 hover:bg-stone-50 border border-stone-200/50 text-stone-800 hover:text-emerald-700 active:scale-95 transition-all text-xs font-semibold"
                          >
                            <Building2 size={14} className="text-emerald-700/80 flex-shrink-0" />
                            <span>Our Facility</span>
                          </Link>

                          <Link 
                            to="/pricing" 
                            onClick={onClose} 
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50/60 hover:bg-stone-50 border border-stone-200/50 text-stone-800 hover:text-emerald-700 active:scale-95 transition-all text-xs font-semibold"
                          >
                            <Coins size={14} className="text-emerald-700/80 flex-shrink-0" />
                            <span>Pricing & Rates</span>
                          </Link>

                          <Link 
                            to="/family-stories" 
                            onClick={onClose} 
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50/60 hover:bg-stone-50 border border-stone-200/50 text-stone-800 hover:text-emerald-700 active:scale-95 transition-all text-xs font-semibold"
                          >
                            <Heart size={14} className="text-emerald-700/80 flex-shrink-0" />
                            <span>Testimonials</span>
                          </Link>

                          <Link 
                            to="/about-us" 
                            onClick={onClose} 
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50/60 hover:bg-stone-50 border border-stone-200/50 text-stone-800 hover:text-emerald-700 active:scale-95 transition-all text-xs font-semibold"
                          >
                            <BookOpen size={14} className="text-emerald-700/80 flex-shrink-0" />
                            <span>Founding Story</span>
                          </Link>

                          <Link 
                            to="/faq" 
                            onClick={onClose} 
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50/60 hover:bg-stone-50 border border-stone-200/50 text-stone-800 hover:text-emerald-700 active:scale-95 transition-all text-xs font-semibold"
                          >
                            <HelpCircle size={14} className="text-emerald-700/80 flex-shrink-0" />
                            <span>FAQ</span>
                          </Link>

                          <Link 
                            to="/blog" 
                            onClick={onClose} 
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50/60 hover:bg-stone-50 border border-stone-200/50 text-stone-800 hover:text-emerald-700 active:scale-95 transition-all text-xs font-semibold"
                          >
                            <Newspaper size={14} className="text-emerald-700/80 flex-shrink-0" />
                            <span>Family Guides</span>
                          </Link>
                        </div>
                      </div>

                      {/* Interactive Location Link */}
                      <div className="pt-1">
                        <HashLink
                          to="/contact#find-us"
                          onClick={onClose}
                          className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/60 hover:border-emerald-500/50 hover:bg-emerald-50/10 transition-all group"
                        >
                          <div className="flex items-center gap-2.5">
                            <MapPin size={16} className="text-emerald-700 flex-shrink-0" />
                            <div className="text-left">
                              <p className="text-xs font-bold text-stone-800 leading-none">Our Location</p>
                              <p className="text-[10px] text-stone-500 mt-1 leading-none">10610 Hickory Point Ln, Columbia, MD</p>
                            </div>
                          </div>
                          <ChevronRight size={14} className="text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                        </HashLink>
                      </div>

                      {/* Secondary Careers Link */}
                      <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                        <Link 
                          to="/careers" 
                          onClick={onClose} 
                          className="text-xs font-bold text-stone-400 hover:text-stone-600 transition-colors px-2"
                        >
                          Careers
                        </Link>
                        <Link 
                          to="/privacy-policy" 
                          onClick={onClose} 
                          className="text-[10px] font-medium text-stone-400 hover:text-stone-600 transition-colors px-2"
                        >
                          Privacy Policy
                        </Link>
                      </div>

                    </nav>
                  </motion.div>
                ) : (
                  <motion.div key={activeSubMenu} className="absolute w-full h-full flex flex-col" variants={subMenuVariants} initial="enter" animate="enter" exit="exit">
                    <div className="flex-shrink-0 p-4 border-b border-gray-100">
                      <button onClick={() => setActiveSubMenu(null)} className="flex items-center gap-2 p-2 w-full font-black text-[10px] uppercase tracking-widest text-emerald-800">
                        <ArrowLeft size={16} /> Back
                      </button>
                    </div>
                    
                    <nav className="flex-1 overflow-y-auto p-5 space-y-6">
                      {activeSubMenu === 'call' && (
                        <div className="space-y-3 pt-2">
                          <a href="tel:301-500-0809" className="flex items-center justify-between p-4 rounded-xl bg-emerald-950 text-white shadow-lg">
                            <div className="flex items-center gap-3">
                              <Phone size={18} className="text-emerald-400" />
                              <span className="text-base font-bold">(301) 500-0809</span>
                            </div>
                          </a>
                          <a href="tel:201-885-9225" className="flex items-center justify-between p-4 rounded-xl bg-white border border-emerald-100 text-emerald-950">
                            <div className="flex items-center gap-3">
                              <Phone size={18} className="text-emerald-700" />
                              <span className="text-base font-bold">(201) 885-9225</span>
                            </div>
                          </a>
                        </div>
                      )}
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Fixed Actions */}
            <div className="flex-shrink-0 p-5 border-t border-stone-100 bg-stone-50">
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setActiveSubMenu('call')} 
                  className="flex items-center justify-center gap-2 py-4 rounded-xl bg-emerald-800 text-white shadow-lg active:scale-[0.98] transition-all font-black text-xs uppercase tracking-widest"
                >
                  <Phone size={16} /> Call
                </button>
                <Link 
                  to="/schedule-a-tour" 
                  onClick={onClose} 
                  className="flex items-center justify-center gap-2 py-4 bg-white text-emerald-900 rounded-xl border border-emerald-200 active:scale-[0.98] transition-all font-black text-xs uppercase tracking-widest"
                >
                  <Calendar size={16} /> Tour
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;