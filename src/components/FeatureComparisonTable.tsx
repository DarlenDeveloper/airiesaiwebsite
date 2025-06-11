import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX, FiHelpCircle } from 'react-icons/fi';

const FeatureComparisonTable = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
  const features = [
    {
      id: 'call-limits',
      name: 'Call Limits',
      tooltip: 'Minutes of call time included per month',
      starter: '300 minutes',
      popular: '1000 minutes',
      business: '2000 minutes',
      enterprise: 'Unlimited minutes'
    },
    {
      id: 'ai-agents',
      name: 'AI Agents',
      tooltip: 'Virtual AI agents that handle customer conversations',
      starter: '2 agents',
      popular: '5 agents',
      business: '10 agents',
      enterprise: 'Unlimited agents'
    },
    {
      id: 'concurrent-calls',
      name: 'Concurrent Calls',
      tooltip: 'Maximum number of simultaneous calls the AI can handle',
      starter: '2 calls',
      popular: '5 calls',
      business: '10 calls',
      enterprise: 'Unlimited'
    },
    {
      id: 'languages',
      name: 'Supported Languages',
      tooltip: 'Languages the AI agents can communicate in',
      starter: '1 language (English)',
      popular: '1 language (English)',
      business: '1 language (English)',
      enterprise: '1 language (English)'
    },
    {
      id: 'integration',
      name: 'CRM Integration',
      tooltip: 'Connect with your existing CRM systems',
      starter: 'Basic',
      popular: 'CRM integration',
      business: 'Enterprise integrations',
      enterprise: 'Custom integrations'
    },
    {
      id: 'analytics',
      name: 'Analytics & Reporting',
      tooltip: 'Insights into customer interactions and agent performance',
      starter: 'Basic analytics',
      popular: 'Detailed analytics',
      business: 'Advanced analytics & reporting',
      enterprise: 'Enterprise-grade analytics & reporting'
    },
    {
      id: 'training',
      name: 'Custom Training',
      tooltip: 'Train AI agents on your specific business knowledge',
      starter: 'Limited',
      popular: 'Advanced customization',
      business: 'Full customization',
      enterprise: 'Custom AI training'
    },
    {
      id: 'security',
      name: 'Security Features',
      tooltip: 'Data encryption and security protocols',
      starter: 'Standard',
      popular: 'Enhanced',
      business: 'Enterprise-grade',
      enterprise: 'Enterprise-grade'
    },
    {
      id: 'uptime',
      name: 'Uptime SLA',
      tooltip: 'Service level agreement for system availability',
      starter: '99.5%',
      popular: '99.9%',
      business: 'SLA guarantee',
      enterprise: 'Premium SLA guarantee'
    },
    {
      id: 'support',
      name: 'Customer Support',
      tooltip: 'Support channels and response times',
      starter: 'Email support',
      popular: 'Priority support',
      business: 'Dedicated account manager',
      enterprise: '24/7 dedicated support'
    },
    {
      id: 'phone-number',
      name: 'Included Phone Number',
      tooltip: 'A dedicated phone number for your AI agent',
      starter: true,
      popular: true,
      business: true,
      enterprise: 'Multiple phone numbers'
    },
    {
      id: 'user-dashboard',
      name: 'User Dashboard Access',
      tooltip: 'Access to a dashboard for managing your AI and viewing analytics',
      starter: true,
      popular: true,
      business: true,
      enterprise: 'Custom dashboard & reporting'
    }
  ];

  const handleTooltipToggle = (id: string) => {
    if (activeTooltip === id) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(id);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const rowVariants = {
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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Compare Plan Features
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find the plan that best suits your business needs with our detailed feature comparison.
          </motion.p>
        </div>

        <motion.div 
          className="overflow-x-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800">
                  <th className="py-4 px-6 text-left font-semibold w-1/4">Feature</th>
                  <th className="py-4 px-6 text-center font-semibold w-1/4">
                    <div className="text-lg">Starter</div>
                    <div className="text-sm font-normal text-gray-500">UGX 497,000/mo</div>
                  </th>
                  <th className="py-4 px-6 text-center font-semibold w-1/4 bg-primary/5 border-b-2 border-primary">
                    <div className="text-lg text-primary">Popular</div>
                    <div className="text-sm font-normal text-gray-500">UGX 897,000/mo</div>
                  </th>
                  <th className="py-4 px-6 text-center font-semibold w-1/4">
                    <div className="text-lg">Business</div>
                    <div className="text-sm font-normal text-gray-500">UGX 1,500,000/mo</div>
                  </th>
                  <th className="py-4 px-6 text-center font-semibold w-1/4">
                    <div className="text-lg">Enterprise</div>
                    <div className="text-sm font-normal text-gray-500">Customized pricing</div>
                  </th>
                </tr>
              </thead>
              <motion.tbody
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {features.map((feature, index) => (
                  <motion.tr 
                    key={feature.id}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    variants={rowVariants}
                  >
                    <td className="py-4 px-6 border-b border-gray-200">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-800">{feature.name}</span>
                        <button 
                          className="ml-2 text-gray-400 hover:text-gray-600 relative"
                          onClick={() => handleTooltipToggle(feature.id)}
                          aria-label={`Information about ${feature.name}`}
                        >
                          <FiHelpCircle size={16} />
                          {activeTooltip === feature.id && (
                            <div className="absolute z-10 left-full ml-2 top-0 w-64 p-3 bg-white rounded-lg shadow-xl text-left text-sm text-gray-600 border border-gray-200">
                              {feature.tooltip}
                            </div>
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                            <FiCheck size={14} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-500">
                            <FiX size={14} />
                          </span>
                        )
                      ) : (
                        <span className="text-gray-700">{feature.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center bg-primary/5">
                      {typeof feature.popular === 'boolean' ? (
                        feature.popular ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                            <FiCheck size={14} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-500">
                            <FiX size={14} />
                          </span>
                        )
                      ) : (
                        <span className="font-medium text-gray-700">{feature.popular}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">
                      {typeof feature.business === 'boolean' ? (
                        feature.business ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                            <FiCheck size={14} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-500">
                            <FiX size={14} />
                          </span>
                        )
                      ) : (
                        <span className="text-gray-700">{feature.business}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200 text-center">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                            <FiCheck size={14} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-500">
                            <FiX size={14} />
                          </span>
                        )
                      ) : (
                        <span className="text-gray-700">{feature.enterprise}</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            Still not sure which plan is right for you? Contact our sales team for personalized assistance.
          </p>
          <a 
            href="https://calendly.com/hello-darlendev/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 bg-gray-900 text-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            Get Expert Advice
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureComparisonTable;
