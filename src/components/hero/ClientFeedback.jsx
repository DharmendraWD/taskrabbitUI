import React from 'react'
import Heading from '../utility/Heading'
import excellentImg from '../../img/excellent.webp'


function ClientFeedback() {
  return (
    <div className='pl-[200px] pr-[200px] clientsFeedpackParen'> 
<Heading label={"lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, minima."}></Heading>


<div className="clientfeedbackcard">
{[...Array(6)].map((_, index) => (
    <div className="clientFeedBAck" key={index}>
   <div className="flex items-center">
    <p className='cardHeading'>Lorem,</p>
    <p className='cardPara'>
        <i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>
    </p>
   </div>
   <div className="popularProjectsImgDiv">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ut porro itaque assumenda odit iusto ipsa consectetur adipisci, inventore expedita asperiores molestias sint maiores dolore accusamus tempora maxime quod nemo.
   </div>
   
    </div>

))}

</div>
<img src={excellentImg}  alt="" className='w-[350px] mt-[40px] mx-[auto]' />
    </div>
  )
}

export default ClientFeedback