import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Hero3 from "./components/Hero3/Hero3";
import Hero4 from "./components/Hero4/Hero4";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Stats from "./components/Stats/Stats";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");
  return (
    <>
      <Navbar cartCount={cart.length} onCartClick={() => setView("cart")} />
      <Banner />
      <Stats />
      <Cards cart={cart} setCart={setCart} view={view} setView={setView} />
      <Hero3 />
      <Pricing />
      <Hero4 />
      <Footer />
    </>
  );
}

export default App;
