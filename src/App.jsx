import { useEffect } from "react";
import AboutSection from "./components/AboutSection"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

  useEffect(()=> {
         AOS.init()
  })
  return (
    <>
          <Header />
          <HeroSection />
          <AboutSection />
    </>
  )
}

export default App
