import React from "react";

export default function ProjectDetails({ show, onHide, data }) {
    if (!show || !data) return null;

    const { title, description, url, images, technologies } = data;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-70"
            onClick={onHide}
        >
            <div
                className="bg-white rounded-lg max-w-3xl w-full p-6 relative max-h-screen overflow-auto"
                onClick={(e) => e.stopPropagation()} // Prevent modal closing when clicking inside content
            >
                <button
                    onClick={onHide}
                    className="absolute top-4 right-4  hover:text-gray-900 text-3xl font-bold cursor-pointer"
                    aria-label="Close modal"
                >
                    &times;
                </button>

                <h3 className="text-3xl font-semibold mb-4 text-[#333366]">{title}</h3>

                {/* Image Gallery */}
                {images && images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`${title} screenshot ${idx + 1}`}
                                className="rounded-lg object-cover w-full h-48"
                            />
                        ))}
                    </div>
                )}

                {/* Technologies */}
                {technologies && (
                    <ul className="flex flex-wrap justify-center gap-6 mb-6">
                        {technologies.map((tech, index) => (
                            <li key={index} className="text-center">
                                {tech.class && (
                                    <div className="flex flex-col items-center text-gray-700">
                                        <i className={`${tech.class} text-5xl`}></i>
                                        <p className="text-sm mt-1">{tech.name}</p>
                                    </div>
                                )}
                                {tech.img && (
                                    <div className="flex flex-col items-center text-gray-700">
                                        <img src={tech.img} alt={tech.name} className="w-12 h-12" />
                                        <p className="text-sm mt-1">{tech.name}</p>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
                <p className="mb-6 text-[#333366] text-lg">{description}</p>

                {/* Project Link */}
                {url && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-[#CCCCFF] text-white rounded hover:bg-blue-700 transition"
                    >
                        Visit Project
                    </a>
                )}
            </div>
        </div>
    );
}
