import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"

const ItemListContainer = ({ itemList }) => {
    
    const [carga, setCarga] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        
        const promesa = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(itemList)
            }, 2000)
        })
        promesa
            .then(()=>{
                setProductos(itemList)
            })
            .catch(()=>{
                toast.error("No se pudo cargar.")
            })
            .finally(()=>{
                setCarga(false)
            })
    })

    return (
        <>
            <div className="contenedor">
                <h2>{carga ? "Cargando..." : null}</h2>
                <ItemList productos={productos} />
            </div>
        </>

    )
}

export default ItemListContainer