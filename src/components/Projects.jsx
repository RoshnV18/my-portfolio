import React from "react";
import Project1 from "../assests/project1.png";
import Project2 from "../assests/project2.png";
import Project3 from "../assests/project3.png";
import Project4 from "../assests/project4.png";

const Projects = () => {
  const project = [
    {
      id: 1,
      src: Project1,
      href: "https://github.com/RoshnV18/devLobby-UI",
    },
    {
      id: 2,
      src: Project2,
      href: "https://github.com/RoshnV18/KhaoPiyo",
    },
    {
      id: 3,
      src: Project3,
      href: "https://github.com/RoshnV18/MovieStar",
    },
    {
      id: 4,
      src: Project4,
      href: "https://github.com/RoshnV18/my-portfolio",
    },
  ];

  return (
    <div
      name="Project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-16 sm:py-24 flex flex-col justify-center w-full h-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            Projects
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {project.map(({ id, src, href }) => (
            <div
              key={id}
              className="bg-gray-900 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 overflow-hidden"
            >
              <img
                src={src}
                alt={`Project ${id}`}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="flex items-center justify-center py-4">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-4/5 sm:w-3/5"
                >
                  <button className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded transition duration-300">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
