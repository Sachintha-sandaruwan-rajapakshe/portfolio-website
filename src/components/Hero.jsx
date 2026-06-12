import React from "react";
import mainImage from "../assets/images/main_image.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20250912/pngtree-sleek-abstract-tech-design-for-professional-powerpoint-layouts-image_17979089.webp')] bg-cover bg-center" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            Hello, I'm <span className="text-green-400">Sachintha</span>
          </h1>

          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            Software Engineer
          </h2>

          <p className="text-gray-300 max-w-md mx-auto md:mx-0">
            Full-Stack Developer building scalable and modern web applications with Spring Boot, React, and modern UI frameworks.
          </p>

          <a
            href="/cv.pdf"
            download
            className="inline-block bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg transition shadow-lg"
          >
            Download My CV
          </a>
        </div>

        {/* RIGHT (Hidden on mobile) */}
        <div className="flex-1 hidden md:flex justify-center">
  <div className="w-72 h-[420px] lg:w-[450px] lg:h-[550px] overflow-hidden">
    <img
      src={mainImage}
      alt="profile"
      className="w-full h-full object-cover scale-105 transition transform scale-x-[-1]"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;