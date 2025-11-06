"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

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
        setStatus("Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Try again later.");
    }
  };

  return (
    <main className="bg-gray-50 text-gray-900 py-20 px-6 md:px-12">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a question or want to partner with us? Reach out through our
          form, email, or phone — our team will respond promptly.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE - Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-400 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">ariedezsystems@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                <FaPhone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Call</h4>
                <p className="text-gray-600">+254 735124963</p>
              </div>
            </div>

            <iframe
              title="map"
              className="w-full h-64 rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.860492309465!2d36.8065!3d-1.287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTMuMiJTIDM2wrA0OCcwNC42IkU!5e0!3m2!1sen!2ske!4v1691234567890!5m2!1sen!2ske"
              loading="lazy"
            ></iframe>
          </div>

          {/* RIGHT SIDE - Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-blue-900"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-800 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-800 outline-none"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-800 outline-none"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-800 outline-none"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-800 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-8 bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition-all w-full"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center mt-4 text-sm text-gray-600">{status}</p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
