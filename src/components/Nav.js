import React from "react";
import "./Nav.scss";
import ProfileButton from "./ProfileButton";

export default function Home() {
  return (
    <header>
      <nav class="navbar">
        <a href="/">
          <img
            href="/"
            class="header-logo"
            src="./hatch-main-logo.png"
            alt="Main Header"
          />
        </a>
        <ProfileButton />
      </nav>
    </header>
  );
}
