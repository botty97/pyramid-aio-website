import { React } from "react";
import "./popup.css";

const PopUp = (props) => {
  const handleClick = () => {
    props.toggle();
  };

  return (
    <div className="pyramid__popup-container__popup">
      <div className="pyramid__popup-container__popup-text">
        <form>
          <h3 className="gradient__text">Sign in!</h3>
          <input type="email" name="email" placeholder="email" />
          <input type="text" name="password" placeholder="password" />
          <br />
          <input type="submit" />
        </form>
        <button className="close" onClick={() => handleClick()}>
          X
        </button>
      </div>
    </div>
  );
};

export default PopUp;
