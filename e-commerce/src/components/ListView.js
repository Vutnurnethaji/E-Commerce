import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helper/Format";
import './ListViewStyles.css'

const ListView = ({ filter_products, all_products, gridView }) => {
  return (
    <div className="listView">
      {filter_products.map((product) => {
        const { name, price, id, category, image, description } = product;
        return (
          <div className="listViewMain">
            <div className="listViewLeft">
              <img src={image} alt={name} />
            </div>
            <div className="listViewRight">
              <p>
                <b>{name}</b>
              </p>
              <FormatPrice price={price} />
              <p>{description.split('').slice(0,89).join('')}...</p>
              <NavLink to={`/singleProduct/${id}`}>
                <button>Read More</button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
