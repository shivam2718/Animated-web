import React from 'react'
import Cards from './Cards'
function CardContainer() {
    const img1="src/assets/Screenshot 2025-06-01 141125.png"
    const img2="src/assets/Screenshot 2025-06-01 132048.png"
    const img3="src/assets/Screenshot 2025-06-01 131236.png"
    const text2= "RATING 5.0 ON CLUTCH"
    const text3= "BUSINESS BOOTCAMP ALUMNI"
    const text1= "@2019-2022"
  return (
    <div className="flex  w-full ">
      <Cards img1={img3} text1={text1}/>
      <Cards img1={img1} text1={text2}/>
      <Cards img1={img2} text1={text3}/>  
    </div>
  )
}

export default CardContainer
