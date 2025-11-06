"use client";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <section id="home" className="pt-20">
        <Hero />
      </section>
    </div>
  );
}
