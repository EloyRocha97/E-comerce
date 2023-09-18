import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import profileC from "../../../IMG/profileC.png";
import style from "./log.module.css";

const LogOutButton = () => {
  const { logout } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={handleMenuOpen}
        aria-controls="logout-menu"
        aria-haspopup="true"
      >
        <img src={profileC} className={style.icon1} alt="Profile" />
      </IconButton>
      <Menu
        id="logout-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
      </Menu>
    </div>
  );
};

export default LogOutButton;
