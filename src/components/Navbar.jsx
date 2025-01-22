import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white dark:bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Brand */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          My Portfolio
        </div>

        {/* Navbar Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-800 dark:text-gray-300 hover:text-blue-500">Home</Link>
          <a href="#about" className="text-gray-800 dark:text-gray-300 hover:text-blue-500">About</a>
          <a href="#skills" className="text-gray-800 dark:text-gray-300 hover:text-blue-500">Skills</a>
          <a href="#projects" className="text-gray-800 dark:text-gray-300 hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-gray-800 dark:text-gray-300 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;