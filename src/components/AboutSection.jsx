import { useEffect, useRef, useState } from "react"
import { skills } from "../data/skills"
import { gsap } from "gsap"
const AboutSection = () => {
    const [isIntersecting, setIsIntersecting]  = useState(false)
    const skillsWrap = useRef()

    useEffect(() => {
             const observer = new IntersectionObserver(([entry]) => {
                    setIsIntersecting(entry.isIntersecting);
             })
             if(skillsWrap.current){
                   observer.observe(skillsWrap.current);

                   let tl = gsap.timeline()

                   if(isIntersecting){
                          skillsWrap.current.querySelectorAll('.skill-moja').forEach(kitu => {
                                   tl.to(kitu, {
                                          opacity: 1,
                                          scale: 1,
                                          duration: 0.3
                                   })
                          })
                   }

             }
            
    }, [isIntersecting])
  return (
    <div className="about-section">
               <div className="inner-row">
                            <div className="about-section-content">
                                           <div className="intro">
                                                     <h3>About Me</h3>
                                           </div>
                                           <h1>On a mission to paint the web into a beautiful canvas one web project at a time.</h1>
                                           <div className="explanation-texts">
                                                      <p>Hello, My name is <span className="underlined">Albert Okundi</span>, I build things for the web. Over the years, I&apos;ve built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>
                                                      <p>I&apos;m a creative problem solver, adept at analyzing data, and dedicated to staying up-to-date with the latest industry trends. My goal is to provide exceptional leadership and deliver outstanding results in fast-paced and deadline-driven environments.</p>
                                           </div>



                                           <div className="skills-section">
                                                        <p className="quote">Every Problem is a great chance to do your best and grow</p>
                                                        <h1>Skills & Expertise</h1>
                                                        <p>Majority of the time, I delve in frontend development and create amazing interfaces, however I am also familiar with the below listed backend technologies to be able to deliver results when I am a one man developer team.</p>


                                                        <div className="skills-row" ref={skillsWrap}>
                                                                     { skills.map(item => 
                                                                             <div className="skill-moja" key={item.id} >
                                                                                         <div className="skill-icon">
                                                                                                   <img src={item.icon} alt="Skill Logo" />
                                                                                         </div>
                                                                                         <h4>{item.name}</h4>
                                                                             </div>
                                                                     )}
                                                        </div>
                                           </div>
                            </div>
               </div>
    </div>
  )
}

export default AboutSection