import React from 'react'
import { useSelector } from 'react-redux';
import CardBanner from '../include/CardBanner';
import BreadCrumbs from '../Include/BreadCrumbs';
import RightSideCard from './RightSideCard';
import FAQ from '../Include/FAQ';
import FooterBanner from '../Include/FooterBanner';
import OtherTaskFooter from '../Include/OtherTaskFooter';
import ContentUpperFooter from '../utility/ContentUpperFooter';



function ParticularService() {
// FOR BREADCRUMBS LINKS 
const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Services', link: '/services' },
  { label: 'Featured Tasks' },
];

  const { data: ServicesImageDetails, status } = useSelector((state) => state.ServicesImage);

console.log(ServicesImageDetails)
  return (
    <>
    <CardBanner></CardBanner>
    <div className="w-[100%] pr-[100px] pl-[100px] pb-[100px]"> 
    <BreadCrumbs breadcrumbs={breadcrumbs}></BreadCrumbs>
    <RightSideCard></RightSideCard>
<FAQ></FAQ>
<FooterBanner></FooterBanner>
<OtherTaskFooter></OtherTaskFooter>
<ContentUpperFooter></ContentUpperFooter>
</div>
    </>
  )
}

export default ParticularService