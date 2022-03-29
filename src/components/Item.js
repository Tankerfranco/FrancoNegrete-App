import { Link } from "react-router-dom"

const Item = ({producto}) => {
const {productos} = producto

    return (
        <div className="card">
            <img className="imagen" src={productos.img} alt={productos.nombre} />
            <h3>{productos.nombre}</h3>
            <button className="btnDetalles">
            <Link to={`/item/${productos.id}`} className="btnColor">ver detalle</Link>
            </button>
            
        </div>
    )
}

export default Item
