import React, {useState, useEffect, useContext} from 'react'
import "./styles/Title.scss"
import { StoreContext } from "../common/StoreContext"

const Title = ({name}) => {
  const [user_type, setUserType] = useState("")
  // get store
  const {getStates} = useContext(StoreContext)
  const category = getStates?.user?.user_category
  useEffect(() => {
    if(category === "admin"){
      name === "dashboard"? setUserType(category): setUserType("manage")
    }else{
      name === "dashboard"? setUserType(category): setUserType("manage")
    }
  }, [name])

  const names = [
    "doctor",
    "patient",
    "nurse"
  ]
  const names_values = [3, 1, 1]
  const zipped = names.map((names, index) => [names, names_values[index]])
  
  return (
    <div className="title-div">
      <h2><span className="material-icons">verified</span><i>{`${user_type.charAt(0).toUpperCase()}${user_type.slice(1)}`} {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</i></h2>
      <div>
        {
          zipped.map((item) => (
            <div key={item[0]} className="title-staff">
              <p>{item[0].toString().toUpperCase()}</p>
              <p>{item[1].toString().toUpperCase()}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Title
