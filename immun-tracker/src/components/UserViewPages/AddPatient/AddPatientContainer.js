import React, { useState } from "react";
// Components
import DatePicker from "react-datepicker";
// API Helper
import { postPatient } from "./apiCalls";

import "react-datepicker/dist/react-datepicker.css";

export class AddPatientView extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    birthDate: new Date(),
    blurred: {
        firstName: false,
        lastName: false
    }
  };

  changeDate = date => {
    this.setState({
      birthDate: date
    });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitPatient = event => {
    // Suppress default submit behavior
    event.preventDefault();

    const { firstName, lastName, birthDate } = this.state;

    const newPatient = {
      firstName,
      lastName,
      birthDate
    };

    postPatient(newPatient)
      .then(() => {
        console.log("success!");
      })
      .catch(error => {
        console.error(error);
      });
  };

  isFieldFilled = fieldName => {
    return Boolean(this.state[fieldName]);
  };

  showErrorMessage = fieldName => {
      return this.state.blurred[fieldName] && !this.isFieldFilled(fieldName);
  }

  setBlur = (event) => {
      // Reference for below:
      //https://stackoverflow.com/a/44708693
      const elementName = event.target.name;

      const stateUpdater = (prevState) => ({
          ...prevState,
          blurred: {
              ...prevState.blurred,
              [elementName]: true
          }
      });

      this.setState(stateUpdater);
  }

  render() {
    const { firstName, lastName, birthDate } = this.state;

    return (
      <div>
        <form onSubmit={this.submitPatient}>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            value={firstName}
            onChange={this.handleInputChange}
            onBlur={this.setBlur}
          />
          <div>
            {this.showErrorMessage("firstName") ? "First Name is required!" : null}
          </div>
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            value={lastName}
            onChange={this.handleInputChange}
            onBlur={this.setBlur}
          />
          <div>
            {this.showErrorMessage("lastName") ? "Last Name is required!" : null}
          </div>
          <label htmlFor="birthDate">Birth Date</label>
          <DatePicker
            name="birthDate"
            selected={birthDate} // this works like the 'value' in input
            onChange={this.changeDate} // accepts onChange function which
            // would update state
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
