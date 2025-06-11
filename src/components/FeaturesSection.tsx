import { motion } from 'framer-motion';
import { FiTrendingUp, FiDollarSign, FiHeart, FiShield, FiSmile, FiStar, FiActivity } from 'react-icons/fi';

const FeaturesSection = () => {
  const businessBenefits = [
    {
      id: 1,
      title: 'Reduce Operational Costs',
      description: 'Cut customer service expenses by up to 60% while maintaining exceptional quality and responsiveness.',
      icon: <FiDollarSign className="h-6 w-6" />,
      metric: 'Save up to 60%',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 2,
      title: 'Boost Customer Satisfaction',
      description: 'Create delightful customer experiences with instant responses and personalized interactions at every touchpoint.',
      icon: <FiSmile className="h-6 w-6" />,
      metric: '93% satisfaction rate',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 3,
      title: 'Detect Customer Moods',
      description: 'Our AI recognizes customer emotions and adapts responses in real-time, providing empathetic support when frustrated and efficient solutions when satisfied.',
      icon: <FiActivity className="h-6 w-6" />,
      metric: '42% better resolution',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      id: 4,
      title: 'Increase Conversion Rates',
      description: 'Convert more prospects into customers with timely, relevant assistance throughout the customer journey.',
      icon: <FiTrendingUp className="h-6 w-6" />,
      metric: '+27% conversions',
      color: 'from-purple-500 to-violet-600',
    },
    {
      id: 5,
      title: 'Enhance Brand Loyalty',
      description: 'Build stronger customer relationships with consistently excellent service that keeps customers coming back.',
      icon: <FiHeart className="h-6 w-6" />,
      metric: '85% retention rate',
      color: 'from-red-500 to-pink-600',
    },
    {
      id: 6,
      title: 'Win Customer Trust',
      description: 'Establish credibility and trust through reliable service and consistent brand experiences across all channels.',
      icon: <FiShield className="h-6 w-6" />,
      metric: 'Enterprise-grade security',
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 7,
      title: 'Outperform Competitors',
      description: 'Gain a competitive edge with customer service capabilities that set your business apart in the marketplace.',
      icon: <FiStar className="h-6 w-6" />,
      metric: 'Industry-leading results',
      color: 'from-cyan-500 to-teal-600',
    },
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="features" className="py-24 md:py-32 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden relative">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-primary/40 to-purple-600/40 blur-3xl"></div>
        <div className="absolute top-[60%] -left-[20%] w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-indigo-600/30 to-primary/30 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Transform Your Business Results
          </h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed">
            Elevate performance metrics across your entire organization with AI-driven solutions that deliver measurable ROI.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {businessBenefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-800 transition-all overflow-hidden group relative"
              variants={itemVariants}
              whileHover="hover"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-700 ease-in-out"></div>
              
              {/* Badge with metric */}
              <div className={`absolute top-4 right-4 bg-gradient-to-r ${benefit.color} px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg`}>
                {benefit.metric}
              </div>
              
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {benefit.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Subtle animated underline */}
              <motion.div 
                className="h-1 w-12 bg-gradient-to-r from-primary to-purple-600 rounded-full mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA banner */}
        <motion.div 
          className="mt-20 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/20 backdrop-blur-sm shadow-xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to see these benefits in your business?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the forward-thinking companies that are achieving extraordinary results with AIRIES AI.
          </p>
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-full text-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('https://calendly.com/hello-darlendev/30min', '_blank')}
          >
            Schedule a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 