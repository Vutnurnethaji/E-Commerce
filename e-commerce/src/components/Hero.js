import React from "react";
import hero from "./../assets/heroPic.jpg";
import "./HeroStyles.css";
import { NavLink } from "react-router-dom";

const Hero = ({name}) => {
  return (
    <div className="hero">
      <div className="heroLeft">
        <p>Welcome to</p>
        <h2>{name}</h2>
        <p>
          Shopping is a journey of discovery, where each store offers a new
          adventure and the promise of finding that perfect item. It's a blend
          of joy and necessity, connecting us to cultures, trends, and personal
          expressions. Whether it's a therapeutic escape or a festive spree,
          shopping enriches our lives with experiences and stories.
        </p>
        <NavLink to={'/about'}>
          <button>SHOW NOW</button>
        </NavLink>
      </div>
      <div className="heroRight">
        <img src={hero} alt="heroPic" />
      </div>
    </div>
  );
};

export default Hero;
