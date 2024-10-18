import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "../../beauty/carddetails.css";
import Heading from './Heading';
import CardHeading from './CardHeading';
import CardPara from '../utility/CardPara';
import Hr from './Hr';
import ContentUpperFooter from './ContentUpperFooter';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchPopularProject } from '../../redux/slices/PopularProject';
import { fetchServicesImage } from '../../redux/slices/ServicesImage'; // Correct import

function CardsDetails() {
  const dispatch = useDispatch();
  const { data: PopularProject, status } = useSelector((state) => state.PopularProject);

  useEffect(() => {
    dispatch(fetchPopularProject(9));
  }, [dispatch]);


  // when click on "images of cards" in Services then show particular daata by id for individuals 
  // function fetchParticularDetailsServiceImage(event) {
  //   const id = parseInt(event.currentTarget.id); 
  //   dispatch(fetchServicesImage(id)); 
  // }

  return (
    <>
      <div className='paddingX100px'>
        <Heading
          label={"Lorem ipsum dolor sit amet consectetur."}
          style={{ marginBottom: "0 !important", width: "100%", textAlign: "center" }}
        />

        <div className='cardDetailsParent pb-[90px]'>
          {PopularProject.map((data, index) => (
            <NavLink
              // to={`/${data.title.replace(/\s+/g, '-')}`}
              to={`/${index}`}
              id={index}
              className="block cardFromCardDetails shadow-sm shadow-indigo-100"
            >
              <img
                alt=""
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full object-cover"
                id={index}
              />

              <div className="mt-2">
                <div>
                  <CardHeading label={data.title + index} style={{ textAlign: "start", paddingLeft: "15px", fontSize: "1.1rem" }} />
                  <CardPara label="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, laborum?" style={{ textAlign: "start", paddingLeft: "15px", fontSize: "0.9rem", color: "grey" }} />
                  <Hr style={{ height: "8px", color: "grey", margin: "22px 15px" }} />
                </div>
              </div>

              <div className="linkFromCardDetails">
                {[...Array(10)].map((_, index2) => (
                  <div style={{ padding: "0 15px" }} key={index2}>
                    {/* <NavLink to={`/${data.title.replace(/\s+/g, '-')}`}> */}
                    <NavLink to={`/Service/${data.title.replace(/\s+/g, '-')}`}>
                    <p className='text-start cardHeadingClr clrBlackOnHover'>Lorem ipsum, dolor {index2}.</p>
                    </NavLink>
                  </div>
                ))}
              </div>

            </NavLink>
          ))}
        </div>

        <ContentUpperFooter paddingBelllowImg="pb-[60px]" />
      </div>
    </>
  );
}

export default CardsDetails;
