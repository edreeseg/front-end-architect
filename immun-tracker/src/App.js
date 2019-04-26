//React
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


//Components
import Login from "./components/Login/Login";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Route path="/login" exact component={Login} />
          
        </div>
      </Router>
    );
  }
}

export default App