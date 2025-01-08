import React from 'react';

const projects = [
  { title: "SACCO Management System", description: "A fully functional SACCO management system built with PHP and MySQL." },
  { title: "Portfolio Website", description: "A personal portfolio website built using Next.js, showcasing my web development skills." },
  { title: "School Management System", description: "A system to manage school data, attendance, and grades, built with Next.js and Tailwind CSS." },
  { title: "Online Learning Platform", description: "An online learning platform for students and teachers with course management features." },
  { title: "Pharmacy Management System", description: "Currently under development: A management system for pharmacies, including inventory and sales tracking." },
];

const Projects = () => {
  return (
    <section className="bg-gradient-to-r from-[#3d0066] via-[#510087] to-[#5c0099] py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-white mb-8">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-[#510087] mb-4">{project.title}</h3>
              <p className="text-gray-700 text-lg">{project.description}</p>
              <button className="mt-6 bg-[#fdc500] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#ffd500] transition-colors duration-300">
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
