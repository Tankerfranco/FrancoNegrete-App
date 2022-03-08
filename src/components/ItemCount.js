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
        <>
            <p>Stock: {props.stock}</p>
            <div className="contenedorBotones">
                <button onClick={restar} className="btn">-</button>
                <p>{cantidad}</p>
                <button onClick={aumentar} className="btn">+</button>
            </div>
            <button className="botonAgregar" onClick={addToCart}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount