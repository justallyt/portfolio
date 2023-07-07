
import { gsap } from 'gsap'
import { useEffect, useRef, useState, useContext } from "react"
import { CgMenuRight } from "react-icons/cg"
import { sidebarContext } from "./context"
import { Link } from "react-scroll"
const Header = () => {
 const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext)
   const logoRef = useRef();
   const linkWrapper = useRef();
   const btnRef = useRef()
   const [ scroll, setScroll ] = useState(false)
   
   useEffect(()=>{
          let tl = gsap.timeline();

          tl.to(logoRef.current, {   
                x: 0,
                opacity: 1,
                duration: 0.8
          })

          linkWrapper.current.querySelectorAll("li").forEach(item => {
                 tl.to(item, {
                       opacity: 1,
                       y: 0,
                       duration: 0.5
                 })
          })
       //    tl.to( linkWrapper.current.querySelector(".indicator"), {
       //           opacity: 1,
       //           y: 0,
       //           duration: 0.5
       //    })
         tl.to(btnRef.current, {
               opacity: 1,
               x: 0,
               duration: 0.7
         })
   }, [])

   //change Navbar
   window.addEventListener("scroll", ()=> {
           if(window.scrollY >  80){
                  setScroll(true)
           }else{
                  setScroll(false)
           }
   })

   //open Mobile Menu
   const openMobileMenu = () => setSidebarStatus(!sidebarStatus);
  return (
    <header className={ scroll ? 'onscroll' : ''}>
           <div className="inner-row">
                      <div className="header-content">
                                <Link to='home' smooth={true} className='logo'>
                                            <h2 ref={logoRef}>Ally<span>.</span></h2>
                                </Link>

                                <nav>
                                             <ul ref={linkWrapper}>
                                                      <li><Link activeClass="active" to='home' spy={true} smooth={true} offset={-100}>Home</Link></li>
                                                      <li><Link activeClass="active" to='about' spy={true} smooth={true} offset={-100}>About </Link></li>
                                                      <li><Link activeClass="active" to='experience' spy={true} smooth={true}>Experience</Link></li>
                                                      <li><Link activeClass="active" to='portfolio' spy={true} smooth={true} offset={-100}>Portfolio</Link></li>
                                                      <li><Link to='blog' activeClass="active" spy={true} smooth={true} offset={-60}>Blog</Link></li>

                                                      <div className="indicator"></div>
                                             </ul>
                                             <div className="right-stuff">
                                                        <div className="contact-btn" ref={btnRef}>
                                                                  <Link to='contact' smooth={true}>Let&apos;s Talk</Link>
                                                        </div>
                                                       <div className="mobile-btn" onClick={openMobileMenu}>
                                                               <span><CgMenuRight /></span>
                                                     </div>
                                             </div>
                                </nav>
                      </div>
           </div>
   </header>
  )
}

export default Header