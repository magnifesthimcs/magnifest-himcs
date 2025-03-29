import { motion } from 'framer-motion'

const TeamMember = ({ member }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl relative group">
      {/* Container with smaller image size but maintaining 4:5 ratio */}
      <div className="relative w-full max-w-xs mx-auto">
        <div className="relative pt-[125%]">
          <img 
            src={member.image} 
            alt={member.name}
            className="absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src = '/assets/team/placeholder.jpg';
              e.target.onerror = null;
            }}
          />
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
        <p className="text-primary dark:text-primary-light font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
      </div>
    </div>
  );
};

const teamData = [
  {
    id: 1,
    name: 'Shobhit Varshney',
    role: 'Magnifest Head',
    image: '/assets/team/IMG-20250323-WA0007.jpg',
    bio: 'Shobhit leads the overall coordination and management of Magnifest 2025, bringing years of experience in event management.'
  },
  {
    id: 2,
    name: 'Siddharth Goyal',
    role: 'Magnifest Head',
    image: '/assets/team/IMG-20250323-WA0008.jpg',
    bio: 'Siddharth leads the overall coordination and management of Magnifest 2025, bringing years of experience in event management.'
  },
  {
    id: 3,
    name: 'Anurudh Solanki',
    role: 'Sponsorship Head',
    image: '/assets/team/IMG-20250323-WA0006.jpg',
    bio: 'Anurudh manages partnerships and sponsorships, building relationships with companies and organizations to support the fest.'
  },
  {
    id: 4,
    name: 'Gargi Singh',
    role: 'Cultural Head',
    image: '/assets/team/IMG-20250323-WA0004.jpg',
    bio: 'Gargi manages all cultural performances and competitions, with a background in music and performing arts.'
  },
  {
    id: 5,
    name: 'Devashish Prasad',
    role: 'Technical Head',
    image: '/assets/team/WhatsApp Image 2025-03-23 at 17.49.41_1a320a95.jpg',
    bio: 'Devashish oversees all technical aspects of Magnifest 2025, with expertise in programming and technical event management.'
  },
  {
    id: 6,
    name: 'Tanya Pachouri',
    role: 'Promotion Head',
    image: '/assets/team/IMG-20250323-WA0005.jpg',
    bio: 'Tanya leads the marketing and promotion strategies for Magnifest 2025, specializing in digital marketing and brand management.'
  },
  {
    id: 7,
    name: 'Sneha Singhal',
    role: 'Hospitality Head',
    image: '/assets/team/IMG-20250323-WA0003.jpg',
    bio: 'Sneha ensures all guests and participants receive excellent hospitality during Magnifest 2025, creating a welcoming environment for everyone.'
  },
  {
    id: 8,
    name: 'Ujjwal Singhal',
    role: 'Infrastructure Head',
    image: '/assets/team/IMG-20250323-WA0009.jpg',
    bio: 'Ujjwal manages all infrastructure and logistics for Magnifest 2025, ensuring smooth operations throughout the event.'
  },
  {
    id: 9,
    name: 'Aditi Agarwal',
    role: 'Management Head',
    image: '/assets/team/WhatsApp Image 2025-03-26 at 13.22.16_65ae4be2.jpg',
    bio: 'Aditi coordinates and manages the overall administrative functions of Magnifest 2025, ensuring seamless organizational operations.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative py-24 bg-gradient-to-b from-primary to-primary-dark text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 font-display"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Meet Our <span className="text-yellow-300">Team</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              The dedicated individuals who work tirelessly to make Magnifest 2025 an unforgettable experience
            </motion.p>
          </div>
        </div>
        
        <motion.div 
          className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-yellow-400 bg-opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute -right-16 bottom-32 w-48 h-48 rounded-full bg-blue-400 bg-opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="dark:fill-gray-900"
            >
            </path>
          </svg>
        </div>
      </section>

      {/* Core Team Section with staggered animations */}
      <section className="py-20 bg-light dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Core <span className="text-primary">Team</span>
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Meet the leaders behind Magnifest 2025
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {teamData.map((member) => (
              <motion.div 
                key={member.id}
                variants={itemVariants}
              >
                <TeamMember member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


    </motion.div>
  )
}

export default Team