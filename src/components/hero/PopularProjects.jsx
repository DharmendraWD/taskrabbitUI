import React from 'react'
import Heading from '../utility/Heading'
import { NavLink } from 'react-bootstrap'
import '../../beauty/PopularProjects.css'

import midLeft_Svg from '../../img/mid_left_shape.9b13a86d.svg'
import { useState } from 'react'
import { useEffect } from 'react'



function PopularProjects() {
  // STATES ------------
  const [isMobileView, setisMobileView] = useState(false)
  const [loadMore, setloadMore] = useState("Load More...")
  const [boxVal, setboxVal] = useState(4)


  // FUNCTIONS----------------
  const setMobileView = () => {    //if width is 600px then show load more option
    if (window.innerWidth <= 600) {
      setisMobileView(true)
      console.log("less")
    } else {
      setboxVal(8)
    }
  }


  const handleLoadmore = () => {    ///Load more and load Leass
    if (loadMore === "Load More...") {
      setloadMore("Show Less")
      setboxVal(8)
      console.log(boxVal)
    }
    else {
      setloadMore("Load More...")
      setboxVal(4)
    }
  }
  // FUNCTIONS END HERE----------------


  useEffect(() => {       //Runs at first to check if the site is opened in small screen or lagre.
    setMobileView()
  }, [])





   return (
    <div className=' pt-[80px]'>
      <div className='pr-[80px] pl-[80px] pplrproj'>
        <div className="PopularProjectHeading">
          <Heading label={"Popular Project"}></Heading>
        </div>


        <div className="projectsCard ">
          {[...Array(boxVal)].map((_, index) => (
            <div className={`popularProjectImageTextParent`} key={index}>
            <div className="wrapperPPimgT">
              <div className="popularProjectsImgDiv">
                <img src="https://images.ctfassets.net/vwt5n1ljn95x/15JB3WRwRtvEsf5rcVKmnK/610c440541b1cca93bee3534037379e7/Furniture_Assembly.jpeg?w=750&q=75&fm=webp" alt="" className='popularProjectsImg' />
              </div>

              <div className="popularProjText">
                <p className='cardHeading'>Lorem, ipsum dolor.</p>
                <p className='cardPara pplrprojPAra'>Lorem, ipsum dolor.</p>
              </div>
              </div>
            </div>

          ))}

          <div className="loadMore relative">
            <p onClick={handleLoadmore} className={`text-center cursor-pointer ${isMobileView !== true ? "hidden" : ""}`}>{loadMore}</p>
          </div>
        </div>
      </div>

      <img src={midLeft_Svg} className='svg' alt="" />

    </div>
  )
}

export default PopularProjects