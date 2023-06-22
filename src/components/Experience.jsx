import { useState } from "react"
import { BsDashCircleDotted } from 'react-icons/bs'
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
                                             <p>Where I have worked</p>
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
                                                             <div className="content-tab-moja">
                                                                        <div className="position">
                                                                                    <div className="intro">
                                                                                            <h3>Web Developer</h3>
                                                                                             <p><span><BsDashCircleDotted /> </span>Amari Consulting Ltd</p>
                                                                                    </div>
                                                                                    <h5>2021 <span></span> Present</h5>
                                                                        </div>
                                                                        <div className="experience-texts">
                                                                                   <p>Amari Consulting is a premier digital agency offering web development in Nairobi, Kenya. I was responsible for the timely and efficient coordination of the following:</p>
                                                                                   <ul>
                                                                                             <li>Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Tailwind, JavaScript, and React</li>
                                                                                             <li>Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness</li>
                                                                                   </ul>
                                                                        </div>
                                                             </div>
                                                </div>
                                      </div>
                          </div>
             </div>
    </div>
  )
}

export default Experience