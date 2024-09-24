import React from 'react'
import Heading from '../utility/Heading'
import hapines from '../../img/happinexx2x.webp'

function FooterBanner() {

  return (
    <div className='pr-[200px] pl-[200px] mt-[200px] footerBanner'> 
<h1 className='headingfontsize'> Lorem, ipsum dolor.<span className='text-[#6165DD]'>dolor sit.</span></h1>

<div className="flex justify-between mt-[45px] footerBannerPTextParent">
{[...Array(3)].map((_, index) => (
    <div className="" key={index}>
<h1 className='headingwithutmrpr3'>lorem ipsum</h1>
    <p className='cardHeading footerbannerPara'>Lorem, ipsum dolor.</p>
    </div>

))}

</div>
<div className='mt-[24px]'>
    <img src={hapines} alt="" className='w-[225px]'/>
</div>
    </div>
  )
}

export default FooterBanner