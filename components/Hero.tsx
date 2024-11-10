import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from "@/components/Footer";

 
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/profile.jpg)] bg-cover'
    style={{backgroundSize:"35%" , backgroundPosition:"left 100px top 100px"}}>

        <Navbar/>
        <div className='container grid lg:cols-2 h-[calc(100vh.60px)]'>
            <div className='hidden lg:block'></div>        
            <div className='text-[80px] sm:text-[100px] font bold leading-tight flex justify-center items-center'>
                <div>
                <p>I'am</p>
                <p>Kanwal</p>
                <p>Umair</p>
                </div>
            </div>
            </div>
        <Header/>
        <Footer/>
      
    </div>
  )
}

export default Hero