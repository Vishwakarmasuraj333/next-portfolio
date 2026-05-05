"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-[320px] sm:h-[380px] md:h-[450px]">

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-600 blur-xl opacity-60 animate-pulse"></div>

            {/* Image */}
            <img
              src="/ss.jpeg"
              alt="profile"
              className="relative w-full h-full object-cover rounded-2xl border-4 border-cyan-600 shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            About Me
          </h1>

          <h2 className="mb-3 text-lg sm:text-xl">
            I'm{" "}
            <span className="text-blue-400 font-bold text-2xl">
              Suraj Vishwakarma
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
            I am a passionate full-stack developer who loves building modern,
            fast, and scalable web applications. I specialize in creating clean
            user interfaces and powerful backend systems.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
            My core stack includes Next.js, React, Node.js, and Tailwind CSS.
            I enjoy turning ideas into real-world products that deliver value.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {["Next.js", "React", "Node.js", "MongoDB", "Tailwind"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 px-4 py-1 rounded-full text-sm hover:bg-blue-500 hover:scale-110 transition duration-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
