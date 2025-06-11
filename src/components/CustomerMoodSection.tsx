import React from 'react';
import { motion } from 'framer-motion';

const CustomerMoodSection: React.FC = () => {
  // Sample mood data
  const moodInsights = [
    {
      mood: 'Satisfied',
      percentage: 68,
      color: 'bg-green-500',
      description: 'Customers who had their issues resolved quickly and effectively.'
    },
    {
      mood: 'Frustrated',
      percentage: 15,
      color: 'bg-red-500',
      description: 'Customers who experienced difficulty getting their issues resolved.'
    },
    {
      mood: 'Neutral',
      percentage: 12,
      color: 'bg-blue-500',
      description: 'Customers who had routine interactions without strong emotions.'
    },
    {
      mood: 'Confused',
      percentage: 5,
      color: 'bg-yellow-500',
      description: 'Customers who needed additional clarification during interactions.'
    }
  ];

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

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Emotional Intelligence</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Understanding Customer Moods</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI doesn't just process words—it understands emotions. By analyzing tone, language patterns, and context, 
            AIRIES AI can detect customer moods and adapt its approach accordingly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Real-Time Mood Detection</h3>
            <p className="text-gray-600 mb-6">
              AIRIES AI continuously monitors customer sentiment throughout each interaction, allowing for dynamic 
              response adjustments based on emotional cues.
            </p>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {moodInsights.map((insight, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 p-4 rounded-lg"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{insight.mood}</span>
                    <span className="text-sm font-bold">{insight.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${insight.color} rounded-full`} 
                      style={{ width: `${insight.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{insight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10">
              <h4 className="text-xl font-bold mb-3">Adaptive Response System</h4>
              <p className="text-gray-600">
                When a customer shows signs of frustration, our AI automatically adjusts its tone, 
                offers more empathetic responses, and can prioritize faster resolution paths.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10">
              <h4 className="text-xl font-bold mb-3">Sentiment Trend Analysis</h4>
              <p className="text-gray-600">
                Track emotional patterns across customer interactions to identify product issues, 
                service gaps, or communication problems before they escalate.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10">
              <h4 className="text-xl font-bold mb-3">Personalized Interaction Paths</h4>
              <p className="text-gray-600">
                Based on detected moods, AIRIES AI can dynamically select the most appropriate 
                resolution strategy, from detailed explanations for confused customers to 
                concise solutions for those in a hurry.
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-gradient-to-r from-primary to-accent rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Emotion-Driven Results</h3>
              <p className="text-white/90 mb-6">
                Companies using our mood-aware AI have seen:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>42% increase in customer satisfaction scores</span>
                </li>
                <li className="flex items-start text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>37% reduction in escalation rates</span>
                </li>
                <li className="flex items-start text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>28% improvement in first-contact resolution</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-8 md:p-12 h-full flex items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full">
                <div className="text-white text-lg italic mb-4">
                  "The mood detection capabilities of AIRIES AI transformed our customer service. 
                  Being able to recognize and respond to customer emotions has made our 
                  interactions more human and effective."
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xl">
                    M
                  </div>
                  <div className="ml-4">
                    <div className="text-white font-medium">Maria Ochen</div>
                    <div className="text-white/70 text-sm">Customer Experience Director, TechSolutions Ltd</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerMoodSection;
