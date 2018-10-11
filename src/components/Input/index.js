import React, { Component } from 'react';

import './index.scss'

class Input extends Component {
  state = {
    validated: false,
  }

  render() {
    const { type, placeholder, onChange, defaultValue, value, name } = this.props

    return (
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

        <div className={`App-input-alert ${this.state.validated ? 'App-input-alert-show' : null}`}></div>
      </div>
    )
  }
}

export default Input
