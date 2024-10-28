import React from 'react'
import { NavLink } from 'react-bootstrap'
import Button2 from '../utility/Button2'
import '../../beauty/RightSideCard.css'
import Heading from '../utility/Heading'
import LeftTestimonial from './LeftTestimonial'
import LeftTestimonial2 from './LeftTestimonial2'

function RightSideCard() {
  return (
<div className='flex w-[100%] gap-[44px] pb-[25px]'>
    <div className="wrapper w-[85%]">
    <div className='RightSideCardParent'>
        <div className="RightSideCardParent_Img">
            <img src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1699992739/k5p2wsokqjemxlrgrusd.jpg" alt="" />
        </div>

        <div className="RightSideCardParent_Text">
            <Heading label={"ServicesImageDetails.title"} style={{color: 'rgb(2, 32, 34)',     fontSize: '1.125rem',     marginBottom: "2px", fontWeight: "700"}}></Heading> 
            <p className="RightSideCardParent_Text_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <NavLink className="RightSideCardParent_Text_btn">
           

                <Button2 label={"Book Now"} style={{ backgroundColor: 'rgb(13, 122, 95)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgb(13, 122, 95)',
                    borderImage: 'initial',
                    padding: '.2rem 1rem',
                    fontSize: '1rem',
                             color: 'white',
                    borderRadius:'12px'
                    }}></Button2>
            </NavLink>
        </div>

        </div>
    <div className='RightSideCardParent'>
        <div className="RightSideCardParent_Img">
            <img src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1699992739/k5p2wsokqjemxlrgrusd.jpg" alt="" />
        </div>

        <div className="RightSideCardParent_Text">
            <Heading label={"ServicesImageDetails.title"} style={{color: 'rgb(2, 32, 34)',     fontSize: '1.125rem',  fontWeight: "700"}}></Heading> 
            <p className="RightSideCardParent_Text_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <NavLink className="RightSideCardParent_Text_btn">
           

                <Button2 label={"Book Now"} style={{ backgroundColor: 'rgb(13, 122, 95)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgb(13, 122, 95)',
                    borderImage: 'initial',
                    padding: '.2rem 1rem',
                    fontSize: '1rem',
                             color: 'white',
                    borderRadius:'12px'
                    }}></Button2>
            </NavLink>
        </div>
        </div>
    </div>

    <div className=' w-[30%]'>
                        <Heading label={"Cross Off that to-do"} style={{color:'rgb(36, 42, 48);', fontSize:'1.4rem', marginBottom:'6px',fontWeight: 'normal' }}></Heading>
        <LeftTestimonial></LeftTestimonial>
        <LeftTestimonial></LeftTestimonial>
        <LeftTestimonial></LeftTestimonial>
        <LeftTestimonial2></LeftTestimonial2>
    </div>
    </div>
  )
}

export default RightSideCard