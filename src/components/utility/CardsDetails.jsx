import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../beauty/carddetails.css"
import Heading from './Heading'
import CardHeading from './CardHeading'
import CardPara from '../utility/CardPara'
import Hr from './Hr'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'
import ContentUpperFooter from './ContentUpperFooter'


function CardsDetails() {

  return (
      <div className='paddingX100px'>
          <Heading
              label={"Lorem ipsum dolor sit amet consectetur."}
              style={{ marginBottom: "0 !important", width: "100%", textAlign: "center" }}
          />
          
          <div className='cardDetailsParent pb-[90px]'>
          {[...Array(9)].map((_, index) => (
              <NavLink to="/" className="block cardFromCardDetails shadow-sm shadow-indigo-100">
                  <img
                      alt=""
                      src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="h-56 w-full object-cover"
                  />

                  <div className="mt-2">
                          <div>
                          <CardHeading label={"Lorem ipsum, dolor sit amet consectetur"} style={{textAlign:"start", paddingLeft:"15px", fontSize:"1.1rem"}}></CardHeading>
                          <CardPara label="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, laborum?" style={{ textAlign: "start", paddingLeft: "15px", fontSize: "0.9rem", color:"grey" }}></CardPara>
                         
                  <Hr style={{height:"8px", color:"grey", margin:"22px 15px"}}></Hr>
                          </div>

                  </div>

                <div className="linkFromCardDetails">
                        {[...Array(10)].map((_, index2)=>{
                                return(
                                    <div style={{padding:"0 15px"}}>
                                        <p className='text-start cardHeadingClr clrBlackOnHover'>Lorem ipsum, dolor {index2}.</p>
                                    </div>
                                )
                        })}
                </div>

              </NavLink>
          ))}
              </div>


<ContentUpperFooter paddingBelllowImg="pb-[60px]"></ContentUpperFooter>
    </div>
  )
}

export default CardsDetails