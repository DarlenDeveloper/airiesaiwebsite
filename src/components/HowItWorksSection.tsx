import { motion } from 'framer-motion';
import { FiTrendingUp, FiCheckCircle, FiAward, FiTarget, FiUsers, FiClock, FiDollarSign } from 'react-icons/fi';
import { useCalendly } from '../hooks/useCalendly';

const BusinessImpactSection = () => {
  const { openCalendly } = useCalendly();

  // Key business outcomes that don't reveal implementation details
  const businessOutcomes = [
    {
      id: 1,
      title: 'Reduced Operational Costs',
      description: 'Businesses using AIRIES AI report an average decrease of 72% in operational costs related to customer service, with payback periods as short as 2-3 months.',
      icon: <FiDollarSign className="h-8 w-8" />,
      color: 'bg-gradient-to-br from-emerald-500 to-green-600',
      metric: '72%',
      metricLabel: 'cost reduction'
    },
    {
      id: 2,
      title: 'Enhanced Customer Satisfaction',
      description: 'Implement AIRIES AI and watch your customer satisfaction scores climb. Our clients see an average increase of 68% in CSAT scores within the first quarter.',
      icon: <FiUsers className="h-8 w-8" />,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      metric: '68%',
      metricLabel: 'CSAT increase'
    },
    {
      id: 3,
      title: 'Faster Resolution Times',
      description: 'Customer issues are resolved in record time, with an average 83% reduction in time-to-resolution compared to traditional support methods.',
      icon: <FiClock className="h-8 w-8" />,
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      metric: '83%',
      metricLabel: 'faster resolutions'
    },
    {
      id: 4,
      title: 'Increased Sales Conversion',
      description: 'Beyond customer service, AIRIES AI helps drive revenue growth with smart recommendations that have increased conversion rates by up to 31% for our clients.',
      icon: <FiTarget className="h-8 w-8" />,
      color: 'bg-gradient-to-br from-rose-500 to-red-600',
      metric: '31%',
      metricLabel: 'conversion increase'
    }
  ];

  // Business impact metrics
  const impactMetrics = [
    { id: 1, value: '24/7', label: 'Customer support', icon: <FiAward className="h-6 w-6" /> },
    { id: 2, value: '95%', label: 'Issue resolution rate', icon: <FiCheckCircle className="h-6 w-6" /> },
    { id: 3, value: '78%', label: 'Agent time reclaimed', icon: <FiClock className="h-6 w-6" /> },
    { id: 4, value: '+43%', label: 'Business growth', icon: <FiTrendingUp className="h-6 w-6" /> },
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
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section id="business-impact" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Business Impact That Matters
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            AIRIES AI delivers measurable business outcomes that transform your customer experience and drive tangible results.
          </p>
        </motion.div>

        {/* Impact Metrics Banner */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {impactMetrics.map(metric => (
            <motion.div 
              key={metric.id}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center"
              variants={itemVariants}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Business Outcomes Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {businessOutcomes.map(outcome => (
            <motion.div 
              key={outcome.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex">
                <div className={`${outcome.color} text-white p-6 flex items-center justify-center`}>
                  {outcome.icon}
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{outcome.title}</h3>
                  <p className="text-gray-700">{outcome.description}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 flex items-center justify-between border-t border-gray-100">
                <span className="text-gray-600 text-sm">Average client outcome</span>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-primary mr-2">{outcome.metric}</span>
                  <span className="text-gray-700 text-sm">{outcome.metricLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Ready to achieve similar results for your business?
          </h3>
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-full text-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            onClick={openCalendly}
          >
            Schedule Your Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessImpactSection; 