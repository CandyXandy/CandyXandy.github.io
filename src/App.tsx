
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className='page'>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
