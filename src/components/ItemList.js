import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item"

let productoInicial = [
    {nombre: "Call of Duty", img: "/caratulaCall.jpg", alt: "Call Of Duty", precio: 60, stock: 10},
    {nombre: "Batman Arkhan Asylum", img: "/caratulaBatman.jpg", alt: "Batman Arkhan Asylum", precio: 60, stock: 10},
    {nombre: "Final Fantasy IV", img: "/caratulaFinal.jpg" , alt: "Final Fantasy 4", precio: 30, stock: 10},
    {nombre: "World of Warcraft", img: "/caratulaWow.jpg" , alt: "World of Warcraft", precio: 60, stock: 10}
]

const ItemList = () => {
    const[carga, setCarga] = useState(true);
    const [productos, setProducto] = useState([]);

   

    useEffect(() => {

        const promesa = new Promise((res, rej)=>{
                    setTimeout(() => {
                        res(productoInicial)
                    }, 2000)
        })
        promesa
        .then(()=>{
            setProducto(productoInicial);
        })
        .catch(()=>{
            console.log("Se produjo un error.")
        })
        .finally(()=>{
            setCarga(false);
        })


    }, [])

    return(
        <>
            {carga ? <div><h2>Cargando, por favor espere... <FontAwesomeIcon icon={faSpinner}/></h2></div> : null}
            {productos.map((productos) => {
                return <Item nombre={productos.nombre} precio={productos.precio} stock={productos.stock} img={productos.img} />
            })}
        </>
    )
}

export default ItemList