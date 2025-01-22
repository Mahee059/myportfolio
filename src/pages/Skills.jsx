import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiRedux,
  SiWordpress,
  SiGithub,
  SiNextdotjs,
  SiGitlab,
  SiReactrouter,
  SiCanva,
} from 'react-icons/si';

const skills = [
  {
    name: 'HTML5',
    icon: <SiHtml5 />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS3',
    icon: <SiCss3 />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'React',
    icon: <SiReact />,
    link: 'https://reactjs.org/',
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs />,
    link: 'https://nodejs.org/',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'Redux Toolkit',
    icon: <SiRedux />,
    link: 'https://redux-toolkit.js.org/',
  },
  {
    name: 'WordPress',
    icon: <SiWordpress />,
    link: 'https://wordpress.org/',
  },
  {
    name: 'GitHub',
    icon: <SiGithub />,
    link: 'https://github.com/',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    link: 'https://nextjs.org/',
  },
  {
    name: 'GitLab',
    icon: <SiGitlab />,
    link: 'https://gitlab.com/',
  },
  {
    name: 'React Native',
    icon: <SiReact />,
    link: 'https://reactnative.dev/',
  },
  {
    name: 'Canva',
    icon: <SiCanva />,
    link: 'https://www.canva.com/',
  },
];

const Skills = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center">Skills</h1>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${skill.name}`}
              className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <div className="text-6xl mb-2 transform transition-transform duration-200 hover:scale-110">
                {skill.icon}
              </div>
              <p className="text-xl font-semibold">{skill.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
