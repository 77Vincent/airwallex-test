import React from 'react';
import { connect } from 'react-redux'

import './index.scss'
import { toggleVisibility } from '../../actions/general'
import store from '../../store'

const mapStateToProps = state => ({
  requestInvite: state.requestInvite,
})

const APP_MODEL_CONTENT = 'App-modal-content'

const clickToClose = (e) => {
  const childElement = e.target.children[0]
  if (childElement && childElement.className === APP_MODEL_CONTENT) {
    store.dispatch(toggleVisibility(false))
  }
}

export default connect(mapStateToProps, {})(
  ({ requestInvite, children }) => {
    return (
      <div
        className="App-modal"
        style={{visibility: requestInvite.requestFormDisplayed ? 'visible' : 'hidden'}}
        onClick={clickToClose}
      >
        <div className={APP_MODEL_CONTENT}>
          {children}
        </div>
      </div>
    )
  }
)