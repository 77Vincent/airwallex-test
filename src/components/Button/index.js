import React from 'react';
import PropTypes from 'prop-types'

import './index.scss'

const Button = ({
  children,
  light = false,
  type = 'basic',
  onClick = () => {},
  style = {},
  className = '',
  size = 'm'
}) => {
  const fontSize = {
    s: '0.9em',
    m: '1.2em',
    l: '1.6em',
  }

  const padding = {
    s: '0.3em 1.2em',
    m: '0.4em 1.8em',
    l: '0.5em 2.4em',
  }

  const buttonType = {
    basic: 'App-button-basic',
    void: 'App-button-void',
  }

  const buttonTypeClass = buttonType[type] ? buttonType[type] : '' 

  const mergedStyle = Object.assign({
    fontSize: fontSize[size],
    padding: padding[size],
  }, style)

  return (
    <div className="App-button">
      <button
        className={`${buttonTypeClass} ${className} ${light ? 'App-button-light' : ''}`}
        style={mergedStyle}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}

Button.propTypes = {
  light: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string, 
  style: PropTypes.object,
  onClick: PropTypes.func, 
}

export default Button
