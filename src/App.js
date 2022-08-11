import React from "react";
import { Brand, CTA, Navbar } from "./components";
import {
  Footer,
  Faq,
  Possibility,
  Features,
  Header,
  WhatPyramid,
} from "./containers";
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
      <Possibility />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
