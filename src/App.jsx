import { useEffect } from "react";
import AboutSection from "./components/AboutSection"
import HeroSection from "./components/HeroSection"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Experience from "./components/Experience";
import Nav from "./components/Navigation/Nav";
import Works from "./components/Works";
function App() {

  useEffect(()=> {
         AOS.init()
  })
  return (
    <>
             <Nav />
            <HeroSection />
            <AboutSection />
            <Experience />
            <Works />
    </>
  )
}

export default App
