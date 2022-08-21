import React, { useState } from "react";
import "./header.css";
import axios from "axios";
import CLI from "../../assets/CLI.svg";

const Header = () => {
  const [input, setInput] = useState({
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const newEmail = {
      email: input.email,
    };

    axios.post("http://localhost:3001/create", newEmail);
  };

  return (
    <div className="pyramid__header section__padding" id="home">
      <div className="pyramid__header-content">
        <h1 className="vibrate-1">PyramidAIO.</h1>
        <h1 className="gradient__text">
          Supreme and Palace releases have never been easier.
        </h1>
        <p>
          A new and upcoming software developed with a passion to make your life
          easier with releases. No more frantic clicking and typing, we've got
          it covered.
        </p>
        <div className="pyramid__header-content__input">
          <form method="POST" action="http://localhost:3000">
            <input
              type="email"
              onChange={handleChange}
              value={input.email}
              placeholder="Your Email Address"
              name="email"
            />
            <button onClick={handleClick}>Register Interest</button>
          </form>
        </div>
        {/* <div className="pyramid__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people registered their interest in the last 24 hours.</p>
        </div> */}
      </div>
      <div className="pyramid__header-image heartbeat">
        <img src={CLI} alt="CLI" />
      </div>
    </div>
  );
};

export default Header;
