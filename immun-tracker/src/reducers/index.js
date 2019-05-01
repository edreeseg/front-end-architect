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
  ACCOUNTCREATE_FAILURE,

  PATIENTACCOUNTCREATE_START,
  PATIENTACCOUNTCREATE_SUCCESS,
  PATIENTACCOUNTCREATE_FAILURE
} from "../actions/registrationActions";

// Granting Access to Providers
import{
  GETPROVIDERLIST_START,
  GETPROVIDERLIST_SUCCESS,
  GETPROVIDERLIST_FAILURE
} from '../actions/grantAccessActions'

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
  // from granting access
  providerList:[],
  fetchingProviders: false
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
//~~~~~~~~~~~~~~~~PATIENT ONBOARDING~~~~~~~~~~~~~~~~~~~`
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
//~~~~~~~~~~~~~~~~Granting Access ~~~~~~~~~~~~~~~~~~~~~~~~~~
      case GETPROVIDERLIST_START:
      return {
        ...state,
        fetchingProviders: true
      };
    case GETPROVIDERLIST_SUCCESS:
      return {
        ...state,
        fetchingProviders: false,
        providerList: [...action.payload]
      };
    case GETPROVIDERLIST_FAILURE:
      return {
        ...state,
        fetchingProviders: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default friendsReducer;
