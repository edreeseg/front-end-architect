// import {
//     LOGIN_START,
//     LOGIN_RESOLVED,
//     FETCH_DATA_START,
//     FETCH_DATA_SUCCESS,
//     FETCH_DATA_FAILURE

//   } from "../actions";

// Registration Actions
import {
  ACCOUNTCREATE_START,
  ACCOUNTCREATE_SUCCESS,
  ACCOUNTCREATE_FAILURE
} from "../actions/registrationActions";

const initialState = {
  // Common
  error: "",
  // From login
  isloggingIn: false,
  fetchingData: false,
  // From registration
  userListMedical: [],
  addingMedicalUser: false
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    /* --- Login Actions --- */
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
    /* --- Registration Actions --- */
    case ACCOUNTCREATE_START:
      return {
        ...state,
        addingMedicalUser: true
      };
    case ACCOUNTCREATE_SUCCESS:
      return {
        ...state,
        addingMedicalUser: false,
        userListMedical: [...action.payload]
      };
    case ACCOUNTCREATE_FAILURE:
      return {
        ...state,
        addingMedicalUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default friendsReducer;
