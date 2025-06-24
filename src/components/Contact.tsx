import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Ready to learn more about our care services? We're here to answer your questions 
            and help you find the perfect care solution for your loved one.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Phone className="text-emerald-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Phone</h4>
                    <p className="text-stone-600">(555) 123-4567</p>
                    <p className="text-sm text-stone-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Mail className="text-emerald-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Email</h4>
                    <p className="text-stone-600">info@columbiacarehome.com</p>
                    <p className="text-sm text-stone-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-emerald-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Address</h4>
                    <p className="text-stone-600">123 Care Street<br />Columbia, SC 29201</p>
                    <p className="text-sm text-stone-500">Easy parking available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Clock className="text-emerald-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Visiting Hours</h4>
                    <p className="text-stone-600">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                    <p className="text-sm text-stone-500">Tours available by appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-stone-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-stone-500">
                <MapPin size={48} className="mx-auto mb-2" />
                <p>Interactive Map</p>
                <p className="text-sm">123 Care Street, Columbia, SC</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-stone-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-stone-800 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your care needs or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-700 text-white py-4 px-6 rounded-lg hover:bg-emerald-800 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;