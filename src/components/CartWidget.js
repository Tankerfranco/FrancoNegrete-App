import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { count } = useContext(CartContext);
  return (
    <>
      {count > 0 ? (
        <Link to="/Carrito" className="token">
          <FontAwesomeIcon icon={faCartShopping} />
          <span>{count}</span>
        </Link>
      ) : null}
    </>
  );
};

export default CartWidget;
