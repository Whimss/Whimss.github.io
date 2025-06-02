import React from 'react';
import { useState } from 'react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#333366] bg-opacity-70 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold ">
            <span className="hidden sm:inline">Alondra Sanchez Ochoa</span>
            <span className="inline sm:hidden">ASO</span>
          </div>
          <ul className=" hidden sm:flex space-x-6 ">
            <li>
              <a href="#experience" style={{ color: 'white' }} className="hover:text-blue-400">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" style={{ color: 'white' }} className="hover:text-blue-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" style={{ color: 'white' }} className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#contact" style={{ color: 'white' }} className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden focus:outline-none text-white text-3xl"
             style={{ color: '#ccccff' }}
          >
           <i className="bi bi-list"></i>
          </button>
        </div>
        {isOpen && (
          <ul className=" sm:hidden mt-4 space-y-4 ">
            <li>
              <a href="#experience" style={{ color: 'white' }} className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" style={{ color: 'white' }} className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" style={{ color: 'white' }} className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" style={{ color: 'white' }} className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}