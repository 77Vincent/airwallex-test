import React from 'react';
import { connect } from 'react-redux'

import { TOGGLE_REQUEST_INVITE_FORM_VISIBILITY } from '../../actions/types'
import BACKGROUND_IMAGE from '../../assets/images/California-Mountain.jpg'
import { Modal, RequestForm, Button } from '../'
import { toggleStatus } from '../../actions/general'
import store from '../../store'
import './index.scss'
import { resetRegistrationStatus } from '../../actions/requestInvite';

const mapStateToProps = state => ({
  requestInviteForm: state.requestInviteForm,
})

const toggleRequesetForm = boolean => () => {
  store.dispatch(toggleStatus(TOGGLE_REQUEST_INVITE_FORM_VISIBILITY, boolean))
}

const clearRegistrationStatus = () => () => {
  store.dispatch(resetRegistrationStatus())
}

export default connect(mapStateToProps, {})(({ requestInviteForm }) => {
  const { registrationStatus, isRequestInviteFormVisible } = requestInviteForm
  return (
    <div
      className="App-welcome App-full-height"
      style={{backgroundImage: `url(${BACKGROUND_IMAGE})`}}
    >
      <Modal
        style={{maxWidth: '480px'}}
        visibility={registrationStatus.isRegistered}
        easyClose={clearRegistrationStatus(false)}
      >
        <div className="App-request-sent">
          <div className="App-text-subtitle">
            Your request has been sent.<br />
            We are looking forward to seeing you soon!
          </div>
          <Button
            onClick={clearRegistrationStatus(false)}
            type="void"
            size="m"
          >
            Done
          </Button>
        </div>
      </Modal>

      <Modal
        style={{maxWidth: '390px'}}
        visibility={isRequestInviteFormVisible}
        easyClose={toggleRequesetForm(false)}
      >
        <RequestForm />
      </Modal>

      <div className="App-welcome-content container">
        <div className="App-welcome-slogan">A better way <br /> to enjoy every day.</div>

        <div className="App-text-title">Be the first to know when we launch.</div>

        <Button
          onClick={toggleRequesetForm(true)}
          type="void"
          size="l"
          light
        >
          Request an invite
        </Button>
      </div>
    </div>
  )
})
