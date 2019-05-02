import React, { useState } from "react";
// Components
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export class AddPatientView extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        birthDate: new Date(),
    }

    changeDate = date => {
        this.setState({
            birthDate: date
        });
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const {firstName, lastName, birthDate } = this.state;

        return (
            <div>
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
                <DatePicker selected={birthDate} onChange={this.changeDate} />
            </div>
        );
    }    
}

