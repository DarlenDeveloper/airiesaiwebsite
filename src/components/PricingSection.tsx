import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PricingSection = () => {


  

  
  const pricingPlans = [
    {
      id: 'widget',
      name: 'Web Widget',
      description: 'An AI agent on your website to engage visitors 24/7.',
      prices: {
        UGX: '80,000',
        USD: '20',
        KES: '7,400',
        RWF: '69,000',
        TZS: '138,000',
        GBP: '42',
        ZAR: '990',
      },
      period: 'per month',
      metrics: '+ PREPAID PRICING PER USAGE',
      features: [
        '1 AI agent for your website',
        'Lead capture & qualification',
        '24/7 automated responses',
        'Basic analytics dashboard',
        'Easy setup (no code)',
        'Email support',
      ],
      buttonText: 'Get Started',
      buttonLink: 'https://orgdashboard.airiesai.com/signup',
      isHighlighted: false,
    },
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI support.',
      prices: {
        UGX: '497,000',
        USD: '130',
        KES: '17,395',
        RWF: '164,010',
        TZS: '362,810',
        GBP: '109',
        ZAR: '2,632',
      },
      period: 'per month',
      metrics: '300 minutes / month',
      features: [
        '2 AI agents',
        '2 concurrent calls',
        '300 minutes included',
        'Top-up available ($16 / 100 mins)',
        'Email support',
        'Call recording',
        'Basic analytics',
        '1 language (English)',
        '1 phone number',
        'Access to user dashboard',
      ],
      buttonText: 'Get Started',
      buttonLink: 'https://orgdashboard.airiesai.com/signup',
      isHighlighted: false,
    },
    {
      id: 'popular',
      name: 'Popular',
      description: 'Ideal for growing businesses with increasing support needs.',
      prices: {
        UGX: '897,000',
        USD: '230',
        KES: '31,395',
        RWF: '295,910',
        TZS: '654,810',
        GBP: '197',
        ZAR: '4,752',
      },
      period: 'per month',
      metrics: '1000 minutes / month',
      features: [
        '5 AI agents',
        '5 concurrent calls',
        '1000 minutes included',
        'Top-up available ($16 / 100 mins)',
        'Email support',
        'Call recording & transcription',
        'Detailed analytics',
        'CRM integration',
        'Advanced customization',
        'Priority support',
        '1 language (English)',
        '1 phone number',
        'Access to user dashboard',
      ],
      buttonText: 'Get Started',
      buttonLink: 'https://orgdashboard.airiesai.com/signup',
      isHighlighted: true,
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For organizations requiring maximum capacity and features.',
      prices: {
        UGX: '1,500,000',
        USD: '390',
        KES: '52,632',
        RWF: '492,000',
        TZS: '1,090,000',
        GBP: '328',
        ZAR: '8,000',
      },
      period: 'per month',
      metrics: '2000 minutes / month',
      features: [
        '10 AI agents',
        '10 concurrent calls',
        '2000 minutes included',
        'Top-up available ($16 / 100 mins)',
        'Email & phone support',
        'Call recording & advanced transcription',
        'Advanced analytics & reporting',
        'Enterprise integrations',
        'Full customization',
        'Dedicated account manager',
        'SLA guarantee',
        '1 language (English)',
        '1 phone number',
        'Access to user dashboard',
      ],
      buttonText: 'Get Started',
      buttonLink: 'https://orgdashboard.airiesai.com/signup',
      isHighlighted: false,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations requiring unlimited capacity and custom solutions.',
      price: 'Customized',
      period: '',
      metrics: 'Unlimited minutes',
      features: [
        'Unlimited AI agents',
        'Unlimited concurrent calls',
        'Unlimited minutes',
        'Custom minute bundles (e.g., $13 per 100 mins)',
        '24/7 dedicated support',
        'Advanced call recording & transcription',
        'Enterprise-grade analytics & reporting',
        'Custom integrations',
        'Full customization & white-labeling',
        'Dedicated account manager',
        'Premium SLA guarantee',
        'Multiple languages',
        'Multiple phone numbers',
        'Custom dashboard & reporting',
        'Custom AI training',
        'On-premise deployment option',
      ],
      buttonText: 'Contact Sales',
      buttonLink: 'https://calendly.com/hello-darlendev/30min',
      isHighlighted: false,
    },
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

  const getDisplayedPrice = (plan: any) => {
    if (plan.id === 'enterprise') {
      return plan.price; // "Customized"
    }
    const price = plan.prices['USD'];
    return price ? `$${price}` : null;
  };

  return (
    <section id="pricing" className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Simple Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Affordable Pricing Plans</h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core AI technology with no hidden fees.
          </p>
          

        </motion.div>

        <motion.div 
          className="grid md:grid-cols-4 gap-6 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 15
                }
              }}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.isHighlighted ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.isHighlighted && (
                <motion.div 
                  className="absolute top-0 inset-x-0 bg-primary text-white text-center py-2 text-sm font-semibold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                >
                  Most Popular
                </motion.div>
              )}
              <div className={`p-6 ${plan.isHighlighted ? 'pt-14' : ''} bg-gradient-to-b from-white to-gray-50 backdrop-blur-md`}>
                <motion.div 
                  className="relative mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    {plan.name}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-gray-600 mt-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {plan.description}
                  </motion.p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-4 rounded-xl shadow-lg mb-6 transform-gpu -rotate-1 hover:rotate-0 transition-transform duration-300 border border-gray-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className="text-xs text-primary font-semibold mb-1">MONTHLY PRICE</div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                      {getDisplayedPrice(plan)}
                    </span>
                    <span className="text-gray-600 ml-1 text-xs">{plan.period}</span>
                  </div>
                  <div className="mt-2 bg-primary/5 py-1 px-2 rounded-lg text-center">
                    <p className="text-xs text-gray-700 font-medium">{plan.metrics}</p>
                  </div>
                </motion.div>

                <motion.ul 
                  className="space-y-2 mb-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {plan.features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      variants={itemVariants}
                      custom={index}
                      transition={{ delay: 0.1 * index }}
                    >
                      <motion.span 
                        className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <FiCheck size={10} />
                      </motion.span>
                      <span className="text-xs text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {plan.id === 'enterprise' ? (
                    <a
                      href={plan.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-2 px-4 text-center rounded-lg text-sm font-medium transition ${
                        plan.isHighlighted
                          ? 'bg-primary text-white hover:bg-primary/90'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.buttonText}
                    </a>
                  ) : (
                    <a
                      href={plan.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-2 px-4 text-center rounded-lg text-sm font-medium transition ${
                        plan.isHighlighted
                          ? 'bg-primary text-white hover:bg-primary/90'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.buttonText}
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div 
          className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: 'spring', 
            stiffness: 100, 
            damping: 15,
            delay: 0.3
          }}
          whileHover={{ 
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
            y: -5
          }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 mb-4 bg-white/10 rounded-full text-white/90 text-sm font-medium"
            >
              Enterprise Grade
            </motion.span>
            
            <h3 className="text-3xl font-bold mb-4 text-white">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We understand that every business has unique needs. Our enterprise plans include dedicated support, advanced security features, and customized AI training.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="mailto:devops@najod.co"
                  className="inline-block py-3 px-8 bg-white text-gray-900 rounded-lg font-medium hover:shadow-lg transition-shadow"
                >
                  Contact Our Sales Team
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection; 
