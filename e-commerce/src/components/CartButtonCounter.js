import React, { useContext, useEffect, useState } from "react";
import "./CartButtonCounterStyles.css";
import { cartContext } from "../context/cartContext";

const CartButtonCounter = ({ singCart }) => {
  const { updatingCount } = useContext(cartContext);
  let useStateVal=singCart.count<=singCart.singleProduct.stock ? singCart.count:singCart.singleProduct.stock
  const [count, setCount] = useState(useStateVal);
  useEffect(() => {
    updatingCount({ id: singCart.id, countVal: count });
  }, [count]);
  const increment = () => {
    if (count < singCart.singleProduct.stock) {
      setCount((count) => count + 1);
    }
  };
  const decrement = () => {
    if (count <= singCart.singleProduct.stock && count > 1) {
      setCount((count) => count - 1);
    }
  };
  return (
    <span className="counterSpan">
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </span>
  );
};

export default CartButtonCounter;
