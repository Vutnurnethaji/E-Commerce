import React, { useContext } from "react";
import { FilterContext } from "../context/filterContext";
import "./ProductsFilterStyles.css";
import { FaCheck } from "react-icons/fa6";
import FormatPrice from "../helper/Format";

const ProductsFilter = () => {
  const { inputChangeValFunc, clearFilter, filters, all_products } =
    useContext(FilterContext);

    const {price, maxPrice, minPrice, company}=filters

  const gettingFilterdCatg = (prods, typeVal) => {
    let difcatgs = prods.map((cur) => {
      return cur[typeVal];
    });

    if (typeVal === "colors") {
      difcatgs = difcatgs.flat();
    }
    return ["all", ...new Set(difcatgs)];
  };

  const buttonArrayCatg = gettingFilterdCatg(all_products, "category");

  const arrayComp = gettingFilterdCatg(all_products, "company");

  const arrayColors = gettingFilterdCatg(all_products, "colors");
  
  return (
    <>
      <div className="productsFilterTop">
        <input
          type="text"
          name="text"
          onChange={inputChangeValFunc}
          value={filters.text}
          placeholder="Search"
        />
      </div>
      <div className="productsFilterCat">
        <h3>Category</h3>
        {buttonArrayCatg.map((el, i) => {
          return (
            <button
              onClick={inputChangeValFunc}
              value={el}
              name="category"
              key={i}
            >
              {el}
            </button>
          );
        })}
      </div>
      <div className="productsFilterCom">
        <h3>Company</h3>
        <select name="company" onChange={inputChangeValFunc} value={company}>
          {arrayComp.map((el, i) => {
            return (
              <option key={i} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </div>
      <div className="buttonColors">
        <h3>Colors</h3>
        <div className="buttonFlex">
          {arrayColors.map((el, i) => {
            return (
              <button
                onClick={(e) => inputChangeValFunc(e)}
                value={el}
                name="colors"
                key={i}
                className={
                  filters.colors === el
                    ? "colorButtons activeCol"
                    : "colorButtons"
                }
                style={{ backgroundColor: el === "all" ? "inherit" : el }}
              >
                <>
                  {el === "all" ? (
                    <>All</>
                  ) : (
                    <span className="checkCol">
                      <FaCheck />
                    </span>
                  )}
                </>
              </button>
            );
          })}
        </div>
      </div>

      <div className="productsFilterRange">
        <h3>Price</h3>

        <div>
          <FormatPrice price={maxPrice*100}/>
        </div>
        <div>
        <input type="range" name='price' min={minPrice} max={maxPrice} value={price} onChange={inputChangeValFunc} step={100}/>
        </div>
      </div>

      <div className="productFilterClear">
          <button onClick={clearFilter}>
             Clear Filter
          </button>
      </div>
    </>
  );
};

export default ProductsFilter;
