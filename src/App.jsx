
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"

import Navbar from "./Components/Navbar"


import Projects from "./Components/Projects"
import Services from "./Components/Services"
import Skills from "./Components/Skills"
import TechStack from "./TechStack"


function App() {

  return (
    <>
    <Navbar></Navbar>
     <Hero></Hero>
     <TechStack></TechStack>
     <Skills></Skills>
     <About></About>
     <Services></Services>
     <Projects></Projects>
     <Contact></Contact>
     <Footer></Footer>
     
    </>
  )
}

export default App
