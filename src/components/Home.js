import React from "react";
import HomeProfileButton from "./HomeProfileButton";
import "./Home.scss";
import mainLogo from "./images/hatch-main-logo-dark.png";
import searchyWorld from "./images/searchy-world.png";
import thinkyHead from "./images/thinky-head.png";
import hatchMates from "./images/hatch-mates.png";

export default function Home() {
  return (
    <>
      <div id="home-page">
        <HomeProfileButton />
        <img class="header-logo-main" src={mainLogo} alt="Main Header" />
      </div>
      <div class="learn-section">
        <div class="icon-with-text">
          <h3> Step One:</h3>
          <h3> Dream up an idea</h3>
          <img class="globe" src={thinkyHead} alt="world" />
        </div>
        <div class="icon-with-text">
          <h3> Step Two:</h3>
          <h3> Invite your friends</h3>
          <img class="mates" src={hatchMates} alt="world" />
        </div>
        <div class="icon-with-text">
          <h3>Step Three:</h3>
          <h3> Plan your dream trip!</h3>
          <img class="globe" src={searchyWorld} alt="world" />
        </div>
      </div>
    </>
  );
}
