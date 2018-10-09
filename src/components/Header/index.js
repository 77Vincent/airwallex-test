import React from 'react';

import logo from '../../logo.png'
import { BACKGROUND_IMAGE_URL } from '../../constants'
import './index.scss'

export default (props) => {
  return (
    <header
      className="App-header"
      style={{backgroundImage: `url(${BACKGROUND_IMAGE_URL})`}}
    >
      <div>
        <img alt="BROCCOLI & CO" src={logo} className="App-header-logo" />
      </div>
    </header>
  )
}