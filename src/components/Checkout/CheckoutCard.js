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

  function cartItemAddHandler() {
    if (cartState.cart.find((item) => item.id === props.id)) {
      const itemIndex = cartState.cart.findIndex(
        (item) => item.id === props.id
      );
      cartState.setCart((previousState) => {
        previousState[itemIndex].quantity += 1;
        return [...previousState];
      });
    } else {
      cartState.setCart((previousState) => {
        return [...previousState, data];
      });
    }
  }

  function cartItemRemoveHandler() {
    if (cartState.cart.find((item) => item.id === props.id)) {
      const itemIndex = cartState.cart.findIndex(
        (item) => item.id === props.id
      );
      cartState.setCart((previousState) => {
        previousState[itemIndex].quantity -= 1;
        return [...previousState];
      });
    } else {
      cartState.setCart((previousState) => {
        return [...previousState, data];
      });
    }
  }

  return (
    <div className={classes.card}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title.slice(0, 20)}...</h2>
      <h5>$ {props.price * props.quantity} </h5>
      <span>
        <button
          onClick={cartItemRemoveHandler}
          disabled={props.quantity <= 1 ? true : false}
        >
          -
        </button>
        {props.quantity}
        <button onClick={cartItemAddHandler}>+</button>
      </span>
      <button className={classes.button} onClick={removeItemHandler}>
        Remove
      </button>
    </div>
  );
}

export default CheckoutCard;
