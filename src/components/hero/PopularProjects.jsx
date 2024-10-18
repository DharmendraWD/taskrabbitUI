import React from 'react'
import Heading from '../utility/Heading'
import { NavLink } from 'react-bootstrap'
import '../../beauty/PopularProjects.css'

import midLeft_Svg from '../../img/mid_left_shape.9b13a86d.svg'
import { useState } from 'react'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { STATUSES, fetchPopularProject } from '../../redux/slices/PopularProject'





function PopularProjects() {
  // STATES ------------
  const dispatch = useDispatch();
  const { data: PopularProject, status } = useSelector((state) => state.PopularProject);
  
  const [isMobileView, setIsMobileView] = useState(false);
  const [loadMore, setloadMore] = useState("Load More...");
  const [apiCallLength, setApiCallLength] = useState(8); // Set a default value

  // Function to determine mobile view and set apiCallLength
  const setMobileView = () => {
    if (window.innerWidth <= 600 ) {
      setIsMobileView(true);
      if(loadMore ==="Load More..."){
        setApiCallLength(4);
      }
    } else {
      setIsMobileView(false);
      setApiCallLength(8);
    }
  };

  useEffect(() => {
    setMobileView();

    dispatch(fetchPopularProject(apiCallLength));
  }, [dispatch, apiCallLength]); 







  const handleLoadmore = () => {    ///Load more and load Leass
    if (loadMore === "Load More...") {
      setApiCallLength(8)
      setloadMore("Show Less")

    }
    else {
      setApiCallLength(4)
      setloadMore("Load More...")
    }
  }
  // FUNCTIONS END HERE----------------






   return (
    <div className=' pt-[80px]'>
      <div className='pr-[80px] pl-[80px] pplrproj'>
        <div className="PopularProjectHeading">
          <Heading label={"Popular Project"}></Heading>
        </div>


        <div className="projectsCard ">
          {PopularProject.map((projectdata, index) => (
            <div className={`popularProjectImageTextParent`} key={index}>
            <div className="wrapperPPimgT">
              <div className="popularProjectsImgDiv">
                <img src={projectdata.image} alt="" className='popularProjectsImg height250' />
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