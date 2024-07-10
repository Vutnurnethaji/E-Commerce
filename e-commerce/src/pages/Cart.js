import React, { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import "./CartStyles.css";
import FormatPrice from "../helper/Format";
import { MdDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import CartButtonCounter from "../components/CartButtonCounter";

const Cart = () => {
  const { state, deleteFromCart, clearCart } = useContext(cartContext);
 
  const {totalAmount,totalItems,shippingFee }=state
 

  if (state.cart.length == 0) {
    return <div className="noCart">No Items Added</div>;
  }

  return (
    <div className="cart">
      <div className="cartTop">
        <span>
          <b>ITEM</b>
        </span>
        <span>
          <b>PRICE</b>
        </span>
        <span>
          <b>QUANTITY</b>
        </span>
        <span>
          <b>SUBTOTAL</b>
        </span>
        <span>
          <b>REMOVE</b>
        </span>
      </div>
      <hr></hr>
      <div className="cartBottom">
        {state.cart.map((el) => {
          return (
            <div className="cardBottomMain" key={el.id}>
              <span className="imgSpan">
                <img src={el.singleProduct.image[0].url} />
                <span>
                  <p>{el.singleProduct.name}</p>
                  <div style={{ display: "flex" }}>
                    <p>Color:</p>
                    <button style={{ backgroundColor: el.color }}></button>
                  </div>
                </span>
              </span>
              <span>
                <FormatPrice price={el.singleProduct.price} />
              </span>
              <>
                <CartButtonCounter singCart={el}/>
              </>
              <span>
                <FormatPrice price={el.count * el.singleProduct.price} />
              </span>
              <span
                className="deleteIcon"
                onClick={() => deleteFromCart(el.id)}
              >
                <MdDeleteOutline />
              </span>
            </div>
          );
        })}
      </div>
      <div className="cartButtons">
        <div>
          <NavLink to={"/"}>
            <button>Continue Shopping</button>
          </NavLink>
        </div>
        <div>
          <button onClick={clearCart} style={{ backgroundColor: "orange" }}>
            Clear Cart
          </button>
        </div>
      </div>
      <div className="totalPrice">
         <div>
         <span><p>Subtotal:</p> <p><b><FormatPrice price={totalAmount}/></b></p> </span>
          <span><p>Shipping Fee:</p> <p><b><FormatPrice price={shippingFee}/></b></p></span>
          <hr />
          <span><p>Order Total:</p> <p><b><FormatPrice price={shippingFee+totalAmount}/></b></p></span>
         </div>
      </div>
    </div>
  );
};

export default Cart;
