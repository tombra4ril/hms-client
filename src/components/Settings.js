import React from 'react'
import SideBarLink from "./SideBarLink"

const Settings = () => {
  const icon_list = [
    "date_range",
    "build",
    "language",
    "upgrade",
  ]
  const name_list = [
    "Manage Noticeboard",
    "System Settings",
    "Manage Language",
    "Backup Restore"
  ]
  const link_list = [
    "/settings/noticeboard",
    "/settings/system",
    "/settings/language",
    "/settings/backup_restore"
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

export default Settings
