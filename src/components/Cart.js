import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = ({ onClose }) => {
  const { cart, dispatch } = useContext(CartContext);

  const handleQuantityChange = (id, quantity) => {
    if (quantity === 0) {
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    }
  };

  const totalAmount = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discountedAmount = totalAmount >= 1000 ? totalAmount * 0.9 : totalAmount;

  const handleCheckout = () => {
    console.log("Замовлення:", cart.items);
    alert("Замовлення оформлено!");
    dispatch({ type: "CLEAR_CART" });
    onClose();
  };

  return (
    <div className="cart-modal">
      <button className="close-button" onClick={onClose}>
        ✖
      </button>
      <h2>Кошик</h2>
      {cart.items.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <div>
          {cart.items.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>{item.price} грн</span>
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
            <p>Загальна сума: {totalAmount} грн</p>
            {totalAmount >= 1000 && <p>Знижка: 10%</p>}
            <p>До сплати: {discountedAmount} грн</p>
          </div>
          <button onClick={handleCheckout}>Оформити замовлення</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
