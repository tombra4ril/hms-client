import React, {useState, useEffect} from 'react'
import Sidebar from "../components/SideBar"
import ListAdd from '../components/ListAdd'
import Title from '../components/Title'
import Pagination from "../components/Pagination"
import "./styles/Manage.scss"
import Modal from "../modules/Modal"

const ManageAppointment = () => {
  const [content, setContent] = useState(0)
  const [appointments, setAppointments] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [sex, setSex] = useState("")
  const [date, setDate] = useState(new Date())
  const [dateString, setDateString] = useState("")
  const [total, setTotal] = useState(0)
  const [numberOfItems, setNumberOfItems] = useState(5)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(start + numberOfItems - 1)
  const [page, setPage] = useState(1)
  const [last, setLast] = useState(Math.ceil(total / numberOfItems))
  const [showModal, setShowModal] = useState("hide")
  const [modalStatus, setModalStatus] = useState("success")
  const [modalMessage, setModalMessage] = useState("")

  // call this when you want to change the section content
  useEffect(() => {
  }, [content])
  
  // This is called when this page is called
  useEffect(() => {
    // set page title
    document.title = "Hospital Management System - appointments"

    // set the date
    let _date = `${date.getFullYear()}-${((date.getMonth() + 1).toString()).padStart(2, "0")}-${(date.getDate().toString()).padStart(2, "0")}`
    setDateString(_date)
    setDate(new Date(_date))

    // items for the table
    const appointments = [
      {
        "name": "Tombra",
        "date": "2020-10-02",
        "email": "tombra4ril@gmail.com",
        "phone": "+2348105912717",
        "sex": "M"
      },
      {
        "name": "Preye",
        "date": "2020-10-02",
        "email": "tombra4ril@gmail.com",
        "phone": "+2348105912717",
        "sex": "M"
      },
      {
        "name": "Ere",
        "date": "2020-10-02",
        "email": "tombra4ril@gmail.com",
        "phone": "+2348105912717",
        "sex": "F"
      },
    ]
    let len = appointments.length
    setAppointments(appointments)
    setTotal(len)
    setLast(Math.ceil(len / numberOfItems))
    end <= len -1? setEnd(end): setEnd(len - 1)
  }, [total])
  
  // function for click on a title heading
  const showContent = head_index => {
    setContent(head_index)
  }

  // function for deleting a table row
  const del = (data_id, id) => {
    console.log("del clicked for id: ", data_id, " == with an id of: ", id)
  }
  
  // function for setttings for a table row
  const settings = (data_id, id) => {
    console.log("Settings clicked for id: ", data_id, " == with an id of: ", id)
  }
  
   // function to add a new email
   const addName = (event) => {
    let name = event.target.value
    setName(name)
  }

   // function to add a new email
   const addEmail = (event) => {
    let email = event.target.value
    setEmail(email)
  }

  // function to add a new phone number
  const addPhone = (event) => {
    let phone = event.target.value
    setPhone(phone)
  }

  // function to add a new sex
  const addSex = (event) => {
    let sex = event.target.value
    setSex(sex)
  }

  // function to add a new date
  const addDate = (event) => {
    let _date = event.target.value
    setDateString(_date)
    setDate(new Date(_date))
  }
  // timeout for modal variable
  let hideModal = null

  // function to add a new nurse
  const submitNew = (event) => {
    event.preventDefault()
    console.log("Patient name is: ", name)
    console.log("Patient email is: ", email)
    console.log("Patient phone is: ", phone)
    console.log("Patient sex is: ", sex)
    console.log("Patient date is: ", date)

    // display modal
    setModalMessage("Successfully added a new appointment!")
    setShowModal("show")
    setModalStatus("success")
    hideModal = setTimeout(() => setShowModal("hide"), 5000)
  }

  // closes the modal
  const closeModal = (event) => {
    setShowModal("hide")
    clearTimeout(hideModal)
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
      <Modal show={showModal} message={modalMessage} status={modalStatus} closeModal={closeModal} />
      <Sidebar />
      <div className="content-section">
        <Title name="appointment" />
        <div className="bg-gray content-spacing">
          <div className="content-header">
            <ListAdd name="Appointment" onContentShow={showContent} />
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
                      <th>Patient</th>
                      <th>Date</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Sex</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.slice(start, start + numberOfItems).map((appointment, index) => (
                      <tr key={index}>
                        <td className="align-center">{start + 1 + index}</td>
                        <td>{appointment["name"]}</td>
                        <td>{appointment["date"]}</td>
                        <td>{appointment["email"]}</td>
                        <td>{appointment["phone"]}</td>
                        <td>{appointment["sex"]}</td>
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
                    <label className="label">Phone</label>
                    <input className="input" onChange={addPhone} type="tel" />
                    <label className="label">Sex</label>
                    <select className="input" onChange={addSex}>
                      <option disabled>Select Sex</option>
                    </select>
                    <label className="label">Date</label>
                    <input className="input" onChange={addDate} type="date" value={dateString} />
                  </div>
                  <div className="bg-gray add-div">
                    <p><button type="submit" className="add-submit-button">Add Appointment</button></p>
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

export default ManageAppointment