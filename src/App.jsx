import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
