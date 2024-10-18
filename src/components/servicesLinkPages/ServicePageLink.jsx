import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Hero from './Hero';
import BreadCrumbs from '../Include/BreadCrumbs';
import Heading from '../utility/Heading';
import HowItWorks from './HowItWorks';

function ServicePageLink() {
const location = useLocation();

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