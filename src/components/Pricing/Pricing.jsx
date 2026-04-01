import React from "react";

const pricingData = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for getting started",
    price: 0,
    period: "month",
    highlight: false,
    badge: "",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
  },
  {
    id: 2,
    name: "Pro",
    description: "Best for professionals",
    price: 29,
    period: "month",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
  },
  {
    id: 3,
    name: "Enterprise",
    description: "For teams and businesses",
    price: 99,
    period: "month",
    highlight: false,
    badge: "",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <div className="bg-base-100 py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {pricingData.map((item) => {
          const isPro = item.highlight;

          return (
            <div
              key={item.id}
              className={`card shadow-xl p-6 relative rounded-2xl transition duration-300
              ${
                isPro
                  ? "bg-linear-to-r from-purple-500 to-indigo-500 text-white scale-105"
                  : "bg-base-100"
              }`}
            >

              {/* Badge */}
              {isPro && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="badge bg-yellow-300 text-black px-4 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
              )}

              {/* Title */}
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <p className={`text-sm ${isPro ? "text-white/80" : "text-gray-500"}`}>
                {item.description}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mt-4 mb-4">
                <span className="text-4xl font-bold">${item.price}</span>
                <span className="text-lg">/{item.period}</span>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-6">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    {/* Green check icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={isPro ? "text-white" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`btn w-full rounded-full
                ${
                  isPro
                    ? "bg-white text-purple-600 hover:bg-gray-200"
                    : "bg-linear-to-r from-purple-500 to-indigo-500 text-white border-none"
                }`}
              >
                {item.button}
              </button>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Pricing;