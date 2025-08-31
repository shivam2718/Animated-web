import React from 'react'
import Feature from './Feature'
function FeatureContainer() {
     const pic1= "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
  const pic2="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" 
   const pic3="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
  const pic4="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
  const pic5="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png"
  const pic6="https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png"
  const pic7="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
  const pic8="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg"
  const pic9="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
  const pic10="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg"
  const text=["SCIENCE LABS","SPACE CARDBOARD","AH2 & MARATHON","FYDE","VISE","ALL THINGS GO","TARWA","BLACK BOOK","PREMIUMBLEND","SOFTSTART"]
  return (
    <div className=' m-0 p-0 bg-zinc-900'>
      <Feature pic1={pic1} pic2={pic2}  text1={text[0]} text2={text[1]} />
    <Feature pic1={pic3} pic2={pic4}  text1={text[2]} text2={text[3]}/>
    <Feature pic1={pic5} pic2={pic6}  text1={text[4]} text2={text[5]}/>
    <Feature pic1={pic7} pic2={pic8}  text1={text[6]} text2={text[7]}/>
    <Feature pic1={pic9} pic2={pic10}  text1={text[8]} text2={text[9]}/>
    </div>
  )
}

export default FeatureContainer
