import ItemCount from "./ItemCount";
import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

const ItemDetail = ({producto}) => { 

  const [seleccionado, setSeleccionado] = useState(false)
  const [stock, setStock] = useState(10);
  const {addItem} = useContext(CartContext)
  const addToCart = (count) => {
    if (stock - count >= 0) setStock(stock - count);
    addItem(producto, count)
    if(count != undefined){
      setSeleccionado(count)
    }
  };

  return (
    <div className="detalles">
      <img className="imagenDetalles" src={producto.img} alt={producto.nombre} />
      <div className="textoDetalles">
        <h1 className="nombre">{producto.nombre}</h1>
        <h2>Descripcion:</h2>
        <p className="texto">{producto.descripcion}</p>
        <h3>Precio: ${producto.precio}</h3>
        {seleccionado ? <p>Stock: {stock}</p> : null}
        {seleccionado ? null : <ItemCount stock={stock} initial={1} onAdd={addToCart} />}
        {seleccionado ? <button className="botonCompra">
              <NavLink to={"/carrito"}>Ir al Carrito</NavLink>
        </button> : null}
      </div>
    </div>
  );
};

export default ItemDetail;
