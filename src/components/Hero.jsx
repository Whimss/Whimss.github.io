import React from 'react';

export default function Hero() {
    return (
        <section className="h-screen bg-[#CCCCFF] text-[#333366] flex items-center justify-center px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-4 w-full max-w-7xl h-full">

                {/* Grid 1 */}
                <div className=" p-6 rounded-lg flex flex-col items-center justify-center
                    md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-5">
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md mb-4"
                    />
                    <h1 className="text-3xl font-bold mb-1">Alondra Sanchez</h1>
                    <a
                        href="mailto:alo.sanchezochoa@gmail.com"
                        className="text-lg text-blue-400 hover:underline"
                    >
                        alo.sanchezochoa@gmail.com
                    </a>
                </div>

                {/* Grid 2 */}
                <div className="p-6 rounded-lg flex flex-col text-left justify-center
                    md:col-span-2 md:row-start-2 md:row-end-3 border border-[#333366]">
                    <h2 className="text-4xl font-bold mb-4 ">About this site</h2>
                    <p className="text-xl">
                        A site built with: React, Vite, and Tailwind to display my work.
                        
                    </p>
                </div>

                {/* Grid 3 */}
                <div className="p-6 rounded-lg flex items-center justify-center
                    md:col-span-2 md:row-start-3 md:row-end-4 border border-[#333366]">
                    <p className="text-xl text-left">
                        Welcome to my website. Please feel free to read more 
                        <a href="#about" className="text-blue-400 hover:underline ml-1 mr-1">about me</a>,
                        <a href="#experience" className="text-blue-400 hover:underline mx-1">work experience</a>,
                        <a href="#projects" className="text-blue-400 hover:underline mx-1">projects</a>,
                        or
                        <a href="#contact" className="text-blue-400 hover:underline ml-1">contact me.</a>.
                    </p>
                </div>
            </div>
        </section>

    );
}