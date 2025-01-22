import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from'./pages/About';
import Projects from'./pages/Projects';
import Skills from'./pages/Skills';
import Contact from'./pages/Contact';


const App = () => (
  <Router>
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Navbar */}
      <Navbar /><div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <div className="snap-y snap-mandatory overflow-y-auto h-screen">
        {/* Home Section */}
        <section id="home" className="snap-start">
          <Home />
        </section>
        {/* About Section */}
        <section id="about" className="snap-start">
          <About />
        </section>

{/* Projects Section */}
<section id="projects" className="snap-start">
          <Projects />
        </section>

{/* Skills Section */}
<section id="skills" className="snap-start">
          <Skills />
        </section>

{/* Contact Section */}
<section id="contact" className="snap-start">
          <Contact />
        </section>

      </div>
    </div>


    </div>
  </Router>
);

export default App;
