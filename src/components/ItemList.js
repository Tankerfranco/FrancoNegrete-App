import Item from "./Item"

const ItemList = ({productList}) => {
    
    return(
        <> 
            {productList.map((producto) => {
                return <Item key={producto.id} producto={producto}/>
            })}
        </>
    )
}

export default ItemList