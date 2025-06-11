import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does AIRIES AI understand customer inquiries?",
      answer: "AIRIES AI uses advanced natural language processing (NLP) technology to understand the context, intent, and sentiment behind customer inquiries. Our AI models are trained on millions of customer service interactions, enabling them to comprehend complex questions, detect nuances in language, and understand industry-specific terminology. The system continuously learns from interactions, becoming more accurate over time."
    },
    {
      question: "How long does it take to train the AI for our specific business needs?",
      answer: "It takes less than 24 hours after submission of training data for AIRIES AI to be fully operational. Our advanced machine learning algorithms quickly process and adapt to your business context, allowing for rapid deployment and immediate value. After deployment, the AI continues to learn and improve with each interaction."
    },
    {
      question: "How does the handoff between AI and human agents work?",
      answer: "AIRIES AI includes a sophisticated escalation system that determines when a conversation should be transferred to a human agent. This decision is based on multiple factors, including query complexity, customer sentiment, issue type, and explicit customer requests. When a handoff occurs, the human agent receives a complete conversation transcript along with AI-generated context notes and suggested next steps. The transition is seamless for the customer, maintaining continuity in the support experience."
    },
    {
      question: "What kind of analytics and reporting does the platform provide?",
      answer: "We only provide call summary status indicating whether the AI solved or did not solve the client issue, as well as follow-up information. This feature will be enhanced with our comprehensive analytics dashboard that is projected to launch by Q4 2025."
    },
    {
      question: "How secure is customer data within the AIRIES AI platform?",
      answer: "Security is a top priority for AIRIES AI. We employ end-to-end encryption for all data, both in transit and at rest. Our infrastructure is SOC 2 Type II certified and compliant with GDPR, CCPA, and HIPAA regulations. We implement strict access controls, regular security audits, and penetration testing. Customer data is never used to train models for other clients, ensuring complete data isolation between organizations."
    },
    {
      question: "What is the pricing model for AIRIES AI?",
      answer: "Please refer to our pricing section for detailed information on our current plans and pricing structure. We offer flexible options designed to meet the needs of businesses of all sizes."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-24 bg-gray-50" id="faq">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">
            Get answers to the most common questions about AIRIES AI and how it can transform your customer service.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-6"
              variants={itemVariants}
            >
              <button
                className={`w-full flex justify-between items-center p-6 rounded-xl text-left transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-white shadow-lg border-primary border-l-4' 
                    : 'bg-white/80 hover:bg-white hover:shadow-md'
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-primary text-white' : 'bg-gray-100'
                }`}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t border-gray-100">
                      <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700 mb-6">Still have questions? Our team is here to help.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="btn-primary flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
