"use client";

import React from "react";
import Image from "next/image";
import {
  FaEye,
  FaRocket,
  FaHeart,
  FaLaptopCode,
  FaUsers,
  FaChalkboardTeacher,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-white text-gray-900">
      {/* ===== HERO SECTION ===== */}
      <div className="relative bg-gray-50 text-blue-900 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-gray-700">
            Empowering Africa through technology, innovation, and entrepreneurship.
          </p>
          <div className="mx-auto w-20 h-1 bg-yellow-400 rounded mt-6"></div>
        </div>
      </div>

      {/* ===== WHO WE ARE ===== */}
      <div className="max-w-7xl mx-auto bg-gray-50 py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Ariedez Systems Ltd</strong> is a registered technology,
            entrepreneurship, and consultancy company dedicated to empowering
            youth, women, SMEs, and micro-businesses through digital skills,
            innovation, and entrepreneurship support.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe in using technology as a tool for empowerment and
            inclusion — bridging digital gaps and creating sustainable
            livelihoods. Our programs equip communities with practical skills in
            AI, Digital Marketing, Social Media Management, Content Creation,
            and Business Growth, preparing them for the digital economy.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/team.jpg"
            alt="Ariedez Systems Team Working in Tech"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ===== VISION, MISSION & CORE VALUES ===== */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Vision, Mission & Core Values
          </h2>
          <div className="mx-auto w-20 h-1 bg-yellow-400 rounded"></div>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            What drives Ariadez Systems — our guiding purpose, approach, and the
            principles we stand by.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {/* Vision */}
          <div className="relative bg-gradient-to-b from-blue-50 to-white border-t-4 border-blue-500 p-10 rounded-2xl shadow hover:-translate-y-1 hover:shadow-xl transition">
            <FaEye className="absolute text-blue-100 text-7xl top-6 left-6 opacity-20" />
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be a continental leader in driving digital transformation,
              fostering innovation, and enabling inclusive socio-economic growth
              through technology and education across Africa.
            </p>
          </div>

          {/* Mission */}
          <div className="relative bg-gradient-to-b from-yellow-50 to-white border-t-4 border-yellow-400 p-10 rounded-2xl shadow hover:-translate-y-1 hover:shadow-xl transition">
            <FaRocket className="absolute text-yellow-200 text-7xl top-6 left-6 opacity-20" />
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To empower people and organizations through digital skills
              training, entrepreneurship development, and strategic consulting
              that creates measurable, lasting impact.
            </p>
          </div>

          {/* Core Values */}
          <div className="relative bg-gradient-to-b from-green-50 to-white border-t-4 border-green-500 p-10 rounded-2xl shadow hover:-translate-y-1 hover:shadow-xl transition">
            <FaHeart className="absolute text-green-200 text-7xl top-6 left-6 opacity-20" />
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Core Values
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside text-left">
              <li>
                <strong>Innovation</strong> — We embrace creativity and bold
                ideas.
              </li>
              <li>
                <strong>Integrity</strong> — We uphold honesty, ethics, and
                accountability.
              </li>
              <li>
                <strong>Empowerment</strong> — We help others unlock their
                potential.
              </li>
              <li>
                <strong>Inclusivity</strong> — We believe in opportunities for
                all.
              </li>
              <li>
                <strong>Collaboration</strong> — We thrive through partnerships
                and shared growth.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== FLAGSHIP PROGRAMS ===== */}
      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
              Flagship Programs & Consultancy Projects
            </h2>
            <div className="mx-auto w-20 h-1 bg-yellow-400 rounded mt-3 mb-5" />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our key initiatives empower youth, women, SMEs, and communities
              through innovation, digital skills, and sustainable transformation
              projects.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Ariadez Techpreneurship Bootcamp",
                desc: "Youth training in coding, entrepreneurship, and startup incubation for job creation and innovation.",
                img: "/images/bootcamp-placeholder.jpg",
                tag: "Quarterly",
              },
              {
                title: "Women in Digital Leadership Program",
                desc: "Mentorship and upskilling for young women to excel in technology, leadership, and entrepreneurship.",
                img: "/images/women-leadership-placeholder.jpg",
                tag: "Annual",
              },
              {
                title: "County Digital Transformation Consultancy",
                desc: "Partnering with county governments to digitize operations, improve service delivery, and build ICT capacity.",
                img: "/images/county-digital-placeholder.jpg",
                tag: "Ongoing",
              },
              {
                title: "Enterprise Growth Consultancy for SMEs",
                desc: "Empowering SMEs to adopt digital tools, improve efficiency, and grow their online presence.",
                img: "/images/sme-consultancy-placeholder.jpg",
                tag: "Ongoing",
              },
              {
                title: "Innovation Hub Setup Consultancy",
                desc: "Designing and implementing innovation hubs for counties and NGOs to nurture young talent and startups.",
                img: "/images/innovation-hub-placeholder.jpg",
                tag: "Project-Based",
              },
              {
                title: "Digital Skills for Africa Initiative",
                desc: "A continent-wide initiative to equip youth and microbusinesses with essential digital, AI, and cloud skills.",
                img: "/images/digital-skills-placeholder.jpg",
                tag: "Biannual",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={program.img}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{program.desc}</p>
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-blue-900 text-sm font-semibold rounded">
                    {program.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOCUS AREAS ===== */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Focus Areas
          </h2>
          <div className="mx-auto w-20 h-1 bg-yellow-400 rounded"></div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaLaptopCode className="text-3xl text-yellow-400" />,
              title: "Technology & ICT Consultancy",
            },
            {
              icon: <FaLightbulb className="text-3xl text-yellow-400" />,
              title: "Entrepreneurship Development",
            },
            {
              icon: <FaChalkboardTeacher className="text-3xl text-yellow-400" />,
              title: "Digital Skills Training",
            },
            {
              icon: <FaUsers className="text-3xl text-yellow-400" />,
              title: "Youth & Women Empowerment",
            },
            {
              icon: <FaHandshake className="text-3xl text-yellow-400" />,
              title: "SME & Microbusiness Support",
            },
            {
              icon: <FaHeart className="text-3xl text-yellow-400" />,
              title: "Community Impact Programs",
            },
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

      {/* ===== CALL TO ACTION ===== */}
      <div className="bg-gray-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Join Ariadez Systems Ltd in driving digital inclusion and
          entrepreneurship across Africa. Together, we can build a future
          powered by innovation and opportunity.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="/contact"
            className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-md hover:bg-yellow-300 transition"
          >
            Partner With Us
          </a>
          <a
            href="/donate"
            className="px-8 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-md hover:bg-yellow-400 hover:text-blue-900 transition"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
}
