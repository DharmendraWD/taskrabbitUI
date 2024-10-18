import React from 'react'
import Heading from '../utility/Heading'
import { NavLink } from 'react-router-dom'

function OtherTaskFooter() {
  return (
    <div className='mt-[30px]'>
        <Heading label={"Search Other Tasks"} style={{fontSize:"1.4rem", textAlign:"center"}}/>

        <div className="tasks_footer flex justify-evenly">
            <NavLink to={""}>
                <Heading label={"Other Tasks"} style={{fontSize:"1rem", color:"#0d7a5f"}}/>
            </NavLink>
            <NavLink to={""}>
                <Heading label={"Other Tasks"} style={{fontSize:"1rem", color:"#0d7a5f"}}/>
            </NavLink>
            <NavLink to={""}>
                <Heading label={"Other Tasks"} style={{fontSize:"1rem", color:"#0d7a5f"}}/>
            </NavLink>
            
        </div>
        <div className="tasks_footer flex justify-evenly">
            <NavLink to={""}>
                <Heading label={"Other Tasks"} style={{fontSize:"1rem", color:"#0d7a5f"}}/>
            </NavLink>
            <NavLink to={""}>
                <Heading label={"Other Tasks"} style={{fontSize:"1rem", color:"#0d7a5f"}}/>
            </NavLink>
            <NavLink to={""}>
                <Heading label={"Other Tasks"} style={{fontSize:"1rem", color:"#0d7a5f"}}/>
            </NavLink>
            
        </div>
        <div className="tasks_footer flex justify-evenly">
            <NavLink to={""}>
                <Heading label={"Other Tasks"} style={{fontSize:"1rem", color:"#0d7a5f"}}/>
            </NavLink>
            <NavLink to={""}>
                <Heading label={"Other Tasks"} style={{fontSize:"1rem", color:"#0d7a5f"}}/>
            </NavLink>
            <NavLink to={""}>
                <Heading label={"Other Tasks"} style={{fontSize:"1rem", color:"#0d7a5f"}}/>
            </NavLink>
            
        </div>
    </div>
  )
}

export default OtherTaskFooter