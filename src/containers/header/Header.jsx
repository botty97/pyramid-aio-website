import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="pyramid__header section__padding" id="home">
      <div className="pyramid__header-content">
        <h1 className="gradient__text">
          Supreme and Palace releases have never been easier.
        </h1>
        <p>
          A new and upcoming software developed with a passion to make your life
          easier with releases. No more frantic clicking and typing, we've got
          it covered.
        </p>
        <div className="pyramid__header-content__input">
          <form method="POST" action="/testingAPI">
            <input type="email" placeholder="Your Email Address" name="email" />
            <button>Register Interest</button>
          </form>
        </div>
        {/* <div className="pyramid__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people registered their interest in the last 24 hours.</p>
        </div> */}
      </div>
      {/* <div className="pyramid__header-image">
        <img src={ai} alt="ai" />
      </div> */}
    </div>
  );
};

export default Header;
