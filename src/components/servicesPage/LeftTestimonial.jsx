import React from 'react'
import Heading from '../utility/Heading'
import '../../beauty/testimonial.css'

function LeftTestimonial({data}) {
  return (
    <div className='wrapper'>
            <div className="upperTestimonial">

                <div className='textTestimonial relative' data-index="1">
                   <div>
                   <Heading label={"Lorem ipsum dolor"} style={{color:'#6c7e7f', fontSize:'1.3rem',  marginBottom:'6px', fontWeight: 'normal'  }}></Heading>
                   </div>
                    <p style={{color:'#969b97', fontSize:'.9rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
    </div>
  )
}

export default LeftTestimonial