import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Header = ({ toggleCart }) => {  
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/"><img src="/images/logo.png" alt="Yumbox" /></Link>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>☰</button>
            <nav className={`menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
                <Link to="/catalog">Каталог</Link>
                <Link to="/catering">Кейтеринг</Link>
                <Link to="/about">Про нас</Link>
                <Link to="/contacts">Контакти</Link>
            </nav>
            <div className="cart-icon" onClick={toggleCart}>  {/* Викликаємо toggleCart */}
                🛒 {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </div>
        </header>
    );
};

export default Header;
