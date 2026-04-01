import React from "react";
import img1 from "../../assets/user.png";
import img2 from "../../assets/package.png";
import img3 from "../../assets/rocket.png";

const steps = [
  {
    id: 1,
    img: img1,
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: 2,
    img: img2,
    title: "Browse & Select",
    desc: "Explore 200+ premium digital tools and pick the ones that fit your workflow.",
  },
  {
    id: 3,
    img: img3,
    title: "Launch & Grow",
    desc: "Get instant access and start boosting your productivity right away.",
  },
];

const Hero3 = () => {
  return (
    <div className="bg-base-200 py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 mt-3 mb-10 text-sm sm:text-base max-w-md mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {steps.map(({ id, img, title, desc }) => (
            <div
              key={id}
              className="card bg-base-100 w-full max-w-sm p-6 shadow-sm"
            >
              <div className="card-actions justify-end">
                <button className="btn btn-primary rounded-full">{id}</button>
              </div>
              <figure>
                <img
                  className="bg-[#4f39f6]/10 p-6 h-24 w-24 rounded-full"
                  src={img}
                  alt={title}
                />
              </figure>
              <div className="text-center space-y-3 mt-8">
                <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
                <p className="text-sm sm:text-base text-black/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
