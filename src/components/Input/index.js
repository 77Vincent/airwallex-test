import React from 'react';

import './index.scss'

export default ({ type, placeholder, onChange, defaultValue, value, name, validated }) => (
  <div
    className="App-input"
  >
    <div className="App-input-wrap">
      <input
        type={type ? type : 'text'}
        onChange={onChange}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>

    <div className={`App-input-alert ${validated ? 'App-input-alert-show' : null}`}></div>
  </div>
)
