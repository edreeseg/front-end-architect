import axios from 'axios';

export const GETPROVIDERLIST_START = 'GETPROVIDERLIST_START'
export const GETPROVIDERLIST_SUCCESS = 'GETPROVIDERLIST_SUCCESS'
export const GETPROVIDERLIST_FAILURE = 'GETPROVIDERLIST_FAILURE'

export const fetchProviderList = () => dispatch => {
    dispatch({ type: GETPROVIDERLIST_START })
    axios
      //res.data.payload??
      .get('http://localhost:5000/api/providers')
      .then(res => dispatch({ type: GETPROVIDERLIST_SUCCESS, payload: res.data.payload }))
      .catch(err => dispatch({ type: GETPROVIDERLIST_FAILURE, payload: err }));
}