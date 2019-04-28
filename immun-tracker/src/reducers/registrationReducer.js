import {
    ACCOUNTCREATE_START,
    ACCOUNTCREATE_SUCCESS,
    ACCOUNTCREATE_FAILURE,
} from '../actions/registrationActions'

const initialState = {
    error: null,
    userListMedical: [],
    addingMedicalUser: false,
};

function registrationReducer(state = initialState, action) {
 
    switch (action.type) {
      case ACCOUNTCREATE_START:
        return{
          ...state,
          addingMedicalUser: true,
        }
      case ACCOUNTCREATE_SUCCESS:
        return{
          ...state,
          addingMedicalUser: false,
          userListMedical: [...action.payload]
        }
      case ACCOUNTCREATE_FAILURE:
        return{
          ...state,
          addingMedicalUser:false,
          error: action.payload
        }
      default:
        return state;
    }
  }
  
  export default registrationReducer;