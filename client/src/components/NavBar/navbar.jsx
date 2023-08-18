import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import Logo from "../../IMG/G.png";
import LoginButton from "./Login/loginButton";
import LogOutButton from "./Login/logOutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <div className={style.nav1}>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo de GlamourGrove"
            style={{ width: "45px", height: "20px", marginRight: "10px" }}
          />
        </Link>
      </div>
      <div className={style.nav}>
        <Link to="/home">Tienda</Link>
        {isAuthenticated ? <LogOutButton /> : <LoginButton />}
      </div>
    </>
  );
};

export default Navbar;
