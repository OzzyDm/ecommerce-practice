import classes from "./Checkout.module.css";

import { Fragment, useContext } from "react";

import { CartContext } from "../../App";
import CheckoutCard from "./CheckoutCard";

function Checkout(props) {
  const cartState = useContext(CartContext);

  function onClickHandler() {
    props.showState(false);
  }

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
        </div>
      )}
    </Fragment>
  );
}

export default Checkout;
