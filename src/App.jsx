import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';

import Achievements from './components/sections/Achievements';

import Contact from './components/sections/Contact';
import ScrollToTop from './components/common/ScrollToTop';

// Import data
import portfolioData from './data/portfolio.json';
import skillsData from './data/skills.json';
import projectsData from './data/projects.json';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData.about} />
        <Skills data={skillsData} />
        <Projects data={projectsData} />
        <Achievements />


        <Contact data={portfolioData} />
      </main>
      <Footer data={portfolioData} />
      <ScrollToTop />
    </div>
  );
}

export default App;
