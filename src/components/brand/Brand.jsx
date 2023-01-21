import React from "react";
import "./brand.css";
import { dsm, end, nakedcph } from "./import.js";

const Brand = () => {
  return (
    <div className="pyramid__brand section__padding" id="brand">
      <div>
        <img src={end} alt="supreme" />
      </div>
      <div>
        <img src={dsm} alt="palace" />
      </div>
      <div>
        <img src={nakedcph} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
