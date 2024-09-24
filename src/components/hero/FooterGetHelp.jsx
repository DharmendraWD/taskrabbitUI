import React from 'react'
import Heading from '../utility/Heading'
import RoundedLinks from './RoundedLinks'
import { NavLink } from 'react-router-dom'

function FooterGetHelp() {
  return (
    <div className='pl-[200px] pr-[200px] footerBanner'>
<Heading label={"Get Help Right Now"}></Heading>

<div className='options'>
            <RoundedLinks></RoundedLinks>
</div>


<NavLink>
    <h1 className='headingwithutmrpr3'>See All Services<i class="ri-arrow-right-s-line"></i></h1>
</NavLink>
    </div>
  )
}

export default FooterGetHelp