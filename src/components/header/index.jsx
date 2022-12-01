import { Link } from "react-router-dom";
import KasaLogo from "../../assets/kasa_logo.png";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <img src={KasaLogo} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
