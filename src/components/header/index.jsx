import { NavLink } from "react-router-dom";
import KasaLogo from "../../assets/kasa_logo.png";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <img src={KasaLogo} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "" : "notActiveLink";
              }}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? "" : "notActiveLink";
              }}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
