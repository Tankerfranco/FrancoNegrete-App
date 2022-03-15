import Item from "./Item"

const ItemList = ({productList}) => {
    
    return(
        <> 
            {productList.map((producto, i) => {
                return <Item key={i} nombre={producto.nombre} img={producto.img} id={producto.id}/>
            })}
        </>
    )
}

export default ItemList