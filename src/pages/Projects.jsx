import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projectData = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills, projects, and contact information.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      link: '#https://muna-portfolio.netlify.app/',
    },
    {
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce platform with product filters and a cart system.',
      technologies: ['React', 'Redux', 'Bootstrap'],
      link: '#',
    },
    
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-300 px-6 md:px-20"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8">
        Projects
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center max-w-3xl">
        Below are some of the projects I have worked on, showcasing my skills in frontend development and my ability to
        build functional and visually appealing applications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <li
                  key={i}
                  className="bg-blue-500 text-white text-sm px-3 py-1 rounded-md shadow-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={project.link}
              className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors text-center"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
