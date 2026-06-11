import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Sachintha Sandaruwan</h2>
          <p className="text-gray-400 text-sm mt-1">
            Full Stack Developer | React | Spring Boot | IoT
          </p>
        </div>
        
      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;