import React from "react";
import "./brand.css";
import { palace, supreme, shopify } from "./import.js";

const Brand = () => {
  return (
    <div className="pyramid__brand section__padding">
      <div>
        <img src={supreme} alt="supreme" />
      </div>
      <div>
        <img src={palace} alt="palace" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
