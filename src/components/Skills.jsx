import React from "react";
import HTML from "../assests/html.png";
import JS from "../assests/javascript.png";
import Node from "../assests/node.png";
import ReactImg from "../assests/react.png";
import Tailwind from "../assests/tailwind.png";
import Github from "../assests/github.png";
import CSS from "../assests/css.png";

const Skills = () => {
  const tech = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JS,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImg,
      title: "ReactJS",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: Node,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: Tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 7,
      src: Github,
      title: "GitHub",
      style: "shadow-gray-300",
    },
  ];

  return (
    <div
      name="Skill"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-16 sm:py-24 flex flex-col justify-center">
        <div className="text-center mb-12">
          <p className="text-3xl sm:text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Technical Skills
          </p>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base">
            These are the technologies I&apos;ve worked with:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
          {tech.map(({ id, title, src, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 transition-transform duration-300 py-6 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt={`${title} icon`}
                className="w-16 sm:w-20 h-16 sm:h-20 mx-auto object-contain"
              />
              <p className="mt-4 text-sm sm:text-base font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
