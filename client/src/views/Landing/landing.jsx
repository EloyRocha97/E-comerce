import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../IMG/Glamour.png";
import style from "./landing.module.css";

const Landing = () => {
  return (
    <div>
      <Link to="/home">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={Logo}
            alt="Logo de GlamourGrove"
            style={{ width: "200px", height: "50px", marginRight: "10px" }}
          />
          {/* <h1 className={style.GlamourGrove}>lamourGrove</h1> */}
        </div>
      </Link>
    </div>
  );
};

export default Landing;
