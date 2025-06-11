import { motion } from 'framer-motion';
import { FiBriefcase, FiUsers, FiAward, FiHeart } from 'react-icons/fi';

const Careers = () => {
  const openPositions = [
    {
      title: "AI Software Engineer",
      department: "Engineering",
      location: "Kampala, Uganda",
      type: "Full-time"
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Kampala, Uganda",
      type: "Full-time"
    },
    {
      title: "Machine Learning Specialist",
      department: "Research",
      location: "Remote",
      type: "Contract"
    }
  ];

  const benefits = [
    {
      icon: <FiBriefcase />,
      title: "Competitive Salary",
      description: "We offer competitive compensation packages that recognize your skills and experience."
    },
    {
      icon: <FiUsers />,
      title: "Collaborative Culture",
      description: "Join a diverse team that values collaboration, innovation, and mutual respect."
    },
    {
      icon: <FiAward />,
      title: "Growth Opportunities",
      description: "We invest in our team's professional development with training and career advancement."
    },
    {
      icon: <FiHeart />,
      title: "Health & Wellness",
      description: "We prioritize your wellbeing with comprehensive health benefits and flexible work arrangements."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-white/90 mb-8">
              Help us transform the future of customer service with AI innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Why Join AIRIES?</h2>
              <p className="text-white mb-4">
                At AIRIES, we're more than just a tech company. We're a team of passionate innovators committed to solving real customer service challenges with AI.
              </p>
              <p className="text-white mb-4">
                Working with us means being at the forefront of AI implementation in Uganda and across Africa, with the opportunity to make a meaningful impact on how businesses connect with their customers.
              </p>
              <p className="text-white">
                We value creativity, collaboration, and continuous learning, providing an environment where your ideas are heard and you can grow both professionally and personally.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-primary/10 rounded-xl w-full h-96 mb-6 overflow-hidden shadow-lg">
                {/* Team culture image */}
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <div className="text-primary text-5xl mb-6">
                    <FiUsers />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Innovative Team</h3>
                  <p className="text-gray-700 mb-6">We're a diverse group of thinkers, innovators, and problem-solvers passionate about transforming customer service with AI.</p>
                  <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                      <div className="font-bold text-2xl text-primary">15+</div>
                      <div className="text-sm text-gray-600">Team Members</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                      <div className="font-bold text-2xl text-primary">7</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                      <div className="font-bold text-2xl text-primary">60%</div>
                      <div className="text-sm text-gray-600">Women in Tech</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                      <div className="font-bold text-2xl text-primary">4.8/5</div>
                      <div className="text-sm text-gray-600">Team Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits & Perks</h2>
            <p className="text-lg text-gray-800">
              We take care of our team so you can focus on what you do best
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="text-primary text-3xl mb-5">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-800">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-lg text-gray-800">
              Find your place in our growing team
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                    <p className="text-gray-800 mt-2">{position.department}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {position.location}
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>
                  <a
                    href="mailto:team@airiesai.com?subject=Job Application: Position Title"
                    className="bg-primary text-white hover:bg-primary/90 py-2 px-6 rounded-lg font-medium transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Application Process</h2>
            <p className="text-lg text-gray-800">
              Here's what to expect when you apply to join our team
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Application Review",
                description: "We carefully review your application to understand your skills and experience."
              },
              {
                step: "2",
                title: "Initial Interview",
                description: "Meet with our hiring team to discuss your background and learn more about the role."
              },
              {
                step: "3",
                title: "Technical Assessment",
                description: "Showcase your skills with a practical exercise or coding challenge."
              },
              {
                step: "4",
                title: "Final Interview",
                description: "A deeper dive into your experience and cultural fit with our leadership team."
              },
              {
                step: "5",
                title: "Offer & Onboarding",
                description: "Receive your offer and begin your exciting journey with AIRIES AI!"
              }
            ].map((process, index) => (
              <motion.div 
                key={index}
                className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <span className="text-primary text-xl font-bold mr-4">{process.step}.</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-700">{process.description}</p>
                </div>
              </motion.div>
            ))}
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-gray-700 mb-4">
                Can't find a suitable position? Send us your general application!
              </p>
              <a
                href="mailto:team@airiesai.com?subject=General Application"
                className="bg-primary text-white hover:bg-primary/90 py-3 px-8 rounded-lg font-semibold transition-colors"
              >
                Submit General Application
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-white/90 mb-8">
              If you don't see a position that matches your skills, we'd still love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/hello-darlendev/30min"
                className="bg-white text-primary hover:bg-white/90 py-3 px-8 rounded-lg font-semibold text-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Your Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 