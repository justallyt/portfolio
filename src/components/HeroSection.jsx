import { IoNewspaperOutline } from 'react-icons/io5'
import heroImg from "../assets/heroImg.png"
const HeroSection = () => {
  return (
    <div className="hero-section">
                 <div className="inner-row">
                              <div className="hero-section-content">
                                          <div className="circular-lines">
                                                    <div className="circular-line-one"></div>
                                                    <div className="circular-line-two"></div>
                                          </div>
                                        <div className="heading">
                                                  <h1>Hi, <br /> I&apos;m Albert</h1>
                                                  <p> I build amazing user interfaces that create the best possible user experience for various products on the web.</p>
                                        </div>
                                       <div className="hero-imagery-shadow"> 
                                         
                                       </div>
                                     
                                       <div className="hero-image">
                                                  <img src={heroImg} alt="" />
                                        </div>
                              </div>
                 </div>
    </div>
  )
}

// <p>I  am a Frontend Engineer who builds amazing user interfaces that provide the best possible user experience for different brands.</p>
export default HeroSection