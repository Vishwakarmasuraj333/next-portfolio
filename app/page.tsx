"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";


export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center relative overflow-hidden">
      
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
         Frontend Developer
        </span>{" "}
        👋
      </h1>

      {/* 🔥 Typewriter (4 styles combined) */}
      <div className="text-xl md:text-2xl font-medium text-yellow-300 mb-6 h-10">
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer 🚀",
              "⚡ Building Fast Web Apps",
              "Crafting Modern UI/UX 🎨 ",
              " Next.js & React Expert 🔥",
            ],
            autoStart: true,
            loop: true,
            delay: 50,       // typing speed
            deleteSpeed: 30, // deleting speed
          }}
        />
      </div>

      {/* Subtext */}
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8">
        I build modern, fast, and scalable web applications using Next.js,
        React, and powerful backend technologies.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/projects"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
        >
          View Projects 🚀
        </Link>

        <Link
          href="/about"
          className="px-6 py-3 border border-gray-600 rounded-full hover:bg-gray-800 transition duration-300"
        >
          About Me
        </Link>
      </div>

      {/* Glow Effect */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-purple-600/20 to-transparent blur-2xl"></div>
    </section>
  );
}
