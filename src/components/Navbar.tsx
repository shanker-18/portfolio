import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'home', text: 'Home' },
  { id: 'about', text: 'About' },
  { id: 'experience', text: 'Experience' },
  { id: 'certificates', text: 'Certificates' },
  { id: 'contact', text: 'Contact' },
]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120 // adjust offset for navbar height
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const el = document.getElementById(section.id)
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section.id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <span className="text-white font-bold text-xl cursor-pointer">Manian VJS</span>
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === section.id ? 'text-pink-500 font-bold underline underline-offset-8' : ''}`}
                  style={{ outline: 'none', border: 'none', background: 'none' }}
                >
                  {section.text}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button (not implemented) */}
            <button className="text-white hover:text-pink-500 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 