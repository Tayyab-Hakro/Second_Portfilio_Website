import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative text-black py-12 px-5"
    >
      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        onClick={scrollToTop}
        className="absolute top-5 right-5 bg-blue-500 p-3 rounded-full text-white shadow-lg hover:bg-blue-600 transition duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Section 1: About */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold mb-4">Tayyab Hakro</h1>
          <p className="text-gray-400 text-sm mb-4">
            I'm a MERN Stack Developer passionate about building responsive and functional web applications. Let's connect!
          </p>
          <div className="flex space-x-4 text-2xl mt-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400"
            >
              <FaYoutube />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>

        {/* Section 2: Quick Links */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition duration-300">About Me</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
            </li>
          </ul>
        </motion.div>

        {/* Section 3: Contact Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <span className="font-medium text-white">Email:</span> tayyabhakro2k21@gmail.com
            </li>
            <li>
              <span className="font-medium text-white">Phone:</span> +92-000-0000000
            </li>
            <li>
              <span className="font-medium text-white">Location:</span> Gulshan Hadeed Phase 1, Karachi, Pakistan
            </li>
          </ul>
        </motion.div>

        {/* Section 4: Newsletter */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h2 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h2>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm"
      >
        <p>© {new Date().getFullYear()} Tayyab Hakro. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
