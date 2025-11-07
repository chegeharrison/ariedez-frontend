"use client";

import React from "react";
import Image from "next/image";
import { FaHandshake, FaLightbulb, FaChartLine, FaUsers, FaGlobeAfrica, FaRocket } from "react-icons/fa";

export default function IncomeGeneration() {
  return (
    <section className="bg-white text-gray-900">
      {/* ===== HERO SECTION ===== */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Income Generation & Partnerships
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Driving sustainable impact through innovation, collaboration, and strategic growth.
          </p>
          <div className="mx-auto w-20 h-1 bg-yellow-400 rounded mt-6"></div>
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <div className="max-w-7xl mx-auto bg-gray-50 py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Empowering Growth Through Partnerships
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At <strong>Ariedez Systems Ltd</strong>, we believe that meaningful
            partnerships are key to creating scalable and lasting change.
            Through strategic collaborations, we connect organizations,
            governments, and private institutions to opportunities that promote
            digital inclusion, youth empowerment, and economic growth.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our income generation model is built around shared value — combining
            innovation, social impact, and business sustainability to deliver
            measurable results for all stakeholders.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/partnership-placeholder.jpg"
            alt="Partnerships and collaborations"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ===== STRATEGIC PARTNERSHIPS ===== */}
      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
              Strategic Partnerships
            </h2>
            <div className="mx-auto w-20 h-1 bg-yellow-400 rounded mt-3 mb-5" />
            <p className="text-gray-600 max-w-3xl mx-auto">
              We work hand in hand with our partners to design and implement
              projects that address critical challenges in technology,
              education, and entrepreneurship across Africa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Corporate Collaborations",
                desc: "Partnering with tech companies and corporates to support innovation-driven projects and social impact programs.",
                img: "/images/corporate-placeholder.jpeg",
              },
              {
                title: "NGO & Donor Partnerships",
                desc: "Working with development organizations to deliver capacity-building and digital transformation initiatives.",
                img: "/images/ngo-placeholder.jpg",
              },
              {
                title: "Government Projects",
                desc: "Collaborating with county and national governments to empower youth and SMEs through digital innovation.",
                img: "/images/government-placeholder.jpeg",
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={partner.img}
                    alt={partner.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {partner.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{partner.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOCUS AREAS ===== */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Focus Areas</h2>
          <div className="mx-auto w-20 h-1 bg-yellow-400 rounded"></div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: <FaHandshake className="text-3xl text-yellow-400" />, title: "Public-Private Partnerships" },
            { icon: <FaLightbulb className="text-3xl text-yellow-400" />, title: "Innovation & Tech Solutions" },
            { icon: <FaChartLine className="text-3xl text-yellow-400" />, title: "Revenue Growth Projects" },
            { icon: <FaUsers className="text-3xl text-yellow-400" />, title: "Community Empowerment" },
            { icon: <FaGlobeAfrica className="text-3xl text-yellow-400" />, title: "Regional Collaboration" },
            { icon: <FaRocket className="text-3xl text-yellow-400" />, title: "Startup Acceleration" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              {item.icon}
              <h4 className="text-lg font-semibold text-blue-900 mt-3">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

    
    </section>
  );
}
