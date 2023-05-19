import React from 'react'
import { IButton } from './interfaces'

const Button = ({classes, onClick, children}: IButton) => {
  return (
	<button className={`${classes} rounded hover:shadow-md transition-all`} onClick={onClick}>{children}</button>
  )
}

export default Button