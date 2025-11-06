"use client";

import Navbar from "../../components/Navbar.jsx";
import ServicesSection from "../../components/Services.jsx";
import Footer from "../../components/Footer.jsx";

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="pt-24">
        <ServicesSection />
      </main>
    </div>
  );
}
