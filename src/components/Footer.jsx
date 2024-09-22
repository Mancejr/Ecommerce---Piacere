import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__description">
        <h1 className="footer__description-title">Title</h1>
        <p className="footer__description-paragraph">
          Ovo je najbolji pesto sos u gradu ima da se naprcate kao svinje bla
          bla bla
        </p>
      </div>
      <div className="footer__quick-links">
        <h1 className="footer__description-title">Quick Links</h1>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div className="footer__follow-us">
        <h1 className="footer__description-title">Follow Us</h1>
      </div>
    </div>
  );
};

export default Footer;
