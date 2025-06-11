import { useEffect } from 'react';
import { initCalendly, openCalendly } from '../utils/calendly';

export const useCalendly = () => {
  useEffect(() => {
    const cleanup = initCalendly();
    return cleanup;
  }, []);

  return {
    openCalendly
  };
}; 