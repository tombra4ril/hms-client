import React, {useState} from 'react'
import "./styles/CalendarModal.scss"

const CalendarModal = () => {
  const week_days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const [day] = useState((new Date()).getDate())
  const [monthRep, setMonthRep] = useState(months[(new Date()).getMonth()])
  const [month, setMonth] = useState((new Date()).getMonth())
  const [year, setYear] = useState((new Date()).getFullYear())
  // sets the day of the week in integer, min - 0, max - 6
  const [start_of_month, setStartOfMonth] = useState(new Date(`${year} ${month + 1} 1`).getDay())
  // sets the last day of the month, min - 1, max - 31
  const next_month = new Date(`${year} ${month + 2} 1`)
  const [end_of_month, setEndOfMonth] = useState(new Date(next_month - 1).getDate())

  const getDay = (event) => {
    console.log(`Day clicked is: ${event.target.innerHTML}`)
  }

  // decrease the months in the calendar
  const decreaseMonth = (event) => {
    // get the month
    let m = month
    // get the year
    let y = year
    // change month to 12
    if(month === 0){
      m = 12
      y = year - 1
      setYear(y)
      console.log("inside if")
    }
    let new_month = (m - 1) % 12
    setMonth(new_month)
    setMonthRep(months[new_month])
    setStartAndEndOfMonth(new_month, y)
  }
  
  // increase the months in the calendar
  const increaseMonth = (event) => {
    // change year
    let y = year
    if(month === 11){
      y = year + 1
      setYear(y)
    }
    let new_month = (month + 1) % 12
    setMonth(new_month)
    setMonthRep(months[new_month])
    setStartAndEndOfMonth(new_month, y)
  }

  const setStartAndEndOfMonth = (m, y) => {
    setStartOfMonth(new Date(`${y} ${m + 1} 1`).getDay())
    // set the last day of the month
    m = (m + 2) % 12
    m = (m === 0)? 12: m
    let next_month = new Date(`${y} ${m} 1`)
    setEndOfMonth(new Date(next_month - 1).getDate())
  }

  // create a table row
  const TableRows = ({index}) => {
    if(index === 0){
      return (
        <tr className="calendar-days">
          {
            [...Array(7)].map((d, i) => (
              <td className={(i + 1 - start_of_month === day) && (new Date().getFullYear() === year) && (new Date().getMonth() === month)? "active": ""} onClick={getDay} key={i + 1}>{i >= start_of_month? i - start_of_month + 1: ""}</td>
            ))
          }
        </tr>
      )
    }else if(1 + (index * 7) - start_of_month > end_of_month){
      return (<></>)
    }else{
      return (
        <tr className="calendar-days">
          {
            [...Array(7)].map((d, i) => (
              <td className={(i + 1 + (index * 7) - start_of_month === day) && (new Date().getFullYear() === year) && (new Date().getMonth() === month)? "active": ""} onClick={getDay} key={i}>{i + 1 + (index * 7) - start_of_month <= end_of_month? i + 1 + (index * 7) - start_of_month: "" }</td>
            ))
          }
        </tr>
      )
    }
  }

  return (
    <div className="calendar-modal">
      <div className="calendar-years-div flex-align-center">
        <div className="calendar-years"><span onClick={decreaseMonth} className="material-icons">navigate_before</span></div>
        <div className="calendar-years"><span>{monthRep}, {year}</span></div>
        <div className="calendar-years"><span onClick={increaseMonth} className="material-icons">navigate_next</span></div>
      </div>
      <table>
        <thead>
          <tr className="calendar-week-days">
            {week_days.map(d => (
              <td key={d}>{d}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((d, index) => (<TableRows key={index} index={index} />))}
        </tbody>
      </table>
    </div>
  )
}

export default CalendarModal
