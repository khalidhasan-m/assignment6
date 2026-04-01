import React from "react";

const Hero4 = () => {
  return (
    <section className="flex items-center justify-center bg-linear-to-r from-indigo-600 to-purple-600 px-4 sm:px-6 py-16 sm:py-20 text-white">
      <div className="max-w-3xl w-full text-center">
        {/* Main Heading */}
        <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-8 sm:mb-10 max-w-xl text-base sm:text-lg opacity-90 leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button className="btn btn-md border-none bg-white px-8 text-indigo-600 hover:bg-gray-100 rounded-full font-semibold w-full sm:w-auto">
            Explore Products
          </button>
          <button className="btn btn-outline btn-md px-8 text-white hover:bg-white/10 rounded-full border-white/50 font-semibold w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm font-light opacity-80">
          <span>14-day free trial</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
