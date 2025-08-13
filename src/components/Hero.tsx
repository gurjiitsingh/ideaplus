"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
         <section className="relative bg-gray-100">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-12 lg:py-20">
          {/* Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">Welcome to Idea Plus Software Jalandhar</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Idea Plus Software is a Software Development company based in Jalandhar. 
              We are professional accounting software developers. We also provide customized software development, 
              computer software and hardware, and website designing services. Our accounting software demo is available—
              contact us for more details.
            </p>
            <a
              href="/services"
              className="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              Explore Services
            </a>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
            <img
              src="/images/idea-software-8.png" // Place your hero image in public/hero-image.jpg
              alt="Idea Plus Software"
              className="rounded-2xl shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>
  );
}
