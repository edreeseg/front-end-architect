//React
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


//Components
import PatientLogin from "./components/Login/PatientLogin";
import AdminLogin from './components/Login/AdminLogin'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Route path="/patientlogin" exact component={PatientLogin} />
          <Route path="/adminlogin" exact component={AdminLogin} />
        </div>
      </Router>
    );
  }
}

export default App