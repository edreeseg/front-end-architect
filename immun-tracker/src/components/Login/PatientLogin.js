import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'
// import Loader from "react-loader-spinner";
// import { login } from  '../../actions'



class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/protected"));
  };

  render() {
    return (
      <div className="main">
        <p className="sign">Patient Login</p>
        <form onSubmit={this.handleLogin}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            className="input"
            placeholder="User Name"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            className="input"
            placeholder="Password"
          />
          <button className="submit">
            Log in
          </button>
        </form>
        <div className='forgot'>
             <a className ='helpLink' href='#'>Forgot Password?</a> 
             <a className ='helpLink' href='#'>Sign Up</a>
         </div>
         <div className="PageSwitcher">
                <NavLink to="/adminlogin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Admin</NavLink>
                <NavLink exact to="/patientlogin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Patient</NavLink>
              </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn
  };
};

export default connect(
  mapStateToProps,
//   { login }
)(Login);