import { Fragment, useState } from "react";
import Navbar from "./Navbar";
import Products from "../Products";
import Checkout from "../Checkout/Checkout";

function Layout() {
  const [show, setShow] = useState(false);

  function showHandler(props) {
    setShow(props);
  }

  return (
    <Fragment>
      <Navbar showState={showHandler} />
      <Products />
      <Checkout show={show} showState={showHandler} />
    </Fragment>
  );
}

export default Layout;
