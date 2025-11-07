"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Something went wrong. Try again later.");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-white text-gray-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/ml1.jpeg" // ✅ your background image
          alt="Contact background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay — light warm tint to make image visible but still readable */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full bg-white/90 shadow-2xl rounded-2xl p-10 border border-gray-200 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
          Get in Touch with{" "}
          <span className="text-yellow-500">Ariedez Systems</span>
        </h2>
        <p className="text-gray-700 mb-8 text-center">
          Have a question, idea, or collaboration proposal? We’d love to hear from you.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-700">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-500" />
            <span>ariedezsystems@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-yellow-500" />
            <span>+254 735124963</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-500" />
            <span>Maua, Meru</span>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              name="first_name"
              type="text"
              placeholder="First name*"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="flex-1 border border-gray-300 rounded-md px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              name="last_name"
              type="text"
              placeholder="Last name*"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="flex-1 border border-gray-300 rounded-md px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <input
            name="phone"
            type="text"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <textarea
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 h-32 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-blue-900 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-all"
          >
            Submit
          </button>
        </form>

        {status && (
          <p className="text-center text-blue-900 mt-4 font-medium">{status}</p>
        )}
      </div>
    </section>
  );
}
