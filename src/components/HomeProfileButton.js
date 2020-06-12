import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./ProfileButton.scss";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import ProfileButton from "./ProfileButton";

export default function HomeProfileButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function logout() {
    Cookies.remove("user");
    handleClose();
  }
  const user = Cookies.get("user");

  return user ? (
    <ProfileButton />
  ) : (
    <div class="right-menu">
      <div class="profile-icon">
        <Button a href="/login" variant="outlined">
          Login
        </Button>
      </div>
    </div>
  );
}
