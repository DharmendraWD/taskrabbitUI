import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Heading from '../utility/Heading'
import CardHeading from '../utility/CardHeading'
import Button from '../utility/Button'
import joinimg from '../../img/joinbg.png'

function signInUp() {

  const location = useLocation();
  console.log(location.pathname)

  return (  
<div className="bg min-h-[100vh] relative">
      <img src={joinimg} alt="" className='min-h-screen min-w-full' />
    

      <div className='flex flex-col regis  mx-auto justify-center items-center'>

<div>
{
            location.pathname == "/join" ? <CardHeading label={"Lorem"} style={{ fontSize: "50px", padding: "0 0 24px 0", textAlign: "center" }}></CardHeading> : location.pathname == "/signup" ? <CardHeading label={"Sign up"} style={{ fontSize: "50px", padding: "0 0 24px 0", textAlign: "center" }}></CardHeading> : <CardHeading label={"Log in"} style={{ fontSize: "50px", padding: "0 0 24px 0", textAlign: "center" }}></CardHeading>
}

          
{
            location.pathname =="/join" ? 

      <div className="join flex flex-col gap-[30px] max-w-[400px] mx-auto justify-center items-center">
            <NavLink to='/signup'> <Button label={"Sign Up"} classes="whiteClrGreenBg darkGreenHover" ></Button></NavLink>
                <NavLink to='/signin'>  <Button label={"Sign In"} classes="greenClrWhiteBg"></Button></NavLink>
           
            <p className='w-[300px]'>By signing up you agree to our <NavLink className="cardHeadingClr clrBlackOnHover">Terms of Use</NavLink> and <NavLink className="cardHeadingClr clrBlackOnHover">Privacy Policy.</NavLink></p>
              </div> : location.pathname == "/signup" ?

           <div className='flex flex-col justify-center '>   
               <input type="text"  className='inputBoxCss' placeholder='First Name' />
               <input type="text"  className='inputBoxCss' placeholder='Last Name' />
               <input type="email" className='inputBoxCss'  placeholder='Email' />
               <input type="text"  className='inputBoxCss' placeholder='Mobile Number' />
               <input type="password"  className='inputBoxCss' placeholder='Password' />
               <input type="text"  className='inputBoxCss' placeholder='Zip Code' />
                  <p className='w-[350px] pb-[30px]'>By clicking below and creating an account, I agree to TaskRabbit’s<NavLink className="cardHeadingClr clrBlackOnHover">Terms of Use</NavLink> and <NavLink className="cardHeadingClr clrBlackOnHover">Privacy Policy.</NavLink></p>
                  <Button label={"Create Account"} classes={"whiteClrGreenBg"}></Button>
                  <br />
                <NavLink to="/signin">
                    <Button label={"Sign In Instead"} classes={"greenClrWhiteBg"}></Button>
                </NavLink>
              </div>
              
                : <div className='flex flex-col justify-center '>
                <div className='flex flex-col '>
                <label htmlFor="">Email Address</label>
                  <input type="text" className='inputBoxCss' placeholder='First Name' />
                </div>
                <div className='flex flex-col '>
                <label htmlFor="">Password</label>
                  <input type="password" className='inputBoxCss' placeholder='Password' />
                </div>
                 
<NavLink to="/">
                    <label htmlFor="" className='greenClrWhiteBg clrBlackOnHover'>Forgot Your Credentials?</label>

</NavLink>             
    <br />

                  <p className='w-[350px] pb-[30px]'>By clicking below and creating an account, I agree to TaskRabbit’s<NavLink className="cardHeadingClr clrBlackOnHover">Terms of Use</NavLink> and <NavLink className="cardHeadingClr clrBlackOnHover">Privacy Policy.</NavLink></p>
                  <Button label={"Log In"} classes={"whiteClrGreenBg"}></Button>
                  <br />
             <NavLink to="/signup">
                    <Button label={"Don't have Account?"} classes={"greenClrWhiteBg"}></Button>
             </NavLink>
                </div>



        }

        <div className='signUpBox'>

        </div>
</div>
    </div>
</div>


  )
}

export default signInUp