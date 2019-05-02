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

        console.log(res.data.payload)
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



 