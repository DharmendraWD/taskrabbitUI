import React, { useState } from 'react';
import '../../beauty/Nav.css'; // Ensure you have a corresponding CSS file
import { NavLink } from 'react-router-dom';


const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // Start closed

    const handleSideBar = () => {
        console.log("Toggling sidebar");
        setIsNavOpen(prev => !prev); // Toggle the state
    };

    return (
        <div className="navParent w-full flex justify-around items-center">
            <div>
                <div className='hambrger' onClick={handleSideBar}>
                    <i className="ri-menu-fill"></i>
                </div>
                <NavLink to='/'>          <img src="https://www.taskrabbit.com/_next/static/media/taskrabbit-logo.c585babc.svg" alt="" className='w-[189px]' /></NavLink>
            </div>

            <div className={`list w-[50%] justify-around flex items-center navMenues`}    style={{ display: isNavOpen ? "flex" : "none" }}>
                <div className='links closeNav' onClick={handleSideBar}>
                    <i className="ri-close-large-line"></i>
                </div>
                <NavLink to="/Services" className={"links"}>Service </NavLink>
                <NavLink to="/join" className='links'>Sign up / Log in</NavLink>
                <NavLink to="/become-a-tasker" className='becomeMaster navBtn'>Become a Master</NavLink>
            </div>
        </div>
    );
};

export default Nav;
