import React from "react";
import Header from "./Header";
import { Github, Linkedin } from "lucide-react";

// Hero Component
const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Light Gray - Your original code with responsive classes */}
      <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center px-6 md:px-16 py-12 md:py-0 relative order-2 md:order-1">
        {/* Logo - Your original code with responsive sizing */}
        <div className="absolute top-4 md:top-8 left-4 md:left-8">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg md:text-xl">TG</span>
          </div>
        </div>

        {/* Main Content - Your original structure */}
        <div className="max-w-md mx-auto md:mx-0 text-center md:text-left mt-16 md:mt-0">
          <p className="text-gray-600 text-base md:text-lg mb-3 md:mb-4">
            Hi, I am
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-2 leading-tight">
            Awais Afzal
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-6 md:mb-8">
            Full Stack Developer
          </p>

          {/* Social Links - Your original code with responsive centering */}
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="#"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <span className="text-white text-sm">@</span>
            </a>
            <a
              href="https://github.com/Codewithawais-byte"
              target="_blank"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <Github className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/awais-afzal-4ab227245/"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              target="_blank"
            >
              <Linkedin className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Black with Image - Your original structure */}
      <div className="w-full md:w-1/2 bg-black relative overflow-hidden min-h-[50vh] md:min-h-screen order-1 md:order-2">
        <Header />

        {/* Profile Image - Your original positioning */}
        <div className="absolute inset-0 flex items-center justify-center pt-20 md:pt-0">
          {/* <div className="relative">
            <img
              src="/images/myimage.png"
              alt="Awais Afzal"
              className="object-cover rounded-lg"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
