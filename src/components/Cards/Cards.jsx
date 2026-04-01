import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const products = [
  {
    id: 1,
    icon: "✍️",
    badge: "Best Seller",
    badgeColor: "bg-yellow-400 text-yellow-900",
    title: "AI Writing Pro",
    description:
      "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    price: 29,
    priceType: "/Mo",
    features: [
      "Unlimited AI generations",
      "50+ writing templates",
      "Grammar checker",
    ],
  },
  {
    id: 2,
    icon: "🎨",
    badge: "Popular",
    badgeColor: "bg-purple-500 text-white",
    title: "Design Templates Pack",
    description:
      "2000+ premium templates for social media, presentations, and marketing materials.",
    price: 49,
    priceType: "/One-Time",
    features: ["2000+ templates", "Monthly updates", "Commercial license"],
  },
  {
    id: 3,
    icon: "📸",
    badge: "New",
    badgeColor: "bg-green-500 text-white",
    title: "Premium Stock Assets",
    description:
      "Access millions of royalty-free photos, videos, and graphics for your projects.",
    price: 19,
    priceType: "/Mo",
    features: ["10M+ assets", "Commercial use", "No attribution"],
  },
  {
    id: 4,
    icon: "⚙️",
    badge: "Popular",
    badgeColor: "bg-purple-500 text-white",
    title: "Automation Toolkit",
    description:
      "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: 79,
    priceType: "/Mo",
    features: ["50+ automations", "API access", "Custom workflows"],
  },
  {
    id: 5,
    icon: "📄",
    badge: "New",
    badgeColor: "bg-green-500 text-white",
    title: "Resume Builder Pro",
    description:
      "Create professional resumes and cover letters that land interviews.",
    price: 15,
    priceType: "/One-Time",
    features: ["100+ templates", "ATS optimization", "Export to PDF"],
  },
  {
    id: 6,
    icon: "📱",
    badge: "Best Seller",
    badgeColor: "bg-yellow-400 text-yellow-900",
    title: "Social Media Content Kit",
    description:
      "Complete toolkit for creating engaging social media content across all platforms.",
    price: 39,
    priceType: "/Mo",
    features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
  },
  {
    id: 7,
    icon: "📊",
    badge: "Hot",
    badgeColor: "bg-red-500 text-white",
    title: "SEO Master Suite",
    description:
      "Boost your website rankings with advanced keyword research and on-page SEO tools.",
    price: 59,
    priceType: "/Mo",
    features: ["Keyword research", "Site audit tool", "Competitor analysis"],
  },
  {
    id: 8,
    icon: "🎬",
    badge: "New",
    badgeColor: "bg-green-500 text-white",
    title: "Video Editing Pack",
    description:
      "Professional video templates, transitions, and effects for stunning videos.",
    price: 89,
    priceType: "/One-Time",
    features: ["500+ transitions", "4K templates", "Lifetime updates"],
  },
  {
    id: 9,
    icon: "🔐",
    badge: "Popular",
    badgeColor: "bg-purple-500 text-white",
    title: "Email Marketing Pro",
    description:
      "Design, send, and track high-converting email campaigns with ease.",
    price: 45,
    priceType: "/Mo",
    features: ["Drag & drop builder", "A/B testing", "Advanced analytics"],
  },
];

const CartView = ({ cart, onRemove, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <div className="bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <div className="text-5xl mb-3">🛒</div>
            <p className="text-lg font-medium">Your cart is empty</p>
            <p className="text-sm mt-1">Add some products to get started!</p>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-base-200 rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-gray-400">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 text-sm font-medium hover:text-red-700 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-5 pt-4 border-t border-base-300">
              <span className="text-gray-500 text-sm">Total</span>
              <span className="text-2xl font-bold">${total}</span>
            </div>

            <button
              className="btn btn-primary w-full mt-4 rounded-xl text-white"
              onClick={onCheckout}
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ product, inCart, onAddToCart }) => (
  <div className="card bg-base-100 shadow-md border border-base-200 relative">
    <span
      className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full ${product.badgeColor}`}
    >
      {product.badge}
    </span>
    <div className="card-body">
      <div className="text-3xl mb-1">{product.icon}</div>
      <h2 className="card-title text-base">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.description}</p>
      <div className="my-2">
        <span className="text-2xl font-bold">${product.price}</span>
        <span className="text-sm text-gray-400">{product.priceType}</span>
      </div>
      <ul className="text-sm space-y-1 mb-3">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span> {f}
          </li>
        ))}
      </ul>
      <div className="card-actions">
        {inCart ? (
          <button
            disabled
            className="btn w-full bg-green-500 hover:bg-green-500 text-white border-none cursor-not-allowed"
          >
            ✓ Added to Cart
          </button>
        ) : (
          <button
            className="btn btn-primary w-full"
            onClick={() => onAddToCart(product)}
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  </div>
);

const Cards = ({cart, setCart, view, setView}) => {

  const handleAddToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) return;
    setCart((prev) => [...prev, product]);
    toast.success(`"${product.title}" added to cart!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const handleRemove = (id) => {
    const removed = cart.find((item) => item.id === id);
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.error(`"${removed.title}" removed from cart.`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const handleCheckout = () => {
    setCart([]);
    toast("🚗 Order Placed Successfully!", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      style: {
        background: "#7c3aed",
        color: "#ffffff",
      },
      progressStyle: {
        background: "#c4b5fd",
      },
    });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* React Toastify Container */}
      <ToastContainer />

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="py-4 text-gray-500 max-w-md mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="flex justify-center gap-3">
          <button
            className={`btn ${view === "products" ? "btn-primary" : "btn-outline"}`}
            onClick={() => setView("products")}
          >
            Products
          </button>
          <button
            className={`btn ${view === "cart" ? "btn-primary" : "btn-outline"}`}
            onClick={() => setView("cart")}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {view === "products" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              inCart={!!cart.find((item) => item.id === product.id)}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : (
        <CartView cart={cart} onRemove={handleRemove} onCheckout={handleCheckout} />
      )}
    </div>
  );
};

export default Cards;