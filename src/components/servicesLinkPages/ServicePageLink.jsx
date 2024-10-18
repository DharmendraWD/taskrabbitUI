import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Hero from './Hero';
import BreadCrumbs from '../Include/BreadCrumbs';
import Heading from '../utility/Heading';
import HowItWorks from './HowItWorks';


import { fetchServicesImage } from '../../redux/slices/ServicesImage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';



function ServicePageLink() {
    const dispatch = useDispatch();
const location = useLocation();
const id = useParams();

console.log(id, "sue")


  useEffect(() => {
    dispatch(fetchServicesImage(location.pathname.slice(1)));
  }, [location, dispatch])

const { data: ServicesImageDetails, status } = useSelector((state) => state.ServicesImage);
console.log(ServicesImageDetails)


// FOR BREADCRUMBS LINKS 
const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Services', link: '/services' },
  { label: location.pathname },
];




  return (
    <div>
        <Hero></Hero>
        <BreadCrumbs breadcrumbs={breadcrumbs}></BreadCrumbs>
        <Heading label={location.pathname}></Heading>
        <HowItWorks></HowItWorks>
    </div>
  )
}

export default ServicePageLink