import React from 'react';

import './index.scss'

export default ({ type, placeholder }) => {
  return (
    <div
      className="App-input"
    >
      <input
        type={type ? type : 'text'}
        placeholder={placeholder}
      />
    </div>
  )
}