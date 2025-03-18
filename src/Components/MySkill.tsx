import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaJava, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiTailwindcss, SiRedux, SiJavascript } from 'react-icons/si';


function MySkill() {
  return (
    <div className=''>
      <h1 className='flex p-5 font-mono text-4xl justify-center items-center'>
       My Skills 
      </h1>
      <div>
      <div className="flex flex-wrap justify-center gap-6 p-6 ">
      <div className="flex flex-col items-center">
        <FaHtml5 className="text-orange-600 text-6xl" />
        <p className="mt-2 text-sm font-semibold">HTML</p>
      </div>

      <div className="flex flex-col items-center">
        <FaCss3Alt className="text-blue-600 text-6xl" />
        <p className="mt-2 text-sm font-semibold">CSS</p>
      </div>

      <div className="flex flex-col items-center">
        <FaReact className="text-blue-400 text-6xl animate-spin" />
        <p className="mt-2 text-sm font-semibold">React JS</p>
      </div>

      <div className="flex flex-col items-center">
        <SiTypescript className="text-blue-500 text-6xl" />
        <p className="mt-2 text-sm font-semibold">TypeScript</p>
      </div>

      <div className="flex flex-col items-center">
        <FaJava className="text-red-500 text-6xl" />
        <p className="mt-2 text-sm font-semibold">Java</p>
      </div>

      <div className="flex flex-col items-center">
        <SiMongodb className="text-green-600 text-6xl" />
        <p className="mt-2 text-sm font-semibold">MongoDB</p>
      </div>

      <div className="flex flex-col items-center">
        <SiTailwindcss className="text-teal-400 text-6xl" />
        <p className="mt-2 text-sm font-semibold">Tailwind CSS</p>
      </div>

      <div className="flex flex-col items-center">
        <FaBootstrap className="text-purple-600 text-6xl" />
        <p className="mt-2 text-sm font-semibold">Bootstrap</p>
      </div>

      <div className="flex flex-col items-center">
        <SiRedux className="text-purple-500 text-6xl" />
        <p className="mt-2 text-sm font-semibold">Redux</p>
      </div>

      <div className="flex flex-col items-center">
        <SiJavascript className="text-yellow-400 text-6xl" />
        <p className="mt-2 text-sm font-semibold">JavaScript</p>
      </div>
    </div>
      </div>

    </div>
  )
}

export default MySkill