"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaCloud,
  FaLaptopCode,
  FaLock,
  FaUserTie,
  FaLightbulb,
  FaUsers,
  FaChalkboardTeacher,
  FaHandshake,
  FaSpinner,
  FaArrowRight,
} from "react-icons/fa";

export default function ServicesSection() {
  const router = useRouter();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  // ✅ Backend URL handling
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:8000/api/"
      : "https://your-production-backend-url.onrender.com/api/");

  // ✅ Fetch dynamic services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${API_URL}services/`);
        if (!res.ok) throw new Error("Failed to fetch services");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        if (process.env.NODE_ENV === "development") {
          console.error("⚠️ Error fetching services:", err);
        }
        setError("Unable to load services at the moment.");
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, [API_URL]);

  // ✅ Static predefined services
  const staticServices = [
    {
      icon: <FaCloud className="text-yellow-500 text-4xl mb-4 mx-auto" />,
      title: "Technology & ICT Consultancy",
      desc: "Expert solutions in cloud integration, cybersecurity, process automation, and digital transformation for modern organizations.",
      highlights: [
        "Cloud integration and automation",
        "Cybersecurity and IT infrastructure",
        "Website & app development",
      ],
    },
    {
      icon: <FaUserTie className="text-yellow-500 text-4xl mb-4 mx-auto" />,
      title: "Entrepreneurship & Business Development",
      desc: "We provide mentorship, business planning, and support for startups and SMEs to achieve growth and sustainability.",
      highlights: [
        "Mentorship and business incubation",
        "Strategic business planning",
        "SME automation and digitalization",
      ],
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-4xl mb-4 mx-auto" />,
      title: "Digital & Creative Skills Training",
      desc: "Equipping youth and professionals with cutting-edge skills in AI, digital marketing, and creative content production.",
      highlights: [
        "AI and data literacy training",
        "Social media & digital marketing",
        "Content creation and branding",
      ],
    },
    {
      icon: <FaUsers className="text-yellow-500 text-4xl mb-4 mx-auto" />,
      title: "Community Empowerment Initiatives",
      desc: "Transforming lives through inclusive digital projects, awareness campaigns, and county-level innovation initiatives.",
      highlights: [
        "Girls in Tech & Women Leadership programs",
        "Anti-drug and youth empowerment campaigns",
        "County innovation hub projects",
      ],
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-200 max-w-2xl mx-auto">
          We deliver innovative technology, business, and community empowerment
          solutions that drive growth and transformation.
        </p>
      </section>

      {/* STATIC SERVICE CATEGORIES */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800">
            Strategic Service Categories
          </h2>
          <div className="mx-auto w-20 h-1 bg-yellow-400 mt-3 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staticServices.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="group bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-yellow-400 cursor-pointer"
            >
              {service.icon}
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
              <div className="mt-4 flex justify-center">
                <FaArrowRight className="text-yellow-500 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DYNAMIC SERVICES */}
      <section className="py-20 bg-gray-100" id="dynamic-services">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Explore More of What We Offer
          </h2>

          {loading && (
            <div className="flex flex-col items-center justify-center py-10">
              <FaSpinner className="text-yellow-500 text-4xl animate-spin mb-3" />
              <p className="text-gray-600">Fetching services...</p>
            </div>
          )}

          {!loading && error && (
            <p className="text-gray-500 italic">
              {error} Please check your internet connection or try again later.
            </p>
          )}

          {!loading && !error && services.length === 0 && (
            <p className="text-gray-500 italic">
              No services available at the moment. Please check back later.
            </p>
          )}

          {!loading && !error && services.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {service.short_description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MODAL POPUP */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-200 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-4 text-gray-700 text-3xl font-bold hover:text-red-500 transition"
            >
              &times;
            </button>

            {/* Image */}
            {selectedService.image && (
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-64 object-cover"
              />
            )}

            {/* Details */}
            <div className="p-6 text-left space-y-4">
              <h2 className="text-2xl font-bold text-blue-800">
                {selectedService.title}
              </h2>

              {selectedService.highlights && (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {selectedService.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              {selectedService.detailed_description ? (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedService.detailed_description}
                </p>
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {selectedService.desc}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
