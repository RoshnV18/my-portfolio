import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      label: "LinkedIn",
      icon: <FaLinkedin size={25} />,
      href: "https://www.linkedin.com/in/kumarroshan18/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      label: "GitHub",
      icon: <FaGithub size={25} />,
      href: "https://github.com/RoshnV18",
    },
    {
      id: 3,
      label: "Mail",
      icon: <HiOutlineMail size={25} />,
      href: "mailto:roshankumar25361@gmail.com",
    },
    {
      id: 4,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={25} />,
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
        <ul>
          {links.map(({ id, label, icon, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] 
              hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white z-40 shadow-md">
        <ul className="flex justify-around py-3">
          {links.map(({ id, href, icon, download }) => (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                download={download}
                className="text-white hover:text-cyan-400 transition"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
