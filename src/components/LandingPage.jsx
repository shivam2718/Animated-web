import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-speed="-.8" className='w-full h-screen bg-zinc-900 pt-20'>
      <div className="textstructure  mt-35 px-20 ">
          {["We Create","Eye opening","presentations"].map((item,index)=>{
            return <div  className='masker'>
           <div className='w-fit flex items-center'>
            {index===1&&(<motion.div initial={{width:0}} animate={{width:"8.5vw"}}
            transition={{ease:[0.65, 0, 0.35, 1],duration:1}}
            
            className='mt-[17px] w-[8.5vw] rounded bg-green-500 h-[5vw] '> </motion.div>)}
             <h1 className="uppercase tracking-tighter leading-[6vw] text-[7.5vw] font-semibold">{item}</h1>
           </div> 
         </div>
})}
      </div>
      <div className='border-t-[1.8px] border-zinc-700 mt-32 flex justify-between items-center px-20 py-5'>
        {["For Public and Private Companies","From the first pitch to IPO"].map((item,index)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
        <div className="start uppercase flex items-center gap-5 ">
          <div  className="px-4 py-2 border-[1px] rounded-full border-zinc-400 font-light text-sm">
            Start the project 
            </div> 
            <div className='border-[2px] w-10 h-10 rounded-full flex items-center justify-center'> 
                <span className='rotate-[40deg]'>
                < FaArrowUpLong/>
                </span>
                 </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
