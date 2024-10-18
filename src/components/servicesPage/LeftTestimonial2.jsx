import React from 'react'
import Heading from '../utility/Heading'

function LeftTestimonial2() {
  return (

  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<Heading label={"Hear what People are Saying."} style={{color: "#242a30", fontSize:"1.4rem"}}></Heading>

    <div className="">
      <blockquote className="rounded-lg">
        <div className="flex gap-[4px]">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-14 rounded-full object-cover relative top-[22px]"
          />
<div className='flex flex-col'>
    <p className="mt-4 text-gray-700 peopleSays testimonialcontent">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
                        <p className='testimonialName'>– Wendell A.</p>

</div>
        </div>

        
      </blockquote>

    
    </div>
  </div>

  )
}

export default LeftTestimonial2