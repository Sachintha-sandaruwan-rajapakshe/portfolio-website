import React from "react";

function About() {
  return (
    <div id="about" className="min-h-screen bg-slate-950 text-white px-6 py-12 flex items-center">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Text */}
        <div className="space-y-10">
          <h1 className="text-[30px] font-bold bg-gradient-to-r from-orange-700 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
            About Me 👨‍💻
          </h1>

            <div className="tracking-wider">
                <p className="text-gray-300 leading-relaxed mb-4 ">
            I am a passionate Full Stack Developer who enjoys building
            modern web and mobile applications. I love turning ideas into
            real-world projects using clean and efficient code.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            During my internship, I gained hands-on experience in
            web development, teamwork, and problem-solving. I always try
            to improve my skills and learn new technologies.
          </p>

          <p className="text-gray-300 leading-relaxed">
            My goal is to become a professional software engineer and
            build impactful digital products.
          </p>
            </div>
          

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
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

        {/* Right Side - Image / Illustration */}
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="developer"
            className="w-72 md:w-80 hover:scale-105 transition"
          />
        </div>

      </div>
    </div>
  );
}

export default About;