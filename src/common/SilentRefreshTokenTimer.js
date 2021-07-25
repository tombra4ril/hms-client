import { api } from "../modules/AxiosTools"
import parseJwt, { parseExpiresIn } from "./ParseJwt"

// authenticate users on refresh
const onPageRefresh = (setUser, setIsAuthenticated, setAccessToken) => {
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
            user_category: parseJwt(access_token)["category"],
            user_email: parseJwt(access_token)["email"]?? "",
            user_id: parseJwt(access_token)["user_id"]?? ""
          }
        ))
        setIsAuthenticated(true)
        // set expiration of access token
        setAccessToken(access_token)
        // get expires_in and type(seconds, minutes or hours)
        let expires_in = parseJwt(access_token)["expires_in"]
        let expires_in_type = parseJwt(access_token)["expires_in_type"]
        let silent_refresh_time = parseExpiresIn(expires_in, expires_in_type)
        setTimeout(() => {
          console.log("Silent refresh called, expires in:", expires_in, expires_in_type)
          onPageRefresh(setUser, setIsAuthenticated, setAccessToken)
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
}

const SilentRefreshTokenTimer = (setStates) => {
  try{
    onPageRefresh(setStates.setUser, setStates.setIsAuthenticated, setStates.setAccessToken)
  }catch{
    console.log("Unknown error, when refreshing token!")
  }
}

export default SilentRefreshTokenTimer