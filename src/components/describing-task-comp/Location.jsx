import React from 'react'
import '../../beauty/locationBox.css'
import Heading from '../utility/Heading'


function Location() {
  return (
      <div className='locationBox'>
      <Heading label={"Your Task Location"} style={{fontSize:"23px", fontWeight:"400"}}></Heading>
            <div className="location_inputParent">
                <input type="text" className='input_UnderLoaction' placeholder='Lorem'/>
            </div>
            <div className="location_inputParent mt-[20px]">
                <input type="text" className='input_UnderLoaction' placeholder='Lorem'/>
            </div>
    </div>
  )
}

export default Location

