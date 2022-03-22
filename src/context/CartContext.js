import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    

    const addItem = (producto, count) => {
        let cartProducto = { producto, count }
        let cartAux = []
        if (isInCart(producto)) {
            cartProducto = cart.find(item => item.producto === producto)
            cartProducto.count = cartProducto.count + count
            cartAux = [...cart]
        } else {
            cartAux = [cartProducto, ...cart]
        }
        setCart(cartAux)
    }

    const removeItem = (producto) => {
        if (isInCart(producto)) {
          const cartAuxiliar = cart.filter(item => item.producto !== producto)
          setCart(cartAuxiliar)
        }
    }

    const clear = () => {
        setCart([])
      }

    const isInCart = (producto) => {
        return cart && cart.some(item => item.producto === producto)
    }



    return (
        <CartContext.Provider value={{
            addItem,
            clear,
            removeItem,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}