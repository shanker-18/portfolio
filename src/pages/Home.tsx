import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { useState } from 'react'

interface Certificate {
  title: string
  issuer: string
  date: string
  credentialId: string
  description: string
  image: string
  url: string
}

// const profileImage = '/src/Image/profile.png'
// const foundationCert = '/src/Image/foundation.png'
// const chatgptCert = '/src/Image/chatgpt.png'
// const ibmCert = '/src/Image/ibm.png'
// const freecodeCert = '/src/Image/freecode.png'
// const geoCert = '/src/Image/geo.png'

const Home = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Python', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Linux', 'VS Code'] },
  ]

  const experiences = [
    {
      title: 'Software Intern',
      company: 'Oracle Technologies at Vibhathi Labs',
      period: 'July 2024 - October 2024',
      description: 'During my internship at Oracle Technologies through Vibhathi Labs, I gained comprehensive experience in database technologies including SQL, PostgreSQL, and NoSQL databases. I developed a social media analytics project that demonstrated my ability to work with large datasets and implement efficient data processing solutions.',
      achievements: [
        'Developed expertise in SQL, PostgreSQL, and NoSQL databases',
        'Created a social media analytics project for data insights',
        'Worked with large-scale datasets and implemented efficient data processing solutions',
        'Collaborated with team members on database optimization projects'
      ]
    },
    {
      title: 'Software Intern',
      company: 'Hostwire System',
      period: 'December 2024 - February 2025',
      description: 'At Hostwire System, I worked on an innovative machine learning project using Streamlit to analyze real-time Swiggy dataset. The project focused on developing a recommendation system for restaurants based on user preferences and historical data.',
      achievements: [
        'Developed a machine learning model for restaurant recommendations',
        'Created an interactive Streamlit dashboard for data visualization',
        'Implemented real-time data processing and analysis',
        'Built a user-friendly recommendation system for Swiggy users'
      ]
    }
  ]

  const certificates = [
    {
      title: 'Foundations of Prompt Engineering',
      issuer: 'AWS',
      date: '2024',
      credentialId: 'AWS-PE-2024',
      description: 'Comprehensive course on prompt engineering fundamentals and best practices',
      image: '/src/Image/foundation.png',
      url: 'https://aws.amazon.com/certification/verify'
    },
    {
      title: 'ChatGPT for Everyone',
      issuer: 'Learn Prompting',
      date: '2024',
      credentialId: 'LP-CE-2024',
      description: 'Advanced course on leveraging ChatGPT for various applications',
      image: '/src/Image/chatgpt.png',
      url: 'https://www.learnprompting.org/certificates'
    },
    {
      title: 'Python 101 for Data Science',
      issuer: 'IBM',
      date: '2024',
      credentialId: 'IBM-P101-2024',
      description: 'Fundamental Python programming for data science applications',
      image: '/src/Image/ibm.png',
      url: 'https://www.ibm.com/training/badge-verify'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2024',
      credentialId: 'FCC-RWD-2024',
      description: 'Complete course on creating responsive web applications',
      image: '/src/Image/freecode.png',
      url: 'https://www.freecodecamp.org/certification/verify'
    },
    {
      title: 'GeoData Preprocessing Using Python',
      issuer: 'DataCamp',
      date: '2024',
      credentialId: 'DC-GDP-2024',
      description: 'Advanced techniques for geospatial data processing',
      image: '/src/Image/geo.png',
      url: 'https://www.datacamp.com/verify'
    }
  ]

  const projects = [
    {
      title: 'AI-Powered Chatbot',
      description: 'Developed a sophisticated chatbot using Large Language Models (LLM) by fine-tuning Ollama 3. The system provides context-aware interactions and improved accuracy through advanced natural language processing techniques.',
      technologies: ['Python', 'Ollama 3', 'NLP', 'Machine Learning'],
      link: 'https://github.com/shanker-18/chatbot'
    },
    {
      title: 'Travel Website',
      description: 'Created a modern, responsive travel website (manian.ccbp.tech) showcasing various destinations with an intuitive user interface. The website features smooth animations and a clean design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      link: 'https://manian.ccbp.tech'
    },
    {
      title: 'FreelanceHub Platform',
      description: 'Built a comprehensive platform connecting freelance developers with clients. Features include project listings, user profiles, and an integrated AI chatbot that provides real-time information about platform features and available projects.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      link: 'https://github.com/shanker-18/freelancehub'
    },
    {
      title: 'Dr.Crop - Plant Disease Detection',
      description: 'Developed an AI-powered system for plant disease classification using deep learning. The application provides real-time treatment recommendations and supports offline functionality with cloud synchronization.',
      technologies: ['Python', 'TensorFlow', 'Computer Vision', 'Flask'],
      link: 'https://github.com/shanker-18/drcrop'
    },
    {
      title: 'Restaurant Recommendation System',
      description: 'Created a machine learning-based recommendation system using real-time Swiggy dataset. The system analyzes user preferences and historical data to suggest the best restaurants.',
      technologies: ['Python', 'Streamlit', 'Machine Learning', 'Data Analysis'],
      link: 'https://github.com/shanker-18/restaurant-recommender'
    }
  ]

  const handleCertificateClick = (cert: Certificate) => {
    setSelectedCertificate(cert)
  }

  const closeModal = () => {
    setSelectedCertificate(null)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm <span className="text-pink-500">Manian VJS</span>
            </h1>
            <p className="text-xl text-gray-300">
              A passionate Full Stack Developer and AI/ML enthusiast
            </p>
            <div className="flex gap-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors cursor-pointer"
              >
                Contact Me
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="border border-pink-500 text-pink-500 px-6 py-3 rounded-lg hover:bg-pink-500/10 transition-colors cursor-pointer"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/src/Image/profile.png"
                alt="Manian VJS"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I am a passionate Full Stack Developer with expertise in AI/ML and web development. Currently pursuing B.Tech in Artificial Intelligence and Data Science at Sri Sairam Engineering College, I combine academic knowledge with practical experience to create innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-pink-500">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-300">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              My professional journey includes internships at leading companies where I've developed expertise in software development and AI/ML.
            </p>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-pink-500"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-pink-500 rounded-full"></div>
                <div className="bg-gray-900 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-pink-500 mb-2">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some of my notable projects showcasing my skills in web development, AI/ML, and full-stack applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-pink-500/20 text-pink-500 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-400 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Certificates</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Professional certifications and courses I've completed to enhance my skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div 
                  className="relative h-48 cursor-pointer" 
                  onClick={() => handleCertificateClick(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent group-hover:from-pink-900/90 transition-colors duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex items-center px-4 py-2 bg-pink-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Full Certificate
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8v.01M8 8v.01M12 8v.01M16 8v.01M4 12v.01M8 12v.01M12 12v.01M16 12v.01M4 16v.01M8 16v.01M12 16v.01M16 16v.01" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-pink-500 mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 mb-2">{cert.date}</p>
                  <p className="text-gray-300">{cert.description}</p>
                  <p className="text-gray-400 mt-2 text-sm">ID: {cert.credentialId}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-7xl w-full bg-gray-900 rounded-xl overflow-hidden cursor-default"
            >
              <div className="relative">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{selectedCertificate.title}</h3>
                <p className="text-pink-500 mb-2">{selectedCertificate.issuer}</p>
                <p className="text-gray-400 mb-2">{selectedCertificate.date}</p>
                <p className="text-gray-300 mb-4">{selectedCertificate.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">ID: {selectedCertificate.credentialId}</p>
                  <a
                    href={selectedCertificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                  >
                    Verify Certificate
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a href="mailto:manian.vjs@gmail.com" className="text-gray-300 hover:text-pink-500 transition-colors">
                      manian.vjs@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/shanker-18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-500 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="http://www.linkedin.com/in/manianvjs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-500 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1.12-1.601-1.16 0-1.35.91-1.35 1.601v5.604h-3v-11h3v1.765c.77-1.333 2.241-1.807 3.27-1.807 3.601 0 4.267 2.37 4.267 5.455v6.587z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 