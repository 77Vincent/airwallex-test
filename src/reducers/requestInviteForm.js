import { TOGGLE, CREATE } from '../actions/types'

const initialState = {
  isRequestFormDisplayed: true,
  isSuccessful: false,
  message: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
    case CREATE:
      const { isSuccessful, message } = action.payload
      return { ...state, isSuccessful, message }
    case TOGGLE:
      return {
        ...state,
        isRequestFormDisplayed: action.payload,
      } 
  }
}
