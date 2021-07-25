import React, {useContext} from 'react'
import "./styles/Icons.scss"
import { StoreContext } from '../common/StoreContext'

const Icons = () => {
  const title = "admin"
  const icon_list = [
    "person",
    "person_outline",
    "accessibility_new",
    "sanitizer",
    "science",
    "attach_money",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person"
  ]
  const name_list = [
    "Doctor",
    "Patient",
    "Nurse",
    "Pharmacist",
    "Laboratorist",
    "Accountant",
    "Appointment",
    "Payment",
    "Blood Bank",
    "Medicine",
    "Operation Report",
    "Birth Report",
    "Death Report",
    "Bed Allotment",
    "Notice Board",
    "Settings",
    "Language",
    "Backup",
    "Prescription",
    "Bed Allotment",
    "Blood Bank",
    "Manage Report"
  ]
  const link_list = [
    "/" + title + "/doctor",
    "/" + title + "/patient",
    "/" + title + "/nurse",
    "/" + title + "/pharmacist",
    "/" + title + "/laboratorist",
    "/" + title + "/accountant",
    "/" + title + "/doctor",
    "/" + title + "/patient",
    "/" + title + "/nurse",
    "/" + title + "/pharmacist",
    "/" + title + "/laboratorist",
    "/" + title + "/accountant",
    "/" + title + "/doctor",
    "/" + title + "/patient",
    "/" + title + "/nurse",
    "/" + title + "/pharmacist",
    "/" + title + "/laboratorist",
    "/" + title + "/accountant",
    "/" + title + "/nurse",
    "/" + title + "/pharmacist",
    "/" + title + "/laboratorist",
    "/" + title + "/accountant",
  ]

  let test_user = ""
  // get store
  const {getStates} = useContext(StoreContext)
  const user_category = getStates?.user?.user_category
  if(user_category === "admin"){// admin sidebar
    test_user = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false]
  }
  else if(user_category === "doctor"){// doctor sidebar
    test_user = [false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true]
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
    test_user = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  }
  const zipped = []
  test_user.map(test => test).forEach((test, index) => {
    if(test){
      zipped.push([icon_list[index], name_list[index], link_list[index]])
    }
  })

  // handles icon button clicks to a url
  const handleClick = (event) => {
    
  }

  return (
    <div className="dashboard-icons-div">
      {
        zipped.map((item, index) => (
          <div key={index} data-url={item[2]} data-title={item[1]} onClick={handleClick}>
            <div className="icons-div">
              <span className="icons-icon material-icons">{item[0]}</span>
              <span className="icons-text">{item[1]}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Icons
