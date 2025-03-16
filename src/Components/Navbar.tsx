import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaYoutube, FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="w-full text-black">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Tayyab Hakro</h1>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
        </ul>

        <div className="hidden md:flex space-x-6 text-2xl">
          <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
          <a href="#" className="hover:text-gray-300"><FaGithub /></a>
          <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-400 px-6 py-4 space-y-4">
          <ul className="space-y-4 text-lg">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
          </ul>
          <div className="flex space-x-6 text-2xl pt-4">
            <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-300"><FaGithub /></a>
            <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
