const parseJwt = (token) => {
  try{
    return JSON.parse(atob(token.split(".")[1]))
  }catch(error){
    return null
  }
}

export const parseExpiresIn = (expires_in, expires_in_type) => {
  expires_in = parseInt(expires_in)
  let convertedExpiresIn = null
  switch(expires_in_type.toLowerCase()){
    case("seconds"):
      if(expires_in >= 10){
        // removes 5 seconds
        convertedExpiresIn = (expires_in * 1000) - 5000
      }else if(expires_in > 2){
        //removes 1 second
        convertedExpiresIn = (expires_in * 1000) - 1000
      }else{
        // removes 500 millisecond
        convertedExpiresIn = (expires_in * 1000) - 500
      }
      break
    case("minutes"):
      if(expires_in >= 2){
        // removes 1 minute
        convertedExpiresIn = (expires_in * 60 * 1000) - (60 * 1000)
      }else{
        // removes 30 seconds
        convertedExpiresIn = (expires_in * 60 * 1000) - (30 * 1000)
      }
    break
    case("hours"):
      // removes 5 minutes
      convertedExpiresIn = (expires_in * 60 * 60 * 1000) - (5 * 60 * 1000)
      break
    default:
      convertedExpiresIn = null
  }
  return convertedExpiresIn
}

export default parseJwt