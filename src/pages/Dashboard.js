import React, {useEffect, useContext} from 'react'
import Sidebar from "../components/SideBar"
import Title from '../components/Title'
import "./styles/Dashboard.scss"
import Icons from '../components/Icons'
import Calendar from "../components/Calendar"
import NoticeBoard from "../components/NoticeBoard"

const Dashboard = ({getStates}) => {
  useEffect(() => {
    document.title = "Hospital Management System - Dashboard"
  }, [])

  return (
    <div className="section">
      <Sidebar />
      <div className="content-section">
        <Title name="dashboard" />
        <Icons />
        <div className="content-body-pad flex-wrap">
          <Calendar title="Calender Schedule" />
          <NoticeBoard title="Noticeboard" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard