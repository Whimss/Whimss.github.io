import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#333366] bg-opacity-70 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold ">Alondra Sanchez Ochoa</div>
          <ul className="flex space-x-6 ">
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
        </div>
      </div>
    </nav>
  );
}