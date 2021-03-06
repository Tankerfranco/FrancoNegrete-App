import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from '../hook/Firebase';
import { addDoc, collection, serverTimestamp} from "firebase/firestore";

const Carrito = () => {
  const { clear, cart, removeItem, count, price } = useContext(CartContext);

  const handleClick = () => {
        
    const orden = {
        buyer : {
            nombre : "Franco",
            telefono : "555555555",
            email : "franco@gmail.com"
        },
        items : cart,
        date : serverTimestamp(),
        total : count
    }
    const ordenesCollection = collection(db, "ordenes")
    const pedido = addDoc(ordenesCollection,orden)

    pedido
    .then(res=>{
        toast.success(`su orden de compra es: ${res.id} `)
    })

}
   
  return (
    <>
      {count > 0 ? (
        cart.map((item) => {
          return (
            <div key={item.producto.id}>
              <div className="contenedorCarrito">
                <img
                  src={item.producto.img}
                  alt={item.producto}
                  className="imagenCarrito"
                />
                <h1 className="tituloCarrito">{item.producto.nombre}</h1>
                <p className="textoCarrito">
                  ${item.producto.precio * item.count}
                </p>
                <p className="textoCarrito">{item.count}</p>
                <button
                  onClick={() => removeItem(item.producto)}
                  className="btn"
                >
                  x
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="contenedorVacio">
          <p className="texto">No hay nada en el carrito</p>
          <Link to={"/"}>
            <button className="btnVacio">Volver a la tienda</button>
          </Link>
        </div>
      )}
      <div className="botonesCarrito">
        {count > 0 ? (
          <>
            <button onClick={handleClick} className="btnLimpiar">Crear Orden de Compra</button>
            <Link to={"/recibo"}>
              <button onClick={clear} className="btnCompra">Terminar Compra</button>
            </Link>
            <button onClick={clear} className="btnLimpiar">
              Limpiar
            </button>
            <p className="texto">Total: ${price}</p>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Carrito;
