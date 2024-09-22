import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <div className="cart">
        {cartCtx.items.length === 0 ? (
          <p>Nema proizvoda u korpi</p>
        ) : (
          <ul>
            {cartCtx.items.map((item) => (
              <CartItem item={item} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
