import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { X, Phone, Calendar, Home, ArrowLeft, ChevronRight } from 'lucide-react';
import { menuData } from '../data/navigationData';
import logo from '../assets/logo.avif';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<keyof typeof menuData | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setActiveSubMenu(null), 250);
    }
  }, [isOpen]);

  const activeSubMenuData = activeSubMenu ? menuData[activeSubMenu] : null;
  const activeSubMenuTitle = activeSubMenu ? menuData[activeSubMenu].title : '';

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
                <img src={logo} alt="Columbia Care Home" className="h-16 w-auto" />
              </HashLink>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors"><X className="w-6 h-6 text-gray-600" /></button>
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
                      {Object.keys(menuData).map((key) => {
                        const item = menuData[key as keyof typeof menuData];
                        const Icon = item.icon;
                        return (
                          <button key={item.title} onClick={() => setActiveSubMenu(key as keyof typeof menuData)} className="w-full text-left">
                            <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 transition-colors">
                              <div className="flex items-center gap-4"><Icon className="w-6 h-6 text-emerald-700" /><span className="text-lg font-medium text-gray-800">{item.title}</span></div>
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            </div>
                          </button>
                        );
                      })}
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
              </AnimatePresence>
            </div>
            <div className="flex-shrink-0 p-4 space-y-3 border-t border-gray-200 bg-gray-50">
              <a href="tel:555-123-4567" className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-semibold"><Phone className="w-5 h-5" /> Call Now</a>
              <Link to="/schedule-a-tour" onClick={onClose} className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-gray-800 rounded-lg hover:bg-gray-100 border border-gray-300 font-semibold"><Calendar className="w-5 h-5" /> Schedule a Tour</Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;