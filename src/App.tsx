import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileSocialBar from './components/MobileSocialBar';
import Article from './components/Article';
import ScrollToTop from './components/ScrollToTop';
import AboutUsPage from './components/AboutUsPage';
import FaqPage from './components/FaqPage';
import ScheduleTourPage from './components/ScheduleTourPage';
import AllServicesPage from './components/AllServicesPage';
import ContactPage from './components/ContactPage';
import FacilityPage from './components/FacilityPage';
import CareersPage from './components/CareersPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import RehabilitationPage from './components/RehabilitationPage';
import MemoryCarePage from './components/MemoryCarePage';
import FamilyPartnershipPage from './components/FamilyPartnershipPage';
import HealthAndSafetyPage from './components/HealthAndSafetyPage';
import ResidentialCarePage from './components/ResidentialCarePage';
import RecreationPage from './components/RecreationPage';
import PersonalAssistancePage from './components/PersonalAssistancePage';
import DietaryPage from './components/DietaryPage';

function App() {
  const location = useLocation();
  const isProposal = location.pathname === '/proposal';
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen">
        {!isProposal && <Header />}
        <Routes>
          <Route path="/" element={
            <>
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
        </Routes>
        {!isProposal && <Footer />}
        {!isProposal && <MobileSocialBar />}
      </div>
    </>
  );
}

export default App;