import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";

const Product = ({ item }) => {
  const cartCtx = useContext(CartContext);

  function addItemToCart() {
    cartCtx.addItem(item);
  }

  return (
    <>
      <li className="product" key={item.id}>
        <article>
          <img src={item.image} alt={item.title} className="product-image" />
          <p className="product-title">{item.title}</p>
          <p className="product-description">{item.description}</p>
          <div>
            <button className="add-to-cartBtn" onClick={addItemToCart}>
              Dodaj u korpu
            </button>
          </div>
        </article>
      </li>
    </>
  );
};

export default Product;
