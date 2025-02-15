import React from "react";
import { useCart } from "../contexts/CartContext";

const Cart = ({ onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleQuantityChange = (id, quantity) => {
    if (quantity === 0) {
      removeFromCart(id); 
    } else {
      updateQuantity(id, quantity);  
    }
  };

  const discountedAmount = totalPrice >= 1000 ? totalPrice * 0.9 : totalPrice;

  const handleCheckout = () => {
    console.log("Замовлення:", cartItems);
    alert("Замовлення оформлено!");
    clearCart();  
    onClose();    
  };

  const formatPrice = (price) => price.toFixed(2) + " грн";

  return (
    <div className="cart-modal">
      <button className="close-button" onClick={onClose}>
        ✖
      </button>
      <h2>Кошик</h2>
      {cartItems.length === 0 ? (
        <p>Кошик порожній</p>  
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>{formatPrice(item.price)}</span>
              <div>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button onClick={() => handleQuantityChange(item.id, 0)}>
                Видалити
              </button>
            </div>
          ))}
          <div className="cart-summary">
            <p>Загальна сума: {formatPrice(totalPrice)}</p>
            {totalPrice >= 1000 && <p>Знижка: 10%</p>}
            <p>До сплати: {formatPrice(discountedAmount)}</p>
          </div>
          <button onClick={handleCheckout}>Оформити замовлення</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
