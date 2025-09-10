import { useState } from 'react';
import { motion } from 'framer-motion';
import teamBg from '../assets/images/team-bg.jpg';

const TeamSection = () => {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);
  
  const teamMembers = [
    {
      id: 1,
      name: 'BIRUNGI JOSEPH',
      position: 'Chief Technology Officer',
      image: '/assets/team-photos/team/birungi-joseph.jpg',
      bio: 'As the CTO of AIRIES AI, Joseph leads our technical vision and innovation strategy. With extensive experience in AI and software development, he ensures our solutions remain at the cutting edge of technology.',
      social: {
        linkedin: '#',
        x: 'https://x.com/airiestech',
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
        x: 'https://x.com/airiestech',
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
        x: 'https://x.com/airiestech',
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
        x: 'https://x.com/airiestech',
        github: '#'
      }
    }
  ];

  // Animation variants
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
    }
  };

  return (
  <section className="relative py-24 overflow-hidden" id="team">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${teamBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50 to-white" />
      </div>
      <div className="container-custom relative z-10 mt-0">
        {/* Team Members */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              className="group relative flex flex-col h-full"
              variants={itemVariants}
            >
              <div 
                className={`relative overflow-hidden rounded-xl transition-all duration-300 w-full aspect-[3/4] flex flex-col items-center justify-end ${activeTeamMember === member.id ? 'ring-4 ring-primary shadow-xl' : 'hover:shadow-xl'}`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={`Photo of ${member.name}, ${member.position} at AIRIES AI`}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-transparent opacity-80" />
                {/* Member Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary text-sm font-medium">{member.position}</p>
                  {/* Social Links */}
                  <div className="flex space-x-3 mt-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-white/70 hover:text-white transition-colors">
                        {/* LinkedIn SVG */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.x && (
                      <a href={member.social.x} className="text-white/70 hover:text-white transition-colors">
                        {/* X SVG */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M18.901 1.153C18.211.753 17.426.541 16.598.5H7.402c-.828.001-1.613.213-2.302.603C4.302 1.553 3.655 2.203 3.253 2.893c-.4.69-.611 1.475-.612 2.303v14.4c0 .828.212 1.613.612 2.303.4.69.947 1.34 1.637 1.74a4.898 4.898 0 002.302.603h9.196c.828 0 1.613-.212 2.302-.603.69-.4 1.337-.95 1.739-1.637a4.898 4.898 0 00.603-2.303V5.197c0-.828-.212-1.613-.603-2.303-.4-.69-.947-1.34-1.637-1.74zM16.9 14.364c-.38.38-1.02.38-1.4 0l-2.4-2.4-2.4 2.4c-.38.38-1.02.38-1.4 0s-.38-1.02 0-1.4l2.4-2.4-2.4-2.4c-.38-.38-.38-1.02 0-1.4s1.02-.38 1.4 0l2.4 2.4 2.4-2.4c.38-.38 1.02-.38 1.4 0s.38 1.02 0 1.4l-2.4 2.4 2.4 2.4c.38.38.38 1.02 0 1.4z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-white/70 hover:text-white transition-colors">
                        {/* GitHub SVG */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {/* Always show bio */}
              <motion.div 
                className="mt-4 p-5 bg-white rounded-xl shadow-lg min-h-[120px] flex items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-700">{member.bio}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
