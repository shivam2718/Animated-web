import { span } from 'motion/react-client'
import React from 'react'

function Feature(props) {
  return (
    <>
    <div className='w-full py-10 bg-inherit  '>
      <div className='w-full px-20 border-b-[1px] pb-10 border-zinc-700 '>
      </div>

      <div className='px-20'>
      <div className='cards mt-10 flex gap-10  w-full'>
    
    <div className="cardContainer relative w-1/2 h-[75vh] overflow-hidden group">
  <h1 className="mt-[50px] mx-[24px] text-8xl tracking-tight absolute z-10 font-semibold text-yellow-400 opacity-0 scale-95 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100">
    {props.text1.split('').map((item, index) => (
      <span key={index}>{item}</span>
    ))}
  </h1>
  <div className="card z-0 w-[80vh] h-full rounded-xl overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-105">
    <img className="w-full h-full object-cover" src={props.pic1} alt="" />
  </div>
</div>

<div className="cardContainer relative w-1/2 h-[75vh] overflow-hidden group">
  <h1 className="mt-[50px] mx-[24px] text-8xl tracking-tight absolute z-10 font-semibold text-yellow-400 opacity-0 scale-95 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100">
    {props.text2.split('').map((item, index) => (
      <span key={index}>{item}</span>
    ))}
  </h1>
  <div className="card z-0 w-[80vh] h-full rounded-xl overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-105">
    <img className="w-full h-full object-cover" src={props.pic2} alt="" />
  </div>
</div>

       
      </div>
      </div>
      
    </div>
    </>
  )
}

export default Feature
