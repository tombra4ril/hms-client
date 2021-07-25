import {createContext, useState, useEffect} from 'react'
import "../App.scss"
import { api } from '../modules/AxiosTools'
import parseJwt, {parseExpiresIn} from './ParseJwt'

// current store
export const StoreContext = createContext()
export const StoreProvider = ({children}) => {
  const [user, setUser] = useState({
    user_id: "",
    user_email: "",
    user_category: ""
  })
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessToken, setAccessToken] = useState("")
  const [isFinishedLoading, setIsFinishedLoading] = useState(false)

  // getstates
  const getStates = {
    user,
    isAuthenticated,
    accessToken,
  }

  // setstates
  const setStates = {
    setUser,
    setIsAuthenticated,
    setAccessToken,
  }

  // authenticate users on refresh
  const onPageRefresh = () => {
    api.post(process.env.REACT_APP_baseURL + process.env.REACT_APP_refresh_end_point)
    .then(({data: {access_token}}) => {
      try{
        if(access_token){
          // set default authorization header
          api.defaults.headers["Authorization"] = "JWT " + access_token
          // set store states
          setUser(previous => (
            {
              ...previous,
              user_email: parseJwt(access_token)["email"]?? "",
              user_id: parseJwt(access_token)["user_id"]?? "",
              user_category: parseJwt(access_token)["category"],
            }
          ))
          setIsAuthenticated(true)
          // set expiration of access token
          setAccessToken(access_token)
          // get accurate expiration time though its type
          let expires_in = parseJwt(access_token)["expires_in"]
          let expires_in_type = parseJwt(access_token)["expires_in_type"]
          let silent_refresh_time = parseExpiresIn(expires_in, expires_in_type)
          setTimeout(() => {
            console.log("Silent refresh called, expires in:", expires_in, expires_in_type)
            onPageRefresh()
          }, silent_refresh_time)
        }else{
          console.log("No access token!")
        }
      }catch{
        console.log("Unexpected error while setting user data!!!")
      }
    })
    .catch(error => {
      // history.push("/")
      console.log(error)
    })
    .finally(() => {
      setIsFinishedLoading(true)
    })
  }

  useEffect(() => {
    onPageRefresh()
  }, [])

  return (
    <>
      {
        isFinishedLoading?
        <StoreContext.Provider value={{getStates, setStates}} >
          {children}
        </StoreContext.Provider>:
        <div className="animate-reload-div">
          <span className="animate-reload material-icons material-icons-outlined">
          cached
          </span>
        </div>
      }
    </>
  )
}