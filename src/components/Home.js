import React from "react";
import HomeProfileButton from "./HomeProfileButton";
import "./Home.scss";
import mainLogo from "./images/hatch-main-logo-dark.png";

export default function Home() {
  return (
    <>
      <div id="home-page">
        <HomeProfileButton />
        <img class="header-logo-main" src={mainLogo} alt="Main Header" />
      </div>
      <div class="learn-section">
        <div class="icon-with-text">
          <h5>Step One: Do a Thing</h5>
          <img class="globe" src="./globe.png" alt="world" />
        </div>
        <div class="icon-with-text">
          <h5>Then do Another Thing</h5>
          <img class="globe" src="./globe.png" alt="world" />
        </div>
        <div class="icon-with-text">
          <h5>Also do this thing!!</h5>
          <img class="globe" src="./globe.png" alt="world" />
        </div>
      </div>
    </>
  );
}
