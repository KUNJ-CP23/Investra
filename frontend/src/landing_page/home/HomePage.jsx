import React from "react";
import Awards from './Awards'
import Navbar from '../Navbar'
import Hero from './Hero'
import Pricing from './Pricing'
import Stats from './Stats'
import Education from './Education'
import Footer from '../Footer'
import OpenAccount from '../OpenAccount'


function HomePage(){
    return(
        <>
        <Navbar />
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
      </>
    );
}

export default HomePage;