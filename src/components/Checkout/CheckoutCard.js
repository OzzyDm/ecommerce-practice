import classes from "./CheckoutCard.module.css";

import { useContext } from "react";

import { CartContext } from "../../App";

function CheckoutCard(props) {
  const cartState = useContext(CartContext);

  const data = {
    id: props.id,
    price: props.price,
    title: props.title,
    image: props.image,
    quantity: 1,
  };

  function removeItemHandler() {
    cartState.setCart((previousState) => {
      return [...previousState.filter((item) => item.id !== props.id)];
    });
  }

  function cartItemAddHandler() {}

  return (
    <div className={classes.card}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title.slice(0, 20)}...</h2>
      <h5>$ {props.price}</h5>
      <span>
        <button>-</button>
        {data.quantity}
        <button onClick={cartItemAddHandler}>+</button>
      </span>
      <button className={classes.button} onClick={removeItemHandler}>
        Remove
      </button>
    </div>
  );
}

export default CheckoutCard;
