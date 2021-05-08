import React, { useState, useEffect, useRef } from "react";
import "./card.scss";
const Card = ({ title, content, link }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "400px" }}>
      <div className="box">
        <span></span>
        <div className="content">
          <h2>{title}</h2>
          <p>{content}</p>
          <a href={link.href}>{link.title}</a>
        </div>
      </div>
      <div className="card">
        <div className="box2">
          <div className="content2">
            <h2>{title}</h2>
            <h3>{title}</h3>
            <p>{content}</p>
            <a href={link.href}>{link.title}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
