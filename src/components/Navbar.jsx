import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold">Your Logo</div>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-blue-400">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}