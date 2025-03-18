import React from 'react'
import MyImage from './images.png'
function Projeccts() {
  return (
    <div className='w-full h-full '>
        <div className='w-full h-full grid sm:grid-cols-1 md:grid-cols-2 '>
            <div className=' w-4/5 border  p-5 border-bg-red-500 flex flex-col justify-center items-center border-separate' >
                <img className='w-full' src={MyImage} alt='sadas'/>
                <p  className=' p-4 text-2xl font-sans font-bold  '> Techonology <span className='font-sans font-bold'>Full Stack Project</span> </p>
                <button className='px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300'>Read Descripation</button>
            </div>
            <div className=' w-4/5 border  p-5 border-bg-red-500 flex flex-col justify-center items-center border-separate' >
                <img className='w-full' src={MyImage} alt='sadas'/>
                <p  className=' p-4 text-2xl font-sans font-bold  '> Techonology <span className='font-sans font-bold'>Full Stack Project</span> </p>
                <button className='px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300'>Read Descripation</button>
            </div>  <div className=' w-4/5 border  p-5 border-bg-red-500 flex flex-col justify-center items-center border-separate' >
                <img className='w-full' src={MyImage} alt='sadas'/>
                <p  className=' p-4 text-2xl font-sans font-bold  '> Techonology <span className='font-sans font-bold'>Full Stack Project</span> </p>
                <button className='px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300'>Read Descripation</button>
            </div>  <div className=' w-4/5 border  p-5 border-bg-red-500 flex flex-col justify-center items-center border-separate' >
                <img className='w-full' src={MyImage} alt='sadas'/>
                <p  className=' p-4 text-2xl font-sans font-bold  '> Techonology <span className='font-sans font-bold'>Full Stack Project</span> </p>
                <button className='px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300'>Read Descripation</button>
            </div>
           
        </div>

    </div>
  )
}

export default Projeccts