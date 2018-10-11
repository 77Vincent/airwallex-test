import React from 'react';
import { connect } from 'react-redux'

import { Input, Button } from '../'
import './index.scss'

const mapStateToProps = state => ({

}) 

export default connect(mapStateToProps, {})((props) => {
  return (
    <div className="App-request-form" >
      <div className="App-text-subtitle"> Request an invite </div>

      <Input placeholder="Full name" />

      <Input placeholder="Email" />

      <Input placeholder="Confirm email" />

      <Button size="s" className="App-request-form-send">Send</Button>
    </div>
  )
})
