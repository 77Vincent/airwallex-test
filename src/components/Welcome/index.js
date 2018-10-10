import React from 'react';

import { RequestForm } from '../'
import { toggleVisibility } from '../../actions/general'
import store from '../../store'
import './index.scss'

const showRequestForm = () => {
  store.dispatch(toggleVisibility(true))
}

export default (props) => {
  return (
    <div className="App-welcome">
      <RequestForm />

      <div className="App-welcome-slogan">A better way to enjoy every day.</div>
      <div>Be the first to know when we launch.</div>

      <button onClick={showRequestForm}>Request an invite</button>
    </div>
  )
}
