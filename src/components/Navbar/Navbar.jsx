import React from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 h-15 bg-white border-b border-gray-200 font-sans shadow-sm">
      {/* Logo */}
      <a href="#" className="text-[22px] font-bold text-[#7c3aed] no-underline">
        DigiTools
      </a>

      {/* Nav Links */}
      <ul className="flex items-center gap-7 list-none m-0 p-0">
        {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map(
          (item) => (
            <li key={item}>
              <a href="#" className="text-sm text-gray-700 no-underline">
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

          {/* Badge */}
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-[#7c3aed] text-white text-[10px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center leading-none">
              {cartCount}
            </span>
          )}
        </button>

        {/* Login */}
        <a href="#" className="text-sm text-gray-700 no-underline">
          Login
        </a>

        {/* Get Started */}
        <button className="bg-[#7c3aed] text-white border-0 rounded-md px-4.5 py-2 text-sm font-medium cursor-pointer">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
