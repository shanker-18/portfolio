import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import intern1 from '../Image/intern1.png'
import intern2 from '../Image/Intern2.png'

interface Certificate {
  title: string
  issuer: string
  date: string
  credentialId: string
  description: string
  image: string
  url?: string
}

interface Project {
  title: string
  description: string
  fullDescription: string
  technologies: string[]
  keyFeatures: string[]
  techStack: {
    [category: string]: string[]
  }
  githubLink: string
  liveDemo?: string
}


const Home = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [selectedInternImage, setSelectedInternImage] = useState<string | null>(null)

  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Python', 'Node.js', 'SQL', 'MongoDB', 'PostgreSQL','Java'] },
    { category: 'AI/ML', items: ['TensorFlow', 'Scikit-learn', 'NLP', 'Computer Vision'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Linux', 'VS Code'] },
  ]

  const experiences = [
    {
      title: 'Oracle Technologies Internship',
      company: 'Vibhathi Labs',
      period: '20 July 2024 - 09 October 2024',
      description: 'Completed a 2-month intensive study of Oracle technologies, including SQL, PostgreSQL, and NoSQL databases, followed by a 1-month project. Gained hands-on experience in database design, optimization, and advanced querying. Developed a social media analytics project to demonstrate practical skills.',
      achievements: [
        'Mastered SQL, PostgreSQL, and NoSQL database concepts',
        'Completed a 2-month Oracle technologies curriculum',
        'Developed a social media analytics project as a capstone',
        'Worked with large-scale datasets and implemented efficient data processing',
        'Collaborated with team members on database optimization and best practices'
      ]
    },
    {
      title: 'Software Internship',
      company: 'Hostwire System',
      period: '8 December 2024 - 8 February 2025',
      description: 'Worked on a real-world project using a live Swiggy dataset to build a restaurant recommendation system. Utilized machine learning and data analysis to provide personalized recommendations and insights. Developed an interactive Streamlit dashboard for visualization and user interaction.',
      achievements: [
        'Built a machine learning-based restaurant recommendation system',
        'Processed and analyzed live Swiggy datasets for real-time insights',
        'Developed an interactive Streamlit dashboard for recommendations',
        'Implemented user-friendly features and data visualizations',
        'Enhanced system performance and accuracy through iterative improvements'
      ]
    }
  ]

  const certificates = [
     {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2022',
      credentialId: 'FCC-RWD-2024',
      description: 'Complete course on creating responsive web applications.',
      image: '/freecode.png',
      url: 'https://www.freecodecamp.org/certification/verify'
    },
    {
      title: 'Geospatial Data Analysis',
      issuer: 'DataCamp',
      date: '2023',
      credentialId: 'DC-GEO-2024',
      description: 'Advanced techniques for geospatial data analysis and processing.',
      image: '/geo.png',
      url: 'https://www.datacamp.com/verify'
    },
    {
      title: 'IBM Data Science',
      issuer: 'IBM',
      date: '2023',
      credentialId: 'IBM-DS-2024',
      description: 'Fundamental Python programming for data science applications.',
      image: '/ibm.png',
      url: 'https://www.ibm.com/training/badge-verify'
    },
    {
      title: 'Foundation Course',
      issuer: 'Tech Academy',
      date: '2024',
      credentialId: 'FOUND-2024',
      description: 'Foundational certification covering core programming concepts and practices.',
      image: '/fountation.png',
      url: '#'
    },
    {
      title: 'Building and Deploying an Application on AWS S3',
      issuer: 'NxtWave CCBP 4.0 Academy',
      date: '2024',
      credentialId: 'AWS-S3-2024',
      description: 'Completed a hands-on project deploying a web application on AWS S3, guided by Mr. Revanth Konakanchi, Head of Engineering at NxtWave.',
      image: '/aws.png'
    },
    {
      title: 'ChatGPT Prompt Engineering',
      issuer: 'OpenAI',
      date: '2025',
      credentialId: 'OPENAI-PE-2024',
      description: 'Advanced course on leveraging ChatGPT for various applications.',
      image: '/chatgpt.png',
      url: 'https://www.learnprompting.org/certificates'
    }
  ]

  const projects: Project[] = [
    {
      title: 'AI-Powered Chatbot',
      description: 'Developed a sophisticated chatbot using Large Language Models by fine-tuning Ollama 3.',
      fullDescription: 'An advanced AI chatbot system built with fine-tuned Ollama 3 LLM, providing intelligent conversational experiences with context awareness and high accuracy. The system provides context-aware interactions and improved accuracy through advanced natural language processing techniques.',
      technologies: ['Python', 'Ollama 3', 'NLP', 'Machine Learning'],
      keyFeatures: [
        'Advanced LLM Integration',
        'Context-Aware Conversations',
        'High Accuracy Responses',
        'Fast Processing',
        'Fine-tuned Model Performance'
      ],
      techStack: {
        'AI/ML': ['Ollama 3', 'Natural Language Processing', 'Machine Learning'],
        'Backend': ['Python', 'Model Fine-tuning']
        // 'Features': ['Context Management', 'Response Optimization', 'Conversation Memory']
      },
      githubLink: 'https://github.com/shanker-18/chatbot'
    },
    {
      title: 'Foodiehub',
      description: 'Created a modern, responsive food ordering website showcasing various cuisines and restaurants.',
      fullDescription: 'A beautifully designed food ordering website (Foodiehub) that showcases various cuisines and restaurants with an intuitive user interface. The website features smooth animations, a clean design, and provides users with an excellent food ordering experience with modern web technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      keyFeatures: [
        'Restaurant Showcase',
        'Fully Responsive Design',
        'Smooth Animations',
        'Clean UI/UX',
        'Food Ordering System'
      ],
      techStack: {
        'Frontend': ['React', 'HTML5', 'CSS3', 'JavaScript'],
        'Styling': ['Responsive Design', 'Animation Effects', 'Modern UI'],
        'Features': ['User Experience Optimization', 'Interactive Components']
      },
      githubLink: 'https://github.com/shanker-18/foodiehub',
      liveDemo: 'https://food-order-zdtq.onrender.com'
    },
    {
      title: 'FreelanceHub Platform',
      description: 'Built a comprehensive platform connecting freelance developers with clients.',
      fullDescription: 'A comprehensive freelancing platform that bridges the gap between freelance developers and clients, featuring advanced project management and AI-powered assistance. The platform includes project listings, user profiles, and an integrated AI chatbot that provides real-time information about platform features and available projects.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML','Python'],
      keyFeatures: [
        'Developer-Client Matching',
        'Project Listings Management', 
        'Comprehensive User Profiles',
        'AI Chatbot Integration',
        'Real-time Information System'
      ],
      techStack: {
        'Frontend': ['React', 'Modern UI Components', 'Responsive Design'],
        'Backend': ['Node.js', 'MongoDB'],
        'AI': ['AI Chatbot', 'Machine Learning', 'Smart Recommendations'],
        'Features': ['Real-time Features', 'User Management', 'Project Management'],
        'Authentication': ['Firebase Admin SDK']
      },
      githubLink: 'https://github.com/shanker-18/freelancehub'
    },
    {
      title: 'Dr.Crop - Plant Disease Detection',
      description: 'Developed an AI-powered system for plant disease classification using deep learning.',
      fullDescription: 'An intelligent plant disease detection system using advanced computer vision and deep learning to help farmers identify and treat plant diseases effectively. The application provides real-time treatment recommendations and supports offline functionality with cloud synchronization.',
      technologies: ['Python', 'TensorFlow', 'Computer Vision', 'Flask'],
      keyFeatures: [
        'Plant Disease Classification',
        'Treatment Recommendations',
        'Offline Functionality', 
        'Cloud Synchronization',
        'Real-time Analysis'
      ],
      techStack: {
        'AI/ML': ['TensorFlow', 'Computer Vision', 'Deep Learning', 'Image Processing'],
        'Backend': ['Python', 'Flask', 'Model Training'],
        'Features': ['Image Processing', 'Cloud Integration', 'Offline Support'],
        'Authentication': ['Firebase Admin SDK']
      },
      githubLink: 'https://github.com/shanker-18/drcrop'
    },
    {
      title: 'StudyHub - Mentorship Matchmaking Platform',
      description: 'A robust full-stack mentorship matchmaking platform designed to bridge the gap between students and mentors.',
      fullDescription: 'StudyHub is a comprehensive mentorship platform built using a React frontend and a Node.js/Express backend. The platform allows users to sign up, search for mentors, request mentorship sessions, chat in real-time, and track achievements. The backend integrates with MongoDB for secure and scalable data storage and uses Firebase Admin for authentication and notifications. The frontend is built with Vite for faster performance and optimized bundling, and it\'s fully responsive for use across all devices. Ideal for college students, educators, and communities aiming to foster guided learning and peer mentorship.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'JWT', 'Vite'],
      keyFeatures: [
        'User Authentication (JWT + Firebase)',
        'Book & Manage Mentorship Sessions', 
        'Real-time Chat between Users and Mentors',
        'Track Achievements and Learning Progress',
        'Seamless Deployment on Render with production-grade static file serving'
      ],
      techStack: {
        'Frontend': ['React (Vite)', 'Tailwind CSS', 'JavaScript'],
        'Backend': ['MongoDB'],
        'Authentication': ['Firebase Admin SDK']
        // 'Features': ['Real-time Chat', 'Push Notifications', 'RESTful API', 'Health Monitoring']
      },
      githubLink: 'https://github.com/shanker-18/studyhub'
    },
    {
      title: 'Restaurant Recommendation System',
      description: 'Created a machine learning-based recommendation system using real-time Swiggy dataset.',
      fullDescription: 'An intelligent restaurant recommendation system that leverages machine learning algorithms to analyze user preferences and provide personalized restaurant suggestions using real-world Swiggy data. The system analyzes user preferences and historical data to suggest the best restaurants with an interactive dashboard.',
      technologies: ['Python', 'Streamlit', 'Machine Learning', 'Data Analysis'],
      keyFeatures: [
        'Personalized Recommendations',
        'Real-time Data Analysis',
        'User Preference Learning',
        'Historical Data Processing',
        'Interactive Dashboard'
      ],
      techStack: {
        'AI/ML': ['Machine Learning', 'Data Analysis', 'Recommendation Algorithms'],
        'Frontend': ['Streamlit', 'Interactive Visualizations', 'Dashboard'],
        'Backend': ['Python', 'Data Processing', 'Algorithm Implementation'],
        'Data': ['Swiggy Dataset', 'Real-time Analytics', 'Data Preprocessing']
      },
      githubLink: 'https://github.com/shanker-18/restaurant-recommender',
      liveDemo: 'https://manianvjs.streamlit.app/'
    }
  ]

  const handleCertificateClick = (cert: Certificate) => {
    setSelectedCertificate(cert)
  }

  const closeModal = () => {
    setSelectedCertificate(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setFeedback(null)
    emailjs.send(
      'service_4e94foe',
      'template_xywmkbk',
      {
        name: form.name,
        email: form.email,
        message: form.message,
        reply_to: form.email,
      },
      '4VnIRDFvkTttdIHdT'
    )
      .then(() => {
        setFeedback('Message sent successfully!')
        setForm({ name: '', email: '', message: '' })
      })
      .catch(() => {
        setFeedback('Failed to send message. Please try again later.')
      })
      .finally(() => setSending(false))
  }

  const handleCertificateDownload = (image: string, title: string) => {
    const link = document.createElement('a');
    link.href = image;
    link.download = `${title.replace(/\s+/g, '_')}_certificate.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <a
                href="https://drive.google.com/file/d/1EE_TeZlguIuA4gLXPTcN0_P6FZThZaUr/view?usp=drive_link"
                className="bg-gray-800 border border-pink-500 text-pink-500 px-6 py-3 rounded-lg hover:bg-pink-500/10 transition-colors cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
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
                src="/profile.png"
                alt="Manian VJS"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 transition-all duration-300 hover:shadow-pink-500/20 hover:shadow-2xl hover:border-pink-500 hover:border rounded-2xl">
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
              I am a passionate Full Stack Developer with expertise in AI/ML and web development. Currently pursuing B.Tech in Artificial Intelligence and Data Science at National Engineering College, I combine academic knowledge with practical experience to create innovative solutions.
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
      <section id="experience" className="py-24 px-4 bg-[#18181b] transition-all duration-300 hover:shadow-pink-500/20 hover:shadow-2xl hover:border-pink-500 hover:border rounded-2xl">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-pink-500">Internships & Experience</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey includes internships at leading companies where I've developed expertise in software development and AI/ML.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#23272f] rounded-2xl shadow-lg border border-gray-800 p-8 flex flex-col hover:scale-105 hover:shadow-pink-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500/10">
                    <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0M12 14v7m-4 0h8" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <span className="text-pink-400 font-medium">{exp.company}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-2 text-sm">{exp.period}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <button
                  className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors w-max"
                  onClick={() => setSelectedInternImage(index === 0 ? intern1 : intern2)}
                >
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 transition-all duration-300 hover:shadow-pink-500/20 hover:shadow-2xl hover:border-pink-500 hover:border rounded-2xl">
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
                className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-pink-500/40 hover:shadow-2xl hover:border-pink-500 hover:border-2 hover:scale-105"
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
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-pink-500 hover:text-pink-400 transition-colors inline-flex items-center gap-1"
                  >
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer bg-black/60 backdrop-blur-[6px] overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden cursor-default my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 bg-pink-500 text-white p-2 rounded-full shadow-lg hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="p-8 max-h-[80vh] overflow-y-auto">
                {/* Project Title */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Full Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Project Overview
                  </h3>
                  <p className="text-gray-200 leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.keyFeatures.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg">
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack by Category */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Technology Stack
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(selectedProject.techStack).map(([category, techs]) => (
                      <div key={category} className="bg-gray-800/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-pink-400 mb-3">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                  {selectedProject.liveDemo && (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 px-4 bg-[#18181b] transition-all duration-300 hover:shadow-pink-500/20 hover:shadow-2xl hover:border-pink-500 hover:border rounded-2xl">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-pink-500">Certificates</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional certifications and courses I've completed to enhance my skills.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#23272f] rounded-2xl shadow-lg border border-gray-800 overflow-hidden hover:scale-105 hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer"
                onClick={() => handleCertificateClick(cert)}
              >
                <div className="relative h-48 w-full flex items-center justify-center bg-gray-900">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-40 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">{cert.issuer}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1 text-white">{cert.title}</h3>
                  <p className="text-gray-400 mb-2 text-sm">{cert.date}</p>
                  <p className="text-gray-300 mb-2 text-sm">{cert.description}</p>
                  <span className="inline-block mt-2 text-xs text-gray-500">ID: {cert.credentialId}</span>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer bg-black/60 backdrop-blur-[6px]"
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-6xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden cursor-default"
            >
              {/* Download Button - floating at top right */}
              <button
                onClick={e => {
                  e.preventDefault();
                  handleCertificateDownload(selectedCertificate.image, selectedCertificate.title);
                }}
                className="absolute top-4 right-16 z-20 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                title="Download Certificate"
                aria-label="Download Certificate"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4zm4 8h8m-4-4v8" />
                </svg>
              </button>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-pink-500 text-white p-2 rounded-full shadow-lg hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col md:flex-row gap-0 md:gap-8 items-center p-6 md:p-10">
                <div className="flex-1 flex justify-center items-center">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full max-w-5xl max-h-[90vh] rounded-xl border-4 border-white/30 shadow-xl object-contain bg-white/10"
                  />
                </div>
                <div className="flex-1 mt-8 md:mt-0">
                  <div className="bg-gray-900/80 rounded-xl p-6 shadow-lg border border-white/10">
                    <h3 className="text-3xl font-bold mb-2 text-white flex items-center gap-2">
                      {selectedCertificate.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-pink-500"></span>
                      <span className="text-pink-400 font-semibold text-lg">{selectedCertificate.issuer}</span>
                    </div>
                    <p className="text-gray-400 mb-1 text-base">{selectedCertificate.date}</p>
                    <p className="text-gray-200 mb-4 text-lg">{selectedCertificate.description}</p>
                    <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
                      <span className="text-gray-400 text-sm">ID: <span className="font-mono text-white">{selectedCertificate.credentialId}</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Internship Details Modal */}
      <AnimatePresence>
        {selectedInternImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedInternImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer bg-black/60 backdrop-blur-[6px]"
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden cursor-default"
            >
              <button
                onClick={() => setSelectedInternImage(null)}
                className="absolute top-4 right-4 z-10 bg-pink-500 text-white p-2 rounded-full shadow-lg hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col items-center p-6">
                <img
                  src={selectedInternImage}
                  alt="Internship Details"
                  className="w-full max-w-xs max-h-[60vh] rounded-xl border-4 border-white/30 shadow-xl object-contain bg-white/10"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 transition-all duration-300 hover:shadow-pink-500/20 hover:shadow-2xl hover:border-pink-500 hover:border rounded-2xl">
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
              <form ref={formRef} className="space-y-6" onSubmit={handleSendEmail}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 text-white"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors disabled:opacity-60"
                  disabled={sending}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
                {feedback && (
                  <div className={`text-center mt-4 ${feedback.includes('success') ? 'text-green-400' : 'text-red-400'}`}>{feedback}</div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 