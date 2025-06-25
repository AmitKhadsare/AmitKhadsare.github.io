import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
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
        </Routes>
        <Footer />
        <MobileSocialBar />
      </div>
    </BrowserRouter>
  );
}

export default App;