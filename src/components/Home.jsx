import React from "react";
import myphoto from "../assests/myphoto.jpg";
import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-6 py-16 min-h-screen">
        <div className="flex flex-col justify-center h-full text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            I'm a <span className="text-cyan-400">Software Developer</span>
          </h1>

          <p className="text-gray-300 py-6 max-w-md mx-auto md:mx-0 text-base sm:text-lg leading-relaxed">
            I love building full-stack web applications using technologies like{" "}
            <span className="text-white font-medium">
              HTML, CSS, ReactJS, Tailwind, NodeJS, ExpressJS
            </span>
            , and <span className="text-white font-medium">MongoDB</span>.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="Project"
              smooth
              duration={500}
              className="group text-white px-6 py-3 flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-lg hover:shadow-cyan-600/40 transition duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 transform duration-300">
                <MdDoubleArrow size={24} />
              </span>
            </Link>
          </div>
        </div>

        <div className="mb-10 md:mb-0 md:ml-12 flex justify-center md:w-1/2">
          <img
            src={myphoto}
            alt="Roshan Kumar"
            className="rounded-2xl w-2/3 sm:w-1/2 md:w-full max-w-xs sm:max-w-sm object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
