import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="header">
      <Link to="/" className="titulo">
        <h1>JUEGOTECA</h1>
      </Link>
      <nav>
        <Link className="token" to="/categoria/Accion">
          Accion
        </Link>
        <Link className="token" to="/categoria/Rpg">
          Rpg
        </Link>
        <Link className="token" to="/categoria/Aventura">
          Aventura
        </Link>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
