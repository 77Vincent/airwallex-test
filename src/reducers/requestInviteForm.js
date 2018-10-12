import {
  TOGGLE_REQUEST_INVITE_FORM_VISIBILITY,
  TOGGLE_REQUEST_SENDING_STATUS,
  SET_REGISTRATION_STATUS,
  RESET_REGISTRATION_STATUS,
} from '../actions/types'

const initialRegistrationStatus = {
  isRegistered: false,
  isError: false,
  message: '',
}

const initialState = {
  isRequestInviteFormVisible: false,
  isRequestPending: false,
  registrationStatus: initialRegistrationStatus,
}

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
    case TOGGLE_REQUEST_SENDING_STATUS:
      return {
        ...state,
        isRequestPending: action.payload,
      }
    case TOGGLE_REQUEST_INVITE_FORM_VISIBILITY:
      return {
        ...state,
        isRequestInviteFormVisible: action.payload,
      } 
    case RESET_REGISTRATION_STATUS:
      return {
        ...state,
        registrationStatus: initialRegistrationStatus,
      }
    case SET_REGISTRATION_STATUS:
      const { isRegistered, isError, message } = action.payload
      return {
        ...state,
        registrationStatus: { isRegistered, isError, message }
      }
  }
}
