import React, {useState, useEffect} from 'react'
import Sidebar from "../components/SideBar"
import ListAdd from '../components/ListAdd'
import Title from '../components/Title'
import Pagination from "../components/Pagination"
import "./styles/Manage.scss"

const Doctor = () => {
  const [content, setContent] = useState(0)
  const [doctors, setDoctors] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [dept, setDept] = useState("")
  const [total, setTotal] = useState(0)
  const [numberOfItems, setNumberOfItems] = useState(5)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(start + numberOfItems - 1)
  const [page, setPage] = useState(1)
  const [last, setLast] = useState(Math.ceil(total / numberOfItems))

  // call this when you want to change the section content
  useEffect(() => {
  }, [content])
  
  // This is called when this page is called
  useEffect(() => {
    // set page title
    document.title = "Hospital Management System - Doctors"

    // items for the table
    const docs = [
      {
        "name": "Tombra",
        "dept": "Environmental Engineering"
      },
      {
        "name": "Ere",
        "dept": "Sciences"
      },
      {
        "name": "Preye",
        "dept": "Electrical Electronic Engineering"
      },
      {
        "name": "Bibi",
        "dept": "Mathematics"
      },
      {
        "name": "Jolly",
        "dept": "Physics"
      },
      {
        "name": "Samuel",
        "dept": "Accountant"
      },
      {
        "name": "Kelvin",
        "dept": "Nurse practice"
      },
      {
        "name": "Douye",
        "dept": "General Practitioner"
      },
      {
        "name": "Joshua",
        "dept": "Lab"
      },
      {
        "name": "Anthony",
        "dept": "Pharmacist"
      }
    ]
    let len = docs.length
    setDoctors(docs)
    setTotal(len)
    setLast(Math.ceil(len / numberOfItems))
    end <= len -1? setEnd(end): setEnd(len - 1)
  }, [])
  
  // function for click on a title heading
  const showContent = head_index => {
    setContent(head_index)
  }

  // function for deleting a table row
  const del = (data_id, id) => {
    console.log("Delete clicked for id: ", data_id, " == with an id of: ", id)
  }
  
  // function for setttings for a table row
  const settings = (data_id, id) => {
    console.log("Settings clicked for id: ", data_id, " == with an id of: ", id)
  }
  
  // function to add a new name
  const addName = (event) => {
    let name = event.target.value
    setName(name)
  }

  // function to add a new email
  const addEmail = (event) => {
    let email = event.target.value
    setEmail(email)
  }

  // function to add a new password
  const addPassword = (event) => {
    let password = event.target.value
    setPassword(password)
  }

  // function to confirm a new password
  const addConfirmPassword = (event) => {
    let _password = event.target.value
    console.log("Password and confirm password: ", password === _password)
  }

  // function to add a new address
  const addAddress = (event) => {
    let address = event.target.value
    setAddress(addAddress)
  }

  // function to add a new phone number
  const addPhone = (event) => {
    let phone = event.target.value
    setPhone(phone)
  }
  
  // function to add a new department name
  const addDept = (event)  => {
    let desc = event.target.value
    setDept(desc)
  }
  
  // function to add a new doctor
  const submitNew = (event) => {
    event.preventDefault()
    console.log("Doctor name is: ", name)
    console.log("Doctor email is: ", email)
    console.log("Doctor password is: ", password)
    console.log("Doctor address is: ", address)
    console.log("Doctor phone is: ", phone)
    console.log("Doctor dept is: ", dept)
  }

  // function to handle how many number of items to display
  const handleShowNumber = (event) => {
    let number = parseInt(event.target.value)

    // set the number of items
    setNumberOfItems(number)

    // set start
    let _start = (start + 1) % number === 0? start: start - parseInt(number / 2)
    _start = (_start < 0)? 0: _start
    // set the end
    let _end = _start + number - 1
    _end = (_end > total - 1)? total - 1: _end

    // set states
    setEnd(_end)
    setPage(Math.ceil((_end + 1) / number))
    setLast(Math.ceil(total / number))
  }

  return (
    <div className="section">
      <Sidebar />
      <div className="content-section">
        <Title name="doctor" />
        <div className="bg-gray content-spacing">
          <div className="content-header">
            <ListAdd name="Doctor" onContentShow={showContent} />
          </div>
          <div className="content-body">
            {
              content === 0 &&
              <div className="comp-sect">
                <div className="search-form flex-element flex-just-sp-between">
                  <div className="row-input-div search-form-left">
                    <label>Search:</label>
                    <input type="text" />
                  </div>
                  <div className="row-input-div search-form-right">
                    <label>Show:</label>
                    <select onChange={handleShowNumber}>
                      <option value="5">5</option>
                      {total >= 10 && <option value="10">10</option>}
                      {total >= 20 && <option value="15">15</option>}
                    </select>
                    <span>entries</span>
                  </div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th><span className="material-icons">view_list</span></th>
                      <th>Doctor Name</th>
                      <th>Department</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.slice(start, start + numberOfItems).map((doctor, index) => (
                      <tr key={index}>
                        <td className="align-center">{start + 1 + index}</td>
                        <td>{doctor["name"]}</td>
                        <td>{doctor["dept"]}</td>
                        <td>
                          <div className="flex-element flex-wrap flex-d-center flex-just-sp-around flex-align-cent color-w">
                            <span onClick={() => settings(1, index)} className="material-icons bg-blue">build</span>
                            <span onClick={() => del(2, index)}className="material-icons bg-red">delete</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination start={start} setStart={setStart} end={end} setEnd={setEnd} total={total} page={page} setPage={setPage} numberOfItems={numberOfItems} last={last} />
              </div>
            }
            {
              content === 1 && 
              <div className="content-body add-sect">
                <form onSubmit={event => submitNew(event)}>
                  <div className="bg-gray add-form">
                    <label className="label">Name</label>
                    <input className="input" onChange={addName} type="text" />
                    <label className="label">Email</label>
                    <input className="input" onChange={addEmail} type="email" />
                    <label className="label">Password</label>
                    <input className="input" onChange={addPassword} type="password" />
                    <label className="label">Confirm Password</label>
                    <input className="input" onChange={addConfirmPassword} type="password" />
                    <label className="label">Address</label>
                    <input className="input" onChange={addAddress} type="text" />
                    <label className="label">Phone</label>
                    <input className="input" onChange={addPhone} type="tel" />
                    <label className="label">Department</label>
                    <select className="input" onChange={addDept}>
                      <option disabled>Select Department</option>
                    </select>
                  </div>
                  <div className="bg-gray add-div">
                    <p><button type="submit" className="add-submit-button">Add Doctor</button></p>
                  </div>
                </form>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor