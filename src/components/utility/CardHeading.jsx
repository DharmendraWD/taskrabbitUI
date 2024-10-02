import React from 'react'

function CardHeading({label, style}) {
    const setStyle = style ? { style } : {}

  return (
    <h1 className='cardHeadingClr' style={style}>{label} </h1>

  )
}

export default CardHeading