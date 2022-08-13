import React from "react";
import { Brand, Navbar } from "./components";
import { Footer, Faq, Features, Header, WhatPyramid } from "./containers";
import "./App.css";

const App = () => {
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
};

export default App;
