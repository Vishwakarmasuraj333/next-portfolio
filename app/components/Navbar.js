"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg">

      {/* Top Bar */}
      <div className="flex items-center justify-between px-9 md:px-10 py-10">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-blue-500">
          Vishwakarma-Suraj
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/projects" className="hover:text-blue-400">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Desktop Logout */}
        <button
          onClick={logout}
          className="hidden md:block bg-blue-500 px-4 py-1 rounded hover:bg-blue-600 transition"
        >
          Logout
        </button>

        {/* Mobile Toggle (X / ☰) */}
    <button
  onClick={() => setOpen(!open)}
  className="md:hidden text-3xl fixed top-5 right-6 z-50 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg"
>
  {open ? "✕" : "☰"}
</button>
      </div>

      {/* Mobile Full Screen Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center gap-8 text-center text-xl transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >

        <Link onClick={() => setOpen(false)} href="/" className="hover:text-blue-400">
          Home
        </Link>

        <Link onClick={() => setOpen(false)} href="/about" className="hover:text-blue-400">
          About
        </Link>

        <Link onClick={() => setOpen(false)} href="/projects" className="hover:text-blue-400">
          Projects
        </Link>

        <Link onClick={() => setOpen(false)} href="/contact" className="hover:text-blue-400">
          Contact
        </Link>

        <button
          onClick={logout}
          className="bg-blue-500 px-6 py-2 rounded mt-4 hover:bg-blue-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}