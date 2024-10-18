import React from 'react'
import { useSelector } from 'react-redux'
import { STATUSES } from '../../redux/slices/HeroRowMenu'



function ImageCard() {
   const {data:HeroRowsOption,status}= useSelector((state)=>state.HeroRowsOption)

     if(status === STATUSES.Loading){
        return <h2 style={{fontWeight:"bolder"}}>Loading...</h2>
    }


  return (
    <div className='w-full HeroImageCardParent pt-[30px]'>
            <div className="imageCardImg relative">

            <div className="HeroPageImageCardText">
              <h1 className='mainHeading'>{HeroRowsOption.category}</h1>
                <div className="flex gap-[13px]">
                    <i class="ri-check-line"></i>
                    <p>{HeroRowsOption.title}</p>
                </div>
                <div className="flex gap-[13px]">
                    <i className="ri-check-line"></i>
                    <p>{HeroRowsOption.title}</p>
                </div>
            </div>

                           <img src={HeroRowsOption.image} className='widthWebkitFull' alt="" />
                           
            </div>
    </div>
  )
}

export default ImageCard