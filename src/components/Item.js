import { Link } from "react-router-dom"

const Item = ({producto}) => {

    return (
        <div className="card">
            <img className="imagen" src={producto.img} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <button className="btnDetalles">
            <Link to={`/item/${producto.id}`} className="btnColor">ver detalle</Link>
            </button>
        </div>
    )
}

export default Item