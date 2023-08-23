import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import profile from "../../../IMG/iniciarProfile.png";
import style from "./log.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      redirectUri: "http://localhost:3000",
    });
  };

  return (
    <div onClick={handleLogin} className={style.boton}>
      <img src={profile} className={style.icon} />
    </div>
  );
};

export default LoginButton;
