import React from 'react';

import logo from '../../assets/images/logo.png'
import './index.scss'

export default props => (
  <header className="App-header" >
    <div className="App-header-content container">
      <img alt="BROCCOLI & CO" src={logo} className="App-header-logo" />
    </div>
  </header>
)