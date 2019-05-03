import {
    LOGIN_START,
    LOGIN_RESOLVED,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
  
  } from "../actions/actions";

// Registration Actions
import {
  ACCOUNTCREATE_START,
  ACCOUNTCREATE_SUCCESS,
  ACCOUNTCREATE_FAILURE,

  PATIENTACCOUNTCREATE_START,
  PATIENTACCOUNTCREATE_SUCCESS,
  PATIENTACCOUNTCREATE_FAILURE
} from "../actions/registrationActions";

const initialState = {
  // Common
  error: "",
  // From login
  isloggingIn: false,
  fetchingData: false,
  // From registration
  userListMedical: [],
  addingMedicalUser: false,
  userListPatient: [],
  addingPatient: false,
  logout: false,
  user:[]
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    /* --- Login Actions --- */
        case LOGIN_START: {
            return {
              ...state,
              isLoggingIn: true
            };
          }
          case LOGIN_RESOLVED: {
            return {
              ...state,
              isLoggingIn: false
            };
          }
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

      case PATIENTACCOUNTCREATE_START:
      return {
        ...state,
        addingPatient: true
      };
    case PATIENTACCOUNTCREATE_SUCCESS:
      return {
        ...state,
        addingPatient: false,
        userListPatient: [...action.payload]
      };
    case PATIENTACCOUNTCREATE_FAILURE:
      return {
        ...state,
        addingPatient: false,
        error: action.payload
      };
      case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
      case FETCH_DATA_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        error: "",
        fetchingData: false,
        user: action.payload
      }

    default:
      return state;
  }

};

export default friendsReducer;
