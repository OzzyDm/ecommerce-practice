import { createContext, useState } from "react";

import Layout from "./components/Layout/Layout";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
      <Layout />
    </CartContext.Provider>
  );
}

export default App;
