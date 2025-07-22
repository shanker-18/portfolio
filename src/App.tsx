<<<<<<< HEAD
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
>>>>>>> 429974fac0693d579c69cef4b0bce0835a70e8ca
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'

function App() {
	return (
<<<<<<< HEAD
		<div className="min-h-screen bg-gray-900 text-white">
			<Navbar />
			<section id="home">
				<Home />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="experience">
				<Experience />
			</section>
			<section id="certificates">
				<Certificates />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</div>
=======
		<Router>
			<div className="min-h-screen bg-gray-900 text-white">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/certificates" element={<Certificates />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</Router>
>>>>>>> 429974fac0693d579c69cef4b0bce0835a70e8ca
	)
}

export default App
