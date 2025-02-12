import React from "react";
import { useCart } from "../contexts/CartContext";
import productsData from "../data/products";

const Products = () => {
  const { addToCart } = useCart();

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
