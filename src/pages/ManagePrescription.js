import React, {useState, useEffect} from 'react'
import Sidebar from "../components/SideBar"
import ListAdd from '../components/ListAdd'
import Title from '../components/Title'
import Pagination from "../components/Pagination"
import NewInput from "../components/NewInput"
import "./styles/Manage.scss"
import Modal from '../modules/Modal'

const ManagePrescription = () => {
  const [content, setContent] = useState(0)
  const [prescriptions, setPrescriptions] = useState([])
  const [name, setName] = useState("")
  const [nameOfPharmacist, setNameOfPharmacist] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [sex, setSex] = useState("")
  const [date, setDate] = useState(new Date())
  const [dateString, setDateString] = useState("")
  const [caseHistory, setCaseHistory] = useState("")
  const [medication, setMedication] = useState([""])
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
    document.title = "Hospital Management System - prescriptions"

    // set the date
    let _date = `${date.getFullYear()}-${((date.getMonth() + 1).toString()).padStart(2, "0")}-${(date.getDate().toString()).padStart(2, "0")}`
    setDateString(_date)
    setDate(new Date(_date))

    // items for the table
    const prescriptions = [
      {
        "name": "Tombra",
        "date": "2020-10-02",
        "email": "tombra4ril@gmail.com",
        "phone": "+2348105912717",
        "sex": "M",
        "case_history": "History of case"
      },
      {
        "name": "Tombra",
        "date": "2020-10-02",
        "email": "tombra4ril@gmail.com",
        "phone": "+2348105912717",
        "sex": "M",
        "case_history": "History of case"
      },
      {
        "name": "Tombra",
        "date": "2020-10-02",
        "email": "tombra4ril@gmail.com",
        "phone": "+2348105912717",
        "sex": "M",
        "case_history": "History of case"
      },
      {
        "name": "Tombra",
        "date": "2020-10-02",
        "email": "tombra4ril@gmail.com",
        "phone": "+2348105912717",
        "sex": "M",
        "case_history": "History of case"
      },
      {
        "name": "Tombra",
        "date": "2020-10-02",
        "email": "tombra4ril@gmail.com",
        "phone": "+2348105912717",
        "sex": "M",
        "case_history": "History of case"
      },
      {
        "name": "Tombra",
        "date": "2020-10-02",
        "email": "tombra4ril@gmail.com",
        "phone": "+2348105912717",
        "sex": "M",
        "case_history": "History of case"
      },
    ]
    let len = prescriptions.length
    setPrescriptions(prescriptions)
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
  
  // function to get a new name
  const getName = (event) => {
    let name = event.target.value
    setName(name)
  }

   // function to get a new email
   const getEmail = (event) => {
    let email = event.target.value
    setEmail(email)
  }

  // function to get a new phone number
  const getPhone = (event) => {
    let phone = event.target.value
    setPhone(phone)
  }

  // function to get a new sex
  const getSex = (event) => {
    let sex = event.target.value
    setSex(sex)
  }

  // function to get a new med
  const getMedication = (event) => {
    let med = event.target.value
    setMedication(previous => {
      let pre = previous
      let [_, ...others] = pre
      return [med, ...others]
    })
  }

  // function to get a new case history
  const getCaseHistory = (event) => {
    let history = event.target.value
    setCaseHistory(history)
  }

  // function to get a new pharmacist
  const getNameOfPharmacist = (event) => {
    let name = event.target.value
    setNameOfPharmacist(name)
  }

  // adds a new medication element and appends all the input texts
  const addNewInput = (event) =>{
    setMedication(previous => {
      let [...arr] = previous
      arr.push("")
      return arr
    })
  }

  // function to add a new dob
  const getDate = (event) => {
    let _date = event.target.value
    setDateString(_date)
    setDate(new Date(_date))
  }

  // timeout for modal variable
  let hideModal = null

  // function to add a new prescription
  const submitNew = (event) => {
    event.preventDefault()
    // encode the medication
    let med = ""
    for(let _ of medication){
      med = med.concat(_.trim())
      med = med.concat("<==>")
    }
    console.log("name is: ", name)
    console.log("email is: ", email)
    console.log("phone is: ", phone)
    console.log("sex is: ", sex)
    console.log("pharmacist is: ", nameOfPharmacist)
    console.log("medication is: ", med)
    console.log("history is: ", caseHistory)
    console.log("date is: ", date)
  
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
        <Title name="prescription" />
        <div className="bg-gray content-spacing">
          <div className="content-header">
            <ListAdd name="Prescription" onContentShow={showContent} />
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
                    {prescriptions.slice(start, start + numberOfItems).map((appointment, index) => (
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
                    <label className="label">Patient</label>
                    <input className="input" onChange={getName} type="text" />
                    <label className="label">Patient Email</label>
                    <input className="input" onChange={getEmail} type="email" />
                    <label className="label">Patient Phone</label>
                    <input className="input" onChange={getPhone} type="tel" />
                    <label className="label">Patient Sex</label>
                    <select className="input" value={sex} onChange={getSex}>
                      <option value={""} disabled>Select Sex</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                    <label className="label">Name of Pharmacist</label>
                    <select className="input" value={nameOfPharmacist} onChange={getNameOfPharmacist}>
                      <option value={""} disabled>Select Pharmacist</option>
                    </select>
                    <label className="label">Medication</label>
                    <input className="input more" onChange={getMedication} type="text" value={medication[0]} />
                    {
                      medication.length > 1 &&
                      [...Array(medication.length - 1)].map((_, index) => (
                        <NewInput key={index} changeArr={setMedication} arr={medication} index={index + 1} />
                      ))
                    }
                    <span className="label"></span>
                    <span className="input align-right"><span onClick={addNewInput} className="add-more pointer">Add Medication</span></span>
                    <label className="label">Case History</label>
                    <textarea className="input" onChange={getCaseHistory} >
                    </textarea>
                    <label className="label">Date</label>
                    <input className="input" onChange={getDate} type="date" value={dateString} />
                  </div>
                  <div className="bg-gray add-div">
                    <p><button type="submit" className="add-submit-button">Add Prescription</button></p>
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

export default ManagePrescription