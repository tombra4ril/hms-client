import React from 'react'
import "./styles/SectionTitle.scss"

const SectionTitle = ({title, icon, name}) => {
  return (
    <div className="section-head">
      <div className="section-title-div flex-element flex-justify-sp-between">
        <span className="material-icons">{icon}</span>
        <span>{title}</span>
      </div>
      {
        name === "calendar" && 
        <div className="calendar-title-div flex-element">
          <div className="section-title-div active">
            <span className="material-icons">event</span>
            <span>Month</span>
          </div>
          <div className="section-title-div">
            <span className="material-icons">calendar_view_week</span>
            <span>Week</span>
          </div>
          <div className="section-title-div">
            <span className="material-icons">calendar_today</span>
            <span>Day</span>
          </div>
        </div>
      }
    </div>
  )
}

export default SectionTitle
