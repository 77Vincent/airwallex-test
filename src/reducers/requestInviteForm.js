import { TOGGLE_REQUEST_INVITE_FORM, REQUEST_INVITE, RESET_REGISTRATION_STATUS } from '../actions/types'

const initialState = {
  isRequestFormDisplayed: false,
  isSuccessful: false,
  message: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
    case RESET_REGISTRATION_STATUS:
      return {
        ...state,
        isSuccessful: action.payload,
      }
    case REQUEST_INVITE:
      const { isSuccessful, message } = action.payload
      return { ...state, isSuccessful, message }
    case TOGGLE_REQUEST_INVITE_FORM:
      return {
        ...state,
        isRequestFormDisplayed: action.payload,
      } 
  }
}
