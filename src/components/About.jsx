import React from "react";
import AboutImage from "../assets/images/about.jpeg";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-white flex items-center py-12"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div className="space-y-6 text-center md:text-left">

          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            About Me 👨‍💻
          </h1>

          <p className="text-gray-300">
           I am a passionate and motivated Full-Stack Software Developer with a strong interest in building modern, responsive, and scalable web applications. I specialize in developing end-to-end solutions using technologies like Spring Boot for backend development and React for frontend development.
          </p>

          <p className="text-gray-300">
            I have experience working with modern UI frameworks such as Material UI (MUI) and Tailwind CSS to create clean, user-friendly, and visually appealing interfaces. During my internship and project work, I gained hands-on experience in real-world development, improving my skills in problem-solving, teamwork, and writing clean, maintainable code.
          </p>

          <p className="text-gray-300">
            I enjoy learning new technologies and continuously improving my skills to stay updated with current industry trends. My goal is to build high-quality software solutions that deliver excellent performance and a great user experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-5 py-2 border border-blue-500 hover:bg-blue-500 rounded-lg transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={AboutImage}
            alt="developer"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default About;