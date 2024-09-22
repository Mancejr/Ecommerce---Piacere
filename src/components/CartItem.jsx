import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function CartItem({ item }) {
  const cartCtx = useContext(CartContext);

  function addToCart() {
    cartCtx.addItem(item);
  }

  function removeFromCart() {
    cartCtx.removeItem(item.id);
  }

  return (
    <>
      <li className="cart__cart-container">
        <div className="cart__cart-item">
          <img src={item.image} alt="" className="cart__cart-image" />
          <div className="cart__cart-paragraphs">
            <p className="cart__cart-title">Naziv proizvoda: {item.title}</p>
            <div>
              <p className="cart__cart-quantity">
                Kolicina: {item.quantity} <button onClick={addToCart}>+</button>
                <button onClick={removeFromCart}>-</button>
              </p>
            </div>
            <p>Cena: {item.price} RSD</p>
          </div>
        </div>
      </li>
    </>
  );
}
