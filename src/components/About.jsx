import { div } from 'motion/react-client'
import React from 'react'

function About() {
  return (
    
  
      <div className= ' bg-zinc-900'>
      
        <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl'>
            <h1  className='text-black text-5xl pr-40  pl-20'>
                Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </h1>
            <div className="flex  pt-10 w-full border-t-[1px] mt-20 border-[#9eae67]">
            <div className='whatYouCanExpect'></div>
            <div className="w-1/2">
            <h1 className='text-zinc-900 ml-15 text-6xl'>Our approach:</h1>
            <button className="flex gap-8 items-center mt-10 ml-18 px-8 py-4 bg-zinc-900 rounded-full text-white"> READ MORE <div className='w-3 h-3 bg-white rounded-full'>
                
                </div> </button></div>
             <div className='mr-10 w-1/2 h-[70vh] bg-yellow-200 rounded-xl relative overflow-hidden'>
  <img 
    className="absolute inset-0 w-full h-full object-cover" 
    src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" 
    alt=""
  />
    </div>
   </div>
</div>
   <div className='flex px-[10vh] tracking-tighter w-full gap-25 pt-[10vh] pb-[10vh] bg-[#CDEA68] text-zinc-900 text-xl border-t-1 border-zinc-400'>

    <div className='w-6/16'>
     <h1>
      What you can expect:
     </h1>
    </div>
    <div className='w-3/16 '>

   
      <h1 className='mb-[5vh]'>We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.</h1>
      <h1>
        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
      </h1>
       </div>
    <div className='w-1/4 ml-[10vh]'>
       <h1 className='mt-30'>S:</h1>
       <div className='mt-[10vh] block'></div>
       <h1 >Instagram</h1>
         <h1> Behance</h1> 
           <h1>Facebook</h1>
        <h1>Linkedin</h1>   
    </div>
    

   </div>


      </div>
  )
}

export default About
