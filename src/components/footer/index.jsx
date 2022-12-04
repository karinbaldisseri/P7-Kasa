import "./footer.scss";
import FooterLogo from "../../assets/footer_logo.png";

export default function Footer() {
  return (
    <footer>
      <img src={FooterLogo} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
