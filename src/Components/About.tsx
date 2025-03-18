import React from 'react';
import AboutImg from './About.png';

function About() {
  return (
    <div className="w-full h-full  py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Text Section */}
        <div className="max-w-2xl p-8  rounded-2xl  text-gray-800 font-sans transition-transform hover:scale-[1.02] duration-300">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">About Me</h1>

          <p className="text-lg leading-relaxed mb-4">
            I am a passionate <strong>Full Stack Developer</strong> with hands-on experience in building scalable and responsive web applications. Over the years, I have helped businesses of all sizes enhance their digital presence by delivering custom solutions tailored to their needs.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Whether it's developing e-commerce platforms, business websites, or custom web applications, my goal is to provide high-quality solutions that add real value. From designing seamless user interfaces to developing robust backend systems, I strive to create products that drive growth and efficiency.
          </p>

          <a
            href="/your-cv-file.pdf" // Replace with your actual file path
            download
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            className="w-80 md:w-96 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            src={AboutImg}
            alt="About"
          />
        </div>

      </div>
    </div>
  );
}

export default About;
