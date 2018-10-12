import React from 'react';

import './index.scss'

const APP_MODEL_CONTENT = 'App-modal-content'

const clickToClose = callback => e => {
  const childElement = e.target.children[0]
  if (callback && childElement && childElement.className === APP_MODEL_CONTENT) {
    callback()
  }
}

export default ({ children, easyClose, visibility, width }) => {
  return (
    <div
      className="App-modal"
      style={{
        display: visibility ? 'flex' : 'none',
      }}
      onClick={clickToClose(easyClose)}
    >
      <div
        className={APP_MODEL_CONTENT}
        style={{
          width: `${width}px`,
        }}
      >
        {children}
      </div>
    </div>
  )
}