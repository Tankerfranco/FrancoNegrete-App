import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="header">
      <Link to="/" className="titulo">
        <h1>Titulo</h1>
      </Link>
      <nav>
        <Link className="token" to="/categoria/1">
          Productos
        </Link>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
