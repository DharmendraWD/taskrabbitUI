import Hero from "./components/hero/hero"
import HeroBanner from "./components/hero/HeroBanner"
import ImageCard from "./components/hero/ImageCard"
import Nav from "./components/navbar/Nav"
import PopularProjects from "./components/hero/PopularProjects"
import Popup from "./components/popup/Popup"
import ClientFeedback from "./components/hero/ClientFeedback"
import FooterBanner from "./components/hero/FooterBanner"
import FooterGetHelp from "./components/hero/FooterGetHelp"
import Footer from "./components/Include/footer"
import Services from "./components/servicesPage/Services"
import { Route, Routes } from "react-router-dom"
import SignInUp from "./components/signInup/SignInUp"
import BecomeATasker from "./components/becomeAtasker/BecomeATasker"
import { useEffect } from "react"

import ParticularService from "./components/servicesPage/ParticularService"
import ServicePageLink from "./components/servicesLinkPages/ServicePageLink"



import { fetchPopularProject } from "./redux/slices/PopularProject"
import dispatch from "./redux/store"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import DescribingTask from "./components/describing-task-comp/DescribingTask"


function App() {

  const { data: ServicerouteLinks } = useSelector((state) => state.PopularProject);



  return (
    <>
{/* <div className="helpBtnFixed_Parent min-h-screen">
<button className="helpBtnFixed">
  <i class="ri-questionnaire-line"></i>Help
</button>
</div> */}
            <Nav />

<Routes>
   <Route path="/" element={
          <>

            <Popup />
            <Hero />
            <ImageCard />
            <HeroBanner />
            <PopularProjects />
            <ClientFeedback />
            <FooterBanner />
            <ImageCard />
            <FooterGetHelp />
          </>
        } />
  <Route path='/Services' element={<Services></Services>}></Route>        
        <Route path='/join' element={<SignInUp/>}></Route>        
        <Route path='/signup' element={<SignInUp/>}></Route>        
        <Route path='/signin' element={<SignInUp/>}></Route>        
        <Route path='/become-a-tasker' element={<BecomeATasker/>}></Route>     
        <Route path='/particularServices' element={<ParticularService/>}></Route>     
        <Route path='/DescribingTask/:id' element={<DescribingTask />}></Route>     



    <Route path="/:title" element={<ParticularService />} />

   <Route path="/Service/:title" element={<ServicePageLink />} />
 <Route path="/dummy" element={<h1>dummy</h1>} />

        {/* SERVICE PAGE WHEN CLICK ON CARD IMAGE     */}
        {ServicerouteLinks.map((data, index)=>{
          return (
            <Route path={data.title.replace(/\s+/g, '-')} element={<ParticularService/>}></Route>
          ) 
        })}
</Routes>

            <Footer />
    </>
  )
}

export default App
