import { NavLink } from "react-router-dom"
import { gsap } from 'gsap'
import { useEffect, useRef, useState, useContext } from "react"
import { CgMenuRight } from "react-icons/cg"
import { sidebarContext } from "./context"

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
          tl.to( linkWrapper.current.querySelector(".indicator"), {
                 opacity: 1,
                 y: 0,
                 duration: 0.5
          })
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
                                <NavLink to={'/'} className='logo'>
                                            <h2 ref={logoRef}>Ally<span>.</span></h2>
                                </NavLink>

                                <nav>
                                             <ul ref={linkWrapper}>
                                                      <li className="active"><NavLink to={'/'}>Home</NavLink></li>
                                                      <li><NavLink to={'/'}>About </NavLink></li>
                                                      <li><NavLink to={'/'}>Tech Stack</NavLink></li>
                                                      <li><NavLink to={'/'}>Portfolio</NavLink></li>
                                                      <li><NavLink to={'/'}>Blog</NavLink></li>

                                                      <div className="indicator"></div>
                                             </ul>
                                             <div className="right-stuff">
                                                       <NavLink to={'/contact'} ref={btnRef}>Let&apos;s Talk</NavLink>
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