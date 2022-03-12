import Item from "./Item"

const ItemList = ({productos}) => {
    
    return(
        <> 
            {productos.map((item, index) => <Item key={index} nombre={item.nombre} precio={item.precio} img={item.img} stock={item.stock} />)}
        </>
    )
}

export default ItemList