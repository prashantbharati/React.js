import React from "react";
import "./Product.css";
const Product = (props) => {
  return (
    <div className="Productparent">
      <div className="mainproduct">
        <img className="image" src={props.img} alt="Product" />
        <h2>{props.name}</h2>
        <h3>{props.detail}</h3>
        <h4>Count: {props.count}</h4>
      </div>
    </div>
  );
};

export default Product;
