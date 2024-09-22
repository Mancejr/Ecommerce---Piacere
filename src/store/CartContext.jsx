import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingIndexOfItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (existingIndexOfItem > -1) {
      const existingItem = updatedItems[existingIndexOfItem];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updatedItems[existingIndexOfItem] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingIndexOfItem = state.items.findIndex(
      (item) => item.id === action.id
    );

    if (existingIndexOfItem === -1) {
      return state;
    }

    const updatedItems = [...state.items];
    const existingItem = updatedItems[existingIndexOfItem];
    if (existingItem.quantity === 1) {
      updatedItems.splice(existingIndexOfItem, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };

      updatedItems[existingIndexOfItem] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
    console.log("Add Item");
    console.log(cartContext);
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
    console.log(cartContext);
    console.log("Remove Item");
  }

  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
