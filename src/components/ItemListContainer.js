import ItemList from "./ItemList"
import { useState, useEffect} from "react"
import { toast } from "react-toastify"
import {PRODUCTS} from "../mock/Data"
import Loader from "./Loader"
import { useParams } from "react-router-dom"



const ItemListContainer = () => {
    
    const [carga, setCarga] = useState(true);
    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    

     useEffect(() => {
        
        const promesa = new Promise((res, rej)=>{
            setTimeout(()=>{
                if(id){
                    const filtroCategoria = PRODUCTS.filter(data => data.categoria === id)
                    res(filtroCategoria)
                }else{
                    res(PRODUCTS)
                }
            }, 2000)
        })
        promesa
            .then((res)=>{
                setProductos(res)
            })
            .catch(()=>{
                toast.error("No se pudo cargar.")
            })
            .finally(()=>{
                setCarga(false)
            })
    }, [id]) 
    
    return (
        <>
            <div className="contenedor">
                {carga ? <Loader/>  : <ItemList productList={productos} />}
                
            </div>
        </>

    )
}

export default ItemListContainer