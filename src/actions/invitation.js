import { SEND } from './types'

export const sendInvitation = () => dispatch => {
  fetch('https://api.github.com/repos/77Vincent/blog/issues')
    .then(res => res.json())
    .then(data => dispatch({
      type: SEND,
      payload: data, 
    }))
}