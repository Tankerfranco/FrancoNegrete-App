import { useState} from "react"
import { NavLink } from "react-router-dom"

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
            <button className={props.stock == 0 ? "null" : "botonAgregar"} onClick={addToCart} disabled={props.stock == 0 ? true : false}>Agregar al carrito</button>
            <button className={props.stock == 0 ? "botonCompra" : "null"} disabled={props.stock == 0 ? false : true}>
                <NavLink to={"/carrito"}>Ir al Carrito</NavLink>
            </button>
            
        </>
    )
}

export default ItemCount