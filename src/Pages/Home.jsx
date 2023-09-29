import React from "react";

import Button from "../components/Button";

import "./Home.css";
function Home() {
  return (
    <>
      <div className="home__wrapper">
        <div className="home__desc">
          <h1 className="home__desc--title">Food Corner</h1>
          <p className="home__desc--text">INDIAN FOOD AT A CLICK</p>
          <Button />
        </div>
      </div>
    </>
  );
}

export default Home;
