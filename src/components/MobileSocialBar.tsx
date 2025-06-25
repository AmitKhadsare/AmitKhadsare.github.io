import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: Facebook, color: 'bg-[#1877F2]' },
  { name: 'Twitter', url: 'https://twitter.com', icon: Twitter, color: 'bg-[#1DA1F2]' },
  { name: 'Instagram', url: 'https://instagram.com', icon: Instagram, color: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin, color: 'bg-[#0A66C2]' },
  { name: 'YouTube', url: 'https://youtube.com', icon: Youtube, color: 'bg-[#FF0000]' },
];

const MobileSocialBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#081e22] to-teal-950 shadow-lg z-40">
      <div className="flex justify-center items-center py-3">
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-12 h-12 rounded-full group transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
              aria-label={social.name}
            >
              <social.icon className="h-6 w-6 text-white transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileSocialBar; 