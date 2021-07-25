import React from 'react'
import SideBarLink from "./SideBarLink"

const MonitorHospital = () => {
  const icon_list = [
    "pending_actions",
    "payments",
    "bed",
    "bloodtype",
    "medication",
    "content_cut",
    "child_care",
    "sick"
  ]
  const name_list = [
    "View Appointment",
    "View Payment",
    "View Bed Status",
    "View Blood Bank",
    "View Medicine",
    "View Operation",
    "View Birth Report",
    "View Death Report"
  ]
  const link_list = [
    "/manage/appointment",
    "/manage/payment",
    "/manage/bed_status",
    "/manage/blood_bank",
    "/manage/medicine",
    "/manage/operation",
    "/manage/birth_report",
    "/manage/death_report"
  ]

  const zipped = icon_list.map((_, index) => [icon_list[index], name_list[index], link_list[index]])

  return (
    <div className="sub-menu">
      {
        zipped.map((item, index) => (
          <div className="sidebar-row small-font small-icon" key={item[1]}>
            <SideBarLink key={index} item={item} />
          </div>
        ))
      }
    </div>
  )
}

export default MonitorHospital
