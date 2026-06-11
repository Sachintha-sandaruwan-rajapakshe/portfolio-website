import React from "react";
import GrayBorder from "./sub-components/GrayBorder";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const Hero = () => {
  return (
    
      <section id="home" className="relative h-[85vh] pt-20 flex items-center text-white overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20250912/pngtree-sleek-abstract-tech-design-for-professional-powerpoint-layouts-image_17979089.webp')] bg-cover bg-center bg-no-repeat"></div>

       
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-6">

          {/* Left Side */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-[50px] font-bold">
              Hello, I'm <span className="text-green-400">Sachintha</span>
            </h1>

            <h2 className="text-[30px] font-bold bg-gradient-to-r from-orange-700 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
              Software Engineer
            </h2>

            <p className="text-gray-300 max-w-md tracking-widest">
              I am a passionate full stack developer specializing in React, Spring Boot and mobile applications.
            </p>

          <a
            href="/cv.pdf"
            download="CV.pdf"
            className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg transition inline-flex items-center justify-center shadow-lg hover:shadow-green-500/50 w-fit"
          >
            Download CV
          </a>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center mt-10 md:mt-0">
            <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>

        </div>

      </section>
  );
};

export default Hero;