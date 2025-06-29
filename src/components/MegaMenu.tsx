import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Define the types for the props
interface MegaMenuLink {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
  path: string;
}

interface MegaMenuSection {
  title: string;
  links: MegaMenuLink[];
}

interface MegaMenuProps {
  sections: MegaMenuSection[];
  onLinkClick: () => void; // Function to close the menu on click
}

const MegaMenu: React.FC<MegaMenuProps> = ({ sections, onLinkClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-${sections.length > 2 ? '3' : '2'} gap-8 py-8`}>
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => {
                  const LinkComponent = link.path.includes('#') ? HashLink : Link;
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <LinkComponent 
                        to={link.path} 
                        className="group flex items-start gap-4"
                        onClick={onLinkClick}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                          <Icon className="w-5 h-5 text-emerald-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">{link.name}</p>
                          <p className="text-sm text-gray-500">{link.description}</p>
                        </div>
                      </LinkComponent>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;