import React from 'react';
import { motion, Variants } from 'framer-motion';
import familyImage from '../assets/family.png';

const services = [
  {
    title: 'Dignified Personal Assistance',
    description: 'We provide respectful, discreet support with daily activities like bathing, dressing, and medication reminders, empowering residents to live with confidence and grace.',
    image: 'https://images.pexels.com/photos/7551627/pexels-photo-7551627.jpeg'
  },
  {
    title: 'A Comforting, Homelike Haven',
    description: "Our residences offer the warmth and comfort of home, with the security of 24/7 supervision. It's a safe, nurturing space where residents truly belong.",
    image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg'
  },
  {
    title: 'Nourishing Body & Soul',
    description: 'Our culinary team prepares delicious, dietician-approved meals that cater to individual tastes and nutritional needs, making every meal a delightful experience.',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg'
  },
  {
    title: 'Vibrant Life & Wellness',
    description: 'We foster a lively community with engaging activities, gentle exercise, and social events designed to stimulate the mind, strengthen the body, and lift the spirit.',
    image: 'https://images.pexels.com/photos/5962036/pexels-photo-5962036.jpeg'
  },
  {
    title: 'Proactive Health & Safety',
    description: "With on-site medical oversight and close coordination with healthcare providers, we ensure each resident's health is managed proactively and compassionately.",
    image: 'https://images.pexels.com/photos/20897581/pexels-photo-20897581.jpeg'
  },
  {
    title: 'A Partnership with Families',
    description: "We believe in open communication, providing regular updates and dedicated support to families, making you a constant, welcome part of your loved one's journey.",
    image: familyImage
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Services = () => {
  return (
    <section id="services" className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-stone-800 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Our Comprehensive Services
          </motion.h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            We provide a full range of senior care services designed to meet the unique 
            needs of each resident while promoting independence and quality of life.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-stone-200/80 p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              variants={itemVariants}
            >
              <div className="mx-auto w-48 h-32 mb-6 overflow-hidden rounded-[50%] shadow-md">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-lora font-semibold text-stone-800 mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed font-nunito">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;