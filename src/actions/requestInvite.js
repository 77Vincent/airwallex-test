import { REQUEST_INVITE, RESET_REGISTRATION_STATUS } from './types'

export const sendRequest = (payload = {}) => dispatch => {
  dispatch({
    type: REQUEST_INVITE,
    payload,
  })
}

export const setRegistrationStatus = (boolean = false) => dispatch => {
  dispatch({
    type: RESET_REGISTRATION_STATUS,
    payload: boolean,
  })
}