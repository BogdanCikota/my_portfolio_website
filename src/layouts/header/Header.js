import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="name" to="/">
          <h1 className="main-heading">Bogdan Cikota</h1>
          <div>Web Developer</div>
        </Link>

        <Link className="linkToFaq" to="/faq">
          FAQ
        </Link>
      </nav>
    </header>
  );
}

export default Header;
