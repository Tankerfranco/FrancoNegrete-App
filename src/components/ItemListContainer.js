import { useState } from "react"
import ItemCount from "./ItemCount"


const ItemListContainer = () => {
    const [stock, setStock] = useState(10)
    const addToCart = (agregado) => {
        if(stock - agregado >= 0)
            setStock(stock - agregado)
    }

    return (
        <div className="contenedor">
            <ItemCount stock={stock} initial={1} onAdd={addToCart} />
        </div>
        
    )
}

export default ItemListContainer