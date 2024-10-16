import React from 'react'

function Image({imgUrl, imgWidth}) {
  return (
      <img src={imgUrl} alt=""  className={imgWidth}/>
  )
}

export default Image