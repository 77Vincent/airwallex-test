import { TOGGLE } from '../actions/types'

// These are general purpose actions that could be applied to various types of user interactions.
export const toggleVisibility = (boolean = false) => dispatch => {
  dispatch({
    type: TOGGLE,
    payload: boolean,
  })
}