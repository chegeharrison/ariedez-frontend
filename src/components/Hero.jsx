"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src="/images/it.jpg" // ✅ make sure this file exists in /public/images
          alt="Technology innovation background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-4xl px-6 space-y-6 mt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 leading-tight">
          Empowering Communities Through Technology, Innovation & Entrepreneurship
        </h1>
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl">
          Transforming ideas into impact. We train, connect, and empower youth,
          women, and SMEs to build a digital future.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button
            onClick={() => router.push("/about")}
            className="bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition"
          >
            Learn More
          </button>
          <button
            onClick={() => router.push("/get-started")}
            className="border border-yellow-400 text-yellow-400 font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => router.push("/partners")}
            className="border border-gray-300 text-gray-200 px-6 py-2 rounded-full hover:bg-gray-200 hover:text-blue-900 transition"
          >
            Partner With Us
          </button>
          <button
            onClick={() => router.push("/partners")}
            className="bg-red-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-400 transition"
          >
            Donate & Support
          </button>
        </div>
      </div>
    </section>
  );
}
