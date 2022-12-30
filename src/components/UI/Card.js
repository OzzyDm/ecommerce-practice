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
    quantity: 1,
  };

  function onClickHandler() {
    console.log(cartState.cart);
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

  return (
    <div className={classes.card}>
      <h2 className={classes.title}>{props.title.slice(0, 25)}..</h2>
      <div className={classes.details}>
        <img src={props.image} alt={props.title} />
        <p>{props.rating} &#9733;</p>
        <p className={classes.description}>{props.description.slice(0, 200)}</p>
        <h5>CA${props.price}</h5>
      </div>
      <button className={classes.button} onClick={onClickHandler}>
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
