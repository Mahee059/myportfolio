import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import resume from '../assets/Resume.pdf'

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-black transition-colors duration-300 px-6 md:px-20 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Contact Me</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center">
        Feel free to reach out to me through the links below. I'd love to connect with you!
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {/* Email */}
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
          Email
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muna-khatiwada-26911a297/"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/dashboard"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          GitHub
        </a>
        <a
          href={resume}
          download="Resume"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors"
        >
          <FaFileDownload />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Contact;