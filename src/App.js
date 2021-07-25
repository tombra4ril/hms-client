import React from "react"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Login from "./pages/Login"
import Error from "./pages/Error"
import "./App.scss"
import Dashboard from "./pages/Dashboard"
import Department from "./pages/Department"
import Doctor from "./pages/Doctor"
import Patient from "./pages/Patient"
import Nurse from "./pages/Nurse"
import Pharmacist from "./pages/Pharmacist"
import Laboratorist from "./pages/Laboratorist"
import Accountant from "./pages/Accountant"
import ManageAppointment from "./pages/ManageAppointment"
import ManagePrescription from "./pages/ManagePrescription"
import PrivateRoute from "./common/PrivateRoute"
import {StoreProvider} from "./common/StoreContext"

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <div className="body-wrapper">
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/departments" component={Department} />
            <PrivateRoute exact path="/doctors" component={Doctor} />
            <PrivateRoute exact path="/patients" component={Patient} />
            <PrivateRoute exact path="/nurses" component={Nurse} />
            <PrivateRoute exact path="/pharmacists" component={Pharmacist} />
            <PrivateRoute exact path="/laboratorists" component={Laboratorist} />
            <PrivateRoute exact path="/accountants" component={Accountant} />
            <PrivateRoute exact path="/manage/appointment" component={Accountant} />
            <PrivateRoute exact path="/manage/payment" component={Accountant} />
            <PrivateRoute exact path="/manage/bed_status" component={Accountant} />
            <PrivateRoute exact path="/manage/blood_bank" component={Accountant} />
            <PrivateRoute exact path="/manage/medicine" component={Accountant} />
            <PrivateRoute exact path="/manage/operation" component={Accountant} />
            <PrivateRoute exact path="/manage/birth_report" component={Accountant} />
            <PrivateRoute exact path="/manage/death_report" component={Accountant} />
            <PrivateRoute exact path="/settings/noticeboard" component={Accountant} />
            <PrivateRoute exact path="/settings/system" component={Accountant} />
            <PrivateRoute exact path="/settings/language" component={Accountant} />
            <PrivateRoute exact path="/settings/backup_restore" component={Accountant} />
            <PrivateRoute exact path="/manage_appointment" component={ManageAppointment} />
            <PrivateRoute exact path="/manage_prescription" component={ManagePrescription} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  )
}

export default App