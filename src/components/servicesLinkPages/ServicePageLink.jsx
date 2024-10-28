import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Hero from './Hero';
import BreadCrumbs from '../Include/BreadCrumbs';
import Heading from '../utility/Heading';
import HowItWorks from './HowItWorks';

import ProgressBar from '../utility/progressBar/ProgressBar';

import { fetchServicesImage } from '../../redux/slices/ServicesImage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import DescriptionWithImage from '../utility/DescriptionWithImage';
import ContentUpperFooter from '../utility/ContentUpperFooter';



function ServicePageLink() {
    const dispatch = useDispatch();
const location = useLocation();




  useEffect(() => {
    dispatch(fetchServicesImage(location.pathname.slice(-1)));
  }, [location, dispatch])

const { data: ServicesImageDetails, status } = useSelector((state) => state.ServicesImage);

// FOR BREADCRUMBS LINKS 
const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Services', link: '/services' },
  {
    label: ServicesImageDetails.category
 },
];




  return (
    <div>
        <Hero></Hero>
      <div className='md:px-[90px] px-[14px]'>
        <BreadCrumbs breadcrumbs={breadcrumbs}></BreadCrumbs>
<div className='py-[20px]'>
          <Heading label={ServicesImageDetails.title} style={{ fontSize: "25px", fontWeight:"300"}}></Heading>        
</div>

<DescriptionWithImage></DescriptionWithImage>

        <HowItWorks></HowItWorks>
        <ContentUpperFooter></ContentUpperFooter>
</div>
    </div>
  )
}

export default ServicePageLink