import React from "react";

const Hero4 = () => {
  return (
    <div>
      <section className="relative flex min-h-96 items-center justify-center bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-20 text-white">
        <div className="max-w-3xl text-center">
          {/* Main Heading */}
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Ready To Transform Your Workflow?
          </h2>
          {/* Subtext */}
          <p className="mx-auto mb-10 max-w-xl text-lg opacity-90">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>
          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="btn btn-md border-none bg-white px-8 text-indigo-600 hover:bg-gray-100 rounded-full normal-case font-semibold">
              Explore Products
            </button>
            <button className="btn btn-outline btn-md px-8 text-white hover:bg-white/10 rounded-full border-white/50 normal-case font-semibold">
              View Pricing
            </button>
          </div>
          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm font-light opacity-80">
            <span>14-day free trial</span>
            <span className="hidden sm:inline">•</span>
            <span>No credit card required</span>
            <span className="hidden sm:inline">•</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero4;
