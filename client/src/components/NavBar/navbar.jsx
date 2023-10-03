import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./navbar.module.css";
import Logo from "../../IMG/E-L.png";
import LoginButton from "./Login/loginButton";
import LogOutButton from "./Login/logOutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();

  // Verifica si la ruta actual es /home
  const isHomePage = location.pathname === "/home";

  return (
    <div className={style.navBar}>
      <div>
        <img src={Logo} alt="Logo de GlamourGrove" className={style.logo} />
      </div>
      <div className={style.options}>
        <Link to="/" className={style.link}>
          Inicio
        </Link>
      </div>
      <div className={style.options}>
        <Link to="/home" className={style.link}>
          Tienda
        </Link>
      </div>
      <div className={style.options}>
        <Link to="/contacto" className={style.link}>
          Contact
        </Link>
      </div>

      <div className={style.navLogin}>
        {isAuthenticated ? <LogOutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default Navbar;
