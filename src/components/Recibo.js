import { Link } from "react-router-dom";

const Recibo = () => {
  
  return (
    <>
      <div className="contenedorRecibo">
        <p>La compra fue exitosa</p>
        <p>Quieres seguir comprando?</p>
        <Link to={"/"}>
            <button className="btnVacio">Volver a la tienda</button>
        </Link>
      </div>
    </>
  );
};
export default Recibo;
