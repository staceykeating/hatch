import React from "react";
import ProfileButton from "./ProfileButton";
import "./Home.scss";
import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <>
      <div class="home-page">
        <div class="right-menu">
          <Button variant="outlined">Login</Button>
          <ProfileButton />
          <h2>Joey</h2>
        </div>
        <img
          class="header-logo-main"
          src="./hatch-main-logo-dark.png"
          alt="Main Header"
        />
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
