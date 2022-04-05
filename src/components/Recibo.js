import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Recibo = () => {
  const { clear } = useContext(CartContext);
  
  return (
    <>
      <div className="contenedorRecibo">
        <p>La compra fue exitosa</p>
        <p>Quieres seguir comprando?</p>
        <Link to={"/"}>
            <button className="btnVacio" onClick={clear}>Volver a la tienda</button>
        </Link>
      </div>
    </>
  );
};
export default Recibo;
