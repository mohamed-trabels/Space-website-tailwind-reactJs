import React, { useEffect } from 'react'
import earth from "./assets/earth-bg.mp4"
import Navbar from './component/Navbar'
import Hero from './component/Hero.jsx'
import Services from './component/Services.jsx'
import Banner from "./component/Banner";
import Banner2 from './component/Banner2';
import Footer from './component/Footer.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css'



const App = () => {

  
    useEffect(()=>{
      Aos.init(
{  duration:1200,
  easing:"ease-in-out"
}      )
    },[])  

   
  

  return (
    <div className=" ">
    <div className="h-[700px] relative">
      <video
        autoPlay
        loop
        muted
        className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
      >
        <source src={earth} type="video/mp4" />
      </video>
      <Navbar />
      <Hero />
      {/*services card section */}
      <Services/>
    <Banner/>
    <Banner2/>
    <Footer/>
    </div>
    
  </div>
  )
}

export default App