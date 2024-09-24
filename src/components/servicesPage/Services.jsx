import React from 'react'
import Heading from '../utility/Heading'

function Services() {
  return (
    <div className='UpperBanner_Service h-[60vh] overflow-hidden relative'>
<img src="http://127.0.0.1:8000/client-side/images/banners/banner-bg.jpg" alt="" className='h-[100%}'/>

<Heading label={"Your to-do List is On Us."} style={{fontSize:"80px",position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)", width:"100%", textAlign:"center"}}></Heading>
    </div>
  )
}

export default Services