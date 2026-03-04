
import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, Car,
  Send,
  AlertCircle, Users, Shield, Accessibility,
  HeadphonesIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from './SEOHead';


// Access Key for Web3Forms removed - using FormSubmit.co

interface InfoCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}



// Info Card Component
const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, children, className = "" }) => (
  <div className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 ${className}`}>
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-emerald-700" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="text-gray-600 space-y-1">{children}</div>
      </div>
    </div>
  </div>
);

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // FormSubmit.co AJAX Endpoint
      const response = await fetch('https://formsubmit.co/ajax/columbiacarehomes@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact: ${formData.subject || 'General Inquiry'}`,
          _captcha: "false"
        })
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('Submission failed:', result);
        setErrorMessage(result.message || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Something went wrong. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Contact Us | Columbia Care Home"
        description="Get in touch with Columbia Care Home. Call us, email us, or schedule a visit. We are here to answer your questions about our senior care services."
        keywords="contact columbia care, senior living contact, schedule tour, nursing home maryland, elderly care inquiry"
        image="https://www.columbiacarehome.com/og-contact.jpg"
        url="/contact"
      />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We're here to answer your questions and help you take the next step in finding quality care for your loved one.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Primary Contact */}
            <InfoCard icon={Phone} title="Call Us">
              <div className="flex flex-col gap-1">
                <a href="tel:301-500-0809" className="text-emerald-700 font-semibold hover:underline">(301) 500-0809</a>
                <a href="tel:201-885-9225" className="text-emerald-700 font-semibold hover:underline">(201) 885-9225</a>
              </div>
              <p className="text-sm">Office hours: Mon-Fri 8AM-6PM</p>
            </InfoCard>

            <InfoCard icon={Mail} title="Email Us">
              <p className="font-semibold text-emerald-700">columbiacarehomes@gmail.com</p>
              <p className="text-sm">Response within 24 hours</p>
            </InfoCard>

            <InfoCard icon={MapPin} title="Visit Us">
              <p className="font-semibold">10610 Hickory Point Lane</p>
              <p>Columbia, MD 21044</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=10610+Hickory+Point+Lane,+Columbia,+MD+21044"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 text-sm inline-flex items-center gap-1 mt-2"
              >
                Get directions →
              </a>
            </InfoCard>

            {/* Hours of Operation */}
            <InfoCard icon={Clock} title="Hours of Operation">
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
              </div>
              <p className="text-sm text-amber-600 mt-3 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                24/7 emergency support available
              </p>
            </InfoCard>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-emerald-600 hover:text-emerald-700 font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="tour">Schedule a Tour</option>
                        <option value="info">General Information</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Please tell us how we can help you..."
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-2 disabled:bg-emerald-400 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information Sections */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard icon={Car} title="Parking & Transportation">
            <p>Free visitor parking available</p>
            <p>Handicap accessible spaces</p>
            <p>Public transit nearby</p>
          </InfoCard>

          <InfoCard icon={Accessibility} title="Accessibility">
            <p>Wheelchair accessible</p>
            <p>Elevator access to all floors</p>
            <p>ADA compliant facilities</p>
          </InfoCard>

          <InfoCard icon={Users} title="Family Support">
            <p>Family counseling available</p>
            <p>Support groups monthly</p>
            <p>Care planning meetings</p>
          </InfoCard>

          <InfoCard icon={Shield} title="Safety & Security">
            <p>24/7 secured facility</p>
            <p>Visitor sign-in required</p>
            <p>Emergency response team</p>
          </InfoCard>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=10610+Hickory+Point+Lane,+Columbia,+MD+21044"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
            <div className="p-6 bg-gray-50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Columbia Care Home</h3>
                  <p className="text-gray-600">10610 Hickory Point Lane, Columbia, MD 21044</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <HeadphonesIcon className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-red-900 mb-2">24/7 Emergency Support</h3>
              <p className="text-red-700 mb-3">
                For urgent matters concerning current residents, our emergency support team is available around the clock.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="tel:201-885-9225" className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700">(201) 885-9225</a>
                <a href="tel:301-500-0809" className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700">(301) 500-0809</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
