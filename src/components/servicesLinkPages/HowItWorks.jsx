import React from 'react'
import Heading from '../utility/Heading'
import LeftTestimonial from '../servicesPage/LeftTestimonial'
import Button2 from '../utility/Button2'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import { NavLink } from 'react-router-dom'
import ContentUpperFooter from '../utility/ContentUpperFooter'

function HowItWorks() {
  return (
    <div>
<div className='pt-[30px] pb-[100px]'>
        <Heading label={"How It Works"} style={{textAlign:"center"}}></Heading>

</div>
        <div className='flex pr-[100px] pl-[100px] justify-center gap-[60px]'>
            {[...Array(3)].map((_, index) => (
 <div className='flex flex-col items-center'>
    <img src="https://res.cloudinary.com/taskrabbit-com/image/upload/h_130,f_auto,q_auto/static/how-it-works-step-1" alt="" />
       <LeftTestimonial></LeftTestimonial>
    </div>
))}
        </div>
        <div className="ReadytoHire bg-[#e5f3f5] min-h-[500px] flex justify-end items-center">
            <div className='flex flex-col pr-[100px]'>
                <Heading label={"Ready to Hire?"} style={{ fontSize:"30px"}}></Heading>
             <NavLink to={""}>
                   <Button2 label={"Find Help Now"} style={{ borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'green',
                    borderImage: 'initial',
                    padding: '.2rem 1rem',
                    fontSize: '1rem',
                             color: 'white',
                             background:"#0d7a5f",
                    borderRadius:'12px',
                    width:'fit-content',
                    }}></Button2>
             </NavLink>
            </div>
        </div>
        <ContentUpperFooter></ContentUpperFooter>
    </div>
  )
}

export default HowItWorks