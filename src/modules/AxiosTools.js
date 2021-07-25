const baseURL = process.env.REACT_APP_baseURL

const axiosInstance = require("axios").create(
  {
    baseURL: baseURL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    }
  }
)

const api = require("axios").create(
  {
    baseURL: baseURL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json",
    }
  }
)
api.defaults.withCredentials = true

// This is what axios interceptors do
// Add a request interceptor
// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
// // Do something with response data
// return response;
// }, function (error) {
// // Do something with response error
// return Promise.reject(error);
// });
api.interceptors.response.use((response) => {
    // Do something before the request is sent
    return response
  },
  async function(error){
    const originalRequest = error.config
    if (typeof error.response === "undefined"){
      console.log(`A server/network error occured`
            + ` Sorry about this - we will get it fixed!`
          )
      return Promise.reject(error)
    }
    if (error.response.status === 401 && originalRequest.url === baseURL + "token/refresh"){
      window.location.href = "/login/"
      return Promise.reject(error)
    }
    if (error.response.status === 500 && originalRequest.url === baseURL + "login/"){
      window.location.href = "/login/"
      return Promise.reject(error)
    }
    if(error.response.data.code === "token_not_valid" && error.response.status === 401 && error.response.status.statusText === "Unauthorized"){
      const refresh_token = localStorage.getItem("refresh_token")
      if(refresh_token){
        const token_parts = JSON.parse(atob(refresh_token.split(".")[1]))

        // exp date in token is express in seconds, while now() is expressed in milliSeconds
        const now = Math.ceil(Date.now() / 1000)
        console.log(token_parts.exp)

        if(token_parts.exp > now){
          return api.post("/token/refresh/", {
            refresh: refresh_token
          })
          .then(response => {
            localStorage.setItem("access_token", response.data.access)
            localStorage.setItem("refresh_token", response.data.refresh)

            api.defaults.headers["Authorization"] = "JWT " + response.data.access
            originalRequest.headers["Authorization"] = "JWT " + response.data.access
            return api(originalRequest)
          })
          .catch(error => {
            console.log(error)
          })
        }else{
          console.log(`Refresh token is expired, token expiry date: ${token_parts.exp}, Today's date: ${now}`)
          window.location.href = "/login/"
        }
      }else{
        console.log("Refresh token not available")
        window.location.href = "/login/"
      }
    }
    return Promise.reject(error)
  }
) 

export {axiosInstance, api}