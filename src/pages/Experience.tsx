import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Tech Solutions Inc.",
      period: "June 2024 - Present",
      description: "Working on machine learning models and data analysis projects.",
      achievements: [
        "Developed predictive models for customer behavior analysis",
        "Implemented data visualization dashboards using Power BI",
        "Collaborated with cross-functional teams on data-driven solutions"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Digital Innovations",
      period: "January 2024 - May 2024",
      description: "Full-stack development using modern technologies.",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Implemented RESTful APIs and database integrations",
        "Optimized application performance and user experience"
      ]
    },
    {
      title: "AI Research Assistant",
      company: "University Research Lab",
      period: "August 2023 - December 2023",
      description: "Research and development in artificial intelligence.",
      achievements: [
        "Conducted research on natural language processing models",
        "Published findings in academic journals",
        "Developed prototype AI applications"
      ]
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
          <h1 className="text-4xl font-bold text-white mb-12">Experience</h1>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative pl-8 border-l-2 border-pink-500"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-pink-500 rounded-full"></div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-pink-500">{exp.company}</p>
                    </div>
                    <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience 