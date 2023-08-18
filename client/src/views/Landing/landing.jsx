import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../IMG/Glamour.png";
import LoginButton from "./Login/loginButton";
import LogOutButton from "./Login/logOutButton";

import style from "./landing.module.css";

const Landing = () => {
  return (
    <div>
      <LoginButton />
      <LogOutButton />

      <br></br>
      <br></br>
      <Link to="/home">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={Logo}
            alt="Logo de GlamourGrove"
            style={{ width: "200px", height: "50px", marginRight: "10px" }}
          />
        </div>
      </Link>
    </div>
  );
};

export default Landing;
