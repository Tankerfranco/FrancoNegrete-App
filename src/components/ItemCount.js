import { useState} from "react"

const ItemCount = (props) => {
    const [cantidad, setCantidad] = useState(props.init)

    const aumentar = () => {
        if(cantidad < props.stock){
            setCantidad(cantidad + 1)
        }
    }

    const restar = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }

    const addToCart = () => { props.onAdd(cantidad); setCantidad(1) }

    return (
        <div className="contenedorContador">
            <h1>camisa</h1>
            <p>{props.stock}</p>
            <div className="contenedorBotones">
                <button onClick={restar} className="restar">-</button>
                <p>{cantidad}</p>
                <button onClick={aumentar} className="aumentar">+</button>
            </div>
            <button className="botonAgregar" onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount