import React from 'react';

import './index.scss'

export default ({ onClick, inputStyle, className, children, size = 'l'}) => {
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

  const style = Object.assign({
    fontSize: fontSize[size],
    padding: padding[size],
  }, inputStyle)

  return (
    <div
      className={`App-button ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  )
}