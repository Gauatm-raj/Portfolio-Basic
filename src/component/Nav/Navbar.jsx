import React, { useRef } from 'react'
import "./nav.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"


const Navbar = () => {
  const menuRef=useRef();
  
  function openRef(){
    menuRef.current.style.right="0"
  }
  function closeRef(){
    menuRef.current.style.right="-300px"
  }
  return (
    <div className='navbar'>
        <h1 className='logo'>Gautam</h1>
        {/* <img src={menu_open} onClick={openRef} alt="" className='nav-mob-open' /> */}
        <ul ref={menuRef} className='nav-menu'>
        {/* <img className='nav-mob-close' src={menu_close} onClick={closeRef} alt="" /> */}
            <li><AnchorLink className="anchor-link" offset={50} href="#home">Home</AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#about">About</AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#project">Projects</AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#home">Portfolio</AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#contact">Contact</AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar