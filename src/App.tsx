import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'

function App() {
	return (
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
	)
}

export default App
