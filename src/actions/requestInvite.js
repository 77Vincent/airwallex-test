import { CREATE } from './types'

export const sendRequest = (payload) => dispatch => {
  dispatch({
    type: CREATE,
    payload,
  })
}