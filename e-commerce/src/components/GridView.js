import React from "react";
import Product from "./Product";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helper/Format";
import './GridViewStyles.css'

const GridView = ({  filter_products,
    all_products,
    gridView }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap:'10px'
      }}
    >
      {filter_products.map((product) => {
        const{name,price,id,category,image}=product
        return (
          <NavLink to={`/singleProduct/${id}`} className={'gridAnchor'}>
            <div className="gridCard">
              <figure>
                <div className="imgDivGrid">
                  <img src={image} alt={name} />
                </div>
                <figcaption className="caption">{category}</figcaption>
              </figure>
              <div className="cardBottomGrid">
                <h4>{name}</h4>
                <p>
                  <FormatPrice price={price} />
                </p>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default GridView;
