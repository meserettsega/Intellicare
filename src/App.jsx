import React, { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import IntelliCare from './components/IntelliCare'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <IntelliCare />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App