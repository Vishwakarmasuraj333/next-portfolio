"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Error ❌");
      }
    } catch (error) {
      setStatus("Server error ❌");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="w-full max-w-xl bg-gray-900 p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6 text-center">
          📩 Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700 outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700 outline-none"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded font-semibold hover:scale-105 transition"
          >
            Send Message 🚀
          </button>

        </form>

        {status && (
          <p className="mt-4 text-center text-sm text-gray-400">
            {status}
          </p>
        )}

      </div>
    </section>
  );
}