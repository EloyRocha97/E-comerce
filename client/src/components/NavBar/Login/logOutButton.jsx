import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import profile from "../../../IMG/cerrarProfile.png";
import style from "./log.module.css";

const LogOutButton = () => {
  const { logout, onRedirectCallback } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
      onRedirectCallback,
    });
  };

  return (
    <div onClick={handleLogout} className={style.boton}>
      <img src={profile} className={style.icon} />
    </div>
  );
};

export default LogOutButton;
