import React from "react";

function Services() {
  return (
    <section id="services" className="min-h-screen/2 bg-slate-950 text-white px-6 py-12 space-y-10">

      <h1 className="text-[30px] font-bold bg-gradient-to-r from-orange-700 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-lg text-center space-y-10">
        My Services ⚙️
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        <div className="bg-slate-900 p-6 rounded-xl hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">Web Development</h2>
          <p className="text-gray-400 text-sm">
            Modern responsive websites using React & Spring Boot.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">Mobile Apps</h2>
          <p className="text-gray-400 text-sm">
            Cross-platform apps using React Native.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">Backend APIs</h2>
          <p className="text-gray-400 text-sm">
            Secure REST APIs using Spring Boot / Node.js.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">IoT Systems</h2>
          <p className="text-gray-400 text-sm">
            Smart systems using Arduino & sensors.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;