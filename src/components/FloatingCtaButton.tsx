import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

const FloatingCtaButton = () => {
  return (
    <motion.a
      href="https://calendly.com/hello-darlendev/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg flex items-center justify-center space-x-2 text-sm font-semibold sm:text-base sm:px-6 sm:py-3 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1.5 }}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
      whileTap={{ scale: 0.95 }}
    >
      <FiCalendar className="h-5 w-5" />
      <span className="hidden sm:inline">Schedule a Meeting</span>
      <span className="inline sm:hidden">Meeting</span>
    </motion.a>
  );
};

export default FloatingCtaButton; 