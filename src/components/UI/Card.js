import { useContext } from "react";

import { CartContext } from "../../App";

import classes from "./Card.module.css";

function Card(props) {
  const cartState = useContext(CartContext);

  const data = {
    id: props.id,
    price: props.price,
    title: props.title,
    image: props.image,
  };

  function onClickHandler() {
    cartState.setCart((previousState) => {
      return [...previousState, data];
    });

    console.log(cartState.cart);
  }

  return (
    <div className={classes.card}>
      <h2>{props.title.slice(0, 43)}...</h2>
      <div className={classes.details}>
        <img src={props.image} alt={props.title} />
        <p>{props.rating}</p>
        <h3>{props.category}</h3>
        <p>{props.description.slice(0, 70)}..</p>
        <h5>$ {props.price}</h5>
      </div>
      <button className={classes.button} onClick={onClickHandler}>
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
