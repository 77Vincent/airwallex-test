import { combineReducers } from 'redux'

import { PUT, TOGGLE } from '../actions/types'

const initialState = {
  requestFormDisplayed: true,
  requestSent: false,
}

const requestInviteForm = (state = initialState, action) => {
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

const rootReducer = combineReducers({
  requestInviteForm,
})

export default rootReducer