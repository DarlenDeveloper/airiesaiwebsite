import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiUsers, FiTarget, FiGlobe, FiAward } from 'react-icons/fi';

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AIRIES</h1>
            <p className="text-xl text-white/90 mb-8">
              We're on a mission to revolutionize customer service through intelligent AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-200 rounded-xl w-full h-96 mb-6 overflow-hidden">
                {/* Placeholder for company image */}
                <img src="/images/logo.jpg" alt="AIRIES AI Logo" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2025, AIRIES was born from a simple observation: customer service was broken. Long wait times, repetitive queries, and inconsistent experiences were frustrating for both businesses and their customers.
              </p>
              <p className="text-gray-300 mb-4">
                Our team of AI specialists, customer experience experts, and business consultants came together with a shared vision: to harness the power of artificial intelligence to create seamless, personalized customer interactions.
              </p>
              <p className="text-gray-300">
                Today, we're proud to serve businesses across Uganda and beyond, helping them deliver exceptional customer service while reducing operational costs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-800">
              At AIRIES, our values guide everything we do, from product development to customer support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiUsers className="h-8 w-8 text-primary" />,
                title: "Customer First",
                description: "We believe in designing solutions that genuinely solve customer problems, not just applying technology for its own sake."
              },
              {
                icon: <FiTarget className="h-8 w-8 text-primary" />,
                title: "Excellence",
                description: "We're committed to excellence in everything we do, from the performance of our AI to the support we provide our clients."
              },
              {
                icon: <FiGlobe className="h-8 w-8 text-primary" />,
                title: "Inclusivity",
                description: "We build solutions that work for everyone, respecting diverse languages, cultures, and accessibility needs."
              },
              {
                icon: <FiAward className="h-8 w-8 text-primary" />,
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with AI, always staying ahead of industry trends."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="mb-5">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-800">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Team</h2>
            <p className="text-lg text-gray-300">
              Meet the talented individuals behind AIRIES who are passionate about transforming customer service through AI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              id: 1,
              name: 'BIRUNGI JOSEPH',
              position: 'Chief Technology Officer',
              image: '/assets/team-photos/team/birungi-joseph.jpg',
              bio: 'As the CTO of AIRIES AI, Joseph leads our technical vision and innovation strategy. With extensive experience in AI and software development, he ensures our solutions remain at the cutting edge of technology.',
              social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
              }
            },
            {
              id: 2,
              name: 'TAMUSANGE DANIEL',
              position: 'Chairman',
              image: '/assets/team-photos/team/tamusange-daniel.jpg',
              bio: 'Daniel serves as the Chairman of AIRIES AI, providing strategic leadership and vision. His expertise in business development and market strategy helps guide our company towards sustainable growth and innovation.',
              social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
              }
            },
            {
              id: 3,
              name: 'NATE KWEZI',
              position: 'Administrator',
              image: '/assets/team-photos/team/nate-kwezi.jpg',
              bio: 'Nate oversees administrative operations at AIRIES AI, ensuring smooth day-to-day functioning of the organization. His attention to detail and organizational skills help maintain operational excellence.',
              social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
              }
            },
            {
              id: 4,
              name: 'QUEEN JOKEBED',
              position: 'Lead Administrator',
              image: '/assets/team-photos/team/queen-jokebed.jpg',
              bio: 'As the Lead Administrator, Queen Jokebed manages and coordinates administrative functions across AIRIES AI. Her leadership ensures efficient operations and excellent service delivery.',
              social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
              }
            }].map((member, index) => (
              <motion.div 
                key={member.id}
                className="text-center p-6 bg-gray-800 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Customer Service?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join us in revolutionizing the way businesses connect with their customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/hello-darlendev/30min"
                className="bg-white text-primary hover:bg-white/90 py-3 px-8 rounded-lg font-semibold text-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 