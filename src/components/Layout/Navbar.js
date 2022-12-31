import { useContext } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../App";

import classes from "./Navbar.module.css";

function Navbar(props) {
  const cartState = useContext(CartContext);

  function onClickHandler() {
    props.showState(true);
  }

  return (
    <nav className={classes.navbar}>
      <h1>Amazonia</h1>
      <button
        href="#"
        className={classes.notification}
        onClick={onClickHandler}
      >
        <AiOutlineShoppingCart className={classes.icon} />
        <span className={classes.badge}>{cartState.cart.length}</span>
      </button>
    </nav>
  );
}

export default Navbar;
