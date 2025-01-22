import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          About Me
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Hello, I am <span className="text-blue-500">Muna Khatiwada</span>, a passionate Frontend Developer.
        </p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I focus on creating beautiful, responsive, and user-friendly web applications using modern technologies like HTML, CSS, JavaScript, and React.
        </p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I am always learning and growing to deliver high-quality solutions that align with user needs and industry trends.
        </p>
      </div>
    </section>
  );
};

export default About;
