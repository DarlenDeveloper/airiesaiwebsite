// Calendly configuration
export const CALENDLY_URL = 'https://calendly.com/d/cv64-ydy-c5d';

// Initialize Calendly widget
export const initCalendly = () => {
  // Add Calendly widget script
  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.body.appendChild(script);

  // Add Calendly widget CSS
  const link = document.createElement('link');
  link.href = 'https://assets.calendly.com/assets/external/widget.css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  // Initialize Calendly badge widget
  script.onload = () => {
    if (window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: CALENDLY_URL,
        text: 'Schedule time with me',
        color: '#00ff9c',
        textColor: '#ffffff'
      });
    }
  };

  return () => {
    document.body.removeChild(script);
    document.head.removeChild(link);
  };
};

// Open Calendly popup
export const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.showPopupWidget(CALENDLY_URL);
  }
};

// Type declarations
declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
      }) => void;
      showPopupWidget: (url: string) => void;
    };
  }
} 