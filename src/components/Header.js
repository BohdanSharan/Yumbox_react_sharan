import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Yumbox</Link>
            </div>
            <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                <Link to="/catalog">Каталог</Link>
                <Link to="/catering">Кейтеринг</Link>
                <Link to="/about">Про нас</Link>
                <Link to="/contacts">Контакти</Link>
            </nav>
            <div className="cart-button" onClick={toggleMenu}>
                <span>Меню</span>
                <span className="cart-count">{totalItems}</span>
            </div>
        </header>
    );
};

export default Header;
