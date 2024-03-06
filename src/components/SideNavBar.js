import React, {useState} from 'react'
//import Logo from '../assets/LogoResto.png'
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import  { NavBarElements } from './NavBarElements';
import './SideNavBar.css';
import { IconContext } from 'react-icons'

const SideNavBar = () => {

    const [navbar, setNavbar] = useState(false) // Tableau déstructuré 

    const activeSideNavBar = () => setNavbar(!navbar)

  return (
    <>
    <IconContext.Provider value={{ color: 'ghostwhite'}}>
      <div className='navBar'>
            <Link to="#" className='menu-icons'>
            <TiThMenuOutline onClick={activeSideNavBar} />
            </Link>
      </div>

      <nav className={ navbar ? 'side-menu active' : 'side-menu'}>
        <ul className='navbar-options' onClick={activeSideNavBar}>
            <li className='navbar-close'>
                <Link to="#" className="menu-icons">
                   <IoCloseOutline /> 
                </Link>
            </li>
            {NavBarElements.map((item, index) => {
                return (
                    <li key={index} className={item.elementClass}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    </li>
                )
            }

            )}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default SideNavBar
