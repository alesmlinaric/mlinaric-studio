import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ConceptBuilder from './pages/ConceptBuilder';
import SmallBusiness from './pages/SmallBusiness';
import NotFound from './pages/NotFound';
import CookieConsent from './components/CookieConsent';
import CookiePolicy from './pages/CookiePolicy';
import { hasAcceptedCookies } from './lib/cookieConsent';
import { initAnalytics, trackEvent } from './lib/analytics';

if (hasAcceptedCookies()) {
  initAnalytics();
}

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  if (scrollPercent > 25 && !window.scroll25) {
    window.scroll25 = true;
    trackEvent('scroll_25');
  }
  if (scrollPercent > 50 && !window.scroll50) {
    window.scroll50 = true;
    trackEvent('scroll_50');
  }
  if (scrollPercent > 75 && !window.scroll75) {
    window.scroll75 = true;
    trackEvent('scroll_75');
  }
  if (scrollPercent > 95 && !window.scroll100) {
    window.scroll100 = true;
    trackEvent('scroll_100');
  }
});

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />

        <Routes>
          {/* English (default) */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/concept" element={<ConceptBuilder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/small-business" element={<SmallBusiness />} />

          {/* Slovenian */}
          <Route path="/sl" element={<Home />} />
          <Route path="/sl/projects" element={<Projects />} />
          <Route path="/sl/project/:id" element={<ProjectDetail />} />
          <Route path="/sl/about" element={<About />} />
          <Route path="/sl/services" element={<Services />} />
          <Route path="/sl/contact" element={<Contact />} />
          <Route path="/sl/cookies" element={<CookiePolicy />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
