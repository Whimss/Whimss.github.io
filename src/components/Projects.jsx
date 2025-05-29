import React, { Component } from "react";
import ProjectDetails from "./ProjectDetails";
import flaskLogo from '../assets/Flask.svg';
import blenderLogo from '../assets/blender.svg';
import jupyter from '../assets/Jupyter.svg'
import html from '../assets/HTML5.svg'
import css from '../assets/CSS3.svg'
import bootstrap from '../assets/Bootstrap.svg'
import vite from '../assets/Vite.js.svg'
import react from '../assets/react.svg'
import firebase from '../assets/Firebase.svg'
import sass from '../assets/Sass.svg'

const projects = [
  {
    title: "Senior Project Website",
    year: 2024,
    description: "Senior class project aimed at California wildfire predictions using 5 different algorithms and 10 different datasets to train models. ",
    url: "https://faridko26.github.io/wildfire.github.io/",
    images: [
      `${import.meta.env.BASE_URL}images/wildfire1.png`,
      `${import.meta.env.BASE_URL}images/wildfire2.png`
    ],
    technologies: [
      { name: "Jupyter", img: jupyter }, // no official Jupyter icon, Python is common substitute
      { name: "Flask", img: flaskLogo },
      { name: "Blender", img: blenderLogo }, // blender icon (fontawesome v6.4+)
      { name: "Bootstrap", img: bootstrap }, // bootstrap icon from bootstrap-icons
      { name: "HTML5", img: html }, // HTML5 icon fontawesome
      { name: "CSS3", img: css },
      { name: "Tableau",  class: "fa-solid fa-chart-pie"}
    ]
  },
  {
    title: "Law Firm Website",
     year: 2025,
    description: "Immigration law firm informational website.",
    url: "https://ayralaw1.github.io/AyraLaw/",
    images: [
       `${import.meta.env.BASE_URL}images/ayra1.png`,
      `${import.meta.env.BASE_URL}images/ayra2.png`
    ],
    technologies: [
      { name: "Bootstrap", img: bootstrap }, // bootstrap icon from bootstrap-icons
      { name: "HTML5", img: html }, // HTML5 icon fontawesome
      { name: "CSS3", img: css },
    ]
  },
  {
    title: "Anime Tracker",
     year: 2025,
    description: "A site that allows you to look up an anime and add to a personal list as well as add to favorites, add to watch later, or add to in progress.",
    url: "https://animetracker-bd18c.web.app/signin",
    images: [
      `${import.meta.env.BASE_URL}images/anime1.png`,
      `${import.meta.env.BASE_URL}images/anime2.png`
    ],
    technologies: [
      { name: "HTML5", img: html },
      { name: "CSS3", img: css },
      { name: "Sass", img: sass},
      { name:"React", img: react},
      { name:" Vite.js", img: vite},
      { name: "Firebase", img: firebase}
    ]
  },
 
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsModalShow: false,
      deps: {},
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    return (
      <section id="projects" className=" min-h-screen max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-semibold mb-6 inline-block border-b-4 text-[#333366] ">
          Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ">
          {projects.map((project, i) => (
            <div
              key={i}
              className="p-6 bg-[#333366] rounded-lg shadow hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
              onClick={() => detailsModalShow(project)}
            >
              {project.images && project.images[0] && (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="mb-4 w-full h-48 object-cover rounded"
                />
              )}
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-xl text-gray-300 mb-4">{project.year}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
                onClick={e => e.stopPropagation()} // Prevent card click opening modal when clicking the link
              >
                View Project
              </a>
            </div>
          ))}
        </div>
        <ProjectDetails
          show={this.state.detailsModalShow}
          onHide={detailsModalClose}
          data={this.state.deps}
        />
      </section>
    );
  }
}

export default Projects;
