import { NavLink } from "react-router-dom"
import { HiSun, HiOutlineSun } from "react-icons/hi"
const Header = () => {
  return (
    <header>
           <div className="inner-row">
                      <div className="header-content">
                                <NavLink to={'/'} className='logo'>
                                            <span>Albert</span>
                                           <span>Okundi</span>
                                </NavLink>

                                <nav>
                                             <ul>
                                                      <li><NavLink to={'/'}>About</NavLink></li>
                                                      <li><NavLink to={'/'}>Tech Stack</NavLink></li>
                                                      <li><NavLink to={'/'}>Portfolio</NavLink></li>
                                                      <li><NavLink to={'/'}>Blog</NavLink></li>
                                             </ul>
                                             <div className="right-stuff">
                                                       <NavLink to={'/contact'}>Get In Touch</NavLink>
                                                       <span><HiOutlineSun /></span>
                                             </div>
                                </nav>
                      </div>
           </div>
   </header>
  )
}

export default Header