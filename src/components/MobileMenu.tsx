import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { X, Phone, Calendar, ArrowLeft, ChevronRight, Building2, Video, ShieldCheck, HelpCircle, Heart, BookOpen, Shield } from 'lucide-react';
import { menuData } from '../data/navigationData';

const logo = "/logos/header_logo.webp";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<keyof typeof menuData | 'call' | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setActiveSubMenu(null), 250);
    }
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
                    <nav className="flex-1 overflow-y-auto p-5 space-y-6">
                      
                      {/* Hub 1: The Residence */}
                      <section>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-[10px] font-black text-emerald-800 uppercase tracking-[0.2em]">The Residence</h3>
                          <HashLink to="/#home" onClick={onClose} className="text-[10px] font-bold text-stone-300 uppercase tracking-widest">Home</HashLink>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <Link to="/facility" onClick={onClose} className="flex flex-col items-center justify-center py-4 rounded-xl bg-stone-50 border border-stone-100 active:scale-95 transition-all group">
                            <Building2 size={20} className="text-emerald-700 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-bold text-emerald-950">Gallery</span>
                          </Link>
                          <Link to="/virtual-tour" onClick={onClose} className="flex flex-col items-center justify-center py-4 rounded-xl bg-stone-50 border border-stone-100 active:scale-95 transition-all group">
                            <Video size={20} className="text-emerald-700 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-bold text-emerald-950">Virtual Tour</span>
                          </Link>
                        </div>
                      </section>

                      {/* Hub 2: Community & Transparency */}
                      <section>
                        <h3 className="text-[10px] font-black text-emerald-800 uppercase tracking-[0.2em] mb-3">Community & Transparency</h3>
                        <div className="bg-white rounded-2xl border border-stone-100 divide-y divide-stone-50">
                          <Link to="/family-stories" onClick={onClose} className="flex items-center justify-between p-4 hover:bg-stone-50 transition-colors">
                            <div className="flex items-center gap-4">
                              <Heart size={18} className="text-emerald-700/60" />
                              <span className="text-sm font-bold text-stone-800">Family Testimonials</span>
                            </div>
                            <ChevronRight size={16} className="text-stone-300" />
                          </Link>
                          <Link to="/about-us" onClick={onClose} className="flex items-center justify-between p-4 hover:bg-stone-50 transition-colors">
                            <div className="flex items-center gap-4">
                              <BookOpen size={18} className="text-emerald-700/60" />
                              <span className="text-sm font-bold text-stone-800">Our Founding Story</span>
                            </div>
                            <ChevronRight size={16} className="text-stone-300" />
                          </Link>
                          <Link to="/blog" onClick={onClose} className="flex items-center justify-between p-4 hover:bg-stone-50 transition-colors">
                            <div className="flex items-center gap-4">
                              <BookOpen size={18} className="text-emerald-700/60" />
                              <span className="text-sm font-bold text-stone-800">Family Guides & Insights</span>
                            </div>
                            <ChevronRight size={16} className="text-stone-300" />
                          </Link>
                          <Link to="/pricing" onClick={onClose} className="flex items-center justify-between p-4 hover:bg-stone-50 transition-colors">
                            <div className="flex items-center gap-4">
                              <ShieldCheck size={18} className="text-emerald-700/60" />
                              <span className="text-sm font-bold text-stone-800">Pricing & All-Inclusive Rates</span>
                            </div>
                            <ChevronRight size={16} className="text-stone-300" />
                          </Link>
                          <Link to="/faq" onClick={onClose} className="flex items-center justify-between p-4 hover:bg-stone-50 transition-colors">
                            <div className="flex items-center gap-4">
                              <HelpCircle size={18} className="text-emerald-700/60" />
                              <span className="text-sm font-bold text-stone-800">Common Questions (FAQ)</span>
                            </div>
                            <ChevronRight size={16} className="text-stone-300" />
                          </Link>
                        </div>
                      </section>

                      {/* Hub 3: Care Services - Moved below community & no green bg */}
                      <section>
                        <h3 className="text-[10px] font-black text-emerald-800 uppercase tracking-[0.2em] mb-3">Care Model</h3>
                        <button onClick={() => setActiveSubMenu('services')} className="w-full group">
                          <div className="flex items-center justify-between p-4 rounded-2xl bg-stone-50 border border-stone-100 active:scale-[0.98] transition-all">
                            <div className="flex items-center gap-3">
                              <Shield size={20} className="text-emerald-700" />
                              <span className="text-sm font-bold text-emerald-950">Explore Care Services</span>
                            </div>
                            <ChevronRight size={18} className="text-stone-300 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </button>
                      </section>

                      {/* Hub 4: Secondary Actions */}
                      <section className="pb-6">
                        <div className="flex items-center justify-center gap-8 pt-2">
                          <Link to="/contact" onClick={onClose} className="text-xs font-black text-emerald-900 uppercase tracking-widest border-b-2 border-emerald-100 pb-1">Contact</Link>
                          <Link to="/careers" onClick={onClose} className="text-xs font-black text-stone-400 uppercase tracking-widest">Careers</Link>
                        </div>
                      </section>
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
                      {activeSubMenu === 'services' ? (
                        <div className="space-y-6">
                          {menuData.services.sections.map((section, sIdx) => (
                            <section key={sIdx}>
                              <h3 className="text-[10px] font-black text-emerald-800 uppercase tracking-[0.2em] mb-3">{section.title}</h3>
                              <div className="grid grid-cols-1 gap-2">
                                {section.links.map((link, lIdx) => {
                                  const Icon = link.icon;
                                  return (
                                    <Link key={lIdx} to={link.path} onClick={onClose} className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100 active:scale-[0.98] transition-all">
                                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                        <Icon size={16} className="text-emerald-700" />
                                      </div>
                                      <span className="text-xs font-bold text-stone-800">{link.name}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </section>
                          ))}
                        </div>
                      ) : activeSubMenu === 'call' ? (
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
                      ) : null}
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