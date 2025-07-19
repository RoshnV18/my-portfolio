import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg px-4 sm:px-8 py-16 mx-auto flex flex-col justify-center w-full h-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Hi! I'm <strong className="text-white">Roshan Kumar</strong>, a
          passionate full-stack web developer based in Noida, India. I enjoy
          building clean, user-friendly websites and dynamic web applications. I
          hold an MCA degree from{" "}
          <strong className="text-white">
            Harcourt Butler Technical University
          </strong>{" "}
          and a BCA from{" "}
          <strong className="text-white">MCRPV University</strong>. Whether it’s
          frontend or backend, I love turning ideas into real projects through
          code.
        </p>

        <div className="mt-12 text-base sm:text-lg md:text-xl">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
            💻 What I Work With
          </h3>

          <div className="mb-8">
            <h4 className="text-xl font-medium underline mb-2 text-gray-200">
              Frontend (User Interface):
            </h4>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>
                <strong className="text-white">React</strong> – for building
                interactive UIs
              </li>
              <li>
                <strong className="text-white">Tailwind CSS</strong> – for fast
                and clean styling
              </li>
              <li>
                <strong className="text-white">Redux Toolkit</strong> – for
                managing app state
              </li>
              <li>
                <strong className="text-white">React Router</strong> – for
                smooth page navigation
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium underline mb-2 text-gray-200">
              Backend (Server-side):
            </h4>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>
                <strong className="text-white">Node.js</strong> – for backend
                runtime
              </li>
              <li>
                <strong className="text-white">Express.js</strong> – for
                creating APIs and routes
              </li>
              <li>
                <strong className="text-white">MongoDB</strong> – for managing
                application data
              </li>
              <li>
                <strong className="text-white">JWT</strong> – for secure user
                authentication
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
