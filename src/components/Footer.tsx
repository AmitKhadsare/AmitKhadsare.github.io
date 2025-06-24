import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/columbiacarehome',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/columbiacarehome',
      icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/columbiacarehome',
      icon: 'https://cdn-icons-png.flaticon.com/512/733/733558.png'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/columbiacarehome',
      icon: 'https://cdn-icons-png.flaticon.com/512/733/733561.png'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@columbiacarehome',
      icon: 'https://cdn-icons-png.flaticon.com/512/733/733646.png'
    }
  ];

  return (
    <footer className="bg-stone-900 text-white pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-full flex items-center justify-center">
                <div className="text-white font-bold text-lg">CC</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Columbia Care Home</h3>
                <p className="text-sm text-stone-400">Compassionate Senior Care</p>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Providing exceptional senior care with dignity, respect, and personalized 
              attention for over 25 years in Columbia, South Carolina.
            </p>
            
            {/* Social Media Links - Desktop */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-all duration-300 transform hover:scale-110"
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      className={`w-5 h-5 ${social.name === 'Facebook' ? 'filter brightness-0 invert' : 'filter brightness-0 invert'}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-stone-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-stone-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-stone-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#care" className="text-stone-400 hover:text-white transition-colors">Care Plans</a></li>
              <li><a href="#contact" className="text-stone-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Personal Care</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Medical Care</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Residential Care</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Recreation & Wellness</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Family Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-emerald-400" />
                <span className="text-stone-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-emerald-400" />
                <span className="text-stone-400">info@columbiacarehome.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-emerald-400 mt-1" />
                <span className="text-stone-400">123 Care Street<br />Columbia, SC 29201</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm">
              © 2024 Columbia Care Home. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-stone-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-stone-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-stone-400 hover:text-white text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;