import { TOGGLE, CREATE } from '../actions/types'

const initialState = {
  isRequestFormDisplayed: true,
  isRegistered: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
    case CREATE:
      if (action.payload === 'Registered') {
        return {
          ...state,
          isRegistered: true,
        }
      } else {
        return {
          ...state,
          isRegistered: false,
        }
      }
    case TOGGLE:
      return {
        ...state,
        isRequestFormDisplayed: action.payload,
      } 
  }
}
