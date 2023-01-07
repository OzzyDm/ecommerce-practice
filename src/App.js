import { createContext, useState, useEffect, useRef } from "react";

import Layout from "./components/Layout/Layout";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const isMounted = useRef(false);

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem("cart"));
    if (cartLocal) {
      setCart(cartLocal);
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      isMounted.current = true;
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
      <Layout />
    </CartContext.Provider>
  );
}

export default App;
