//React
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


//Components
import Login from "./components/Login/Login";
import MedicalRegistrationView from './components/registration/MedicalRegistrationView';
import PatientRegistrationView from "./components/registration/PatientRegistrationView";
import GrantAccessView from "./components/GrantAccess/GrantAccessView"
import UserPrivateRoute from "./components/UserPrivateRoute"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Route path="/login" exact component={Login} />
          <Route path="/register-provider" exact component={MedicalRegistrationView} />
          <Route path = "/register-patient" exact component={PatientRegistrationView} />
          <UserPrivateRoute path = "/grant-access" exact component={GrantAccessView} />
        </div>
      </Router>
    );
  }
}

export default App