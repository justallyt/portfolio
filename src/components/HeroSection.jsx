import { ImGithub } from "react-icons/im"
import { BsLinkedin, BsTwitter } from "react-icons/bs"
import  { AiFillInstagram } from "react-icons/ai"
import { GiCloudDownload } from 'react-icons/gi'
import { NavLink } from "react-router-dom"
import heroImg from "../assets/heroImg.png"
import downArrow from "../assets/down-arrow.png"
import {  useEffect, useRef } from "react"
import { gsap } from "gsap"
const HeroSection = () => {
  const titleRef = useRef()
  const paragraphRef = useRef()
  const bubbleRef = useRef()
  const smallBubbleRef = useRef()
  const tinyBubbleRef= useRef();
  const frontendRef = useRef();
  const experienceRef = useRef();
  const imageRef = useRef()
  let tl = gsap.timeline();
  
  useEffect(() => {
          tl.to(titleRef.current, {
                 scale: 1,
                 opacity: 1,
                 duration: 1
          })
      
          tl.to(paragraphRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1
          })
         tl.to(frontendRef.current, {
                 y: 0,
                 opacity: 1,
                 duration: 1
         })
         tl.to(experienceRef.current, {
                x: 0,
                opacity: 1,
                duration: 1
         })
         tl.to(smallBubbleRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1
         })
         tl.to(bubbleRef.current, {
          scale: 1,
          opacity: 1,
          duration: 1
        })
        tl.to(tinyBubbleRef.current, {
              scale: 1,
             opacity: 1,
             duration: 1
        })
        tl.to(imageRef.current, {
          scale: 1,
          x: '-50%',
          duration: 0.7
    })
  }, [tl])
  return (
    <div className="hero-section">
                 <div className="inner-row">
                              <div className="hero-section-content">
                                         
                                          <div className="circular-lines">
                                                    <div className="circular-line-one"></div>
                                                    <div className="circular-line-two"></div>
                                          </div>
                                          <div ref={smallBubbleRef} className="small-bubble"></div>
                                           <div ref={tinyBubbleRef} className="tiny-bubble"></div>
                                        <div className="heading">
                                                  <h1 ref={titleRef}>Hi, <br /> I&apos;m Albert</h1>
                                                  <p ref={paragraphRef}> I build amazing user interfaces that create the best possible user experience for various products on the web.</p>
                                        </div>
                                        <div ref={bubbleRef} className="bubble">
                                                 <NavLink to={'/'}>Resume <span><GiCloudDownload /></span></NavLink>
                                        </div>
                                        <div className="links-muhimu"  ref={imageRef}>
                                                      <ul>
                                                             <li title="Github" className="active"><NavLink to={'https://github.com/justallyt'}><ImGithub /></NavLink></li>
                                                             <li title="Linkedin"  className="active"><NavLink to={'/'}><BsLinkedin /></NavLink></li>
                                                             <li title='Twitter'  className="active"><NavLink to={'/'}><BsTwitter /></NavLink></li>
                                                             <li title="instagram" className="active"><NavLink to={'/'}><AiFillInstagram /></NavLink></li>
                                                      </ul>
                                        </div>
                                       <div  className="hero-imagery-shadow">   </div>
                                       <div className="notable-texts">
                                                     
                                                     <div ref={frontendRef} className="small-box special">
                                                              Frontend Engineer
                                                     </div>
                                                     <div ref={experienceRef} className="small-box experience">
                                                                5+ Years of Experience
                                                     </div>
                                       </div>
                                       <div className="hero-image">
                                                  <img src={heroImg} alt="" />
                                        </div>

                                        <div className="scroll-down">
                                                    <p>Scroll Down</p>
                                                    <img src={downArrow} alt="" />
                                        </div>
                              </div>
                 </div>
    </div>
  )
}

// <p>I  am a Frontend Engineer who builds amazing user interfaces that provide the best possible user experience for different brands.</p>
export default HeroSection