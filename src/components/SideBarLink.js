import React, {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom"
import MonitorHospital from "./MonitorHospital"
import Settings from "./Settings"

const SideBarLink = ({item}) => {
  const [showHosSub, setShowHosSub] = useState(false)
  const [showSettingsSub, setShowSettingsSub] = useState(false)
  const [showOthers, setShowOthers] = useState(false)
  const [showDownArrow, setShowDownArrow] = useState(false)

  // display arrrow button
  useEffect(() => {
    if(!(item[1] === "Monitor Hospital" || item[1] === "Settings")){
      setShowOthers(true)
    }else{
      setShowDownArrow(true)
    }
  }, [])

  const showMonitor = event => {
    event.preventDefault()
    setShowHosSub(previous => !previous)
  }
  const showSettings = event => {
    event.preventDefault()
    setShowSettingsSub(previous => !previous)
  }

  return (
    <>
      {
        item[1] === "Monitor Hospital" && 
        <div onClick={showMonitor} className="sidebar-link flex-element flex-align-center pointer">
          <span className="sidebar-row-icon material-icons">{item[0]}</span>
          <span className="sidebar-row-text">{item[1]}</span>
          {showDownArrow && <span className="material-icons">arrow_drop_down</span>}
        </div>
      }
      {
        item[1] === "Settings" && 
        <div onClick={showSettings} className="sidebar-link flex-element flex-align-center pointer">
          <span className="sidebar-row-icon material-icons">{item[0]}</span>
          <span className="sidebar-row-text">{item[1]}</span>
          {showDownArrow && <span className="material-icons">arrow_drop_down</span>}
        </div>
      }
      {
        showOthers &&
        <NavLink className="sidebar-link" activeClassName="active" to={item[2]}>
          <span className="sidebar-row-icon material-icons">{item[0]}</span>
          <span className="sidebar-row-text">{item[1]}</span>
          {showDownArrow && <span className="material-icons">arrow_drop_down</span>}
        </NavLink>
      }
      {showHosSub && <MonitorHospital />}
      {showSettingsSub && <Settings />}
    </>
  )
}

export default SideBarLink
