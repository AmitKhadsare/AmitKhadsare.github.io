import React from 'react';

const MobileSocialBar = () => {
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
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-emerald-800 shadow-lg z-40">
      <div className="flex justify-center items-center py-3">
        <div className="flex space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <img 
                src={social.icon} 
                alt={social.name} 
                className="w-5 h-5 filter brightness-0 invert"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileSocialBar;