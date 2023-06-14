import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
           <div className="inner-row">
                      <div className="header-content">
                                <NavLink to={'/'} className='logo'>
                                            <h2>Ally<span>.</span></h2>
                                </NavLink>

                                <nav>
                                             <ul>
                                                      <li><NavLink to={'/'}>About</NavLink></li>
                                                      <li><NavLink to={'/'}>Tech Stack</NavLink></li>
                                                      <li><NavLink to={'/'}>Portfolio</NavLink></li>
                                                      <li><NavLink to={'/'}>Blog</NavLink></li>
                                             </ul>
                                             <div className="right-stuff">
                                                       <NavLink to={'/contact'}>Let&apos;s Talk</NavLink>
                                             </div>
                                </nav>
                      </div>
           </div>
   </header>
  )
}

export default Header