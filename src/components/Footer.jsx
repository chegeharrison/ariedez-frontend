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
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Column 1 - Locations */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Locations</h3>
          <ul className="space-y-2">
            <li>Meru</li>
            <li>Maua, HillCourt</li>
          </ul>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Digital Empowerment</a></li>
            <li><a href="#" className="hover:text-white">IT Consultancy</a></li>
            <li><a href="#" className="hover:text-white">Data Management</a></li>
            <li><a href="#" className="hover:text-white">Cybersecurity</a></li>
          </ul>
        </div>

        {/* Column 3 - Industry */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Industry</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Finance</a></li>
            <li><a href="#" className="hover:text-white">Healthcare</a></li>
            <li><a href="#" className="hover:text-white">Education</a></li>
            <li><a href="#" className="hover:text-white">E-commerce</a></li>
          </ul>
        </div>

        {/* Column 4 - Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-400 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition-colors">About</a></li>
            <li><a href="/services" className="hover:text-yellow-400 transition-colors">Services</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 5 - Company & Socials */}
        <div className="flex flex-col items-center md:items-start">
          {/* Company name and tagline */}
          <div className="mb-5 text-center md:text-left">
            <h3 className="text-white text-xl font-bold">Ariadez Systems Ltd.</h3>
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
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Ariadez Systems Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
