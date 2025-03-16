import React from 'react'
import MyImage from './MyImage.png'
function Hero() {
  return (
    <div className='w-full h-full bg-green-100 '>
        <div className='w-full h-full flex 
         grid grid-cols-1  md:grid-cols-2 md:justify-between'>

            <div className='flex justify-center flex-col'>
<h1 className='text-4xl'>Hi I am <span className='text-4xl font-bold font text-blue-400'>  Tayyab Hakro</span></h1>
<p>And I am Full Stack developer wiht Experience of 1+ working as full stack developer</p>
            </div>
            <div>
<img className='w-2/4' src={MyImage} alt='Img is here'/>
            </div>
        </div>
    </div>
  )
}

export default Hero