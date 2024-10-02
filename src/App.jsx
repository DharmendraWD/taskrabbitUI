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


function App() {


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
</Routes>

            <Footer />
    </>
  )
}

export default App
