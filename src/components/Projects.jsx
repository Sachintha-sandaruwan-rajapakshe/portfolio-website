import React from "react";

const projects = [
  {
    title: "IoT Parking System",
    description: "Arduino + Web app based smart parking system.",
    tech: ["Arduino", "Node.js", "React"],
    link: "#",
  },
  {
    title: "Study Planner App",
    description: "Mobile app to manage daily study tasks.",
    tech: ["React Native", "Node.js", "MySQL"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio website.",
    tech: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio website.",
    tech: ["React", "Tailwind CSS"],
    link: "#",
  },
];

function Projects() {
  return (
    <div id="projects" className="min-h-screen bg-slate-950 text-white px-6 py-10 space-y-10 text-center">
      <h1 className="text-[30px] font-bold bg-gradient-to-r from-orange-700 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
        My Projects 🚀
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>

            <p className="text-gray-300 mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-600 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="relative w-[280px] sm:w-[350px] md:w-[420px] mx-auto">

            {/* TV Image */}
            <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="tv"
                className="w-full relative z-10"
            />

            {/* Video inside screen */}
            <video
                className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[72%] h-[55%] object-cover z-0"
                autoPlay
                playsInline
                muted
                loop
            >
                <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
                />
            </video>

            </div>

            <a
              href={project.link}
              className="text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;