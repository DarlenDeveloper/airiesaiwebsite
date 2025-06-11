import { motion } from 'framer-motion';
import { useCalendly } from '../hooks/useCalendly';

interface CalendlyButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
}

export const CalendlyButton = ({ 
  className = '', 
  children,
  variant = 'primary'
}: CalendlyButtonProps) => {
  const { openCalendly } = useCalendly();

  const baseStyles = 'px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors';
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    text: 'text-primary hover:text-primary/90'
  };

  return (
    <motion.button
      onClick={openCalendly}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}; 