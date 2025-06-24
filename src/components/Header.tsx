import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-emerald-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(555) 123-4567</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} />
            <span>123 Care Street, Columbia, SC 29201</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-stone-50 shadow-lg sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Only */}
            <div className="flex items-center justify-center" style={{ width: '280px', height: '80px' }}>
              <HashLink smooth to="/#home" className="flex items-center w-full h-full">
                <img
                  src={logo}
                  alt="Columbia Care Home Logo"
                  className="max-w-full max-h-full object-contain"
                  style={{ width: '100%', height: '100%' }}
                />
              </HashLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <HashLink smooth to="/#home" className="text-stone-700 hover:text-emerald-700 font-medium transition-colors">Home</HashLink>
              <HashLink smooth to="/#about" className="text-stone-700 hover:text-emerald-700 font-medium transition-colors">About Us</HashLink>
              <HashLink smooth to="/#services" className="text-stone-700 hover:text-emerald-700 font-medium transition-colors">Services</HashLink>
              <HashLink smooth to="/#care" className="text-stone-700 hover:text-emerald-700 font-medium transition-colors">Care Plans</HashLink>
              <HashLink smooth to="/#contact" className="text-stone-700 hover:text-emerald-700 font-medium transition-colors">Contact</HashLink>
              <Link to="/article" className="text-stone-700 hover:text-emerald-700 font-medium transition-colors">Article</Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition-colors font-medium">
                Schedule Visit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="fixed inset-0 z-50">
                {/* Overlay */}
                <div 
                  className="fixed inset-0 bg-black bg-opacity-50"
                  onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Menu */}
                <div className="fixed right-0 top-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto" style={{ maxHeight: '100vh' }}>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <HashLink smooth to="/#home" className="flex items-center w-full h-full" onClick={() => setIsMenuOpen(false)}>
                        <img
                          src={logo}
                          alt="Columbia Care Home Logo"
                          className="max-w-full max-h-full object-contain"
                          style={{ width: '150px', height: '60px' }}
                        />
                      </HashLink>
                      <button 
                        className="text-emerald-700 hover:text-emerald-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <X size={24} />
                      </button>
                    </div>
                  </div>
                  <nav className="space-y-4 p-4">
                    <div className="border-t border-white pt-4">
                      <HashLink 
                        smooth
                        to="/#home"
                        className="block w-full px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-600 hover:text-white font-medium text-lg rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </HashLink>
                    </div>
                    <div>
                      <HashLink 
                        smooth
                        to="/#about"
                        className="block w-full px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-600 hover:text-white font-medium text-lg rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About Us
                      </HashLink>
                    </div>
                    <div>
                      <HashLink 
                        smooth
                        to="/#services"
                        className="block w-full px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-600 hover:text-white font-medium text-lg rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Services
                      </HashLink>
                    </div>
                    <div>
                      <HashLink 
                        smooth
                        to="/#care"
                        className="block w-full px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-600 hover:text-white font-medium text-lg rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Care Plans
                      </HashLink>
                    </div>
                    <div>
                      <HashLink 
                        smooth
                        to="/#contact"
                        className="block w-full px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-600 hover:text-white font-medium text-lg rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact
                      </HashLink>
                    </div>
                    <div>
                      <Link 
                        to="/article"
                        className="block w-full px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-600 hover:text-white font-medium text-lg rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Article
                      </Link>
                    </div>
                    <div className="mt-8">
                      <button 
                        className="w-full px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-600 hover:text-white font-medium text-lg rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Schedule Visit
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            )}
        </div>
      </header>
    </>
  );
};

export default Header;