import React from "react";
import "./whatPyramid.css";
import { Feature } from "../../components";

const WhatPyramid = () => {
  return (
    <div className="pyramid__whatpyramid section__margin" id="wpyramid">
      <div className="pyramid__whatpyramid-feature">
        <Feature
          title="What is Pyramid"
          text="Pyramid is an up and coming bot to make users life easier. The intention behind the bot is to increase success for raffle entries, as most releases have switched to raffles we want to make the odds ever greater. We want our users to be the to successfully, and never have any worries with releases. This is a CLI bot with future intentions to make a frontend GUI for a better user experience."
        />
      </div>
      <div className="pyramid__whatpyramid-heading">
        <h1 className="gradient__text">
          Join now to get involved with an ever growing community <br />
          and reap the rewards.
        </h1>
        <p>
          <a
            href="https://discord.gg/bxu7auY5"
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
          text="Strong community with staff members who do their all to provide users with guidance and information on upcoming releases, with members also getting involved with helping eachother."
        />
        <Feature
          title="Constant updates"
          text="Software constantly improving as time goes on, we aim to continue to support and evolve the software to work on more sites and to be even better on the current supported websites."
        />
        <Feature
          title="Support"
          text="We have a dedicated support team who are available 24hours a day regardless of timezone, our dedicated ticket system means your issue will be picked up by the staff member who is best situated to assist you. With release information and bot guidance released on a weekly basis."
        />
      </div>
    </div>
  );
};

export default WhatPyramid;
