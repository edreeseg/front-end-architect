import React, { useState } from "react";
// Components
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const AddPatientView = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        birthDate: new Date()
    });

    const [birthDate, setBirthDate] = useState(new Date());
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onChangeFirstName = (event) => setFirstName(event.target.value);
    const onChangeLastName = (event) => setLastName(event.target.value);
    const changeDate = date => setBirthDate(date);

    return (
        <div>
            <input
                name="firstName"
                value={firstName}
                onChange={onChangeFirstName}
            />
            <input
                name="lastName"
                value={lastName}
                onChange={onChangeLastName}
            />
            <DatePicker selected={birthDate} onChange={changeDate} />
        </div>
    );
};
