import React from 'react';

import './index.scss'

export default ({ type }) => {
  return (
    <div
      className="App-input"
    >
      <input type={type ? type : 'text'}/>
    </div>
  )
}