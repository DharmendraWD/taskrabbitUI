import React from 'react'

function CardPara({label, style}) {
    const setStyle = style ? { style } : {}

  return (
<p style={style}> {label}</p>
  )
}

export default CardPara