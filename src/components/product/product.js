import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Tilt from "react-tilt";

import "./product.scss";
const Product = ({ name, src, price }) => {
  return (
    <Tilt style={{ transformStyle: "preserve-3d" }}>
      <div
        className="ecommerce_box"
        product_name={
          name.toUpperCase() +
          " " +
          name.substring(name.length - 4).toUpperCase() +
          name.substring(0, name.length - 4).toUpperCase() +
          " " +
          name.substring(name.length - 3).toUpperCase() +
          name.substring(0, name.length - 3).toUpperCase()
        }
      >
        <h2 className="name">{name}</h2>
        <a href="#" className="buy">
          {price} $
        </a>{" "}
        <div className="circle">
          <img src={src} className="product" />
        </div>
      </div>
    </Tilt>
  );
};
export default Product;
