import React from 'react'
import Heading from '../utility/Heading'
import '../../beauty/ServiceHero.css'
import { NavLink } from 'react-router-dom'
import Button2 from '../utility/Button2'
import { useLocation } from 'react-router-dom'

function Hero() {
const location = useLocation();

    console.log(location)

  return (
    <div className='relative'>
        <img src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/c_fill,h_600,q_80,w_1422/v1699992738/u4mmwyuo4c92so2w645b.jpg" alt="" className='h-[90vh]'/>

        <div className="inMiddle">
<Heading label={"Lorem, ipsum dolor."} ></Heading>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        <NavLink to={`/Service/book/${location.pathname}`} className='flex justify-center pt-[31px]'>
        <Button2 label={"Book Now"} style={{
          borderRadius: '0.5rem',
          borderStyle: 'solid',
          borderWidth: '1px',
          padding: '0.5rem 2rem',
          fontSize: '1.1875rem',
          fontWeight: 600,
          borderColor: 'rgb(13, 122, 95)',
          backgroundColor: 'rgb(13, 122, 95)',
          color: 'rgb(255, 255, 255)',
          textAlign: 'center',
          display: 'block',
        }}></Button2>
        </NavLink>
        </div>
        <NavLink to="/dummy"> dummy</NavLink>
    </div>

  )
}

export default Hero