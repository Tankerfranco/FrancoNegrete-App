const ItemDetail = ({item}) => {

  const {nombre, descripcion, precio, img} = item;

  return (
      <div className="detalles">
          <img className="imagenDetalles" src={img} alt={nombre} />
          <div className="textoDetalles">
            <h1>{nombre}</h1>
            <h2>Descripcion:</h2>
            <p className="texto">{descripcion}</p>
            <h3>Precio: ${precio}</h3>
          </div>
      </div>
          
  )
}


export default ItemDetail