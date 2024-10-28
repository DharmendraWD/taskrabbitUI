import React from 'react'

function DescriptionWithImage() {
  return (
 <>
          {/* Image and description section  */}
          <section class="text-gray-600 body-font">

              <div class="container px-[0]  mx-auto flex flex-wrap">

                  <div class="md:w-3/5 bg-white pl-2 md:pl-6">
                      <p class="leading-relaxed text-base pt-[60px]">
                          {`ServicesImageDetails.description`}
                          Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>
                      <div class="flex md:mt-4 mt-6">


                      </div>
                  </div>

                  {/* <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Kickstarter Actually Pinterest Brunch Bitters Occupy</h2> */}

                  <img src={`https://res.cloudinary.com/taskrabbit-com/image/upload/w_928,f_auto,q_auto/ikbvkbww0wcm8lfu2glt`} alt="Image Load Failed" className='sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5 px-[12px]' />

              </div>
          </section>
 </>
  )
}

export default DescriptionWithImage