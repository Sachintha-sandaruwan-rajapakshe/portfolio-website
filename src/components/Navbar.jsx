import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md text-white shadow-lg">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-green-400">
          Sachintha.dev
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium text-lg">
          <li className="hover:text-green-400"><a href="#home">Home</a></li>
          <li className="hover:text-green-400"><a href="#about">About</a></li>
          <li className="hover:text-green-400"><a href="#projects">Projects</a></li>
          <li className="hover:text-green-400"><a href="#skills">Skills</a></li>
          <li className="hover:text-green-400"><a href="#services">Services</a></li>
          <li className="hover:text-green-400"><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden cursor-pointer" onClick={handleToggle}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleClose}
      />

      {/* Mobile Menu (Slide) */}
      <div
        className={` md:hidden fixed top-0 right-0 h-full w-44 bg-black text-gray-300 p-6 space-y-6 transform transition-transform duration-200 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <CloseIcon onClick={handleClose} className="cursor-pointer" />
        </div>

        <a onClick={handleClose} href="#home" className="block hover:text-green-400 border-b-2 border-transparent hover:border-cyan-400 transition px-2 py-1 rounded">Home</a>
        <a onClick={handleClose} href="#about" className="block hover:text-green-400 border-b-2 border-transparent hover:border-cyan-400 transition px-2 py-1 rounded">About</a>
        <a onClick={handleClose} href="#projects" className="block hover:text-green-400 border-b-2 border-transparent hover:border-cyan-400 transition px-2 py-1 rounded">Projects</a>
        <a onClick={handleClose} href="#skills" className="block hover:text-green-400 border-b-2 border-transparent hover:border-cyan-400 transition px-2 py-1 rounded">Skills</a>
        <a onClick={handleClose} href="#services" className="block hover:text-green-400 border-b-2 border-transparent hover:border-cyan-400 transition px-2 py-1 rounded">Services</a>
        <a onClick={handleClose} href="#contact" className="block hover:text-green-400 border-b-2 border-transparent hover:border-cyan-400 transition px-2 py-1 rounded">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;