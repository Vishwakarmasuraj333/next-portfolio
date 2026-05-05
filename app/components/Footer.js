"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 px-6 py-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            🌞Vishwakarma-Suraj
          </h2>
          <p className="text-sm leading-relaxed">
            I create modern, responsive and animated websites using Next.js & Tailwind CSS.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-purple-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">📧 itxsurajofficail@gmail.com</p>
          <p className="text-sm mb-3">📞 +91 9370 944 368</p>

          {/* Social */}
          <div className="flex gap-4 mt-3">
            <a
              href="#"
              className="hover:text-purple-400 transition hover:scale-110"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-purple-400 transition hover:scale-110"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-purple-400 transition hover:scale-110"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/10 my-8"></div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400">
        © 2026 My Portfolio | All Rights Reserved
      </div>

      {/* Scroll Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-cyan-500 hover:bg-blue-500 cursor-pointer text-white px-6 py-3 rounded-full shadow-lg transition hover:scale-110"
      >
        ↑
      </button>
    </footer>
  );
}