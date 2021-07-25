import React, {useState, useContext} from 'react'
import SectionTitle from './SectionTitle'
import { StoreContext } from "../common/StoreContext"

const NoticeBoard = ({title, value}) => {
  const [day, setDay] = useState(new Date().getDate())
  if(day.toString().length < 2){
    setDay(`0${day}`)
  }
  const month = new Date().toLocaleString("default", {month: "short"})
  // get store
  const {getStates} = useContext(StoreContext)
  const user_category = getStates?.user?.user_category
  return (
    <div className="noticeboard-section">
        <SectionTitle title={title} icon="notifications" />
        <div className="notice-area flex-element flex-just-sp-between">
          <div className="notice-title flex-element flex wrap flex-left">
            <div><span className="material-icons">notifications_active</span></div>
            <div className="flex-element flex-column">
              <span className="font-big">{`${user_category.charAt(0).toUpperCase()}${user_category.slice(1)}`}</span>
              <span>appointments</span>
            </div>
          </div>
          <div className="flex-element flex-column">
            <span className="big">{day}</span>
            <span>{month}</span>
          </div>
        </div>
    </div>
  )
}

export default NoticeBoard
