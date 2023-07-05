import { NavLink } from "react-router-dom"
import amari from "../assets/amari.png"
import lively from '../assets/Lively.png'
const Works = () => {
  return (
    <div className="work-section">
              <div className="inner-row">
                         <div className="work-section-content">
                                   <div className="work-side-intro">
                                                <h3>My Portfolio</h3>
                                                <h2>Take a look at my latest projects</h2>
                                </div>
                                  
                                  <div className="work-projects">
                                              <div className="work-project-moja">
                                                           <div className="image-side">
                                                                      <img src={amari} alt="" />
                                                           </div>
                                                           <div className="project-texts">
                                                                    <div className="project-texts-inner">
                                                                             <h2>User Generated Content Web Application</h2>
                                                                            <p>Revolutionizing the marketing industry by connecting various businesses and their customers, the web application offers a platform for uploading videos per brand and earning money when your video is posted on various social media platforms.</p>

                                                                             <NavLink to={'/'}>Check it Out</NavLink>
                                                                    </div>
                                                           </div>
                                              </div>
                                              <div className="work-project-moja">
                                                           <div className="project-texts">
                                                                    <div className="project-texts-inner">
                                                                             <h2>Online Chat Application</h2>
                                                                            <p>An awesome & powerful web application for small and medium-sized businesses giving them a simple, efficient and easy way to engage customer enquiries hence build stronger and fruitful relationships with customers..</p>

                                                                             <NavLink to={'/'}>Check it Out</NavLink>
                                                                    </div>
                                                           </div>
                                                           <div className="image-side">
                                                                      <img src={lively} alt="" />
                                                           </div>
                                              </div>
                                  </div>
                         </div>
              </div>
    </div>
  )
}

export default Works