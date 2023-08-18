import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import Logo from "../../IMG/G.png";

const Navbar = () => {
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
        <Link to="/detail">Detail</Link>
      </div>
    </>
  );
};

export default Navbar;
