import React from 'react'
import { useState } from 'react'


// CSS
import './App.css'

// Importation des composants
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ProjectCardBootstrap from './components/ProjectCard';


function App() {
  
  return (
    <div className="AppContainer">
      {/* barre de navigation */}
      <Navbar />

      {/* contenu principal */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* pied de page */}
      <Footer />
    </div>
  )
}

export default App
