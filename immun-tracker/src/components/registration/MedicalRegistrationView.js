import React from "react";
//import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { MedicalRegistrationWrapper } from "./MedicalRegistrationWrapper";
//import { createProviderAccount } from '../../actions/registrationActions'

class MedicalRegistrationView extends React.Component {
    state = {
      credentials: {
        fullName: "",
        username: "",
        password: "",
        //verification:"", ex. licensure, 
        //providerID:""
        //mvp or strethc??
      }
    };
  
    handleInput = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.createProviderAccount(this.state.credentials)
          //  this.setState({
          //     username:'',
          //     password:"",
          //     
          // })
    };
  
    
  
    render() {
      return (
        <MedicalRegistrationWrapper>
        <div className="container">
          <div className="header">
            <h1>Medical Provider Registration</h1>
          </div>

          <div>
           <form className="inputContainer" 
           onSubmit={this.handleSubmit}>
           
           <input
              className = "input"
              type = "text"
              onChange={this.handleInput}
              placeholder="Full Name"
              value={this.state.fullName}
              name="fullName"
            />
                   
            <input
              className = "input"
              type = "text"
              onChange={this.handleInput}
              placeholder="Username"
              value={this.state.username}
              name="username"
            />
            <input
              className = "input"
              type = "text"
              onChange={this.handleInput}
              placeholder="Password"
              value={this.state.password}
              name="password"
            />
            <div  
              className="submit" onClick={this.handleSubmit} >
              Create Account
            </div>
            </form>
            
            </div>
            
            <div className = "alreadyRegistered">
              <p>Already Registered? </p>
              <a className="redirectLogin" href="#"> Login</a>
            </div>
            <div className = "alreadyRegistered">
              <p>New Patient? </p>
              <a className="redirectLogin" href="#"> Create a patient account</a>
            </div>
        </div>
        </MedicalRegistrationWrapper>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      userListMedical:state.userListMedical,
      addingMedicalUser: state.addingMedicalUser,
      error:state.error
    };
  };
  
  export default connect(
    mapStateToProps,
   // { createProviderAccount }
  )(MedicalRegistrationView);
  