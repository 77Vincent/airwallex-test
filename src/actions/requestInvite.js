import { SET_REGISTRATION_STATUS, RESET_REGISTRATION_STATUS } from './types'

export const setRegistrationStatus = (payload = {}) => dispatch => {
  dispatch({
    type: SET_REGISTRATION_STATUS,
    payload,
  })
}

// Reset the state "registrationStatus" to its initial state so no payload will be used here
export const resetRegistrationStatus = () => dispatch => {
  dispatch({
    type: RESET_REGISTRATION_STATUS,
    payload: null,
  })
}
