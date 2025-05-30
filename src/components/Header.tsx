// // src/components/Header.tsx
// import React from "react";
// import Link from "next/link";

// const Header = () => {
//   return (
//     <header className="absolute top-0 right-0 z-10 p-8">
//       <nav className="flex items-center space-x-8">
//         <Link
//           href="/"
//           className="text-white hover:text-gray-300 transition-colors"
//         >
//           Home
//         </Link>
//         <Link
//           href="/about"
//           className="text-white hover:text-gray-300 transition-colors"
//         >
//           About me
//         </Link>
//         <Link
//           href="/skills"
//           className="text-white hover:text-gray-300 transition-colors"
//         >
//           Skills
//         </Link>
//         <Link
//           href="/projects"
//           className="text-white hover:text-gray-300 transition-colors"
//         >
//           Portfolio
//         </Link>
//         <Link
//           href="/contact"
//           className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors font-medium"
//         >
//           CONTACT ME
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={clsx(
        "top-0 w-full fixed z-10 p-8 transition-all duration-300",
        isHome
          ? "bg-transparent text-white"
          : "bg-black text-white flex justify-end"
      )}
    >
      {/* Desktop Navigation - Your original code */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition-colors">
          About me
        </Link>
        <Link href="/skills" className="hover:text-gray-300 transition-colors">
          Skills
        </Link>
        <Link
          href="/projects"
          className="hover:text-gray-300 transition-colors"
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors font-medium"
        >
          CONTACT ME
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={toggleMenu}
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu className="bg-black" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-700">
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors py-2 px-3 rounded hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors py-2 px-3 rounded hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              About me
            </Link>
            <Link
              href="/skills"
              className="text-white hover:text-gray-300 transition-colors py-2 px-3 rounded hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-gray-300 transition-colors py-2 px-3 rounded hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors font-medium text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT ME
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
