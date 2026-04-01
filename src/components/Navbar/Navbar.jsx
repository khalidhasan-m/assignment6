import React, { useState } from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm font-sans">
      <div className="flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-violet-700 no-underline">
          DigiTools
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map(
            (item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-violet-700 transition-colors no-underline"
                >
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="bg-transparent border-0 cursor-pointer p-1 relative flex items-center text-gray-700"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-violet-700 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
          </button>

          {/* Login - hidden on mobile */}
          <a
            href="#"
            className="hidden md:block text-sm text-gray-700 hover:text-violet-700 transition-colors no-underline"
          >
            Login
          </a>

          {/* Get Started - hidden on mobile */}
          <button className="hidden md:block bg-violet-700 hover:bg-violet-800 transition-colors text-white border-0 rounded-md px-4 py-2 text-sm font-medium cursor-pointer">
            Get Started
          </button>

          {/* Hamburger - visible on mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 bg-transparent border-0 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"}`}
      >
        <ul className="flex flex-col list-none m-0 p-0 px-6 py-4 gap-4">
          {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map(
            (item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-violet-700 transition-colors no-underline"
                >
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>
        <div className="flex flex-col gap-3 px-6 pb-5">
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-violet-700 transition-colors no-underline"
          >
            Login
          </a>
          <button className="bg-violet-700 hover:bg-violet-800 transition-colors text-white border-0 rounded-md px-4 py-2 text-sm font-medium cursor-pointer w-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
