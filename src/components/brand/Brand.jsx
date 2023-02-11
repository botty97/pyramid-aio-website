import React from "react";
import "./brand.css";
import { dsm, end, nakedcph, footpatrol, afew } from "./import.js";

const Brand = () => {
  return (
    <div className="pyramid__brand section__padding" id="brand">
      <div>
        <img src={end} alt="end" />
      </div>
      <div>
        <img src={dsm} alt="dsm" />
      </div>
      <div>
        <img src={nakedcph} alt="nakedcph" />
      </div>
      <div>
        <img src={footpatrol} alt="footpatrol" />
      </div>
      <div>
        <img src={afew} alt="afew" />
      </div>
    </div>
  );
};

export default Brand;
