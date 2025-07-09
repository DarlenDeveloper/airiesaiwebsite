import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../assets/images/hero-bg.jpg';
import aiAgent from '../assets/images/ai-agent.jpg';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.9,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    })
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop" as const
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-16 md:py-0">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: `url(${heroBg})`,
          y
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80 backdrop-blur-sm"></div>
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div 
              className="space-y-6"
              initial="hidden"
              animate="visible"
            >
              <motion.span 
                custom={1} 
                variants={textVariants} 
                className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium"
              >
                Next-Generation AI Customer Service
              </motion.span>
              
              <motion.h1 
                custom={2} 
                variants={textVariants}
                className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight text-white"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">AI-Powered</span> Customer Care Agents
              </motion.h1>
              
              <motion.p 
                custom={3} 
                variants={textVariants}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Revolutionize your customer support with AIRIES AI. Our intelligent virtual agents handle customer inquiries with human-like understanding, working 24/7 to resolve issues efficiently and increase satisfaction by up to 85%.
              </motion.p>
              
              <motion.div 
                custom={4} 
                variants={textVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <a 
                  href="https://orgdashboard.airiesai.com" 
                  className="btn-primary group flex items-center justify-center"
                >
                  <span>Get Started</span>
                  <motion.span 
                    className="inline-block ml-2"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
                
                <Link 
                  to="/contact" 
                  className="btn-secondary group flex items-center justify-center"
                >
                  <span>Contact Sales</span>
                  <motion.span 
                    className="inline-block ml-2"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ✉
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Image/Visual Content */}
          <div className="order-1 lg:order-2 relative">
            <motion.div 
              className="relative mx-auto max-w-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                ...floatingAnimation,
                opacity: 1,
                y: floatingAnimation.y
              }}
              transition={{ duration: 1 }}
            >
              {/* Main Image */}
              <div className="relative z-20 rounded-2xl overflow-hidden border-8 border-gray-800 shadow-2xl">
                <img 
                  src={aiAgent} 
                  alt="AI Customer Service Agent" 
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-overlay"></div>
              </div>
              
              {/* Stat Cards */}
              <motion.div 
                className="absolute -bottom-5 -left-16 z-30 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">98.7%</div>
                    <div className="text-xs text-white">Resolution Rate</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-10 -right-10 z-30 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">24/7</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Always Available</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Live Support Badge */}
              <motion.div 
                className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-40 bg-primary px-4 py-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-white font-medium">Live AI Support</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
