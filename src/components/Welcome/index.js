import React from 'react';

import { Modal, RequestForm, Button } from '../'
import { toggleVisibility } from '../../actions/general'
import store from '../../store'
import './index.scss'

const showRequestForm = () => {
  store.dispatch(toggleVisibility(true))
}

const BG_URL = 'http://www.androidguys.com/wp-content/uploads/2016/02/California-Mountain.jpg'

export default (props) => {
  return (
    <div
      className="App-welcome App-full-height"
      style={{backgroundImage: `url(${BG_URL})`}}
    >
      <Modal>
        <RequestForm />
      </Modal>

      <div className="App-welcome-content container">
        <div className="App-welcome-slogan">A better way <br /> to enjoy every day.</div>

        <div className="App-text-title">Be the first to know when we launch.</div>

        <Button
          className="App-welcome-request"
          onClick={showRequestForm}
          type="void"
          light
        > Request an invite </Button>
      </div>
    </div>
  )
}
