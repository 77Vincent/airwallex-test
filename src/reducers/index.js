import { combineReducers } from 'redux'

import { PUT, TOGGLE } from '../actions/types'

const initialState = {
  requestFormDisplayed: true,
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
  }
}

const rootReducer = combineReducers({
  requestInvite,
})

export default rootReducer