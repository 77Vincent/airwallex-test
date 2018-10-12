// These are general purpose actions that could be applied to various types of user interactions.
export const toggleStatus = (type, boolean = false) => dispatch => {
  dispatch({
    type,
    payload: boolean,
  })
}