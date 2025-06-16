import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowRight, FiCheck, FiSend, FiClock, FiDollarSign, FiMessageCircle } from 'react-icons/fi';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setIsError(true);
      return;
    }
    setIsSubmitted(true);
    window.open('https://calendly.com/hello-darlendev/30min', '_blank');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const statsData = [
    {
      value: '95%',
      label: 'Cost Reduction',
      description: 'Companies using AIRIES AI report up to 95% reduction in customer support operational costs.',
      icon: <FiDollarSign className="h-6 w-6" />
    },
    {
      value: '24/7',
      label: 'Always Available',
      description: 'Our AI agents work around the clock, ensuring your customers always get instant support.',
      icon: <FiClock className="h-6 w-6" />
    },
    {
      value: '90%',
      label: 'Issue Resolution',
      description: 'AIRIES AI successfully resolves up to 90% of customer inquiries without human intervention.',
      icon: <FiMessageCircle className="h-6 w-6" />
    }
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-purple-900"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>
      
      {/* Wave Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 Q75,70 100,50 L100,100 L0,100 Z" fill="rgba(255,255,255,0.2)"></path>
        </svg>
      </div>
      
      <div className="container-custom relative z-10 text-white">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Pre-heading */}
          <motion.span 
            variants={itemVariants}
            className="inline-block py-1 px-3 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6"
          >
            Get Started Now
          </motion.span>
          
          {/* Main Heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Ready to Transform Your <span className="text-accent">Customer Support</span>?
          </motion.h2>
          
          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join hundreds of companies that are already using AIRIES AI to deliver exceptional customer care while reducing operational costs.
          </motion.p>
          
          {/* Email Capture Form */}
          <motion.div 
            variants={itemVariants}
            className="mb-12 max-w-xl mx-auto"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your business email"
                    className={`w-full py-4 px-6 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent transition-all ${isError ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {isError && (
                    <p className="absolute left-0 -bottom-6 text-red-300 text-sm">Please enter a valid email address</p>
                  )}
                </div>
                <motion.button 
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-colors flex-shrink-0 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Started</span>
                  <FiSend className="ml-2" />
                </motion.button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <FiCheck className="text-green-300 w-6 h-6" />
                  </div>
                  <p className="text-lg font-medium">Thank you! We'll contact you shortly.</p>
                </div>
              </motion.div>
            )}
            <p className="text-sm text-white/70 mt-3">We respect your privacy. No spam ever.</p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://orgdashboard.airiesai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-white/90 py-4 px-8 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                Get Started Today
                <motion.span 
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  <FiArrowRight />
                </motion.span>
              </a>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://calendly.com/hello-darlendev/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-4 px-8 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Request a Demo
              </a>
            </motion.div>
          </motion.div>
          
          {/* Stats Section */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {statsData.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/5 shadow-xl relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)' }}
              >
                <div className="absolute top-0 right-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="w-20 h-20 -mr-10 -mt-10 rounded-full bg-white/20"></div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-3 bg-white/10 rounded-lg">
                    {stat.icon}
                  </div>
                  <div>
                    <motion.div 
                      className="text-4xl font-bold text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: 1, 
                        y: 0, 
                        transition: {
                          type: 'spring',
                          stiffness: 100,
                          delay: 0.1 + (index * 0.1)
                        }
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    <h3 className="text-xl font-semibold">{stat.label}</h3>
                  </div>
                </div>
                
                <p className="text-white/80">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 
