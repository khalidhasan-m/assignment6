import React from "react";
import heroImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <section className="min-h-screen bg-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-0 py-12 lg:py-0">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-5 text-center lg:text-left">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="badge badge-outline border-violet-300 text-violet-600 bg-violet-50 text-xs font-medium px-3 py-3 rounded-full">
                🟣 New: AI-Powered Tools Available
              </span>
            </div>

            {/* Heading */}
            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                <span className="relative inline-block">
                  {/* Teal border box around heading */}
                  <span className="absolute -inset-x-2 -inset-y-1 rounded pointer-events-none hidden lg:block" />
                  Supercharge Your
                  <br />
                  Digital Workflow
                </span>
              </h1>
              {/* Mobile border box */}
              <span className="absolute -inset-x-2 -inset-y-1 border-2 border-teal-400 rounded pointer-events-none lg:hidden" />
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            {/* Explore Products link */}
            <p className="text-gray-500 text-sm font-medium underline underline-offset-2 cursor-pointer hover:text-violet-600 transition-colors hidden lg:block">
              Explore Products
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-1">
              <button className="btn bg-violet-600 hover:bg-violet-700 text-white border-none rounded-full px-6 text-sm font-semibold shadow-sm">
                Explore Products
              </button>
              <button className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-full px-6 text-sm font-semibold gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3 h-3 text-gray-600"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl overflow-hidden">
              <img
                src={heroImg}
                alt="AI-powered digital workflow"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
