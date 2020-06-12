import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./ProfileButton.scss";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";

export default function ProfileButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const [auth, setAuth] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function logout() {
    Cookies.remove("name");
    auth = false;
    handleClose();
  }

  return auth ? (
    <div class="right-menu">
      <div class="profile-icon">
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
          <h2>Joey</h2>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>
            {" "}
            <Link to="/create-trip" onClick={handleClose}>
              New Trip
            </Link>
          </MenuItem>

          <Link to="/dashboard">
            <MenuItem onClick={handleClose}>Dashboard</MenuItem>
          </Link>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
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
