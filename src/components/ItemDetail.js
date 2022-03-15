import ItemCount from "./ItemCount";
import React, { useState } from "react";

const ItemDetail = ({ item }) => {
  const { nombre, descripcion, precio, img } = item;
  const [stock, setStock] = useState(10)
    const addToCart = (agregado) => {
        if(stock - agregado >= 0)
            setStock(stock - agregado)
    }
  return (
    <div className="detalles">
      <img className="imagenDetalles" src={img} alt={nombre} />
      <div className="textoDetalles">
        <h1>{nombre}</h1>
        <h2>Descripcion:</h2>
        <p className="texto">{descripcion}</p>
        <h3>Precio: ${precio}</h3>
        <ItemCount stock={stock} initial={1} onAdd={addToCart}/>
      </div>
    </div>
  );
};

export default ItemDetail;
