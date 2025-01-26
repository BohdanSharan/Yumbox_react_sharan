import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { CartProvider } from "./contexts/CartContext";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <Header toggleCart={toggleCart} />
      <Banner />
      <Products />
      {isCartOpen && <Cart onClose={toggleCart} />}
      <Footer />
    </CartProvider>
  );
}

export default App;
