import { Link } from "react-router-dom"

const Item = (props) => {

    return (
        <div className="card">
            <img className="imagen" src={props.img} alt={props.nombre} />
            <h3>{props.nombre}</h3>
            <button className="btnDetalles">
            <Link to={`/item/${props.id}`}>ver detalle</Link>
            </button>
        </div>
    )
}

export default Item