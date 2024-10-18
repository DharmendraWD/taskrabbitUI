import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'remixicon/fonts/remixicon.css';

import {NavLink, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

// SVG IMPORTED 
import topLeft_Shape from '../../img/top_left_shape.a6553437.svg'
import topRight_Shape from '../../img/top_right_shape.46afcf8f.svg'
import RoundedLinks from './RoundedLinks';

import { useDispatch, useSelector } from 'react-redux'
import { STATUSES, fetchHeroRowsOption } from '../../redux/slices/HeroRowMenu'





function Hero() {
  // geting data with rtk by fetching API
   const dispatch =useDispatch();
  
  useEffect(()=>{
     dispatch(fetchHeroRowsOption(1));  
  },[])
  

  

  const [activeIndex, setActiveIndex] = useState(null);
  const [boxMenuColor, setboxMenuColor] = useState("#a6a8ac");

  const handleClick = (index) => {
    setActiveIndex(index);
 dispatch(fetchHeroRowsOption(index+1));  
// generates random bg color for menu div box 
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
       setboxMenuColor( `#${randomColor.padStart(6, '0')}`)
  };





  return (
  <div className='heroParent relative'>

{/* TEXT AND ABOVE IMAGE  */}
<div className='textImage_Hero relative'>
<div className="heroImg absolute top-[3%] left-[10%]">
    <img src="https://images.ctfassets.net/vwt5n1ljn95x/4DcDpxTyJZ2mQQi40pp4oQ/c5975f4d354af29127d0ed0265a448ea/Size_Default__Background_White__Language_en-US-CA__Logo_IKEA.png?w=640&q=75&fm=webp" className='h-[90px] w-[90px]' alt="" />
</div>

<div className='topLeft_Shape absolute top-[17%]'>
      <img src={topLeft_Shape} className='svg' alt="" />
</div>

<div className='topLeft_Shape absolute top-[0] right-[0]'>
      <img src={topRight_Shape} className='svg' alt="" />
</div>

  <div className='heading'>
<h1 className=''>Lorem ipsum </h1>
<h1 className=''> dolor sit amet</h1>
  </div>
</div>

{/* HERO PAGE SEARCH BAR  */}
<div className="input-group SearchBar flex justify-center">
  <div className="form-outline searchContainer w-[645px]" data-mdb-input-init>
    <input type="search" id="form1" className="form-control inputSearchBtn" placeholder='   What do you need help with?' />
  </div>
  <button type="button" className="btn btn-primary heroSearchBtn greeneryBg" data-mdb-ripple-init>
   <i className="ri-search-line"></i>
  </button>
</div>


{/* HERO PAGE MENU BOX  */}
<div className="belloMenuSection pt-[70px] flex justify-center gap-[90px]">   
{[...Array(8)].map((_, index) => (
  <div key={index}  className={`menuSubChild pb-[12px] ${activeIndex === index ? 'active' : ''}`}  onClick={() => handleClick(index)}
   style={{
            borderBottom: activeIndex === index ? '2px solid green' : 'none',
            cursor: 'pointer',
          }}
  >
    <i className="ri-tools-line menuIconHeroSection text-[45px]" style={{
      color: activeIndex === index ? boxMenuColor: "initial"
    }}></i>
    <p>Lorem</p>
  </div>
))}
</div>

<hr className='mr-[170px] ml-[170px]' />
{/* HERO PAGE ROUNDED LINKS BELLOW MENU BOX */}
<RoundedLinks></RoundedLinks>
  </div>
  )
}

export default Hero