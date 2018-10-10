import { combineReducers } from 'redux'

import { SEND } from '../actions/types'

const invitation = (state = {}, action) => {
  switch(action.type) {
    default:
      return state
    case SEND:
      return 
  }
}

const rootReducer = combineReducers({
  invitation,
})

export default rootReducer