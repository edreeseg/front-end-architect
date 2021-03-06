import axios from 'axios';

export const ACCOUNTCREATE_START = 'ACCOUNTCREATE_START'
export const ACCOUNTCREATE_SUCCESS = 'ACCOUNTCREATE_SUCCESS'
export const ACCOUNTCREATE_FAILURE = 'ACCOUNTCREATE_FAILURE'

export const PATIENTACCOUNTCREATE_START = 'PATIENTACCOUNTCREATE_START'
export const PATIENTACCOUNTCREATE_SUCCESS = 'PATIENTACCOUNTCREATE_SUCCESS'
export const PATIENTACCOUNTCREATE_FAILURE = 'PATIENTACCOUNTCREATE_FAILURE'

export const createProviderAccount = (credentials) => dispatch => {
    dispatch({ type: ACCOUNTCREATE_START })
    axios
      .post('http://localhost:5000/api/registration', credentials)
      .then(res => dispatch({ type: ACCOUNTCREATE_SUCCESS, payload: res.data.payload }))
      .catch(err => dispatch({ type: ACCOUNTCREATE_FAILURE, payload: err }));
}

export const createPatientAccount = (credentials) => dispatch => {
  dispatch({ type: PATIENTACCOUNTCREATE_START })
  axios
    .post('http://localhost:5000/api/registration', credentials)
    .then(res => dispatch({ type: PATIENTACCOUNTCREATE_SUCCESS, payload: res.data.payload }))
    .catch(err => dispatch({ type: PATIENTACCOUNTCREATE_FAILURE, payload: err }));
}