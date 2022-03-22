import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
  const { clear, cart, removeItem } = useContext(CartContext);
  return (
    <>
        {cart.map((item) => {
          return (
              <div key={item.producto.id} className="contenedorCarrito">
                <img src={item.producto.img} alt={item.producto} className="imagenCarrito" />
                <h1 className="tituloCarrito">{item.producto.nombre}</h1>
                <p className="textoCarrito">${item.producto.precio * item.count}</p>
                <p className="textoCarrito">{item.count}</p>
                <button onClick={()=> removeItem(item.producto)} className="btn">x</button>
                <button onClick={clear} className="btnLimpiar">Limpiar</button>
              </div>
          );
        })}
    </>
  );
};

export default Carrito;
