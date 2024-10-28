import React from 'react'
import { useSelector } from 'react-redux'
import Heading from '../utility/Heading'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchServicesImage } from '../../redux/slices/ServicesImage';

function CardBanner() {
  const location = useLocation();
  const dispatch = useDispatch();
  
  
  // when appears this page then get "id" from url and then call "fetchServicesImage" function with "id"
  useEffect(() => {
    dispatch(fetchServicesImage(location.pathname.slice(1)));
  }, [location, dispatch])
  
  const { data: ServicesImageDetails, status } = useSelector((state) => state.ServicesImage);

  return (
    <div className='UpperBanner_Service h-[60vh] overflow-hidden relative mb-[70px]'>
{/* <img src={ServicesImageDetails.image} alt="" className='h-[100%}'/> */}
      <img src={`https://res.cloudinary.com/taskrabbit-com/image/upload/w_628,f_auto,q_auto/ktrlwhqexdewedkn9bgi`} alt="" className='min-h-[100%] min-w-[100%]'/>

<Heading label={ServicesImageDetails.title} style={{fontSize:"50px",position:"absolute", top:"50%", lineHeight:"1", left:"50%", transform:"translate(-50%, -50%)", width:"100%", textAlign:"center"}}></Heading> 

    </div>
  )
}

export default CardBanner