import classes from "./Checkout.module.css";

import { Fragment, useContext } from "react";

import { CartContext } from "../../App";
import CheckoutCard from "./CheckoutCard";

function Checkout(props) {
  const cartState = useContext(CartContext);

  function onClickHandler() {
    props.showState(false);
  }

  const total = cartState.cart.map((item) => item.price * item.quantity);

  const f = new Intl.NumberFormat("en-us", {
    currency: "CAD",
    style: "currency",
  });

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
                  quantity={data.quantity}
                />
              ))}
            {total.length > 0 && (
              <p className={classes.total}>Total is {f.format(totalPrice)}</p>
            )}
            {total.length <= 0 && (
              <p className={classes.total}>Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Checkout;
