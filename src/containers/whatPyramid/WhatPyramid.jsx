import React from "react";
import "./whatPyramid.css";
import { Feature } from "../../components";

const WhatPyramid = () => {
  return (
    <div className="pyramid__whatpyramid section__margin" id="wpyramid">
      <div className="pyramid__whatpyramid-feature">
        <Feature
          title="What is Pyramid"
          text="Pyramid is an up and coming bot to make users life easier. The intention behind the bot is to guarantee success on sites such as Palace, Supreme and various shopify websites. We want our users to be the first to cop, and never have any worries with releases. This is a CLI bot with future intentions to make a frontend GUI for a better user experience."
        />
      </div>
      <div className="pyramid__whatpyramid-heading">
        <h1 className="gradient__text">
          Enter now to get involved with an ever growing community <br />
          and reap the rewards of constant guidance and success.
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
