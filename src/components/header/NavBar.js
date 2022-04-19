import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

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
        <Link className="token" to="/categoria/Estrategia">
          Estrategia
        </Link>
        <CartWidget/>
      </nav>
    </header>
  );
}

export default NavBar;
