import { Link } from 'react-router-dom';
import { FiLinkedin, FiX, FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center text-2xl font-bold mb-4">
              <div className="w-8 h-8 mr-2 rounded-md overflow-hidden">
                 <img src="/images/logo.jpg" alt="AIRIES AI Logo" className="w-full h-full object-cover" />
              </div>
              <span>AIRIES</span>
            </Link>
            <p className="text-gray-300 mt-4">
              AI-powered customer care agents for businesses, delivering exceptional service through intelligent automation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-accent" aria-label="LinkedIn">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/airiestech" className="text-white hover:text-accent" aria-label="X (formerly Twitter)">
                <FiX className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent" aria-label="Facebook">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent" aria-label="Instagram">
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <a href="https://calendly.com/hello-darlendev/30min" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                team@airiesai.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-gray-300 hover:text-white">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-gray-300 hover:text-white">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <a href="https://calendly.com/hello-darlendev/30min" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} AIRIES. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 