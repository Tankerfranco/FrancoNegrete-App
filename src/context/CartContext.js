import { createContext, useState, useEffect} from "react";


export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(0)
    const [price, setPrice] = useState(0);

    useEffect(() => {
		setCount(handleTotal());
		setPrice(handleTotalPrice());
	}, [cart]);
    
    const addItem = (producto, count) => {
        let cartProducto = { producto, count }
        let cartAux = []
        if (isInCart(producto)) {
            cartProducto = cart.find(item => item.producto.id === producto.id)
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
          setCount(count - 1) 
        }
    }

    const clear = () => {
        setCart([])
        setCount(0)
      }

    const isInCart = producto => cart && cart.some(element => element.producto.id === producto.id)
    
    const handleTotal = () => {
        const initialValue = 0;
        return (
            cart && cart.reduce((accumulator, currentValue) => accumulator + currentValue.count, initialValue)
        )
    }
    
    const handleTotalPriceByItem = () => {
        const newCartItems = cart;
        return newCartItems.map(element => ({...element, precio: element.producto.precio * element.count}))
    }

    const handleTotalPrice = () => {
        const cartAux = handleTotalPriceByItem();
        const initialValue = 0;
        return (
            cartAux && cartAux.reduce((accumulator, currentValue) => accumulator + currentValue.precio, initialValue)
        )
    }

    return (
        <CartContext.Provider value={{
            count,
            addItem,
            clear,
            removeItem,
            cart,
            price
            
        }}>
            {children}
        </CartContext.Provider>
    )
}