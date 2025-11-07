"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false); // mobile expand
  const [exploreHover, setExploreHover] = useState(false); // desktop hover
  const pathname = usePathname() || "/";

  const toggleMenu = () => setMenuOpen((s) => !s);
  const closeMenu = () => {
    setMenuOpen(false);
    setExploreOpen(false);
  };

  // helper to mark active link
  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full top-0 bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" onClick={closeMenu} className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition">
          Ariedez Systems
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-lg px-1 ${isActive("/") ? "underline underline-offset-4 decoration-yellow-400" : "hover:text-yellow-400"} transition`}
          >
            Home
          </Link>

          {/* Explore dropdown (desktop) */}
          <div
            className="relative"
            onMouseEnter={() => setExploreHover(true)}
            onMouseLeave={() => setExploreHover(false)}
          >
            <button
              aria-haspopup="menu"
              aria-expanded={exploreHover}
              className={`flex items-center gap-2 text-lg px-1 ${exploreHover ? "text-yellow-400" : "hover:text-yellow-400"} transition`}
              type="button"
            >
              <span>Explore</span>
              <FaChevronDown className="mt-0.5" />
            </button>

            {/* dropdown panel */}
            <div
              className={`absolute top-full left-0 mt-2 w-44 bg-gray-800 rounded-md shadow-lg overflow-hidden transform transition-all ${
                exploreHover ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
              }`}
            >
              <Link href="/about" className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-yellow-400" onClick={() => setExploreHover(false)}>
                About
              </Link>
              <Link href="/services" className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-yellow-400">
                Services
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-yellow-400">
                Contact
              </Link>
            </div>
          </div>

          <Link
            href="/programs"
            className={`text-lg px-1 ${isActive("/programs") ? "underline underline-offset-4 decoration-yellow-400" : "hover:text-yellow-400"} transition`}
          >
            Programs
          </Link>

          <Link
            href="/impact"
            className={`text-lg px-1 ${isActive("/impact") ? "underline underline-offset-4 decoration-yellow-400" : "hover:text-yellow-400"} transition`}
          >
            Impact
          </Link>

          <Link
            href="/blog"
            className={`text-lg px-1 ${isActive("/blog") ? "underline underline-offset-4 decoration-yellow-400" : "hover:text-yellow-400"} transition`}
          >
            Blog
          </Link>

          <Link href="/partners" className="text-lg px-1 hover:text-yellow-400 transition">
          Partnerships
          </Link>

          <Link
            href="/get-started"
            className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 text-white shadow-md py-4 px-6 space-y-4">
          <Link href="/" onClick={closeMenu} className="block text-lg hover:text-yellow-400">
            Home
          </Link>

          {/* Explore mobile accordion */}
          <div className="block">
            <button
              onClick={() => setExploreOpen((s) => !s)}
              className="w-full flex items-center justify-between text-left text-lg hover:text-yellow-400 transition"
              aria-expanded={exploreOpen}
            >
              <span>Explore</span>
              <FaChevronDown />
            </button>

            {exploreOpen && (
              <div className="mt-2 ml-4 space-y-2">
                <Link href="/about" onClick={closeMenu} className="block hover:text-yellow-400">About</Link>
                <Link href="/services" onClick={closeMenu} className="block hover:text-yellow-400">Services</Link>
                <Link href="/contact" onClick={closeMenu} className="block hover:text-yellow-400">Contact</Link>
              </div>
            )}
          </div>

          <Link href="/programs" onClick={closeMenu} className="block text-lg hover:text-yellow-400">Programs</Link>
          <Link href="/impact" onClick={closeMenu} className="block text-lg hover:text-yellow-400">Impact</Link>
          <Link href="/blog" onClick={closeMenu} className="block text-lg hover:text-yellow-400">Blog</Link>
          <Link href="/donate" onClick={closeMenu} className="block text-lg hover:text-yellow-400">Donate</Link>

          <Link
            href="/get-started"
            onClick={closeMenu}
            className="block text-center bg-white text-blue-900 font-semibold px-4 py-2 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
