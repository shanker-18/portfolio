import React from 'react'
import { motion } from 'framer-motion'
const Certificates: React.FC = () => {
  const certificates = [
    {
      title: "IBM Certification",
      issuer: "IBM",
      date: "2024",
      credential: "IBM-CERT",
      description: "Professional certification from IBM covering essential skills and technologies.",
      image: '/ibm.png'
    },
    {
      title: "ChatGPT Prompt Engineering",
      issuer: "OpenAI",
      date: "2024",
      credential: "OPENAI-CERT",
      description: "Specialized certification in ChatGPT prompt engineering and AI interaction.",
      image: '/chatgpt.png'
    },
    {
      title: "FreeCodeCamp Certification",
      issuer: "FreeCodeCamp",
      date: "2024",
      credential: "FCC-CERT",
      description: "Comprehensive web development certification covering modern technologies and best practices.",
      image: '/freecode.png'
    },
    {
      title: "Geospatial Analysis",
      issuer: "Geo Institute",
      date: "2024",
      credential: "GEO-CERT",
      description: "Advanced certification in geospatial analysis and mapping technologies.",
      image: '/geo.png'
    },
    {
      title: "Foundation Course",
      issuer: "Tech Academy",
      date: "2024",
      credential: "FOUND-CERT",
      description: "Foundational certification covering core programming concepts and practices.",
      image: '/fountation.png'
    }
  ]

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Certificates</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.credential}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-pink-500 mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
                  <p className="text-gray-300 mb-4">{cert.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Credential ID: {cert.credential}</span>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                      View Certificate
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default Certificates 