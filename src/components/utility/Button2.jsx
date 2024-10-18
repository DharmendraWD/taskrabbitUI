import React from 'react'
import { Button } from 'react-bootstrap'

function Button2({style, label}) {
  const setStyle = style ? {style} :{}

  return (
            <button style={style}>Book NOw</button>
  )
}

export default Button2