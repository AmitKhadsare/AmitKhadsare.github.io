import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileSocialBar from './components/MobileSocialBar';
import Article from './components/Article';
import ScrollToTop from './components/ScrollToTop';

function Home() {
  return (
    <>
      <Carousel />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/columbia-care-home">
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
        </Routes>
        <Footer />
        <MobileSocialBar />
      </div>
    </BrowserRouter>
  );
}

export default App;