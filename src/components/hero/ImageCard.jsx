import React from 'react'

function ImageCard() {
  return (
    <div className='w-full HeroImageCardParent pt-[30px]'>
            <div className="imageCardImg relative">

            <div className="HeroPageImageCardText">
                <div className="flex gap-[13px]">
                    <i class="ri-check-line"></i>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, error.</p>
                </div>
                <div className="flex gap-[13px]">
                    <i className="ri-check-line"></i>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, error.</p>
                </div>
            </div>
            <div  className='ml-[80px]'>
                        <img src="https://images.ctfassets.net/vwt5n1ljn95x/2zLfFEV2MrXbcska0MocE7/32575342bd9f30397d58ccb663c71744/Homepage_Assembly.png?w=1080&q=75&fm=webp" alt="" /></div>
            </div>
    </div>
  )
}

export default ImageCard