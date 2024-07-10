import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavStyles.css";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { cartContext } from "../context/cartContext";

const Nav = () => {

   const{state}=useContext(cartContext);
   const [screen, setScreen]=useState(false);
  

    const toggle=()=>{
        setScreen(!screen)
    }
  return (
    <div className="nav">
      <div className="nav-total">
        <div className={screen ? 'nav-top activeTop':'nav-top'}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/cart"}>Cart</NavLink>
          <span className="navCart">
            <FiShoppingCart style={{ fontSize: 25 }} />
            <span className="nav-count">{state.totalItems}</span>
          </span>
        </div>
        <div className="nav-bottom">
          <span className={screen ? 'menuOpen menuOpenClose':'menuOpen'} onClick={()=>toggle()}>
            <CgMenu style={{ fontSize: 25 }} />
          </span>
          <span className={screen?'menuClose activeM':'menuClose'} onClick={()=>toggle()}>
            <CgClose style={{ fontSize: 25 }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
