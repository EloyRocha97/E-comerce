import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import profile from "../../../IMG/iniciarProfile.png";
import style from "./log.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogin = () => {
    loginWithRedirect({
      redirectUri: "http://localhost:3000/home",
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
        aria-controls="login-menu"
        aria-haspopup="true"
      >
        <img src={profile} className={style.icon} alt="Profile" />
      </IconButton>
      <Menu
        id="login-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem className={style.iniciar} onClick={handleLogin}>
          Iniciar Sesión
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LoginButton;
