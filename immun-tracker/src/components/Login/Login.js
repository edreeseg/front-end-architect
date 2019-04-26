import React from "react";

//Redux
import { connect } from "react-redux";

//React Router
import { Link } from 'react-router-dom'

// import Loader from "react-loader-spinner";
// import { login } from  '../../actions'

//Styled Component
import { LoginWrapper } from './LoginWrapper';

//Font Awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons'


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
      <LoginWrapper>
      <div className="main">
        <p className="sign"> <FontAwesomeIcon icon={faUserLock} /></p>
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
        
      </div>
      </LoginWrapper>
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