import React from "react";
import { PRODUCTS } from "../data.js";
import Product from "./Product";
const Products = () => {
  return (
    <div className="products-container">
      <ul className="products">
        {PRODUCTS.map((item) => (
          // <li>
          //   <img src={product.image} alt="" />
          //   <p>{product.title}</p>
          //   <p>{product.description}</p>
          // </li>
          <Product item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
