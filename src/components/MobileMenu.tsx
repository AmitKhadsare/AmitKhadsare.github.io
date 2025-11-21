
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { X, Phone, Calendar, Home, ArrowLeft, ChevronRight, Building2, Video, BookOpen, Briefcase, Mail, Smile } from 'lucide-react';
import { menuData } from '../data/navigationData';
import logo from '../assets/logo1.svg';

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

  const activeSubMenuData = activeSubMenu && activeSubMenu !== 'call' ? menuData[activeSubMenu] : null;
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
                  className="h-12 sm:h-14 w-auto max-w-[200px] sm:max-w-[220px] object-contain"
                />
              </HashLink>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Close menu"><X className="w-6 h-6 text-gray-600" /></button>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence initial={false}>
                {!activeSubMenu && (
                  <motion.div key="main-menu" className="absolute w-full h-full flex flex-col" variants={listVariants} initial="enter" animate="enter" exit="exit">
                    <nav className="flex-1 overflow-y-auto p-4">
                      <HashLink to="/#home" onClick={onClose} className="block w-full text-left">
                        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-4"><Home className="w-6 h-6 text-emerald-700" /><span className="text-lg font-medium text-gray-800">Home</span></div>
                        </div>
                      </HashLink>

                      {/* Added Facility Link */}
                      <Link to="/facility" onClick={onClose} className="block w-full text-left">
                        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-4">
                            <Building2 className="w-6 h-6 text-emerald-700" />
                            <span className="text-lg font-medium text-gray-800">Our Facility & Gallery</span>
                          </div>
                        </div>
                      </Link>

                      {/* Added 3D Tour Link */}
                      <a href="https://my.matterport.com/show?play=1&lang=en-US&m=Ek5iHJBymGt" target="_blank" rel="noopener noreferrer" onClick={onClose} className="block w-full text-left">
                        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-4">
                            <Video className="w-6 h-6 text-emerald-700" />
                            <span className="text-lg font-medium text-gray-800">3D Virtual Tour</span>
                          </div>
                          <span className="px-2 py-0.5 text-xs font-bold text-white bg-emerald-600 rounded-full">New</span>
                        </div>
                      </a>

                      {/* Our Services (Drill-down) */}
                      <button onClick={() => setActiveSubMenu('services')} className="w-full text-left">
                        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-4">
                            <menuData.services.icon className="w-6 h-6 text-emerald-700" />
                            <span className="text-lg font-medium text-gray-800">{menuData.services.title}</span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </button>

                      {/* Our Story (Flattened from About Us) */}
                      <Link to="/about-us" onClick={onClose} className="block w-full text-left">
                        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-4">
                            <BookOpen className="w-6 h-6 text-emerald-700" />
                            <span className="text-lg font-medium text-gray-800">Our Story</span>
                          </div>
                        </div>
                      </Link>

                      {/* Careers (Flattened from About Us) */}
                      <Link to="/careers" onClick={onClose} className="block w-full text-left">
                        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-4">
                            <Briefcase className="w-6 h-6 text-emerald-700" />
                            <span className="text-lg font-medium text-gray-800">Careers</span>
                          </div>
                        </div>
                      </Link>

                      {/* Contact Us (Flattened from Connect) */}
                      <Link to="/contact" onClick={onClose} className="block w-full text-left">
                        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-emerald-700" />
                            <span className="text-lg font-medium text-gray-800">Contact Us</span>
                          </div>
                        </div>
                      </Link>



                      {/* FAQ (Flattened from Connect) */}
                      <Link to="/faq" onClick={onClose} className="block w-full text-left">
                        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-4">
                            <Smile className="w-6 h-6 text-emerald-700" />
                            <span className="text-lg font-medium text-gray-800">FAQ</span>
                          </div>
                        </div>
                      </Link>
                    </nav>
                  </motion.div>
                )}
                {activeSubMenu && activeSubMenuData && (
                  <motion.div key={activeSubMenu} className="absolute w-full h-full flex flex-col" variants={subMenuVariants} initial="enter" animate="enter" exit="exit">
                    <div className="flex-shrink-0 p-2 border-b border-gray-200">
                      <button onClick={() => setActiveSubMenu(null)} className="flex items-center gap-2 p-2 w-full font-semibold text-emerald-700 hover:bg-gray-100 rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                        {activeSubMenuTitle}
                      </button>
                    </div>
                    <nav className="flex-1 overflow-y-auto p-4">
                      {'subMenu' in activeSubMenuData ? (
                        (activeSubMenuData as any).subMenu.map((item: any) => {
                          const Icon = item.icon;
                          return (
                            <Link key={item.name} to={item.path} onClick={onClose} className="block">
                              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                                <Icon className="w-6 h-6 text-emerald-700" />
                                <span className="text-lg font-medium text-gray-800">{item.name}</span>
                              </div>
                            </Link>
                          );
                        })
                      ) : 'sections' in activeSubMenuData ? (
                        (activeSubMenuData as any).sections.map((section: any) => (
                          <div key={section.title} className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-4">{section.title}</h3>
                            {section.links.map((link: any) => {
                              const Icon = link.icon;
                              const LinkComponent = link.path.includes('#') ? HashLink : Link;
                              return (
                                <LinkComponent key={link.name} to={link.path} onClick={onClose} className="block">
                                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                                    <Icon className="w-6 h-6 text-emerald-700" />
                                    <div>
                                      <span className="text-lg font-medium text-gray-800">{link.name}</span>
                                      <p className="text-sm text-gray-500">{link.description}</p>
                                    </div>
                                  </div>
                                </LinkComponent>
                              );
                            })}
                          </div>
                        ))
                      ) : null}
                    </nav>
                  </motion.div>
                )}
                {activeSubMenu === 'call' && (
                  <motion.div key="call" className="absolute w-full h-full flex flex-col" variants={subMenuVariants} initial="enter" animate="enter" exit="exit">
                    <div className="flex-shrink-0 p-2 border-b border-gray-200">
                      <button onClick={() => setActiveSubMenu(null)} className="flex items-center gap-2 p-2 w-full font-semibold text-emerald-700 hover:bg-gray-100 rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                        Call Now
                      </button>
                    </div>
                    <nav className="flex-1 overflow-y-auto p-4">
                      <a href="tel:301-500-0809" className="block w-full mb-4 px-4 py-4 rounded-lg bg-emerald-600 text-white font-semibold text-lg text-center shadow hover:bg-emerald-700 transition-colors">(301) 500-0809</a>
                      <a href="tel:201-885-9225" className="block w-full px-4 py-4 rounded-lg bg-emerald-600 text-white font-semibold text-lg text-center shadow hover:bg-emerald-700 transition-colors">(201) 885-9225</a>
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex-shrink-0 p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col items-center space-y-3">
                <button onClick={() => setActiveSubMenu('call')} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 font-semibold"><Phone className="w-5 h-5" /> Call Now</button>
                <Link to="/schedule-a-tour" onClick={onClose} className="flex items-center justify-center gap-2 py-3 px-6 bg-white text-gray-800 rounded-lg hover:bg-gray-100 border border-gray-300 font-semibold"><Calendar className="w-5 h-5" /> Schedule a Tour</Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;