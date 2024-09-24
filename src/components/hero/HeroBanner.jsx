import React from 'react'
import '../../beauty/heroBanner.css'
import midRight_svg from '../../img/mid_right_shape_first.bfe4482f.svg'



function HeroBanner() {
  return (
    <div className='w-full HeroBanner relative'>
            <div className="heroBannerChild ml-[73px] mr-[73px]">
                <div>
                    <p className='HeroBanner1stChild'>Lorem</p>
                    <p className='HeroBanner2ndChild'>Lorem</p>
                </div>
                <div>
                    <p className='HeroBanner1stChild'>Lorem</p>
                    <p className='HeroBanner2ndChild'>Lorem</p>
                </div>
                <div>
                    <p className='HeroBanner1stChild'>Lorem</p>
                    <p className='HeroBanner2ndChild'>Lorem</p>
                </div>
                <div>
                    <p className='HeroBanner1stChild'>Lorem</p>
                    <p className='HeroBanner2ndChild'>Lorem</p>
                </div>
                <div>
                    <p className='HeroBanner1stChild'>Lorem</p>
                    <p className='HeroBanner2ndChild'>Lorem</p>
                </div>
                <div>
                   <div className=''>
                    <img src="https://images.ctfassets.net/vwt5n1ljn95x/4DcDpxTyJZ2mQQi40pp4oQ/c5975f4d354af29127d0ed0265a448ea/Size_Default__Background_White__Language_en-US-CA__Logo_IKEA.png?w=256&q=75&fm=webp" alt="" className='w-[80px] h-full h-[86px]'/>
                   </div>
                </div>
            </div>
                <img src={midRight_svg} className='absolute right-[0] svg top-[-15%]' alt=""/>
    </div>
    
  )
}

export default HeroBanner