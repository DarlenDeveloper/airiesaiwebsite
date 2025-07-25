import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import BusinessImpactSection from './components/HowItWorksSection'
import TeamSection from './components/TeamSection'
import FAQSection from './components/FAQSection'
import PricingSection from './components/PricingSection'
import FeatureComparisonTable from './components/FeatureComparisonTable'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import DashboardShowcase from './components/DashboardShowcase'
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const About = lazy(() => import('./pages/About'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
import './App.css'

// Animated particles component
const Particles = () => {
  const particles = Array.from({ length: 6 }).map((_, index) => ({
    id: index,
    size: Math.random() * 60 + 40,
    left: `${Math.random() * 95}%`,
    top: `${Math.random() * 95}%`,
    delay: Math.random() * 5
  }));

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
            top: particle.top,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

// ScrollToTop component for route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function VapiWidgetPortal() {
  // Ensure the script is loaded only once
  useEffect(() => {
    const scriptId = 'vapi-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
      script.async = true;
      script.type = 'text/javascript';
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);
  return createPortal(
    <vapi-widget mode="voice" theme="dark" base-color="#0019ff" accent-color="#2b14b8" button-base-color="#000000" button-accent-color="#ffffff" radius="large" size="tiny" position="bottom-left" main-label="Powered By AIRIES AI" start-button-text="Start" end-button-text="End Call" require-consent="false" local-storage-key="vapi_widget_consent" show-transcript="true" public-key="88fae95e-5b60-494f-ad99-20160207563c" assistant-id="3f56a14c-65b8-4673-8c3e-fea5e32af384"></vapi-widget>,
    document.body
  );
}

function App() {
  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50
    },
    in: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -50
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <Router>
      <div className="app-container">
        <div className="gradient-background">
          <Particles />
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
              <Route path="/" element={
                <>
                  <Header />
                  <motion.main
                    key="home"
                    initial="initial"
                    animate="in"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="relative z-10"
                  >
                    <div id="hero">
                      <HeroSection />
                    </div>
                    <div id="features">
                      <FeaturesSection />
                    </div>
                    <div id="business-impact">
                      <BusinessImpactSection />
                    </div>
                    <div id="team">
                      <TeamSection />
                    </div>
                    <div id="faq">
                      <FAQSection />
                    </div>
                    <div id="pricing">
                      <PricingSection />
                      <FeatureComparisonTable />
                    </div>
                    <div id="dashboard">
                      <DashboardShowcase />
                    </div>
                    <div id="cta">
                      <CTASection />
                    </div>
                  </motion.main>
                  <Footer />
                </>
              } />
              <Route path="/terms" element={
                <>
                  <Header />
                  <motion.div
                    key="terms"
                    initial="initial"
                    animate="in"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="relative z-10"
                  >
                    <TermsOfService />
                  </motion.div>
                  <Footer />
                </>
              } />
              <Route path="/privacy" element={
                <>
                  <Header />
                  <motion.div
                    key="privacy"
                    initial="initial"
                    animate="in"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="relative z-10"
                  >
                    <PrivacyPolicy />
                  </motion.div>
                  <Footer />
                </>
              } />
              <Route path="/about" element={
                <>
                  <Header />
                  <motion.div
                    key="about"
                    initial="initial"
                    animate="in"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="relative z-10"
                  >
                    <About />
                  </motion.div>
                  <Footer />
                </>
              } />
              <Route path="/careers" element={
                <>
                  <Header />
                  <motion.div
                    key="careers"
                    initial="initial"
                    animate="in"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="relative z-10"
                  >
                    <Careers />
                  </motion.div>
                  <Footer />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <Header />
                  <motion.div
                    key="contact"
                    initial="initial"
                    animate="in"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="relative z-10"
                  >
                    <Contact />
                  </motion.div>
                  <Footer />
                </>
              } />
              <Route path="/case-studies" element={
                <>
                  <Header />
                  <motion.div
                    key="case-studies"
                    initial="initial"
                    animate="in"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="relative z-10"
                  >
                    <CaseStudies />
                  </motion.div>
                  <Footer />
                </>
              } />
              <Route path="/dashboard/*" element={
                <motion.div
                  key="dashboard"
                  initial="initial"
                  animate="in"
                  exit="exit"
                  variants={pageVariants}
                  transition={pageTransition}
                  className="relative z-10"
                >
                  <Dashboard />
                </motion.div>
              } />
            </Routes>
            </Suspense>
          </AnimatePresence>
          {/* <FloatingCtaButton /> Removed as per user request */}
        </div>
      </div>
      <VapiWidgetPortal />
    </Router>
  )
}

export default App
