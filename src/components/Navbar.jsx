import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../store/CartContext";

const Navbar = () => {
  const cartCtx = useContext(CartContext);

  const [toggle, setToggle] = useState(true);

  function toggleMenu() {
    setToggle(!toggle);
  }
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__list">
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
          <li className="toggle-menu lg:hidden ">
            {toggle ? (
              <LuMenu onClick={toggleMenu} />
            ) : (
              <IoIosCloseCircleOutline onClick={toggleMenu} />
            )}
          </li>
          <div className="flex items-center">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>

            <p>{totalCartItems}</p>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
