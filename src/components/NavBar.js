import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./styles/NavBar.scss"
import MenuBar from './MenuBar'
import ViewPort from "../modules/ViewPort"

const NavBar = () => {
  // Side menu
  const breakpoint = 800
  const view_port = ViewPort()
  const [side_menu_button, showSideMenuButton] = useState(false)
  useEffect(() => {
    if(view_port <= breakpoint){
      showSideMenuButton(true)
    }else{
      if(side_menu_button === true && view_port > breakpoint){
        showSideMenuButton(false)
        slideNavDiv("")
      }
    }
  }, [view_port, side_menu_button])
  
  // Menu button click
  const [slide, slideNavDiv] = useState("")
  const handleMenuIconClick = (event) => {
    if(slide === ""){
      slideNavDiv("slide")
    }else{
      closeNavBar()
    }
  }
  const closeNavBar = () => {
    slideNavDiv("")
  }

  const SIDE_MENU = () => {
    return (
      <div>
          <MenuBar slide={slide} handleMenuIconClick={handleMenuIconClick} closeNavBar={closeNavBar} />
      </div>
    )
  }

  
  return (
    <>
      <nav>
        <div className="logo-icon-div">
        <Link to="/">
          <span className="logo-icon-text">H</span>
            <span className="material-icons">bubble_chart</span>
          <span className="logo-icon-text">S</span>
        </Link>
        </div>
        {!side_menu_button && 
          <div className="menu-links-div">
            <Link to="/">Home</Link>
            <Link to="/logout/">Logout</Link>
            <Link to="">Contact</Link>
          </div>
        }
        {side_menu_button && <div onClick={handleMenuIconClick}><span className="material-icons nav-menu-icon">menu</span></div>}
      </nav>
      {side_menu_button && <SIDE_MENU />}
    </>
  )
}

export default NavBar