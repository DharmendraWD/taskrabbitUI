import React from 'react';
import Image from './Image';
import Heading from '../utility/Heading';
import Select from './Select';


const BecomeATasker = () => {
  return (
<div className="ImageAndFormBecomeAtasker flex items-center px-[100px] py-[50px] gap-[32px]">
    <Image imgUrl={"https://www.taskrabbit.com/v3/assets/hero_landing-fdeb7ef8f1a4361ec76f75d007d79546.jpg"} imgWidth={"w-[100%]"}/>

    <form>
<div className='w-[90%]'>
                  <Heading label="Earn Money Your Way"></Heading>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                  <Select></Select>
</div>
    </form>
</div>
  );
};

export default BecomeATasker;
