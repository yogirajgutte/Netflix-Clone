import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import MainBody from "./MainBody";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <MainBody />
    </div>
  );
};

export default App;
