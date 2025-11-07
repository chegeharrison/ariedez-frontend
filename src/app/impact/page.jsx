"use client";

import Image from "next/image";
import { FaUsers, FaIndustry, FaLightbulb, FaQuoteLeft } from "react-icons/fa";

export default function Impact() {
  return (
    <section className="bg-white text-gray-900">
      {/* ===== HERO SECTION ===== */}
      <div className="relative bg-gray-900 text-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/impact-bg.jpg"
            alt="Ariedez Impact Background"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-400">
            Our Impact
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Empowering communities and transforming lives through digital skills,
            innovation, and entrepreneurship.
          </p>
          <div className="mx-auto w-20 h-1 bg-yellow-400 rounded mt-6"></div>
        </div>
      </div>

      {/* ===== IMPACT STATS DASHBOARD ===== */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Impact Dashboard
          </h2>
          <div className="mx-auto w-20 h-1 bg-yellow-400 rounded"></div>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Measuring the positive change we’ve created through our programs and
            partnerships across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Youth & Women Trained */}
          <div className="bg-gray-50 border-t-4 border-yellow-400 rounded-2xl shadow hover:shadow-lg transition p-8 text-center">
            <FaUsers className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              15,000+
            </h3>
            <p className="text-gray-700 font-medium">
              Youth & Women Trained in Digital Skills
            </p>
          </div>

          {/* SMEs Digitally Transformed */}
          <div className="bg-gray-50 border-t-4 border-blue-500 rounded-2xl shadow hover:shadow-lg transition p-8 text-center">
            <FaIndustry className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              2,000+
            </h3>
            <p className="text-gray-700 font-medium">
              SMEs Digitally Transformed & Supported
            </p>
          </div>

          {/* Innovation Hubs Established */}
          <div className="bg-gray-50 border-t-4 border-green-500 rounded-2xl shadow hover:shadow-lg transition p-8 text-center">
            <FaLightbulb className="text-green-500 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              10+
            </h3>
            <p className="text-gray-700 font-medium">
              Innovation Hubs Established Across Regions
            </p>
          </div>
        </div>
      </div>

      {/* ===== SUCCESS STORIES ===== */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Success Stories
          </h2>
          <div className="mx-auto w-20 h-1 bg-yellow-400 rounded"></div>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Real people. Real impact. Here’s how Ariedez Systems programs have
            changed lives and created opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Jane Mwangi",
              role: "Women in Tech Graduate",
              story:
                "Before joining Ariedez, I had never written a line of code. Now I lead a small team developing mobile apps for local SMEs.",
              img: "/images/success1.jpeg",
            },
            {
              name: "David Otieno",
              role: "SME Digital Boost Beneficiary",
              story:
                "Ariedez helped me digitize my retail business — today, 60% of our sales come through online channels.",
              img: "/images/success2.jpeg",
            },
            {
              name: "Fatuma Hassan",
              role: "Innovation Hub Participant",
              story:
                "Through mentorship and startup training, I launched a social enterprise connecting artisans with global markets.",
              img: "/images/success3.webp",
            },
          ].map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="relative w-full h-56">
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
                <p className="text-gray-700 italic mb-4">"{person.story}"</p>
                <h3 className="text-lg font-semibold text-blue-900">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for video testimonials */}
        <div className="max-w-5xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Watch Impact Stories
          </h3>
          <div className="aspect-video bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-gray-500">
            [ Video Placeholder — Coming Soon ]
          </div>
        </div>
      </div>
    </section>
  );
}
