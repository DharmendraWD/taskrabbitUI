import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Heading from '../utility/Heading'
import CardHeading from '../utility/CardHeading'
import Button from '../utility/Button'


function signInUp() {

  const location = useLocation();
  console.log(location.pathname)

  return (  
<div className="bg min-h-[100vh] relative">
      <img src="https://www.taskrabbit.com/v3/assets/solo_assembly_new_2023-e1837f0795e03a163ef59d472e9fee53.png" alt="" className='min-h-screen min-w-full' />
    

      <div className='flex flex-col regis  mx-auto justify-center items-center'>

<div>
{
            location.pathname == "/join" ? <CardHeading label={"Lorem"} style={{ fontSize: "50px", padding: "0 0 24px 0", textAlign: "center" }}></CardHeading> : location.pathname == "/signup" ? <CardHeading label={"Sign up"} style={{ fontSize: "50px", padding: "0 0 24px 0", textAlign: "center" }}></CardHeading> : <CardHeading label={"Log in"} style={{ fontSize: "50px", padding: "0 0 24px 0", textAlign: "center" }}></CardHeading>
}

          
{
            location.pathname =="/join" ? 

      <div className="join flex flex-col gap-[30px] max-w-[400px] mx-auto justify-center items-center">
            <NavLink to='/signup'> <Button label={"Sign Up"} classes="whiteClrGreenBg darkGreenHover" ></Button></NavLink>
            <Button label={"Sign In"} classes="greenClrWhiteBg"></Button>
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
              </div>
              
                : <div className='flex flex-col justify-center '>
                  <input type="text" className='inputBoxCss' placeholder='First Name' />
                  <input type="text" className='inputBoxCss' placeholder='Last Name' />
                  <input type="email" className='inputBoxCss' placeholder='Email' />
                  <input type="text" className='inputBoxCss' placeholder='Mobile Number' />
                  <input type="password" className='inputBoxCss' placeholder='Password' />
                  <input type="text" className='inputBoxCss' placeholder='Zip Code' />
                  <p className='w-[350px] pb-[30px]'>By clicking below and creating an account, I agree to TaskRabbit’s<NavLink className="cardHeadingClr clrBlackOnHover">Terms of Use</NavLink> and <NavLink className="cardHeadingClr clrBlackOnHover">Privacy Policy.</NavLink></p>
                  <Button label={"Create Account"} classes={"whiteClrGreenBg"}></Button>
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