import { Link } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.nav}>
      <Link to="/home">Home</Link>
      <Link to="/detail">Detail</Link>
    </div>
  );
};

export default Navbar;
