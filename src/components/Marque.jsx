import { motion } from 'motion/react'
import React from 'react'

function Marque() {
  return (
    <div data-scroll data-scroll-speed=".1"className='bg-zinc-900 '>
     <div className='w-full pt-20 pb-60 rounded-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10 tracking-tighter'>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-120%"}} transition={{ repeat: Infinity ,duration: 10}}  className='pl-20 text-[17vw] leading-none font-["Founders_grotesk_Condensed] font-semibold  uppercase mb-7'> We are ochi</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-120%"}} transition={{ repeat: Infinity ,duration: 10}}  className=' text-[15vw] leading-none font-["Founders_grotesk_Condensed] font-semibold uppercase mb-7'> We are ochi</motion.h1>
      </div>
    </div>
    </div>
    
  )
}

export default Marque
// initial={{ x: 0 }} animate={{ x: "-100%"}} transition={{ repeat: Infinity ,duration: 10}} 
//add this at last 