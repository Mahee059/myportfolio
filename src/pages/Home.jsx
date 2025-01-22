import React from 'react';
import { Link } from 'react-router-dom';
import  portfolio from '../assets/muna.jpg'


const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 px-6 md:px-20">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row justify-center items-center"
      >
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Hi, I am <span className="text-blue-500">Muna Khatiwada</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-600 dark:text-gray-300">
            Frontend Developer
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center md:text-left">
            I specialize in creating modern, responsive, and visually appealing web interfaces that deliver seamless user experiences.
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center md:text-left">
            With a passion for clean code and intuitive design, I am dedicated to building websites that are not only functional but also delightful to use.
          </p>
          <a
            href="#about"
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors"
          >
            Learn More About Me
          </a>
        </div>

        {/* Right Side: Photo */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
src={portfolio} // Replace this with your actual image URL
            alt="Muna Khatiwada"
            className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
