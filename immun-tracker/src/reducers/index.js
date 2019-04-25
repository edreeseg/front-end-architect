// import {
//     LOGIN_START,
//     LOGIN_RESOLVED,
//     FETCH_DATA_START,
//     FETCH_DATA_SUCCESS,
//     FETCH_DATA_FAILURE
    
//   } from "../actions";
  

const initialState = {
  isloggingIn: false,
  error: '',
  fetchingData: false,
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
//     case LOGIN_START: {
//         return {
//           ...state,
//           isLoggingIn: true
//         };
//       }
//       case LOGIN_RESOLVED: {
//         return {
//           ...state,
//           isLoggingIn: false
//         };
//       }

    default:
      return state;
  }
};

export default friendsReducer;