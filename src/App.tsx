import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileSocialBar from './components/MobileSocialBar';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';
import FeaturedInsights from './components/FeaturedInsights';
import AwardsRecognition from './components/AwardsRecognition';

import AboutUsPage from './components/AboutUsPage';
import ScheduleTourPage from './components/ScheduleTourPage';
import AllServicesPage from './components/AllServicesPage';
import ContactPage from './components/ContactPage';
import FacilityPage from './components/FacilityPage';
import CareersPage from './components/CareersPage';
import RehabilitationPage from './components/RehabilitationPage';
import MemoryCarePage from './components/MemoryCarePage';
import FamilyPartnershipPage from './components/FamilyPartnershipPage';
import HealthAndSafetyPage from './components/HealthAndSafetyPage';
import ResidentialCarePage from './components/ResidentialCarePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import RecreationPage from './components/RecreationPage';
import PersonalAssistancePage from './components/PersonalAssistancePage';
import DietaryPage from './components/DietaryPage';
import VirtualTourPage from './components/VirtualTourPage';
import BlogIndexPage from './components/BlogIndexPage';
import BlogPostPage from './components/BlogPostPage';
import WhatFamiliesSayPage from './components/WhatFamiliesSayPage';
import FAQPage from './components/FAQPage';
import NotFoundPage from './components/NotFoundPage';


function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <SEOHead
                title="Physical Therapist-Led Assisted Living in Columbia, MD | Columbia Care Home"
                description="Columbia Care Home is a physical therapist-led assisted living home offering personalized care in an intimate 8-resident residential setting. Our Level 3 licensed care model supports seniors with complex mobility and cognitive needs while maintaining dignity and independence."
              />
              <div id="home" className="scroll-mt-24">
                <Hero />
              </div>
              <Testimonials />
              <div id="about" className="scroll-mt-24">
                <About />
              </div>
              <div id="services" className="scroll-mt-24">
                <Services />
              </div>
              <div id="authority" className="scroll-mt-24">
                <FeaturedInsights />
              </div>
              <div id="contact" className="scroll-mt-24">
                <Contact />
              </div>
              <AwardsRecognition />
            </>
          } />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/schedule-a-tour" element={<ScheduleTourPage />} />
          <Route path="/services" element={<AllServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/facility" element={<FacilityPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/rehabilitation" element={<RehabilitationPage />} />
          <Route path="/memory-care" element={<MemoryCarePage />} />
          <Route path="/family-partnership" element={<FamilyPartnershipPage />} />
          <Route path="/health-safety" element={<HealthAndSafetyPage />} />
          <Route path="/residential-care" element={<ResidentialCarePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/recreation" element={<RecreationPage />} />
          <Route path="/personal-assistance" element={<PersonalAssistancePage />} />
          <Route path="/dietary" element={<DietaryPage />} />
          <Route path="/virtual-tour" element={<VirtualTourPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/family-stories" element={<WhatFamiliesSayPage />} />
          <Route path="/faq" element={<FAQPage />} />
          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <MobileSocialBar />
      </div>
    </>
  );
}

export default App;
