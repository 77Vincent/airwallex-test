import { PUT, TOGGLE } from '../actions/types'

const initialState = {
  requestFormDisplayed: true,
  requestSent: false,
  requestForm: {
    fullname: '',
    email: '',
    confirmEmail: '',
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
    case PUT:
      return {
        ...state,
        requestSent: action.payload,
      }
    case TOGGLE:
      return {
        ...state,
        requestFormDisplayed: action.payload,
      } 
  }
}
