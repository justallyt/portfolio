import { useState } from "react"
import { BsDashCircleDotted, BsBrightnessHighFill } from 'react-icons/bs'
import { experiences } from "../data/experiences";
const Experience = () => {
    const [ active, setActive ] = useState(0);

    const switchActive = (i) => {
          setActive(i);
    }
  return (
    <div className="experience-section">
             <div className="inner-row">
                          <div className="experience-section-content">
                                      <div className="intro">
                                             <h3>Where I have worked</h3>
                                              <h1>Experience</h1>
                                      </div>

                                      <div className="experience-row">
                                                <div className="experience-switches">
                                                          <ul>
                                                                  <li className={active === 0 ? 'active' : ''} onClick={() => switchActive(0)}><span>Amari Consulting</span></li>
                                                                  <li className={active === 1 ? 'active': ''} onClick={() => switchActive(1)}><span>Wajibu Web Agency</span></li>
                                                                  <li className={active === 2? 'active' : ''} onClick={() => switchActive(2)}><span>Kuza Lab</span></li> 

                                                                  <div className="active-dot"></div>
                                                          </ul>                          
                                                </div>

                                                <div className="experience-content-tabs">
                                                             { experiences.map(item =>  
                                                                <div className={active === item.id ? "content-tab-moja active" : "content-tab-moja"} key={item.id} >
                                                                      <div className="position">
                                                                                  <div className="intro">
                                                                                          <h3>{item.position}</h3>
                                                                                           <p><span><BsDashCircleDotted /> </span>{item.company}</p>
                                                                                  </div>
                                                                                  <h5>{item.period.yearStart} <span></span> {item.period.yearEnd}</h5>
                                                                      </div>
                                                                      <div className="experience-texts">
                                                                                 <p>{item.textIntro}</p>
                                                                                 <ul>
                                                                                         { item.duties.map(kitu => <li key={kitu}><span><BsBrightnessHighFill /></span>{kitu}</li>)}
                                                                                 </ul>
                                                                      </div>
                                                               </div>
                                                            )}
                                                </div>
                                      </div>
                          </div>
             </div>
    </div>
  )
}

export default Experience