import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    { 
      category: 'Programming Languages', 
      items: ['Python', 'JavaScript', 'TypeScript', 'Dart', 'SQL'] 
    },
    { 
      category: 'Technologies & Frameworks', 
      items: ['React', 'Flutter', 'Node.js', 'Data Science', 'Machine Learning'] 
    },
    { 
      category: 'Tools & Platforms', 
      items: ['AWS', 'Git', 'Power BI', 'Kaggle', 'VS Code'] 
    },
  ]

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-pink-500">B.Tech Artificial Intelligence and Data Science</h3>
                    <p className="text-gray-300">National Engineering College, Kovilpatti</p>
                    <p className="text-gray-400">6th Semester • Current CGPA: 8.5</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg">
                I am a passionate developer and AI enthusiast, currently pursuing my B.Tech in Artificial Intelligence and Data Science. I combine my technical skills with creativity to build innovative solutions and meaningful applications.
              </p>
              <p className="text-gray-300 text-lg">
                My journey in technology is driven by a deep interest in AI, data science, and web development. I'm constantly learning and exploring new technologies to stay at the forefront of innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-semibold text-white">Skills & Expertise</h2>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-xl font-medium text-pink-500 mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About 