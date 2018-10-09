import React from 'react';

import './index.scss'
import { BACKGROUND_IMAGE_URL } from '../../constants'

export default (props) => {
  return (
    <footer
      className="App-footer"
      style={{backgroundImage: `url(${BACKGROUND_IMAGE_URL})`}}
    >
      <div>Made with love Melbourne.</div>
      <div>© 2016 Broccoli & Co. All rights reserved.</div>
    </footer>
  )
}