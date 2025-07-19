import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-black to-gray-800 text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center text-center space-y-4">
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/RoshnV18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/KumarRoshan18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-cyan-400 transition duration-300"
          >
            <HiOutlineMail />
          </a>
          <a
            href="https://www.facebook.com/RoshanKumary20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/kumar_roshan_18/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 pt-2">
          © {new Date().getFullYear()} Roshan Kumar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
