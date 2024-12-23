import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import PopUp from "../popup/PopUp";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#brand">Supported Sites</a>
      </p>
      <p>
        <a href="#wpyramid">What is Pyramid</a>
      </p>
      <p>
        <a href="#faq">FAQ</a>
      </p>
      {/* <p>
        <a href="#features">Features</a>
      </p> */}
    </>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const togglePop = () => {
    setOpen(!open);
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="pyramid__navbar">
      <div className="pyramid__navbar-links">
        <div className="pyramid__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="pyramid__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="pyramid__navbar-sign">
        {/* <button
          type="button"
          onClick={() => {
            togglePop();
          }}
        >
          Dashboard
        </button> */}
        {open ? <PopUp toggle={togglePop} /> : null}
      </div>
      <div className="pyramid__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="pyramid__navbar-menu_container scale-up-center">
            <div className="pyramid__navbar-menu_container-links">
              <Menu />
              <div className="pyramid__navbar-menu_container-links-sign ">
                {/* <button type="button">Dashboard</button> */}
                {/* <button
                  type="button"
                  onClick={() => {
                    togglePop();
                  }}
                >
                  Dashboard
                </button>
                {open ? <PopUp toggle={togglePop} /> : null} */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
