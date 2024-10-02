import React from 'react'

function Button( {label, classes}) {
    let setClass = classes ? {classes} : {};
  return (
      <button className={`buttonCss ${classes}`}> {label}</button>
  )
}

export default Button