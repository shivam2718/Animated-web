import React from 'react'

function Cards(props) {
  return (
    <div className='pt-[10vh]'>
     <div className=" h-[500px]  m-10   ">
      <img className="w-[600px] h-[500px] object-cover" src={props.img1} alt=""/>
    </div>
     <div className='butt h-[100px]'>
     <button className="ml-[7vh] text-zinc-900 tracking-tighter border border-zinc-900 rounded-full px-4 py-3 font-semibold hover:bg-zinc-900 hover:text-white transition duration-300">
  {props.text1}
</button>

     </div>
    </div>
  );
}


export default Cards
