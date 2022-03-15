import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
    return (
        <div className="icono">
            <NavLink to="/Carrito">
                <FontAwesomeIcon icon={faCartShopping}/>
            </NavLink>
        </div>
    )
}

export default CartWidget