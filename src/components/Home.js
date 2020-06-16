import React from "react";
import HomeProfileButton from "./HomeProfileButton";
import "./Home.scss";
import mainLogo from "./images/hatch-main-logo-dark.png";
import giffy from "./images/screen-recording.gif";

export default function Home() {
  return (
    <>
      <div id="home-page">
        <HomeProfileButton />
        <img class="header-logo-main" src={mainLogo} alt="Main Header" />
      </div>
      <div class="learn-section">
        <div class="icon-with-text">
          <h5>Step One: Dream up an idea</h5>
          <img class="globe" src={giffy} alt="world" />
        </div>
        <div class="icon-with-text">
          <h5>Step Two: Invite your friends</h5>
          <img class="globe" src="./globe.png" alt="world" />
        </div>
        <div class="icon-with-text">
          <h5>Step Three: Plan it out</h5>
          <img class="globe" src="./globe.png" alt="world" />
        </div>
      </div>
    </>
  );
}
