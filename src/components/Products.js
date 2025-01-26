import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import productsData from "../data/products";

const Products = () => {
  const { dispatch } = useContext(CartContext);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  };

  return (
    <section className="products">
      {productsData.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price} грн</p>
          <button onClick={() => addToCart(product)}>Додати в кошик</button>
        </div>
      ))}
    </section>
  );
};

export default Products;