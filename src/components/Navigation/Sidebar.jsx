import  { useContext, useEffect, useRef } from 'react'
import { sidebarContext } from './context'
import { gsap } from 'gsap'
import { CgClose } from "react-icons/cg"
import { NavLink, useLocation, useParams } from 'react-router-dom'
const Sidebar = () => {
    const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext)
    const wrapperRef = useRef();
    const overlayRef = useRef();
    const linksWrap = useRef()
    const btnRef = useRef()
    const logoRef = useRef();

    const removeMobileMenu = () =>{
          setSidebarStatus(false)
    }
  

    useEffect(() => {
           if(sidebarStatus){
                wrapperRef.current.classList.add("active")

                let tl = gsap.timeline()

                tl.to(overlayRef.current, {
                       y: 0,
                       clipPath: 'circle(100% at center)',
                       duration: 0.5
                })
                tl.to(wrapperRef.current.querySelector('.logo'), {
                     x: 0,
                     duration: 0.3
                })
               tl.to(wrapperRef.current.querySelector(".close-btn"), {
                    x: 0,
                    duration: 0.3,
                    opacity: 1,
               })
               linksWrap.current.querySelectorAll("li").forEach(item => {
                     tl.to(item, {
                         opacity: 1,
                          y: 0,
                          duration: 0.2
                     })
               })

               tl.to(btnRef.current,{
                      opacity: 1,
                      y: 0
               } )
           }

           if(!sidebarStatus && wrapperRef.current.classList.contains('active')){
               let tl = gsap.timeline()

               tl.to(btnRef.current, {
                    opacity: 0,
                    y: '50px'
               })

               linksWrap.current.querySelectorAll("li").forEach(item => {
                  tl.to(item, {
                       opacity: 0,
                       y: '50px',
                       duration: 0.3
                  })
               })

                tl.to(wrapperRef.current.querySelector('.logo'), {
                     x: '-100%',
                     duration: 0.1
                })
               tl.to(wrapperRef.current.querySelector(".close-btn"), {
                    x: "100%",
                    opacity: 0,
                    duration: 0.1
               })

               tl.to(overlayRef.current, {
                       y: "-200px",
                       clipPath: 'circle(200px at top left)',
                       duration: 0.5
                })

               setTimeout(()=>{
                wrapperRef.current.classList.remove("active")
               }, 3300)
           }
    }, [sidebarStatus])

    const param = useParams()
    const locator = useLocation()
  return (
    <div className="sidebar-wrapper" ref={wrapperRef}>
             <div className="sidebar-wrapper-overlay" ref={overlayRef}></div>
             <div className="sidebar-content">
                   <div className="inner-row">
                           <div className="sidebar-head">
                                    <NavLink to={'/'} className='logo'>
                                            <h2 ref={logoRef}>Ally<span>.</span></h2>
                                   </NavLink>
                                     <div className="close-btn" onClick={removeMobileMenu}>
                                             <span><CgClose /></span>
                                     </div>
                           </div>
                           <div className="sidebar-nav">
                                     <ul ref={linksWrap}>
                                             <li><NavLink to={'/'}>Home</NavLink></li>
                                             <li><NavLink to={'/about'}>About</NavLink></li>
                                             <li><NavLink to={'/services'} activeclassname={JSON.stringify(param) !== '{}'? 'active' : ' '}>Services</NavLink></li>
                                             <li><NavLink to={'/projects'} className={ locator.pathname.slice(1,8) === 'project' ? 'active' : ''}>Projects</NavLink></li>
                                             <li><NavLink className={ locator.pathname.slice(1,8) === 'article' ? 'active' : ''} to={'/articles'}>Articles</NavLink></li>
                                     </ul>
                           </div>
                           <div className="mobile-contact-btn">
                                      <NavLink  ref={btnRef} to={'/contact'}>Get in Touch </NavLink>
                           </div>
                   </div>
             </div>
    </div>
  )
}

export default Sidebar