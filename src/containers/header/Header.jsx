import React, { useState } from "react";
import "./header.css";
import axios from "axios";
import CLI from "../../assets/CLI.svg";

const Header = () => {
  const [input, setInput] = useState({
    email: "",
  });

  const isValid =
    input.email != null && input.email.length > 5 && input.email.includes("@");

  const [buttonText, setButtonText] = useState("Register Interest");
  const [placeholderText, setPlaceHolderText] = useState("Enter Email address");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput(({ input }) => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const newEmail = {
      email: input.email,
    };

    const URL =
      process.env.EMAIL_URL ||
      "https://pyramid-aio-website-production.up.railway.app/create";

    axios.post(URL, newEmail);

    setButtonText("Success");
    setPlaceHolderText("Emailed Submitted");
    setInput({
      email: "",
    });
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
              placeholder={placeholderText}
              name="email"
            />

            <button disabled={!isValid} onClick={handleClick}>
              {buttonText}
            </button>
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
