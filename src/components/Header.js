import React, { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Header = ({ toggleCart }) => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Yumbox" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        Меню
      </button>
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={toggleMenu}>
          ✖
        </button>
        <a href="#">Каталог</a>
        <a href="#">Кейтеринг</a>
        <a href="#">Про нас</a>
        <a href="#">Контакти</a>
        <div className="contacts">
          <p>yumbox.lutsk@gmail.com</p>
          <p>+380 93 823 92 93</p>
        </div>
        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
      </nav>
      <div className="cart" onClick={toggleCart}>
        🛒 {totalItems} товари
      </div>
    </header>
  );
};

export default Header;
