import classes from "./CheckoutCard.module.css";

import { useContext } from "react";

import { CartContext } from "../../App";

function CheckoutCard(props) {
  const cartState = useContext(CartContext);

  function onClickHandler() {
    cartState.setCart((previousState) => {
      return [...previousState];
    });
  }

  return (
    <div className={classes.card}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title.slice(0, 20)}...</h2>
      <h5>$ {props.price}</h5>
      <span>x2</span>
      <button className={classes.button} onClick={onClickHandler}>
        Remove
      </button>
    </div>
  );
}

export default CheckoutCard;
