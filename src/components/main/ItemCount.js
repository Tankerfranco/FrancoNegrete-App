import { useState} from "react"

const ItemCount = ({ stock = 0, initial = 0, onAdd = () =>{}}) => {
    const [count, setCount] = useState(initial)
    
    return (
        <>
            <p>Stock: {stock}</p>
            <div className="contenedorBotones">
                <button onClick={()=> setCount(count - 1)} className="btn" disabled={stock === 0 || count <= 0}>-</button>
                <p>{count}</p>
                <button onClick={()=> setCount(count + 1)} className="btn"  disabled={stock === 0 || count >= stock }>+</button>
            </div>
            <button className="botonAgregar" onClick={()=> onAdd(count)} disabled={stock === 0 || count <= 0 || count > stock}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount