"use client";

import { useEffect } from "react";
export default function About() {
  return (

    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Image */}
        <div className="flex justify-center">
          <div className="relative w-100 h-120">

            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-600 blur-md opacity-70"></div>

            {/* Image */}
            <img
              src="/ss.jpeg"
              alt="profile"
              className="relative w-full h-full object-cover rounded-2xl border-4 border-cyan-700 shadow-xl hover:scale-105 transition duration-300"
            />

          </div>
        </div>

        {/* Right Side - Content */}
        <div className="md: text-center">
          <h1 className="text-4xl font-bold mb-4">
            About Me
          </h1>

          <h2>i'm <span className="text-blue-400 font-bold text-2xl ">Suraj Vishwakarma</span></h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            I am a passionate full-stack developer who loves building modern,
            fast, and scalable web applications. I specialize in creating clean
            user interfaces and powerful backend systems.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            My core stack includes Next.js, React, Node.js, and Tailwind CSS.
            I enjoy turning ideas into real-world products that deliver value.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 md:text-center justify-center">
            {["Next.js", "React", "Node.js", "MongoDB", "Tailwind"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-blue-500 transition"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
