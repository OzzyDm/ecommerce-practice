import classes from "./CheckoutCard.module.css";

import { useContext } from "react";

import { CartContext } from "../../App";

function CheckoutCard(props) {
  const cartState = useContext(CartContext);

  function removeItemHandler() {
    cartState.setCart((previousState) => {
      return [...previousState.filter((item) => item.id !== props.id)];
    });
  }

  return (
    <div className={classes.card}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title.slice(0, 20)}...</h2>
      <h5>$ {props.price}</h5>
      <span>x2</span>
      <button className={classes.button} onClick={removeItemHandler}>
        Remove
      </button>
    </div>
  );
}

export default CheckoutCard;
