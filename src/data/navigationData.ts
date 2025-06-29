import { Home, Users, Shield, Mail, BookOpen, Building2, Briefcase, Heart, Utensils, Activity, Dumbbell, BrainCircuit, Grid3X3, Smile, Calendar } from 'lucide-react';

export const menuData = {
  services: {
    title: 'Our Services',
    icon: Shield,
    path: '/services',
    sections: [
      {
        title: 'Core Care Services',
        links: [
          { icon: Heart, name: 'Dignified Personal Assistance', description: 'Respectful support for daily activities.', path: '/personal-assistance' },
          { icon: Home, name: 'Residential Care', description: 'A safe, comfortable, and homelike environment.', path: '/residential-care' },
          { icon: Utensils, name: 'Dietary & Meal Services', description: 'Nutritious, dietician-approved meals.', path: '/dietary' },
        ]
      },
      {
        title: 'Specialized & Health Services',
        links: [
          { icon: Dumbbell, name: 'Rehabilitation & Therapy', description: 'On-site physical therapy to restore mobility.', path: '/rehabilitation' },
          { icon: BrainCircuit, name: 'Specialized Memory Care', description: 'Secure, supportive care for dementia.', path: '/memory-care' },
          { icon: Shield, name: 'Proactive Health & Safety', description: '24/7 medical oversight and safety protocols.', path: '/health-safety' },
        ]
      },
      {
        title: 'Community & Wellness',
        links: [
          { icon: Activity, name: 'Therapeutic Recreation', description: 'Engaging activities for mind and body.', path: '/recreation' },
          { icon: Users, name: 'Partnership with Families', description: 'Transparent communication and support.', path: '/family-partnership' },
          { icon: Grid3X3, name: 'View All Services', description: 'Explore our complete range of care options.', path: '/services' },
        ]
      }
    ]
  },
  aboutUs: {
    title: 'About Us',
    icon: Users,
    path: '/about-us',
    sections: [
      {
        title: 'About Columbia Care Home',
        links: [
          { icon: BookOpen, name: 'Our Story', description: 'Learn about our mission and values.', path: '/about-us' },
          { icon: Building2, name: 'Our Facility', description: 'Explore our comfortable and safe environment.', path: '/facility' },
        ]
      },
      {
        title: 'Join Our Community',
        links: [
          { icon: Briefcase, name: 'Careers', description: 'Join our team of dedicated caregivers.', path: '/careers' },
        ]
      }
    ]
  },
  connect: {
      title: 'Connect',
      icon: Mail,
      subMenu: [
        { name: 'Contact Us', path: '/contact', icon: Mail },
        { name: 'Schedule a Tour', path: '/schedule-a-tour', icon: Calendar },
        { name: 'FAQ', path: '/faq', icon: Smile },
      ]
  }
};