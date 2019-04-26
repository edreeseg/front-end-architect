import axios from 'axios';

export const ACCOUNTCREATE_START = 'ACCOUNTCREATE_START'
export const ACCOUNTCREATE_SUCCESS = 'ACCOUNTCREATE_SUCCESS'
export const ACCOUNTCREATE_FAILURE = 'ACCOUNTCREATE_FAILURE'

export const createPatientAccount = (credentials) => dispatch => {
    dispatch({ type: ACCOUNTCREATE_START })
    axios
      .post('http://localhost:5000/api/registration', credentials)
      .then(res => dispatch({ type: ACCOUNTCREATE_SUCCESS, payload: res.data.payload }))
      .catch(err => dispatch({ type: ACCOUNTCREATE_FAILURE, payload: err }));
}