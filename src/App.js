import React from "react";
import { Brand, Navbar, Maintenance } from "./components";
import { Footer, Faq, Features, Header, WhatPyramid } from "./containers";
import "./App.css";

const maintenance = true;

const App = () => {
  if (maintenance) {
    return (
      <div className="App">
        <div className="gradient__bg">
          {/* <Navbar /> */}
          <Maintenance />
        </div>
        {/* <Footer /> */}
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatPyramid />
        <Features />
        <Faq />
        <Footer />
      </div>
    );
  }
};

export default App;
