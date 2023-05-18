import React,{ FC } from 'react'
import { ITypography } from './interfaces'

const Paragraph:FC<ITypography> = ({classes,children}) => {
  return (
	<p className={classes}>{children}</p>
  )
}

export default Paragraph