import React, { useState, useEffect, useRef } from "react";
import { pictures } from "./resources";
import Product from "../product/product";
import "./shop.scss";
const Shop = ({ title, content, link }) => {
  return (
    <div className="shop_container">
      <h1 className="shop_title">Shop</h1>
      {pictures.map(({ name, src, price }) => (
        <Product name={name} src={src} price={price} />
      ))}
    </div>
  );
};
export default Shop;
