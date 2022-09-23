import { React } from "react";
import "./popup.css";

function PopUp(props) {
  console.log(props);

  const handleClick = () => {
    props.toggle(false);
  };

  return (
    <div className="pyramid__popup-container__popup">
      <div className="pyramid__popup-container__popup-text">
        <form>
          <h3>Sign in!</h3>
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="password" placeholder="password" />
          <br />
          <input type="submit" />
        </form>
        <button className="close" onClick={() => handleClick()}>
          Close popup
        </button>
      </div>
    </div>
  );
}

export default PopUp;
