import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      <Navbar />
      <Hero />
      <main>
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App
