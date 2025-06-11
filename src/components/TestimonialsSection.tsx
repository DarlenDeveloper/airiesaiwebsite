import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import testimonialsImg from '../assets/images/testimonials-bg.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Customer Service Director',
      company: 'TechCorp Inc.',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      content: "Implementing AIRIES AI has been transformative for our customer service department. We've seen a 72% reduction in response times and our customer satisfaction scores have reached an all-time high of 4.9/5.",
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO',
      company: 'InnoVision Group',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      content: "The natural language capabilities of AIRIES AI are remarkable. Our customers often don't realize they're interacting with an AI, and the seamless handoff to human agents when needed is impressive.",
      rating: 5,
    },
    {
      id: 3,
      name: 'Jessica Patel',
      position: 'Operations Manager',
      company: 'GlobalServe Solutions',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      content: 'The multilingual support has allowed us to expand into new markets without hiring additional staff. AIRIES AI handles conversations in 27 languages flawlessly.',
      rating: 4,
    },
    {
      id: 4,
      name: 'Robert Wilson',
      position: 'CEO',
      company: 'EchoSupport',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      content: "After comparing multiple AI customer service platforms, AIRIES stood out for its intuitive training process and comprehensive analytics. The ROI has been substantial - we've reduced costs by 40% while improving service quality.",
      rating: 5,
    },
    {
      id: 5,
      name: 'Emily Rodriguez',
      position: 'Customer Experience Lead',
      company: 'ZenithCare',
      image: 'https://randomuser.me/api/portraits/women/17.jpg',
      content: 'The integration with our existing CRM system was seamless. The AI learns continuously and has become more accurate over time. Our team can focus on complex cases while AIRIES handles routine inquiries.',
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  const nextTestimonial = () => {
    setCurrent(current => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(current => (current - 1 + testimonials.length) % testimonials.length);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (autoplay) {
      timeoutRef.current = window.setTimeout(nextTestimonial, 6000);
    }
    return () => {
      resetTimeout();
    };
  }, [current, autoplay]);

  // Animation variants
  const cardVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    })
  };

  // Stats data
  const stats = [
    { value: '85%', label: 'Customer Satisfaction Increase' },
    { value: '67%', label: 'Faster Response Time' },
    { value: '24/7', label: 'Customer Support' },
    { value: '40%', label: 'Cost Reduction' },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${testimonialsImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-gray-300 text-lg">
            Discover how businesses across industries have transformed their customer service operations with AIRIES AI.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden px-4">
            <motion.div
              key={current}
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary/20">
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 ${i < (testimonials[current]?.rating || 0) ? 'text-yellow-400' : 'text-gray-400'}`}
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-200 italic mb-6">
                    "{testimonials[current].content}"
                  </blockquote>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonials[current].name}</h4>
                    <p className="text-primary">{testimonials[current].position}</p>
                    <p className="text-gray-400">{testimonials[current].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-3 rounded-full transition-all ${idx === current ? 'w-8 bg-primary' : 'w-3 bg-gray-600'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => setAutoplay(!autoplay)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label={autoplay ? 'Pause autoplay' : 'Start autoplay'}
              >
                {autoplay ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
