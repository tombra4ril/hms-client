import React, {useEffect, useContext} from "react"
import { useHistory, useLocation } from "react-router-dom"
import {StoreContext} from "../common/StoreContext"
import parseJwt from "../common/ParseJwt"

const Auth = (access_token) => {
  // get store
  const {setStates} = useContext(StoreContext)
  // get the referral location
  const {state: location} = useLocation()
  // get the user history
  const history = useHistory()

  useEffect(() => {
    
  }, [])

  return null
}

export default Auth