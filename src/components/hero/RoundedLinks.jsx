import React from 'react'
import { NavLink } from 'react-router-dom'

function RoundedLinks() {
  return (
   <div className='HeroRounded_Links_Parent flex justify-center flex-wrap gap-[21px] mr-[181px] ml-[181px] pt-[32px]'> 
{[...Array(7)].map((_, index) => (
    <NavLink className={"HeroRounded_Links"} key={index}>lorem Ipsum</NavLink>
))}
</div>
  )
}

export default RoundedLinks