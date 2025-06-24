import React from 'react';
import { Heart, Home, Utensils, Activity, Shield, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Personal Care',
      description: 'Assistance with daily activities including bathing, dressing, grooming, and medication management.',
      image: 'https://images.pexels.com/photos/7551470/pexels-photo-7551470.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Home,
      title: 'Residential Care',
      description: 'Comfortable, home-like accommodations with 24/7 supervision and support.',
      image: 'https://images.pexels.com/photos/7551421/pexels-photo-7551421.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Utensils,
      title: 'Nutrition Services',
      description: 'Nutritious, delicious meals prepared by our culinary team to meet dietary needs.',
      image: 'https://images.pexels.com/photos/7551608/pexels-photo-7551608.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Activity,
      title: 'Recreation & Wellness',
      description: 'Engaging activities, exercise programs, and social events to promote physical and mental well-being.',
      image: 'https://images.pexels.com/photos/7551613/pexels-photo-7551613.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Shield,
      title: 'Medical Care',
      description: 'On-site medical services, medication management, and coordination with healthcare providers.',
      image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Users,
      title: 'Family Support',
      description: 'Regular communication, family meetings, and support services for loved ones.',
      image: 'https://images.pexels.com/photos/7551675/pexels-photo-7551675.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            We provide a full range of senior care services designed to meet the unique 
            needs of each resident while promoting independence and quality of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full">
                    <service.icon className="text-emerald-700" size={24} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
                <button className="mt-4 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;