import React from 'react'

function Hr({style}) {
    const setStyle = style ? {style} : {};
  return (
<hr style={style}/>
  )
}

export default Hr