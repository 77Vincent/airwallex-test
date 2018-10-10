import React from 'react';
import { connect } from 'react-redux'

import './index.scss'

const mapStateToProps = state => ({
  requestInvite: state.requestInvite,
})

export default connect(mapStateToProps, {})(
  ({ requestInvite }) => {
    return (
      <div
        className="App-request-form"
        style={{display: requestInvite.requestFormDisplayed ? 'block' : 'none'}}
      >
        <h1>Request an invite</h1>
      </div>
    )
  }
)