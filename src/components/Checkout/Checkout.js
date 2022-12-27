import classes from "./Checkout.module.css";

import { Fragment, useContext } from "react";

import { CartContext } from "../../App";
import CheckoutCard from "./CheckoutCard";

function Checkout(props) {
  const cartState = useContext(CartContext);

  function onClickHandler() {
    props.showState(false);
  }

  const price = cartState.cart.filter((item) => item.price);
  const total = price.map((item) => item.price);

  const totalPrice = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <Fragment>
      {!props.show && ""}
      {props.show && (
        <div className={classes.checkout}>
          <button onClick={onClickHandler}>X</button>
          <div className={classes.container}>
            {!cartState.cart && <h3>Loading</h3>}
            {cartState.cart &&
              cartState.cart.map((data) => (
                <CheckoutCard
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  price={data.price}
                  image={data.image}
                />
              ))}
          </div>
          <p className={classes.total}>
            Total is ${(Math.round(totalPrice * 100) / 100).toFixed(2)}
          </p>
        </div>
      )}
    </Fragment>
  );
}

export default Checkout;
