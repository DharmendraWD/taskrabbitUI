import React from 'react'

function Select() {
  return (
    <div>
          <p className='cardHeading'>Select Option</p>
    <select className="w-full min-h-[70px]" >
      <option value="" disabled selected>Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
      </div>
  )
}

export default Select