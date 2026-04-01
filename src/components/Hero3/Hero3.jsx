import React from "react";
import img1 from "../../assets/user.png";
import img2 from "../../assets/package.png";
import img3 from "../../assets/rocket.png";

const Hero3 = () => {
  return (
    <div className="bg-base-200 py-28">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <div className="">
          <h1 className="text-5xl font-bold">Simple, Transparent Pricing</h1>
          <p className="text-gray-500 mt-3 mb-10">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-around items-center">
            {/* card1 */}
            <div className="card bg-base-100 w-96 h-96 p-6 shadow-sm">
              <div className="card-actions justify-end">
                <button className="btn btn-primary rounded-full">1</button>
              </div>
              <figure>
                <img
                  className="bg-[#4f39f6]/10 p-6 h-24 w-24 rounded-full"
                  src={img1}
                  alt="icon"
                />
              </figure>
              <div className="text-center items-center space-y-3 mt-8">
                <h2 className=" text-2xl">Create Account</h2>
                <p className="text-base text-black/70">
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>
            </div>
            {/* card2 */}
            <div className="card bg-base-100 w-96 h-96 p-6 shadow-sm">
              <div className="card-actions justify-end">
                <button className="btn btn-primary rounded-full">2</button>
              </div>
              <figure>
                <img
                  className="bg-[#4f39f6]/10 p-6 h-24 w-24 rounded-full"
                  src={img2}
                  alt="icon"
                />
              </figure>
              <div className="text-center items-center space-y-3 mt-8">
                <h2 className=" text-2xl">Create Account</h2>
                <p className="text-base text-black/70">
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>
            </div>
            {/* card3 */}
            <div className="card bg-base-100 w-96 h-96 p-6 shadow-sm">
              <div className="card-actions justify-end">
                <button className="btn btn-primary rounded-full">3</button>
              </div>
              <figure>
                <img
                  className="bg-[#4f39f6]/10 p-6 h-24 w-24 rounded-full"
                  src={img3}
                  alt="icon"
                />
              </figure>
              <div className="text-center items-center space-y-3 mt-8">
                <h2 className=" text-2xl">Create Account</h2>
                <p className="text-base text-black/70">
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
