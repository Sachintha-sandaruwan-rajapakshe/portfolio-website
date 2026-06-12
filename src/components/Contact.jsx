import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';

function Contact() {
  return (
    <div id="contact" className="min-h-screen bg-slate-950 text-white px-6 py-12 flex items-center">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-10">

        {/* Left Side - Info */}
        <div className="space-y-10"> 
          <h1 className="text-[30px] font-bold bg-gradient-to-r from-orange-700 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-lg text-center md:text-start">
            Contact Me 📩
          </h1>

          <p className="text-gray-300 mb-6">
            Feel free to reach out for collaborations, project work,
            or any opportunities. I will reply as soon as possible.
          </p>

          <div className="space-y-3 text-gray-300">
            <p><EmailIcon/> Email: <a className="underline text-cyan-500"href="sachinthasandaruwan8675@gmail.com">sachinthasandaruwan8675@gmail.com"</a></p>
            <p><PhoneIcon/> Phone: <span className="text-cyan-500">+94 71 244 6924</span></p>
            <p><LocationOnIcon/> Location: Sri Lanka</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/Sachintha-sandaruwan-rajapakshe"
              className="px-4 py-2  bg-slate-800 rounded-lg hover:bg-blue-600 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sachintha-sandaruwan-22505b1b5"
              className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/sachintha.sandaruwan.659841"
              className="px-4 py-2  bg-slate-800 rounded-lg hover:bg-blue-600 transition"
            >
              FaceBook
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 bg-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition font-semibold"
            >
              Send Message <MessageIcon/>
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;