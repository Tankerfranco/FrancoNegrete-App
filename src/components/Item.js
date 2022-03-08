import ItemCount from "./ItemCount";
import React, {useState} from "react";



const Item = (props) => {

    const [stock, setStock] = useState(10)
    const addToCart = (agregado) => {
        if(stock - agregado >= 0)
            setStock(stock - agregado)
    }

    return (
        <div className="card">
            <img className="imagen" src={props.img} alt={props.alt} />
            <h3>{props.nombre}</h3>
            <p>Precio: ${props.precio}</p>
            <ItemCount stock={stock} initial={1} onAdd={addToCart} />
        </div>
    )
}

export default Item