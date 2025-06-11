import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CaseStudies: React.FC = () => {
  // Sample case studies data
  const caseStudies = [
    {
      id: 1,
      company: 'Telecom Uganda',
      industry: 'Telecommunications',
      challenge: 'Handling over 5,000 customer support calls daily with long wait times and inconsistent service quality.',
      solution: 'Implemented AIRIES AI to handle 80% of routine customer inquiries, reducing wait times and freeing up human agents for complex issues.',
      results: [
        '76% reduction in average wait time',
        '92% customer satisfaction rating',
        '43% decrease in operational costs',
        'Expanded service to 24/7 availability'
      ],
      testimonial: {
        quote: "AIRIES AI transformed our customer service operations. We're now able to provide faster, more consistent support while significantly reducing costs.",
        author: 'Sarah Nakato',
        position: 'Customer Experience Director'
      }
    },
    {
      id: 2,
      company: 'National Bank of East Africa',
      industry: 'Banking & Finance',
      challenge: 'Providing secure, compliant customer support for banking inquiries while maintaining high security standards and regulatory compliance.',
      solution: 'Deployed AIRIES AI with enhanced security protocols and compliance features to handle account inquiries, transaction support, and basic financial guidance.',
      results: [
        '89% of routine banking inquiries handled by AI',
        '99.9% compliance rate with financial regulations',
        '64% improvement in first-call resolution',
        '3.2M USD annual cost savings'
      ],
      testimonial: {
        quote: 'The security and compliance capabilities of AIRIES AI gave us confidence to automate customer support in our highly regulated industry. The results have exceeded our expectations.',
        author: 'Daniel Ochieng',
        position: 'Head of Digital Banking'
      }
    },
    {
      id: 3,
      company: 'AfriHealth Services',
      industry: 'Healthcare',
      challenge: 'Managing high volume of appointment scheduling, medical inquiries, and patient follow-ups while ensuring HIPAA compliance and data privacy.',
      solution: 'Implemented AIRIES AI with healthcare-specific training to handle appointment management, basic medical inquiries, and automated follow-ups.',
      results: [
        '82% reduction in appointment scheduling time',
        '68% decrease in missed appointments',
        '94% patient satisfaction with AI interactions',
        'Staff time redirected to direct patient care'
      ],
      testimonial: {
        quote: 'AIRIES AI has revolutionized how we handle patient communications. Our medical staff can now focus more on patient care rather than administrative tasks.',
        author: 'Dr. Florence Auma',
        position: 'Medical Director'
      }
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
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

  return (
    <>
      <Header />
      <main className="pt-20 pb-32 bg-gray-50">
        <section className="container-custom">
          {/* Hero Section */}
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Success Stories</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Results with AIRIES AI</h1>
            <p className="text-lg text-gray-700">
              Discover how businesses across Africa are transforming their customer service operations with our AI-powered solution.
            </p>
          </motion.div>

          {/* Case Studies */}
          <motion.div 
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {caseStudies.map((study) => (
              <motion.div 
                key={study.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                variants={itemVariants}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-10 bg-gradient-to-br from-primary/5 to-transparent">
                    <div className="inline-block px-3 py-1 mb-4 bg-primary/10 rounded-full text-primary text-sm font-medium">
                      {study.industry}
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{study.company}</h2>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">Challenge</h3>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">Solution</h3>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-10 bg-gray-50">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Results</h3>
                    <ul className="space-y-3 mb-8">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <p className="text-gray-700 italic mb-4">"{study.testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                          {study.testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-900">{study.testimonial.author}</p>
                          <p className="text-sm text-gray-600">{study.testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your customer service?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join these successful businesses and see how AIRIES AI can revolutionize your customer interactions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="btn-primary"
              >
                Contact Sales
              </Link>
              <Link 
                to="/pricing" 
                className="btn-secondary"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudies;
