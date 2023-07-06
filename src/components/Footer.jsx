import { ImGithub } from "react-icons/im"
import { BsLinkedin, BsTwitter } from "react-icons/bs"
import  { AiFillInstagram } from "react-icons/ai"
import { NavLink } from "react-router-dom"
const Footer = () => {
  return (
    <footer>
             <div className="inner-row">
                        <div className="footer-content">
                                    <p>&copy; Albert Okundi {new Date().getFullYear()}</p>
                                    <div className="footer-socials">
                                              <ul>
                                                        <li title="Github" className="active"><NavLink to={'https://github.com/justallyt'}><ImGithub /></NavLink></li>
                                                        <li title="Linkedin"  className="active"><NavLink to={'/'}><BsLinkedin /></NavLink></li>
                                                        <li title='Twitter'  className="active"><NavLink to={'/'}><BsTwitter /></NavLink></li>
                                                        <li title="instagram" className="active"><NavLink to={'/'}><AiFillInstagram /></NavLink></li>
                                              </ul>
                                    </div>
                        </div>
             </div>
    </footer>
  )
}

export default Footer