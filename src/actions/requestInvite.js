import { SET_REGISTRATION_STATUS, RESET_REGISTRATION_STATUS } from './types'

export const setRegistrationStatus = (payload = {}) => dispatch => {
  dispatch({
    type: SET_REGISTRATION_STATUS,
    payload,
  })
}

export const resetRegistrationStatus = () => dispatch => {
  dispatch({
    type: RESET_REGISTRATION_STATUS,
    payload: null,
  })
}
