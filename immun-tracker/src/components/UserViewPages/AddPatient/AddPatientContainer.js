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
    birthDate: new Date()
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

  render() {
    const { firstName, lastName, birthDate } = this.state;

    return (
      <div>
        <form onSubmit={this.submitPatient}>
          <input
            name="firstName"
            value={firstName}
            onChange={this.handleInputChange}
          />
          <input
            name="lastName"
            value={lastName}
            onChange={this.handleInputChange}
          />
          <DatePicker
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
