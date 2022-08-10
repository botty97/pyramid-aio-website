import React from "react";
import "./whatPyramid.css";
import { Feature } from "../../components";

const WhatPyramid = () => {
  return (
    <div className="pyramid__whatpyramid section__margin" id="wpyramid">
      <div className="pyramid__whatpyramid-feature">
        <Feature
          title="What is Pyramid"
          text="THIS IS DUMMY TEXT TO EXPLAIN WHAT PYRAMID IS WILL BE DONE LATER"
        />
      </div>
      <div className="pyramid__whatpyramid-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          <a
            href="https://discord.gg/UMnjVYjV"
            target="_blank"
            rel="noreferrer"
          >
            Join The Discord
          </a>
        </p>
      </div>
      <div className="pyramid__whatpyramid-container">
        <Feature
          title="Community"
          text="THIS IS DUMMY TEXT TO EXPLAIN WHAT PYRAMID IS WILL BE DONE LATER"
        />
        <Feature
          title="Evolving"
          text="THIS IS DUMMY TEXT TO EXPLAIN WHAT PYRAMID IS WILL BE DONE LATER"
        />
        <Feature
          title="Reliable"
          text="THIS IS DUMMY TEXT TO EXPLAIN WHAT PYRAMID IS WILL BE DONE LATER"
        />
      </div>
    </div>
  );
};

export default WhatPyramid;
