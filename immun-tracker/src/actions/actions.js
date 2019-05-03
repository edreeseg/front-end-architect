import axios from "axios";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";
export const LOGOUT = 'LOGOUT';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
  
    return axios
      .post("https://infinite-castle-77802.herokuapp.com/login", creds)
      
      .then(res => {
        localStorage.setItem("token", `Bearer ${res.data.token}`)
        dispatch({ type: LOGIN_RESOLVED });
      })
      .catch(err => {
        console.log("login err: ", err);
        if (err.response.status === 403) {
          localStorage.removeItem("token");
        }
        dispatch({ type: LOGIN_RESOLVED });
      });
  };



export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://infinite-castle-77802.herokuapp.com/user", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
       console.log(res.data);
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data.user
      });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};
 