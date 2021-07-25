import React, {useContext} from 'react'
import SideBarLink from './SideBarLink'
import "./styles/SideBar.scss"
import { StoreContext } from "../common/StoreContext"

const Sidebar = () => {
  const icon_list = [
    "home",
    "dashboard",
    "person",
    "person_outline",
    "accessibility_new",
    "sanitizer",
    "science",
    "attach_money",
    "manage_accounts",
    "settings",
    "account_box",
    "pending_actions",
    "science",
    "king_bed",
    "bloodtype",
    "assignment",
    "account_box" 
  ]
  const name_list = [
    "Dashboard",
    "Department",
    "Doctor",
    "Patient",
    "Nurse",
    "Pharmacist",
    "Laboratorist",
    "Accountant",
    "Monitor Hospital",
    "Settings",
    "Profile",
    "Manage Appointment",
    "Manage Prescription",
    "Bed Allotment",
    "View Blood Bank",
    "Manage Report",
    "Profile"
  ]
  const link_list = [
    "/dashboard",
    "/departments",
    "/doctors",
    "/patients",
    "/nurses",
    "/pharmacists",
    "/laboratorists",
    "/accountants",
    "/hospitals",
    "/settings",
    "/profiles",
    "/manage_appointment",
    "/manage_prescription",
    "/bed_allotment",
    "/blood_bank",
    "/manage_report",
    "/profiles",
  ]
  const {getStates} = useContext(StoreContext)
  const user_category = getStates?.user?.user_category.toLowerCase()
  let test_user = ""
  if(user_category === "admin"){// admin sidebar
    test_user = [true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false]
  }
  else if(user_category === "doctor"){// doctor sidebar
    test_user = [true, false, false, true, false, false, false, false, false, false, false, true, true, true, true, true, true]
  }
  else if(user_category === "patient"){// patient sidebar
  }
  else if(user_category === "nurse"){// nurse sidebar
  }
  else if(user_category === "pharmacist"){// pharm sidebar
  }
  else if(user_category === "laboratorist"){// lab sidebar
  }
  else if(user_category === "accountant"){// accountant sidebar
  }
  else{
    test_user = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  }
  const zipped = []
  test_user.map(test => test).forEach((test, index) => {
    if(test){
      zipped.push([icon_list[index], name_list[index], link_list[index]])
    }
  })

  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <span className="material-icons">bubble_chart</span>
      </div>
      <div className="sidebar-div">
        {
          zipped.map((item) => (
            <div className="sidebar-row" key={item[1]}>
              <SideBarLink key={item[1]} item={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar
