import { NavLink } from "react-router-dom"
import { HiArrowRight } from "react-icons/hi"
import code1 from "../assets/code1.jpg"
import code2 from "../assets/code2.jpg"
import code3 from '../assets/code3.jpg'
const BlogSection = () => {
  return (
    <div className="blog-section">
              <div className="inner-row">
                         <div className="blog-section-content">
                                     <div className="intro">
                                                <div className="intro-base">
                                                         <h3>Insights</h3>
                                                         <h1>Recent Articles</h1>
                                                </div>
                                                <NavLink to={'/'}>Read Full Blog <span><HiArrowRight /></span></NavLink>
                                                {/* <p>I write about the problems I encounter when building different features on applications and show how I worked around them so that you don&apos;t have to encounter the same.</p> */}
                                     </div>

                                     <div className="articles-row">
                                                <div className="article-moja">
                                                            <img src={code1} alt="" />
                                                            <div className="simple-overlay"></div>
                                                            <div className="article-texts">
                                                                      <div className="category">
                                                                                 <h4>Backend</h4>
                                                                      </div>
                                                                      <div className="date">
                                                                                <p>January 22nd, 2023</p>
                                                                                <span></span>
                                                                                <p>5 min read</p>
                                                                      </div>
                                                                      <h2>How to optimize your context value</h2>
                                                            </div>
                                                </div>
                                                <div className="article-moja">
                                                            <img src={code2} alt="" />
                                                            <div className="simple-overlay"></div>
                                                            <div className="article-texts">
                                                                      <div className="category">
                                                                                 <h4>Backend</h4>
                                                                      </div>
                                                                      <div className="date">
                                                                                <p>January 22nd, 2023</p>
                                                                                <span></span>
                                                                                <p>5 min read</p>
                                                                      </div>
                                                                      <h2>How to optimize your context value</h2>
                                                            </div>
                                                </div>
                                                <div className="article-moja">
                                                            <img src={code3} alt="" />
                                                            <div className="simple-overlay"></div>
                                                            <div className="article-texts">
                                                                      <div className="category">
                                                                                 <h4>Backend</h4>
                                                                      </div>
                                                                      <div className="date">
                                                                                <p>January 22nd, 2023</p>
                                                                                <span></span>
                                                                                <p>5 min read</p>
                                                                      </div>
                                                                      <h2>How to optimize your context value</h2>
                                                            </div>
                                                </div>
                                     </div>
                         </div>
              </div>
    </div>
  )
}

export default BlogSection