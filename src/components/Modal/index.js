import React from 'react';
import PropTypes from 'prop-types'

import './index.scss'

const APP_MODEL_CONTENT = 'App-modal-content'

/**
 * this is for closing the modal by clicking anywhere else outside the modal
 * @param {function} callback function to manage the visibility state of the modal
 * @returns {void} void
 */
const clickToClose = callback => e => {
  const childElement = e.target.children[0]
  if (childElement && childElement.className === APP_MODEL_CONTENT) {
    callback()
  }
}

const Modal = ({
  children,
  easyClose = () => {},
  visibility = true,
  style = {}
}) => {
  return (
    <div
      className="App-modal"
      style={{ display: visibility ? 'flex' : 'none' }}
      onClick={clickToClose(easyClose)}
    >
      <div
        className={APP_MODEL_CONTENT}
        style={style}
      >
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  easyClose: PropTypes.func,
  visibility: PropTypes.bool,
  style: PropTypes.object,
}

export default Modal
