import React from "react";
import "./Nav.scss";
import ProfileButton from "./ProfileButton";
import mainLogo from "./images/hatch-main-logo.png";

export default function Home() {
  return (
    <header>
      <nav class="navbar">
        <a href="/">
          <img
            href="/"
            class="header-logo"
            src={mainLogo}
            alt="Main Header"
          />
        </a>
        <ProfileButton />
      </nav>
    </header>
  );
}
