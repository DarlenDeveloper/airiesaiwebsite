import React from 'react';
import { motion } from 'framer-motion';

// Import the dashboard images
// Note: We'll need to save these images to the public directory
const DashboardShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/20 to-accent/5 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 relative z-10">
          {/* Background elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Powerful Management Portal
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Take control of your AI assistant with our intuitive dashboard. Monitor performance, track analytics, and manage all your customer interactions in one place.
          </motion.p>
        </div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 left-1/4 w-20 h-20 bg-primary/30 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 right-10 w-32 h-32 bg-accent/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-10 w-24 h-24 bg-primary/40 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 left-10 w-16 h-16 bg-accent/20 rounded-full blur-lg"></div>
          
          <div className="flex items-center justify-center relative z-10">
            {/* Dashboard Image */}
            <div className="w-full max-w-5xl shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-primary/20">
              <img 
                src="/images/postspark_export_2025-05-12_06-00-21.png" 
                alt="AIRIES AI Dashboard Interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-16 text-center relative z-10">
          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-white to-blue-100 p-6 rounded-xl shadow-md border border-blue-200 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-blue-600 text-3xl mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Real-Time Monitoring</h3>
              <p className="text-gray-600">Track call volumes, resolution rates, and customer satisfaction in real-time.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-purple-100 p-6 rounded-xl shadow-md border border-purple-200 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-purple-600 text-3xl mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Detailed Analytics</h3>
              <p className="text-gray-600">Gain insights with comprehensive analytics and customizable reports.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-teal-100 p-6 rounded-xl shadow-md border border-teal-200 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-teal-600 text-3xl mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Complete Call History</h3>
              <p className="text-gray-600">Access detailed logs of all customer interactions with searchable transcripts.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
