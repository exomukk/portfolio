import React from 'react'
import Experience from './components/experience/experience'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Portfolio from './components/portfolio/portfolio'
// import Testimonials from './components/testimonials/testimonials'
import Footer from './components/footer/footer'
// import Services from './components/services/services'
import Contact from './components/contact/contact'
import About from './components/about/about'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App