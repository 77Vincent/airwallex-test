import React from 'react';

import './index.scss'

export default ({ light, type = 'basic', onClick, style, className, children, size = 'l'}) => {
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

  const buttonTypeClass = buttonType[type] ? buttonType[type] : null

  const mergedStyle = Object.assign({
    fontSize: fontSize[size],
    padding: padding[size],
  }, style)

  return (
    <button
      className={`App-button ${buttonTypeClass} ${className} ${light ? 'App-button-light' : null}`}
      style={mergedStyle}
      onClick={onClick}
    >
      {children}
    </button>
  )
}