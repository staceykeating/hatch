import React from "react";
import "./Nav.scss";
import ProfileButton from "./ProfileButton";
import mainLogo from "./images/hatch-main-logo.png";
import Cookies from "js-cookie";

export default function Nav() {
  const user = Cookies.get("user");

  return user ? (
    <header>
      <nav class="navbar">
        <a href="/">
          <img href="/" class="header-logo" src={mainLogo} alt="Main Header" />
        </a>
        <ProfileButton />
      </nav>
    </header>
  ) : (
    <header>
      <nav class="navbar">
        <a href="/">
          <img href="/" class="header-logo" src={mainLogo} alt="Main Header" />
        </a>
      </nav>
    </header>
  );
}
