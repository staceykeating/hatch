import React from "react";
import { useHistory } from "react-router-dom";
import "./ProfileButton.scss";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";

export default function ProfileButton() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const routeChange = () => {
    let path = `/dashboard`;
    history.push(path);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {auth && (
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
              <MenuItem onClick={routeChange}>Dashboard</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          <div class="home-login-button">
            <Button a href="/login" variant="outlined">
              Login
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
