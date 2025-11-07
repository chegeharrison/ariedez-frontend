"use client";

import React from "react";
import Image from "next/image";
import { FaLaptopCode, FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Programs() {
  const router = useRouter();

  const programs = [
    {
      title: "Digital Empowerment Academy",
      desc: "Building foundational digital literacy, coding, and online work skills to equip youth and communities for the digital economy.",
      icon: <FaLaptopCode className="text-4xl text-yellow-400 mb-4" />,
      img: "/images/digital-empowerment.jpg",
    },
    {
      title: "Women & Youth in Tech",
      desc: "Empowering young women and youth through mentorship, leadership training, and access to tech innovation opportunities.",
      icon: <FaUsers className="text-4xl text-yellow-400 mb-4" />,
      img: "/images/women-youth-tech.jpg",
    },
    {
      title: "SME Digital Boost",
      desc: "Helping small and medium enterprises adopt digital tools to enhance productivity, visibility, and business growth.",
      icon: <FaLightbulb className="text-4xl text-yellow-400 mb-4" />,
      img: "/images/sme-digital.jpg",
    },
    {
      title: "Innovation & Entrepreneurship Hub",
      desc: "A creative ecosystem for startups and innovators to collaborate, prototype, and grow their entrepreneurial ventures.",
      icon: <FaRocket className="text-4xl text-yellow-400 mb-4" />,
      img: "/images/innovation-hub.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900">
      {/* ===== HERO SECTION ===== */}
      <div className="relative bg-gray-900 text-white py-20 px-6 text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/programs-bg.jpg"
            alt="Programs and Initiatives Background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
            Programs & Initiatives
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Empowering individuals, communities, and businesses through
            technology, innovation, and digital inclusion.
          </p>
          <div className="mx-auto w-20 h-1 bg-yellow-400 rounded mt-6"></div>
        </div>
      </div>

      {/* ===== PROGRAMS GRID ===== */}
      <div className="max-w-7xl mx-auto py-20 px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-transform hover:-translate-y-2 flex flex-col items-center text-center p-8"
          >
            {program.icon}
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              {program.title}
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {program.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
