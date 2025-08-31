import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import CardContainer from './components/CardContainer'
import FeatureContainer from './components/FeatureContainer'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Clients from './components/Clients'
function App() {
 const locomotiveScroll = new LocomotiveScroll();
  return (
    
    <div className='w-full h-screen bg-zinc-900 text-white'>
    <Navbar/>
    <LandingPage/>
    <Marque/>
    <About/>
    <Eyes/>
    <h1 className='pt-[7vh] pl-[10vh] bg-zinc-900 text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Projects:</h1>  
    <FeatureContainer/>
    <CardContainer/>
    
    /*ready to start the project
    */
    <Clients/>
    <Footer/>
    </div>
  )
}

export default App
/* 
       
      
       
       */