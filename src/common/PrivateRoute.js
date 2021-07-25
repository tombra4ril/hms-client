import React, {useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from "../components/NavBar"
import { StoreContext } from './StoreContext'

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  // get store
  const {getStates: {isAuthenticated}} = useContext(StoreContext)

  // clear component and redirect
  const RedirectClearLocalStorage = ({path}) => {
    localStorage.clear()
    return (
      <Redirect to={
        {
          pathname: "/",
          state: {
            from: path
          }
        }             
      } />
    )
  }

  // confirm authentication (For testing purposes, will delete later)
  // api.post(process.env.REACT_APP_baseURL + "test/auth/")

  return (
      <>
        <NavBar />
        {
          isAuthenticated &&
          <Route {...rest}>
            <Component />
          </Route>
        }
        {
          !isAuthenticated &&
          <Route {...rest}>
            <RedirectClearLocalStorage path={rest.path} />
          </Route>
        }
      </>
    )
}

export default PrivateRoute
