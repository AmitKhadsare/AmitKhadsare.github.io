
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { X, Phone, Calendar, ArrowLeft, ChevronRight, Building2, Video, BookOpen, Heart } from 'lucide-react';
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

  const activeSubMenuTitle = activeSubMenu && activeSubMenu !== 'call' ? menuData[activeSubMenu].title : activeSubMenu === 'call' ? 'Call Now' : '';

  // --- REFINED ANIMATIONS ---
  const panelVariants: Variants = {
    // Panel now fades in and scales up slightly for a quick "takeover" effect
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
            className="fixed inset-0 bg-white shadow-2xl z-[9999] flex flex-col"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200">
              <HashLink to="/#home" onClick={onClose}>
                <img
                  src={logo}
                  alt="Columbia Care Home"
                  className="h-[74px] sm:h-20 w-auto max-w-none sm:max-w-[340px] object-contain"
                />
              </HashLink>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Close menu"><X className="w-6 h-6 text-gray-600" /></button>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence initial={false}>
                {!activeSubMenu && (
                  <motion.div key="main-menu" className="absolute w-full h-full flex flex-col" variants={listVariants} initial="enter" animate="enter" exit="exit">
                    <nav className="flex-1 overflow-y-auto p-6 space-y-8">
                      {/* Hub 1: Explore the Residence */}
                      <section>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.2em]">The Residence</h3>
                          <HashLink to="/#home" onClick={onClose} className="text-[10px] font-bold text-stone-400 uppercase tracking-widest hover:text-emerald-700 transition-colors">Home</HashLink>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <Link to="/facility" onClick={onClose} className="flex flex-col items-center justify-center p-4 rounded-xl bg-stone-50 border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group">
                            <Building2 className="w-6 h-6 text-emerald-700 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-semibold text-emerald-950 text-center leading-tight">Gallery & Facility</span>
                          </Link>
                          <Link to="/virtual-tour" onClick={onClose} className="relative flex flex-col items-center justify-center p-4 rounded-xl bg-stone-50 border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group">
                            <Video className="w-6 h-6 text-emerald-700 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-semibold text-emerald-950 text-center leading-tight">Virtual 3D Tour</span>
                            <span className="absolute -top-2 -right-1 px-2 py-0.5 text-[8px] font-black text-white bg-emerald-600 rounded-full shadow-sm">NEW</span>
                          </Link>
                        </div>
                      </section>

                      {/* Hub 2: Our Care Model */}
                      <section>
                        <h3 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.2em] mb-4">Our Care Model</h3>
                        <button onClick={() => setActiveSubMenu('services')} className="w-full group">
                          <div className="flex items-center justify-between p-5 rounded-2xl bg-emerald-950 text-white shadow-lg shadow-emerald-900/20 active:scale-[0.98] transition-all">
                            <div className="flex items-center gap-4">
                              <menuData.services.icon className="w-6 h-6 text-emerald-400" />
                              <div className="text-left">
                                <span className="block text-base font-bold tracking-tight">{menuData.services.title}</span>
                                <span className="text-[10px] text-emerald-300/80 font-medium uppercase tracking-wider">High-Acuity Specialty</span>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-emerald-400/50 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </button>
                      </section>

                      {/* Hub 3: Community & Insights */}
                      <section>
                        <h3 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.2em] mb-4">Community & Insights</h3>
                        <div className="bg-white rounded-2xl border border-stone-100 divide-y divide-stone-50">
                          <Link to="/about-us" onClick={onClose} className="flex items-center justify-between p-4 hover:bg-stone-50 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                                <BookOpen className="w-4 h-4 text-emerald-700" />
                              </div>
                              <span className="text-sm font-semibold text-stone-800">Our Founding Story</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-stone-300" />
                          </Link>
                          <Link to="/family-stories" onClick={onClose} className="flex items-center justify-between p-4 hover:bg-stone-50 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                                <Heart className="w-4 h-4 text-emerald-700" />
                              </div>
                              <span className="text-sm font-semibold text-stone-800">Family Testimonials</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-stone-300" />
                          </Link>
                          <Link to="/blog" onClick={onClose} className="flex items-center justify-between p-4 hover:bg-stone-50 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                                <BookOpen className="w-4 h-4 text-emerald-700" />
                              </div>
                              <span className="text-sm font-semibold text-stone-800">Family Guides & Insights</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-stone-300" />
                          </Link>
                        </div>
                      </section>

                      {/* Hub 4: Contact & Careers */}
                      <section className="pb-10">
                        <div className="flex items-center justify-center gap-6">
                          <Link to="/contact" onClick={onClose} className="text-sm font-bold text-emerald-900 border-b-2 border-emerald-200 pb-1">Contact Us</Link>
                          <div className="w-1.5 h-1.5 rounded-full bg-stone-200"></div>
                          <Link to="/careers" onClick={onClose} className="text-sm font-bold text-stone-500 hover:text-emerald-700 transition-colors">Join Our Team</Link>
                        </div>
                      </section>
                    </nav>
                  </motion.div>
                )}
                {activeSubMenu && (
                  <motion.div key={activeSubMenu} className="absolute w-full h-full flex flex-col" variants={subMenuVariants} initial="enter" animate="enter" exit="exit">
                    <div className="flex-shrink-0 p-4 border-b border-gray-200">
                      <button onClick={() => setActiveSubMenu(null)} className="flex items-center gap-2 p-2 w-full font-bold text-emerald-800 hover:bg-gray-100 rounded-lg transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        {activeSubMenuTitle}
                      </button>
                    </div>
                    
                    <nav className="flex-1 overflow-y-auto p-6 space-y-8">
                      {activeSubMenu === 'services' ? (
                        (() => {
                          const CoreIcon1 = menuData.services.sections[0].links[0].icon;
                          const CoreIcon2 = menuData.services.sections[0].links[1].icon;
                          const CoreIcon3 = menuData.services.sections[0].links[2].icon;
                          const ClinicalIcon1 = menuData.services.sections[1].links[0].icon;
                          const ClinicalIcon2 = menuData.services.sections[1].links[1].icon;
                          const ClinicalIcon3 = menuData.services.sections[1].links[2].icon;
                          const LifeIcon1 = menuData.services.sections[2].links[0].icon;
                          const LifeIcon2 = menuData.services.sections[2].links[1].icon;

                          return (
                            <>
                              {/* Services Hub 1: Core Care (Pyramid) */}
                              <section>
                                <h3 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.2em] mb-3">Residential Core</h3>
                                <div className="grid grid-cols-2 gap-3 mb-3">
                                  <Link to={menuData.services.sections[0].links[0].path} onClick={onClose} className="flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-950 text-white shadow-md active:scale-95 transition-all">
                                    <CoreIcon1 className="w-5 h-5 text-emerald-400 mb-2" />
                                    <span className="text-[11px] font-bold text-center leading-tight">Personal Assistance</span>
                                  </Link>
                                  <Link to={menuData.services.sections[0].links[1].path} onClick={onClose} className="flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-950 text-white shadow-md active:scale-95 transition-all">
                                    <CoreIcon2 className="w-5 h-5 text-emerald-400 mb-2" />
                                    <span className="text-[11px] font-bold text-center leading-tight">Residential Care</span>
                                  </Link>
                                </div>
                                <Link to={menuData.services.sections[0].links[2].path} onClick={onClose} className="flex items-center justify-center gap-3 p-4 rounded-xl bg-stone-50 border border-stone-100 active:scale-95 transition-all">
                                  <CoreIcon3 className="w-5 h-5 text-emerald-700" />
                                  <span className="text-xs font-bold text-emerald-950">Dietary & Nutrition Services</span>
                                </Link>
                              </section>

                              {/* Services Hub 2: Clinical (Pyramid) */}
                              <section>
                                <h3 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.2em] mb-3">Clinical Excellence</h3>
                                <div className="grid grid-cols-2 gap-3 mb-3">
                                  <Link to={menuData.services.sections[1].links[0].path} onClick={onClose} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-emerald-100 shadow-sm active:scale-95 transition-all">
                                    <ClinicalIcon1 className="w-5 h-5 text-emerald-700 mb-2" />
                                    <span className="text-[11px] font-bold text-emerald-950 text-center leading-tight">Rehabilitation</span>
                                  </Link>
                                  <Link to={menuData.services.sections[1].links[1].path} onClick={onClose} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-emerald-100 shadow-sm active:scale-95 transition-all">
                                    <ClinicalIcon2 className="w-5 h-5 text-emerald-700 mb-2" />
                                    <span className="text-[11px] font-bold text-emerald-950 text-center leading-tight">Memory Care</span>
                                  </Link>
                                </div>
                                <Link to={menuData.services.sections[1].links[2].path} onClick={onClose} className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white border border-emerald-100 active:scale-95 transition-all">
                                  <ClinicalIcon3 className="w-5 h-5 text-emerald-700" />
                                  <span className="text-xs font-bold text-emerald-950">Proactive Health & Safety</span>
                                </Link>
                              </section>

                              {/* Services Hub 3: Life (Balanced) */}
                              <section className="pb-6">
                                <h3 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.2em] mb-3">Daily Life</h3>
                                <div className="grid grid-cols-2 gap-3">
                                  <Link to={menuData.services.sections[2].links[0].path} onClick={onClose} className="flex flex-col items-center justify-center p-4 rounded-xl bg-stone-50 border border-stone-100 active:scale-95 transition-all">
                                    <LifeIcon1 className="w-5 h-5 text-emerald-700 mb-2" />
                                    <span className="text-[11px] font-bold text-emerald-950 text-center leading-tight">Recreation</span>
                                  </Link>
                                  <Link to={menuData.services.sections[2].links[1].path} onClick={onClose} className="flex flex-col items-center justify-center p-4 rounded-xl bg-stone-50 border border-stone-100 active:scale-95 transition-all">
                                    <LifeIcon2 className="w-5 h-5 text-emerald-700 mb-2" />
                                    <span className="text-[11px] font-bold text-emerald-950 text-center leading-tight">Family Care</span>
                                  </Link>
                                </div>
                              </section>

                              <section className="pt-2 pb-10">
                                <Link 
                                  to="/services" 
                                  onClick={onClose}
                                  className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors py-2"
                                >
                                  <span>View All Care Services</span>
                                  <ChevronRight className="w-3 h-3" />
                                </Link>
                              </section>
                            </>
                          );
                        })()
                      ) : activeSubMenu === 'call' ? (
                        <div className="space-y-4 pt-4">
                          <a href="tel:301-500-0809" className="flex items-center justify-between p-5 rounded-2xl bg-emerald-950 text-white shadow-lg active:scale-[0.98] transition-all">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center">
                                <Phone className="w-5 h-5 text-emerald-400" />
                              </div>
                              <div>
                                <span className="block text-lg font-bold">(301) 500-0809</span>
                                <span className="text-xs text-emerald-300 font-bold uppercase tracking-wider">Primary Admissions</span>
                              </div>
                            </div>
                          </a>
                          <a href="tel:201-885-9225" className="flex items-center justify-between p-5 rounded-2xl bg-white border border-emerald-100 text-emerald-950 shadow-sm active:scale-[0.98] transition-all">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                <Phone className="w-5 h-5 text-emerald-700" />
                              </div>
                              <div>
                                <span className="block text-lg font-bold">(201) 885-9225</span>
                                <span className="text-xs text-stone-500 font-bold uppercase tracking-wider">Facility Office (Alt)</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      ) : (
                        <div className="text-center py-20 text-stone-400">Section coming soon...</div>
                      )}
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex-shrink-0 p-6 border-t border-stone-100 bg-stone-50/50">
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setActiveSubMenu('call')} 
                  className="flex items-center justify-center gap-2 py-4 px-4 rounded-xl bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-900 active:scale-[0.98] transition-all font-bold text-sm"
                >
                  <Phone className="w-4 h-4" /> 
                  Call Now
                </button>
                <Link 
                  to="/schedule-a-tour" 
                  onClick={onClose} 
                  className="flex items-center justify-center gap-2 py-4 px-4 bg-white text-emerald-900 rounded-xl hover:bg-emerald-50 border border-emerald-200 active:scale-[0.98] transition-all font-bold text-sm"
                >
                  <Calendar className="w-4 h-4" /> 
                  Tour
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