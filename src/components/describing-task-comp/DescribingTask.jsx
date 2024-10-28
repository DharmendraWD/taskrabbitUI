import React from 'react'
import ProgresssBar from '../utility/progressBar/ProgressBar'
import { useLocation } from 'react-router-dom'
import { fetchServicesImage } from '../../redux/slices/ServicesImage'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Heading from '../utility/Heading'
import Location from './Location'
import { increment, reset } from '../../redux/slices/progressBar/ProgressBarSlice'
import Button2 from '../utility/Button2'


function DescribingTask() {
    const location = useLocation()
    
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value);

useEffect(() => {
  dispatch(fetchServicesImage(location.pathname.slice(-1)))
}, [location, dispatch])


    const { data: ServicesImageDetails, status } = useSelector((state) => state.ServicesImage);


  return (
    <>
    <div className='w-[50%] mx-auto mt-[40px]'>
<ProgresssBar></ProgresssBar>
    </div>
          <div className='whour flex items-center justify-center gap-[18px] thinBorder'>
              <i class="ri-edit-box-line" style={{ fontSize: "2.1rem" }} ></i>
              <p className='md:w-[40%]'>Tell us about your task. We use these details to show Taskers in your area who fit your needs.</p>
          </div>

<div className='md:px-[90px]'>
          <Heading label={ServicesImageDetails.title} style={{fontSize:"23px", fontWeight:"400"}}></Heading>
          <Location></Location>

              <Button2
                  style={{
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
                  }}
               label={"Continue"}></Button2>
          </div>



          <button onClick={() => dispatch(increment())} disabled={count >= 4}>
            Continue
          </button>
</>
  )
}

export default DescribingTask