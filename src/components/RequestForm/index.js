import React from 'react';

import { Input, Button } from '../'
import './index.scss'

export default (props) => {
  return (
    <div className="App-request-form" >
      <div className="App-text-subtitle"> Request an invite </div>

      <Input placeholder="Full name" />

      <Input placeholder="Email" />

      <Input placeholder="Confirm email" />

      <Button size="s" className="App-request-form-send">Send</Button>
    </div>
  )
}