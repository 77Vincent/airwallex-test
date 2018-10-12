import React from 'react';
import { connect } from 'react-redux'

import { Modal, RequestForm, Button } from '../'
import { toggleVisibility } from '../../actions/general'
import store from '../../store'
import './index.scss'

const mapStateToProps = state => ({
  requestInviteForm: state.requestInviteForm,
})

const toggleRequesetForm = boolean => () => {
  store.dispatch(toggleVisibility(boolean))
}

const BG_URL = 'http://www.androidguys.com/wp-content/uploads/2016/02/California-Mountain.jpg'

export default connect(mapStateToProps, {})((props) => {
  return (
    <div
      className="App-welcome App-full-height"
      style={{backgroundImage: `url(${BG_URL})`}}
    >
      <Modal
        width={390}
        visibility={props.requestInviteForm.isRequestFormDisplayed}
        easyClose={toggleRequesetForm(false)}
      >
        <RequestForm />
      </Modal>

      <div className="App-welcome-content container">
        <div className="App-welcome-slogan">A better way <br /> to enjoy every day.</div>

        <div className="App-text-title">Be the first to know when we launch.</div>

        <Button
          className="App-welcome-request"
          onClick={toggleRequesetForm(true)}
          type="void"
          light
        >
          Request an invite
        </Button>
      </div>
    </div>
  )
})
