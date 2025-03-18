import React from 'react'
import MyImage from './MyImage.png'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
function Hero() {
  return (
    <div className='  '>
        <div className='w-full h-full  
         grid grid-cols-1  md:grid-cols-2 md:justify-between'>
<div className='flex  justify-center flex-col '>
  <h1 className='text-[3.5rem] font-sans font-bold'>
    Hi, I am <span className='font-bold text-blue-400'>Tayyab Hakro</span>
  </h1>
  <h1 className='text-4xl font-bold text-blue-400'>
    Full Stack Developer
  </h1>

  <p className='text-lg'>
    I am a Full Stack Developer with over 1 year of experience.
    <p className='text-lg'>
    I help people fix bugs and create new business websites.
  </p>
  </p>
  <div className="w-full mt-5  via-blue-100 to-blue-200 rounded-xl shadow-lg p-6 flex flex-col items-center space-y-6">
      <p className="text-4xl font-extrabold text-blue-900">Contact Me</p>
      
      <div className="flex space-x-20">
        {/* Email */}
        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <MdEmail className="text-5xl text-red-500" />
          <span className="mt-2 text-lg font-medium text-gray-700">Email</span>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <FaLinkedin className="text-5xl text-blue-700" />
          <span className="mt-2 text-lg font-medium text-gray-700">LinkedIn</span>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <MdOutlineWhatsapp className="text-5xl text-green-500" />
          <span className="mt-2 text-lg font-medium text-gray-700">WhatsApp</span>
        </div>
      </div>
    </div>
</div>

            <div className='w-full h-full'>
<img className='w-4/4' src={MyImage} alt='Img is here'/>
            </div>
        </div>
    </div>
  )
}

export default Hero