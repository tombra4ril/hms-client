import React from 'react'
import SectionTitle from "./SectionTitle"
import CalendarModal from "./CalendarModal"

const Calendar = ({title}) => {
  return (
    <div className="calendar-section">
      <SectionTitle name="calendar" title={title} icon="today" />
      <CalendarModal />
    </div>
  )
}

export default Calendar