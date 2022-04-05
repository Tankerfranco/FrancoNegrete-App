import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc , collection , serverTimestamp } from "firebase/firestore"
import { db } from "../Firebase"

const Carrito = () => {
  const { clear, cart, removeItem, count, price } = useContext(CartContext);
  const handleClick = () => {
        
    const orden = {
        buyer : {
            nombre : "Franco",
            telefono : "35120095",
            email : "franconegrete12@gmail.com"
        },
        items : cart,
        date : serverTimestamp(),
        total : price
    }
    const ordenesCollection = collection(db, "ordenes")
    const pedido = addDoc(ordenesCollection,orden)

    pedido
    .then(res=>{
        console.log(res.id)
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
            <Link to={"/recibo"}>
              <button onClick={handleClick} className="btnCompra">Terminar Compra</button>
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
