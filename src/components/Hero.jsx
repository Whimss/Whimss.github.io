import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/path/to/your-image.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white">
        <div>
              <img
            src="/path/to/your-profile.jpg"
            alt="Profile"
            className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-white object-cover shadow-lg"
          />
          <h1 className="text-5xl font-bold">Alondra Sanchez Ochoa</h1>
          <p className="mt-4 text-xl">Web Developer</p>
          <a
            href="#about"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            alo.sanchezochoa@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}