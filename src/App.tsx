import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileSocialBar from './components/MobileSocialBar';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';
import LoadingSpinner from './components/LoadingSpinner';
import OrganizationSchema from './components/OrganizationSchema';
import { localBusinessSchema } from './data/structuredData';

// Lazy load page components
const Article = React.lazy(() => import('./components/Article'));
const AboutUsPage = React.lazy(() => import('./components/AboutUsPage'));
const FaqPage = React.lazy(() => import('./components/FaqPage'));
const ScheduleTourPage = React.lazy(() => import('./components/ScheduleTourPage'));
const AllServicesPage = React.lazy(() => import('./components/AllServicesPage'));
const ContactPage = React.lazy(() => import('./components/ContactPage'));
const FacilityPage = React.lazy(() => import('./components/FacilityPage'));
const CareersPage = React.lazy(() => import('./components/CareersPage'));
const RehabilitationPage = React.lazy(() => import('./components/RehabilitationPage'));
const MemoryCarePage = React.lazy(() => import('./components/MemoryCarePage'));
const FamilyPartnershipPage = React.lazy(() => import('./components/FamilyPartnershipPage'));
const HealthAndSafetyPage = React.lazy(() => import('./components/HealthAndSafetyPage'));
const ResidentialCarePage = React.lazy(() => import('./components/ResidentialCarePage'));
const PrivacyPolicyPage = React.lazy(() => import('./components/PrivacyPolicyPage'));
const TermsOfServicePage = React.lazy(() => import('./components/TermsOfServicePage'));
const RecreationPage = React.lazy(() => import('./components/RecreationPage'));
const PersonalAssistancePage = React.lazy(() => import('./components/PersonalAssistancePage'));
const DietaryPage = React.lazy(() => import('./components/DietaryPage'));
const VirtualTourPage = React.lazy(() => import('./components/VirtualTourPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-warm-50">
    <LoadingSpinner />
  </div>
);

function App() {
  const location = useLocation();
  const isProposal = location.pathname === '/proposal';

  return (
    <HelmetProvider>
      <OrganizationSchema />
      <ScrollToTop />
      <div className="min-h-screen">
        {!isProposal && <Header />}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={
              <>
                <SEOHead
                  title="Columbia Care Home – Care that Feels Like Coming Home"
                  description="Columbia Care Home provides heartfelt, professional care in a warm, home-like environment. Discover senior care that truly feels like family in Columbia, Maryland."
                  keywords="assisted living Columbia MD, senior care Maryland, memory care Columbia, physical therapy Columbia, elder care Maryland, senior living Columbia"
                  structuredData={localBusinessSchema}
                />
                <div id="home" className="scroll-mt-24">
                  <Hero />
                </div>
                <div id="about" className="scroll-mt-24">
                  <About />
                </div>
                <div id="services" className="scroll-mt-24">
                  <Services />
                </div>
                <div id="faq" className="scroll-mt-24">
                  <Faq />
                </div>
                <div id="contact" className="scroll-mt-24">
                  <Contact />
                </div>
              </>
            } />
            <Route path="/article" element={<Article />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/faq" element={<FaqPage />} />
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
          </Routes>
        </Suspense>
        {!isProposal && <Footer />}
        {!isProposal && <MobileSocialBar />}
      </div>
    </HelmetProvider>
  );
}

export default App;
