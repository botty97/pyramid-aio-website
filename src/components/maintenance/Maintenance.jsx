import React from "react";
import logo from "../../assets/logo.png";
import "./maintenance.css";

const Maintenance = () => {
  return (
    <div className="pyramid__maintenance section__padding">
      <div className="pyramid__maintenance-logo">
        <img src={logo} alt="logo" />
      </div>
      <h1>Pyramid AIO is currently down for maintenance</h1>
      <h4>If support is needed please contact us via one of the following:</h4>
      <p className="pyramid__maintenance-links">
        <a
          href="https://twitter.com/pyramidaio"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </p>
      <p className="pyramid__maintenance-links">
        {" "}
        <a
          href="https://instagram.com/pyramidaio"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </p>
      <p className="pyramid__maintenance-links">Email</p>
    </div>
  );
};

export default Maintenance;
