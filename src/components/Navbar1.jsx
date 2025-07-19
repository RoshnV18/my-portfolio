import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar1 = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Project" },
    { id: 4, link: "Skill" },
    { id: 5, link: "Contact" },
  ];

  return (
    <nav className="fixed w-full h-20 flex justify-between items-center px-4 bg-black text-white z-50">
      <div>
        <h1 className="text-3xl sm:text-4xl font-signature ml-2">Roshan</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500} offset={-70}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden z-20 cursor-pointer text-gray-400"
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
          {links.map(({ id, link }) => (
            <li key={id} className="py-6 text-3xl capitalize">
              <Link
                to={link}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setNav(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar1;
