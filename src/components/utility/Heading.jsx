import React from 'react'

function Heading({label, style}) {
  const setStyle = style ? {style} :{}
  return (
   <h1 className='mainHeading' style={style}>{label}</h1>
  )
}

export default Heading