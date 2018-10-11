import React from 'react';

import './index.scss'
import { toggleVisibility } from '../../actions/general'
import store from '../../store'

const APP_MODEL_CONTENT = 'App-modal-content'

const clickToClose = callback => e => {
  const childElement = e.target.children[0]
  if (callback && childElement && childElement.className === APP_MODEL_CONTENT) {
    callback()
  }
}

export default ({ children, easyClose, visibility }) => {
  return (
    <div
      className="App-modal"
      style={{visibility: visibility ? 'visible' : 'hidden'}}
      onClick={clickToClose(easyClose)}
    >
      <div className={APP_MODEL_CONTENT}>
        {children}
      </div>
    </div>
  )
}