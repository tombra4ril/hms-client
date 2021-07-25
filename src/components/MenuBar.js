import {React} from 'react'
import {Link} from 'react-router-dom'
import "./styles/MenuBar.scss"

const MenuBar = (props) => {
  return (
    <div>
      <div id="side-nav-mask" className={`side-nav ${props.slide}`} onClick={props.handleMenuIconClick}></div>
      <div id="side-nav" className={`side-nav ${props.slide}`}>
        <div>
          <div className="side-menu-icon-div">
            <span className="side-menu-icon material-icons" onClick={props.handleMenuIconClick}>close</span>
          </div>
        </div>
        <div className="side-menu-links-div">
          <Link to="/" onClick={props.closeNavBar}>Home</Link>
          <Link to="/logout/" onClick={props.closeNavBar}>Logout</Link>
          <Link to="" onClick={props.closeNavBar}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default MenuBar