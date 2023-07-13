import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection"
import HeroSection from "./components/HeroSection"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Experience from "./components/Experience";
import Nav from "./components/Navigation/Nav";
import Works from "./components/Works";
import BlogSection from "./components/BlogSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
function App() {
  const [ loader, setLoader] = useState(true)
  useEffect(()=> {
         AOS.init()
  })
  return (
    <>
          { loader ? <Preloader /> : 
                  <>
                           <Nav />
                           <HeroSection />
                           <AboutSection />
                           <Experience />
                           <Works />
                           <BlogSection />
                           <Contact />
                           <Footer />
                  </>
          }
  
    </>
  )
}

export default App
