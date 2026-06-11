import React from "react";

const skills = [
  { name: "Java", level: "Advanced" },
  { name: "Spring Boot", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "React Native", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
  { name: "Arduino / IoT", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
];

function Skills() {
  return (
    <div id="skills" className="min-h-screen bg-slate-950 text-white px-6 py-12 space-y-10">
      <h1 className="text-[30px] font-bold bg-gradient-to-r from-orange-700 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-lg text-center">
        My Skills ⚡
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-900 p-5 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold mb-3">
              {skill.name}
            </h2>

            {/* Progress bar */}
            <div className="w-full bg-slate-700 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${
                  skill.level === "Advanced"
                    ? "w-full bg-green-500"
                    : "w-2/3 bg-blue-500"
                }`}
              ></div>
            </div>

            <p className="text-sm text-gray-400 mt-2">
              {skill.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;