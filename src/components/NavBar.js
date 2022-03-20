import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
        <Link to="/Carrito" className="token">
            <FontAwesomeIcon icon={faCartShopping}/>
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
