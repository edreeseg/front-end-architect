import React from "react";
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { createProviderAccount } from '../../actions/registrationActions'

class MedicalRegistrationView extends React.Component {
    state = {
      credentials: {
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
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleInput}
              placeholder="Username"
              value={this.state.username}
              name="username"
            />
            <input
              onChange={this.handleInput}
              placeholder="Password"
              value={this.state.password}
              name="password"
            />
            
            <button type="submit">Create Account</button>
          </form>
        </div>
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
    { createProviderAccount }
  )(MedicalRegistrationView);
  