import { combineReducers } from 'redux'

import { PUT, DISPLAY, HIDE, TOGGLE } from '../actions/types'

const initialState = {
  requestFormDisplayed: false,
  requestSent: false,
}

const requestInvite = (state = initialState, action) => {
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
    case DISPLAY:
      return {
        ...state,
        requestFormDisplayed: true,
      } 
    case HIDE:
      return {
        ...state,
        requestFormDisplayed: false,
      } 
  }
}

const rootReducer = combineReducers({
  requestInvite,
})

export default rootReducer