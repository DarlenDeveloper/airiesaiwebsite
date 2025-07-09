import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to smoothly scroll to section when clicking navigation links
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine active section
      const sections = ['hero', 'features', 'business-impact', 'team', 'faq', 'pricing'];
      const scrollPosition = window.scrollY + 200; // Offset to trigger earlier
      
      // At top of page
      if (scrollPosition < 300) {
        setActiveSection('hero');
        return;
      }
      
      // Check each section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    // Set up scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection]);
  
  // Handle hash links on page load
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the '#'
      scrollToSection(sectionId);
    }
  }, [location.hash, scrollToSection]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/75 backdrop-blur-sm'}`}>
      <div className="container-custom py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 mr-2 rounded-lg flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-rotate-6">
                <img src="/images/logo.jpg" alt="AIRIES AI Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">AIRIES</span>
                <span className="text-xs text-gray-700 tracking-wider -mt-1">AI CUSTOMER CARE</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="flex md:flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-md border border-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NavLink label="Features" isActive={activeSection === 'features'} onClick={() => scrollToSection('features')} />
            <NavLink label="Business Impact" isActive={activeSection === 'business-impact'} onClick={() => scrollToSection('business-impact')} />
            <NavLink label="Our Team" isActive={activeSection === 'team'} onClick={() => scrollToSection('team')} />
            <NavLink label="FAQ" isActive={activeSection === 'faq'} onClick={() => scrollToSection('faq')} />
            <NavLink label="Pricing" isActive={activeSection === 'pricing'} onClick={() => scrollToSection('pricing')} />
          </motion.nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://calendly.com/hello-darlendev/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-primary to-purple-600 text-white font-medium px-6 py-2 rounded-full transition-all shadow-md hover:shadow-lg border border-primary/20 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Schedule Meeting
              </span>
              <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </motion.a>
            
            <motion.a
              href="https://calendly.com/hello-darlendev/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </span>
              <div className="absolute inset-0 bg-black/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`${scrolled ? 'text-gray-700' : 'text-primary'} hover:text-primary focus:outline-none p-2 rounded-full hover:bg-white/20 transition-colors`}
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              <MobileNavLink label="Features" onClick={() => { scrollToSection('features'); setIsMenuOpen(false); }} isActive={activeSection === 'features'} />
              <MobileNavLink label="Business Impact" onClick={() => { scrollToSection('business-impact'); setIsMenuOpen(false); }} isActive={activeSection === 'business-impact'} />
              <MobileNavLink label="Our Team" onClick={() => { scrollToSection('team'); setIsMenuOpen(false); }} isActive={activeSection === 'team'} />
              <MobileNavLink label="FAQ" onClick={() => { scrollToSection('faq'); setIsMenuOpen(false); }} isActive={activeSection === 'faq'} />
              <MobileNavLink label="Pricing" onClick={() => { scrollToSection('pricing'); setIsMenuOpen(false); }} isActive={activeSection === 'pricing'} />
              <div className="border-t border-gray-200 my-2 pt-2"></div>
              <motion.a 
                href="https://calendly.com/hello-darlendev/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-primary font-medium py-3 px-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-center flex items-center justify-center space-x-2 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Schedule Meeting
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </motion.a>
              
              <motion.a 
                href="https://calendly.com/hello-darlendev/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-3 px-4 rounded-lg font-medium transition-colors text-center flex items-center justify-center space-x-2 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </span>
                <div className="absolute inset-0 bg-black/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

// Button-like Nav Link Component for Desktop
const NavLink = ({ label, isActive, onClick }: { label: string; isActive?: boolean; onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-medium transition-all relative ${
        isActive
          ? 'bg-gradient-to-r from-primary to-purple-600 text-white' 
          : isHovered 
            ? 'bg-primary/10 text-primary' 
            : 'text-gray-700 hover:bg-gray-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{label}</span>
      {isActive && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-full w-full rounded-full -z-10 opacity-100"
          layoutId="activeIndicator"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

// Mobile Nav Link
const MobileNavLink = ({ label, onClick, isActive }: { label: string; onClick: () => void; isActive?: boolean }) => {
  return (
    <motion.button 
      className={`w-full font-medium py-3 px-4 rounded-lg transition-all flex items-center relative ${
        isActive 
          ? 'bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary' 
          : 'text-gray-700 hover:text-primary hover:bg-gray-100'
      }`}
      onClick={onClick}
      whileHover={{ x: 3 }}
      whileTap={{ scale: 0.98 }}
    >
      {isActive && (
        <motion.div 
          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-600 rounded-r-md"
          layoutId="mobileActiveIndicator"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
      <span className="ml-1">{label}</span>
    </motion.button>
  );
};

export default Header;
