import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* ===== CALL TO ACTION (GLOBAL) ===== */}
      <div className="bg-gray-900 text-center text-white py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Be Part of the Change
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8">
          Join our programs or support our mission to empower Africa’s youth,
          women, and entrepreneurs through digital innovation.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="/programs"
            className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-md hover:bg-yellow-300 transition"
          >
            Join a Program
          </a>
          <a
            href="/donate"
            className="px-8 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-md hover:bg-yellow-400 hover:text-blue-900 transition"
          >
            Donate Equipment
          </a>
        </div>
      </div>

      {/* ===== MAIN FOOTER CONTENT ===== */}
      <div className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Column 1 - Locations */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Locations</h3>
          <ul className="space-y-2 text-sm">
            <li>Meru</li>
            <li>Maua, HillCourt</li>
          </ul>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Digital Empowerment</a></li>
            <li><a href="#" className="hover:text-yellow-400">IT Consultancy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Data Management</a></li>
            <li><a href="#" className="hover:text-yellow-400">Cybersecurity</a></li>
          </ul>
        </div>

        {/* Column 3 - Industry */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Industry</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Finance</a></li>
            <li><a href="#" className="hover:text-yellow-400">Healthcare</a></li>
            <li><a href="#" className="hover:text-yellow-400">Education</a></li>
            <li><a href="#" className="hover:text-yellow-400">E-commerce</a></li>
          </ul>
        </div>

        {/* Column 4 - Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About</a></li>
            <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 5 - Company & Socials */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start mt-8 md:mt-0">
          {/* Company name and tagline */}
          <div className="mb-5 text-center md:text-left">
            <h3 className="text-white text-xl font-bold">Ariedez Systems Ltd.</h3>
            <p className="text-sm text-gray-400 italic">
              Empowering your digital transformation.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-5 text-2xl">
            <a
              href="https://www.tiktok.com/@ariedez.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 hover:scale-110 transition-transform"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.facebook.com/share/1GpH7oCN3g/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:scale-110 transition-transform"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/ariedezsystems?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 hover:scale-110 transition-transform"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/ariedezsys?igsh=Ym4xbHFnYXlueDE5&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/ariedez-systems"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+254735124963&text=Hello%20Ariadez%20Systems,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 hover:scale-110 transition-transform"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:ariedezsystems@gmail.com"
              className="hover:text-red-500 hover:scale-110 transition-transform"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Ariedez Systems Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
