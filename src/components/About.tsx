import React from 'react';
import { Award, Users, Heart, Clock } from 'lucide-react';

const About = () => {
  // NEW stats reflecting a new facility's values and standards
  const stats = [
    { icon: Award, number: '100%', label: 'Certified Caregivers' },
    { icon: Users, number: 'Custom', label: 'Personalized Plans' },
    { icon: Heart, number: 'Our Pledge', label: 'Commitment to Dignity' },
    { icon: Clock, number: '24/7', label: 'Care Available' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image (no changes needed) */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7551421/pexels-photo-7551421.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Caring nurse with elderly patient in comfortable home setting"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content (updated for a new facility) */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-stone-800">
                About Columbia Care Home
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Welcome to Columbia Care Home, a new standard in senior care. Our facility was founded on the principle that modern care should be both professional and deeply compassionate. Our mission is to enhance the quality of life for our residents through personalized support in a welcoming, state-of-the-art environment.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                We believe every individual deserves to live with dignity and respect. Our team of dedicated, certified healthcare professionals was brought together by a shared vision: to create a warm, inclusive community where all residents feel valued, safe, and truly at home.
              </p>
            </div>

            {/* Stats Grid (updated with new data) */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-stone-50 rounded-xl hover:bg-emerald-50 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                    <stat.icon className="text-emerald-700" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-stone-800 mb-2">{stat.number}</div>
                  <div className="text-sm text-stone-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="bg-emerald-700 text-white px-8 py-3 rounded-full hover:bg-emerald-800 transition-colors font-semibold">
                Learn More About Our Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;