import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="name">
          <div>Bogdan Cikota</div>
          <div>Web Developer</div>
        </div>
        <Link className="linkToFaq" to="/faq">FAQ</Link>
      </nav>
    </header>
  );
}

export default Header;
