import React from 'react';

import { Input } from '../'
import './index.scss'

export default (props) => {
  return (
    <div className="App-request-form" >
      <div className="App-text-subtitle"> Request an invite </div>
      <Input />
    </div>
  )
}