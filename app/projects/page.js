"use client";

import { useEffect } from "react";

import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with Next.js & Tailwind",
      tech: "Next.js, Tailwind",
      img: "https://marketplace.canva.com/EAFwckKNjDE/2/0/1600w/canva-black-white-grayscale-portfolio-presentation-vzScEqAI__M.jpg",
    },
    {
      title: "E-commerce App",
      desc: "Full stack shopping app with cart & payments",
      tech: "React, Node, MongoDB",
      img: "https://www.ecommercetimes.com/wp-content/uploads/sites/5/2022/02/ecommerce-arrow.jpg",
    },
    {
      title: "Chat App",
      desc: "Realtime chat application with sockets",
      tech: "Socket.io, Express",
      img: "https://a.storyblok.com/f/231922/1726x1040/319bb14a5c/chat-app-development-tutorial.jpg/m/1200x630/",
    },
    {
      title: "Blog Platform",
      desc: "Markdown-based blogging platform",
      tech: "Next.js, Prisma",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWRrkboUaSW5Jnkjb9fXRaBt-8RUaBmEw3w&s",
    },
    {
      title: "Dashboard UI",
      desc: "Admin dashboard with charts & analytics",
      tech: "React, Chart.js",
      img: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1223/posts/107068/image-upload/01_dashboard_ui_concept.jpeg",
    },
    {
      title: "AI Tool",
      desc: "AI-powered content generator",
      tech: "OpenAI API",
      img: "https://edure.in/wp-content/uploads/2025/02/ai-tools.webp",
    },
    {
      title: "Weather App",
      desc: "Live weather updates using API",
      tech: "API, JS",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7bwBNRgTePyptHRlyG2mocOn2eYjZncFAIw&s",
    },
    {
      title: "Task Manager",
      desc: "To-do app with authentication",
      tech: "Firebase",
      img: "https://www.chanty.com/blog/wp-content/uploads/2020/10/Task-manager-apps-scaled.jpg",
    },
  ];

  return (
    <div className="p-10 bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-12">
        🚀 My Projects
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                {project.tech}
              </span>

              {/* Button */}
              <div className="mt-4">
                <Link
                  href="#"
                  className="text-blue-400 hover:underline text-sm"
                >
                  View Project →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}